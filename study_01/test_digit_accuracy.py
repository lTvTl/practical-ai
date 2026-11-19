"""
Accuracy tests for the canvas -> model pipeline.

The older tests only check that a prediction is "a valid digit (0-9)", which
cannot detect a pipeline that always answers the same digit. These tests draw
real digits on the canvas and assert that the recognizer answers correctly.
"""

import math
import random

import numpy as np
import pytest

import gui
from digit_recognition import DigitRecognizer
from gui import DrawingCanvas, make_prediction_from_canvas


# Simple stroke paths for each digit on a 400x400 canvas (centre at 200, 205).
def _ellipse(cx, cy, rx, ry, a0=0, a1=360, n=48):
    return [
        (cx + rx * math.cos(math.radians(a)), cy + ry * math.sin(math.radians(a)))
        for a in np.linspace(a0, a1, n)
    ]


DIGIT_STROKES = {
    0: [_ellipse(200, 205, 80, 115)],
    1: [[(165, 135), (210, 90), (210, 320)]],
    2: [[(120, 140), (160, 95), (240, 95), (285, 140), (265, 195), (120, 320), (290, 320)]],
    3: [_ellipse(195, 150, 70, 55, -150, 90), _ellipse(195, 265, 75, 60, -90, 150)],
    4: [[(210, 90), (110, 245), (300, 245)], [(235, 150), (235, 320)]],
    5: [[(280, 95), (135, 95), (125, 200), (205, 190), (270, 235), (268, 290), (200, 322), (120, 300)]],
    6: [[(265, 100), (175, 150), (130, 240), (148, 310), (220, 322), (272, 280), (258, 222), (200, 200), (140, 232)]],
    7: [[(120, 100), (290, 100), (190, 320)]],
    8: [_ellipse(200, 150, 62, 55), _ellipse(200, 265, 75, 62)],
    9: [[(272, 165), (250, 102), (190, 90), (140, 130), (150, 190), (210, 212), (272, 172), (270, 235), (240, 322)]],
}


def draw_digit(digit, rng, scale=None, shift=None, brush_width=3):
    """Draw a digit with the same 3px brush the GUI uses, with small hand jitter."""
    canvas = DrawingCanvas(400, 400)
    s = scale if scale is not None else rng.uniform(0.75, 1.1)
    dx, dy = shift if shift is not None else (rng.uniform(-30, 30), rng.uniform(-25, 25))
    rot = rng.uniform(-0.12, 0.12)
    for stroke in DIGIT_STROKES[digit]:
        points = []
        for x, y in stroke:
            x, y = x - 200, y - 205
            xr = x * math.cos(rot) - y * math.sin(rot)
            yr = x * math.sin(rot) + y * math.cos(rot)
            points.append((
                200 + xr * s + dx + rng.uniform(-3, 3),
                205 + yr * s + dy + rng.uniform(-3, 3),
            ))
        for (x1, y1), (x2, y2) in zip(points, points[1:]):
            canvas.draw_line(x1, y1, x2, y2, brush_width=brush_width)
    return canvas.get_pixel_data()


def thin_stroke_canvas(vec, seed, size=400):
    """Turn a real 8x8 handwritten digit into thin strokes at a random place on the canvas."""
    from PIL import Image
    from scipy import ndimage

    rs = np.random.RandomState(seed)
    img = Image.fromarray((vec.reshape(8, 8) / vec.max() * 255).astype(np.uint8), "L")
    box = int(size * rs.uniform(0.45, 0.8))
    up = np.array(img.resize((box, box), Image.BICUBIC), np.float32) / 255.0
    mask = up > 0.5
    dist = ndimage.distance_transform_edt(mask)
    core = ndimage.binary_dilation(dist >= 0.62 * np.percentile(dist[mask], 95), iterations=1)
    canvas = np.full((size, size), 255, np.uint8)
    ox, oy = rs.randint(0, size - box + 1), rs.randint(0, size - box + 1)
    canvas[oy:oy + box, ox:ox + box][core] = 0
    return canvas


@pytest.fixture(scope="module")
def recognizer():
    rec = DigitRecognizer()
    X_train, y_train = rec.load_mnist_data(split="train")
    rec.train(X_train, y_train)
    return rec


class TestPreprocessing:
    """The canvas must be converted to the same form as the training digits."""

    def test_stroke_pixels_become_bright_and_background_dark(self):
        canvas = np.full((400, 400), 255, dtype=np.uint8)
        canvas[100:300, 190:210] = 0  # a black vertical bar on white

        result = gui.preprocess_canvas_for_model(canvas)

        grid = result.reshape(8, 8)
        assert result.shape == (1, 64)
        assert result.dtype == np.float32
        assert grid.max() == pytest.approx(1.0)
        assert grid.min() == pytest.approx(0.0)
        # the bar is in the middle columns; the left and right edge columns are background
        assert grid[:, 3:5].mean() > 0.5
        assert grid[:, 0].max() == pytest.approx(0.0)
        assert grid[:, 7].max() == pytest.approx(0.0)

    def test_same_digit_at_different_position_gives_same_model_input(self):
        rng = random.Random(1)
        left_small = draw_digit(7, rng, scale=0.8, shift=(-40, -30))
        right_big = draw_digit(7, rng, scale=1.1, shift=(30, 20))

        a = gui.preprocess_canvas_for_model(left_small)
        b = gui.preprocess_canvas_for_model(right_big)

        assert np.abs(a - b).mean() < 0.15

    def test_drawing_too_small_to_be_a_digit_is_rejected(self):
        canvas = DrawingCanvas(400, 400)
        canvas.draw_line(200, 200, 203, 203, brush_width=3)  # a tiny dot

        with pytest.raises(ValueError) as excinfo:
            make_prediction_from_canvas(DigitRecognizer(), canvas.get_pixel_data())

        assert "draw" in str(excinfo.value).lower()


class TestRecognitionAccuracy:
    """Drawn digits must be recognised, not just return a number between 0 and 9."""

    SAMPLES_PER_DIGIT = 12

    def _predictions(self, recognizer):
        rng = random.Random(7)
        results = {d: [] for d in range(10)}
        for digit in range(10):
            for _ in range(self.SAMPLES_PER_DIGIT):
                data = draw_digit(digit, rng)
                results[digit].append(make_prediction_from_canvas(recognizer, data))
        return results

    def test_overall_accuracy_on_hand_drawn_digits_is_at_least_75_percent(self, recognizer):
        # Threshold chosen from measurements: the unfixed pipeline scores ~18% (chance is 10%),
        # a correct pipeline ~83-85% on these hand-made shapes. 75% leaves room for sampling noise.
        results = self._predictions(recognizer)

        correct = sum(p == d for d, preds in results.items() for p in preds)
        total = 10 * self.SAMPLES_PER_DIGIT

        assert correct / total >= 0.75, f"only {correct}/{total} correct: {results}"

    def test_every_digit_is_recognised_at_least_half_the_time_on_real_handwriting(self, recognizer):
        # Uses real handwriting (all held-out digits) rather than the hand-made shapes above: the
        # hand-made "8" is two stacked ovals, which real writers rarely draw and which looks like
        # a 9 on an 8x8 grid. The goal of this check is to catch a pipeline that favours a few digits.
        X_test, y_test = recognizer.load_mnist_data(split="test")
        hits = {d: [] for d in range(10)}
        for i, (vec, label) in enumerate(zip(X_test * 16, y_test)):
            if vec.max() == 0:
                continue
            prediction = make_prediction_from_canvas(recognizer, thin_stroke_canvas(vec, seed=i))
            hits[int(label)].append(prediction == label)

        rates = {d: sum(h) / len(h) for d, h in hits.items()}
        weak = {d: round(r, 2) for d, r in rates.items() if r < 0.5}

        assert not weak, f"digits recognised less than half the time: {weak}"

    def test_predictions_are_not_the_same_for_every_digit(self, recognizer):
        rng = random.Random(3)
        answers = {make_prediction_from_canvas(recognizer, draw_digit(d, rng)) for d in range(10)}

        assert len(answers) >= 7

    def test_training_digits_rendered_on_canvas_are_recognised(self, recognizer):
        X_test, y_test = recognizer.load_mnist_data(split="test")
        correct = 0
        n = 150
        for vec, label in zip(X_test[:n], y_test[:n]):
            block = np.kron(vec.reshape(8, 8), np.ones((50, 50)))  # 8x8 -> 400x400
            canvas = (255 - block * 255).astype(np.uint8)  # dark strokes on white
            correct += make_prediction_from_canvas(recognizer, canvas) == label

        assert correct / n >= 0.80, f"only {correct}/{n} correct"

    def test_thin_strokes_traced_from_real_handwriting_are_recognised(self, recognizer):
        # Real handwriting (held-out digits from sklearn's test split), reduced to thin strokes
        # and placed at random size/position on the canvas.
        X_test, y_test = recognizer.load_mnist_data(split="test")
        correct = total = 0
        for i, (vec, label) in enumerate(zip(X_test[:250] * 16, y_test[:250])):
            if vec.max() == 0:
                continue
            total += 1
            correct += make_prediction_from_canvas(recognizer, thin_stroke_canvas(vec, seed=i)) == label

        assert correct / total >= 0.70, f"only {correct}/{total} correct"

    def test_same_digit_is_recognised_wherever_it_is_drawn(self, recognizer):
        rng = random.Random(5)
        placements = [((-50, -40), 0.8), ((0, 0), 1.0), ((45, 30), 1.1)]
        for digit in (0, 1, 7):
            answers = [
                make_prediction_from_canvas(recognizer, draw_digit(digit, rng, scale=s, shift=sh))
                for sh, s in placements
            ]
            assert answers == [digit] * 3, f"digit {digit} gave {answers}"


class TestGuiEndToEnd:
    """Drive the real Tk window with mouse events and check the label."""

    def test_drawing_a_seven_with_the_mouse_and_pressing_predict_shows_seven(self, recognizer):
        import tkinter as tk

        root = tk.Tk()
        try:
            app = gui.DigitRecognizerApp(root, recognizer)
            root.update()
            canvas = app.canvas
            # top bar from left to right, then the diagonal down to the bottom
            canvas.event_generate("<Button-1>", x=120, y=100)
            for x, y in [(160, 100), (200, 100), (250, 100), (290, 100),
                         (265, 150), (240, 200), (215, 260), (190, 320)]:
                canvas.event_generate("<B1-Motion>", x=x, y=y, state=0x100)
            canvas.event_generate("<ButtonRelease-1>", x=190, y=320)
            root.update()

            app.on_predict()

            assert app.result_label.cget("text") == "Predicted: 7"
        finally:
            root.destroy()
