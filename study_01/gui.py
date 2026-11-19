"""
GUI utilities for the digit recognition application.

Provides DrawingCanvas class for managing pixel data and drawing operations,
and functions to convert canvas drawings to the 8x8 format the
DigitRecognizer model was trained on.
"""

import tkinter as tk
from tkinter import messagebox
import numpy as np
from PIL import Image, ImageDraw
from scipy import ndimage
from digit_recognition import DigitRecognizer

# --- Model input format -------------------------------------------------------
# These values describe how the training digits (sklearn `load_digits`) look and
# were measured from that dataset: every digit is scaled to fill all 8 rows, it
# is centred horizontally, and the two outer columns are (almost) always empty.
MODEL_GRID_SIZE = 8
MAX_DIGIT_WIDTH_CELLS = 6
# A pen stroke should be about this fraction of the digit's height. The 3px brush
# on a 400px canvas is far thinner than the strokes the model was trained on.
TARGET_STROKE_RATIO = 0.25
# Drawings whose longest side is below this many canvas pixels are not digits
# (e.g. a single click).
MIN_DRAWING_EXTENT_PX = 12
# Pixels at or above this value count as empty background.
BACKGROUND_THRESHOLD = 250
# Working resolution (pixels per model cell) used while rescaling.
_WORK_CELL_PX = 50


def preprocess_canvas_for_model(canvas_data):
    """
    Convert a canvas drawing into the (1, 64) input the model expects.

    The canvas has black strokes on a white background. The model was trained on
    8x8 digits with bright strokes on a dark background, each digit filling the
    full height of the grid. This function therefore:

    1. inverts the image (strokes become bright, background 0),
    2. crops to the drawn area so position and size do not matter,
    3. thickens strokes that are much thinner than the training digits,
    4. scales the digit to 8 rows high (at most 6 columns wide) and centres it,
    5. reduces it to 8x8 and normalises the brightest pixel to 1.0.

    Arguments:
        canvas_data: numpy array (height, width), uint8, 255 = white background.

    Returns:
        numpy array of shape (1, 64), float32, values in [0, 1].

    Raises:
        ValueError: If nothing, or only something too small to be a digit, was drawn.
    """
    canvas = np.asarray(canvas_data)
    drawn = canvas < BACKGROUND_THRESHOLD
    if not drawn.any():
        raise ValueError("Canvas is empty. Please draw a digit before making a prediction.")

    rows = np.where(drawn.any(axis=1))[0]
    cols = np.where(drawn.any(axis=0))[0]
    height = rows[-1] - rows[0] + 1
    width = cols[-1] - cols[0] + 1
    if max(height, width) < MIN_DRAWING_EXTENT_PX:
        raise ValueError("The drawing is too small. Please draw a larger digit.")

    ink = np.where(drawn, 255 - canvas.astype(np.int16), 0).clip(0, 255).astype(np.uint8)
    ink = ink[rows[0]:rows[-1] + 1, cols[0]:cols[-1] + 1]
    ink = _thicken_thin_strokes(ink)

    height, width = ink.shape
    scale = min(MODEL_GRID_SIZE / height, MAX_DIGIT_WIDTH_CELLS / width)
    new_w = max(1, round(width * scale * _WORK_CELL_PX))
    new_h = max(1, round(height * scale * _WORK_CELL_PX))
    digit = Image.fromarray(ink, mode='L').resize((new_w, new_h), Image.BOX)

    work = MODEL_GRID_SIZE * _WORK_CELL_PX
    framed = np.zeros((work, work), dtype=np.uint8)
    top, left = (work - new_h) // 2, (work - new_w) // 2
    framed[top:top + new_h, left:left + new_w] = np.asarray(digit)

    small = Image.fromarray(framed, mode='L').resize(
        (MODEL_GRID_SIZE, MODEL_GRID_SIZE), Image.BOX
    )
    result = np.asarray(small, dtype=np.float32)
    if result.max() <= 0:
        raise ValueError("The drawing is too faint. Please draw a digit with a darker pen.")
    result = result / result.max()
    return result.reshape(1, MODEL_GRID_SIZE * MODEL_GRID_SIZE)


def _thicken_thin_strokes(ink):
    """Widen strokes thinner than TARGET_STROKE_RATIO of the digit height."""
    height = ink.shape[0]
    mask = ink > 0
    # Largest distance from a stroke pixel to the background ~ half the stroke width.
    current_width = 2 * ndimage.distance_transform_edt(np.pad(mask, 1)).max()
    radius = (TARGET_STROKE_RATIO * height - current_width) / 2
    if radius < 1:
        return ink
    radius = int(round(radius))
    padded = np.pad(mask, radius)
    distance_to_stroke = ndimage.distance_transform_edt(~padded)
    return np.where(distance_to_stroke <= radius, 255, 0).astype(np.uint8)


def convert_canvas_to_mnist(canvas_data):
    """
    Resize a 400x400 pixel canvas drawing to 8x8 (plain downscale, no cropping).

    Kept for backwards compatibility. The recognizer does not use it, because
    a plain downscale keeps the canvas polarity (white background) and the thin
    3px strokes almost vanish; use preprocess_canvas_for_model() to build the
    model input.

    Arguments:
        canvas_data: numpy array of shape (400, 400) with uint8 pixel values.
                     Pixel values should be in range [0, 255].

    Returns:
        numpy array of shape (1, 64) with float32 dtype.
        Pixel values normalized to range [0, 1] where 0 is black and 1 is white.
    """
    # Convert numpy array to PIL Image for resizing
    image = Image.fromarray(canvas_data, mode='L')

    # Resize to 8x8 using bilinear interpolation
    # This preserves the drawing content while downsampling
    resized = image.resize((8, 8), Image.BILINEAR)

    # Convert back to numpy array
    resized_array = np.array(resized, dtype=np.float32)

    # Normalize pixel values from [0, 255] to [0, 1]
    normalized = resized_array / 255.0

    # Flatten to (8*8,) = (64,) and reshape to (1, 64) for prediction
    flattened = normalized.flatten()
    result = flattened.reshape(1, 64)

    return result


class DrawingCanvas:
    """
    Manages pixel data for drawing operations on a canvas.

    Provides a simple interface to create a canvas, draw lines on it, and
    retrieve the pixel data. Uses PIL Image internally to store grayscale
    pixel data with white (255) as background and black (0) for drawn content.

    Attributes:
        width (int): Canvas width in pixels.
        height (int): Canvas height in pixels.
    """

    def __init__(self, width=400, height=400):
        """
        Initialize a new DrawingCanvas with white background.

        Arguments:
            width (int): Canvas width in pixels. Defaults to 400.
            height (int): Canvas height in pixels. Defaults to 400.
        """
        self.width = width
        self.height = height
        # Create white image (mode 'L' for grayscale, value 255 for white)
        self._image = Image.new('L', (width, height), 255)

    def draw_line(self, x1, y1, x2, y2, brush_width=3):
        """
        Draw a black line on the canvas.

        Draws a line from (x1, y1) to (x2, y2) using black pixels (value 0)
        with the specified brush width.

        Arguments:
            x1 (int): Starting x coordinate.
            y1 (int): Starting y coordinate.
            x2 (int): Ending x coordinate.
            y2 (int): Ending y coordinate.
            brush_width (int): Width of the line in pixels. Defaults to 3.
        """
        draw = ImageDraw.Draw(self._image)
        # Draw black line (fill=0) with specified width
        draw.line([(x1, y1), (x2, y2)], fill=0, width=brush_width)

    def clear(self):
        """
        Clear the canvas by resetting it to white background.

        Erases all drawn content and resets the canvas to all white pixels (255).
        """
        self._image = Image.new('L', (self.width, self.height), 255)

    def get_pixel_data(self):
        """
        Get the canvas pixel data as a numpy array.

        Returns:
            numpy array of shape (height, width) with uint8 dtype.
            Pixel values in range [0, 255] where 0 is black and 255 is white.
        """
        return np.array(self._image, dtype=np.uint8)


def make_prediction(recognizer, mnist_data):
    """
    Make a digit prediction using the recognizer.

    Args:
        recognizer: DigitRecognizer instance (pre-trained)
        mnist_data: numpy array of shape (1, 64) with normalized values 0-1
            (bright stroke = 1.0, dark background = 0.0)

    Returns:
        Predicted digit (int, 0-9)
    """
    predictions = recognizer.predict(mnist_data)
    return int(predictions[0])


def make_prediction_from_canvas(recognizer, canvas_data):
    """
    Convert canvas data to the model's input format and make a prediction.

    Args:
        recognizer: DigitRecognizer instance (pre-trained)
        canvas_data: numpy array of shape (400, 400) with values 0-255

    Returns:
        Predicted digit (int, 0-9)

    Raises:
        ValueError: If the canvas is empty (all white) or the drawing is too
            small to be a digit.
    """
    model_input = preprocess_canvas_for_model(canvas_data)
    return make_prediction(recognizer, model_input)


def load_model():
    """
    Load and train the digit recognition model.

    This blocks the main thread and prints status messages.
    Takes approximately 10-15 seconds.

    Returns:
        DigitRecognizer instance with trained model

    Raises:
        Exception: If model training fails
    """
    try:
        print("Loading training data...")
        recognizer = DigitRecognizer()
        X_train, y_train = recognizer.load_mnist_data(split='train')

        print("Training model (this may take 10-15 seconds)...")
        recognizer.train(X_train, y_train)

        print("Model ready!")
        return recognizer
    except Exception as e:
        raise Exception(f"Error loading model: {e}")


class DigitRecognizerApp:
    """
    Tkinter GUI application for handwritten digit recognition.

    Provides an interactive interface for drawing digits and getting
    predictions from a pre-trained digit recognizer model.

    Attributes:
        root: Tkinter root window
        recognizer: DigitRecognizer instance
        drawing_canvas: DrawingCanvas for managing pixel data
        canvas: Tkinter Canvas widget for display
        result_label: Label for displaying prediction results
        last_x: x coordinate of last mouse event
        last_y: y coordinate of last mouse event
        current_prediction: Currently displayed prediction
    """

    def __init__(self, root, recognizer):
        """
        Initialize the DigitRecognizerApp.

        Arguments:
            root: Tkinter root window
            recognizer: Pre-trained DigitRecognizer instance
        """
        self.root = root
        self.recognizer = recognizer

        # Set window properties
        self.root.title("Handwritten Digit Recognizer")
        self.root.geometry("500x650")
        self.root.resizable(True, True)

        # Initialize drawing canvas
        self.drawing_canvas = DrawingCanvas(400, 400)

        # Initialize tracking variables
        self.last_x = None
        self.last_y = None
        self.current_prediction = None

        # Create UI elements and bind events
        self._create_widgets()
        self._bind_events()

    def _create_widgets(self):
        """
        Create and layout all GUI widgets.

        Creates title label, drawing canvas, result label, and buttons.
        """
        # Title label
        title_label = tk.Label(
            self.root,
            text="Handwritten Digit Recognizer",
            font=("Arial", 16, "bold")
        )
        title_label.pack(pady=10)

        # Drawing canvas
        self.canvas = tk.Canvas(
            self.root,
            width=400,
            height=400,
            bg='white',
            cursor='cross'
        )
        self.canvas.pack(pady=10)

        # Result label
        self.result_label = tk.Label(
            self.root,
            text="Predicted: -",
            font=("Arial", 24, "bold"),
            fg='blue'
        )
        self.result_label.pack(pady=10)

        # Button frame
        button_frame = tk.Frame(self.root)
        button_frame.pack(pady=10)

        # Predict button
        predict_button = tk.Button(
            button_frame,
            text="Predict",
            width=15,
            height=2,
            command=self.on_predict
        )
        predict_button.pack(side=tk.LEFT, padx=5)

        # Clear button
        clear_button = tk.Button(
            button_frame,
            text="Clear",
            width=15,
            height=2,
            command=self.on_clear
        )
        clear_button.pack(side=tk.LEFT, padx=5)

    def _bind_events(self):
        """
        Bind mouse events to canvas.

        Binds mouse down, drag, and release events for drawing.
        """
        self.canvas.bind("<Button-1>", self._on_mouse_down)
        self.canvas.bind("<B1-Motion>", self._on_mouse_move)
        self.canvas.bind("<ButtonRelease-1>", self._on_mouse_up)

    def _on_mouse_down(self, event):
        """
        Handle mouse down event on canvas.

        Arguments:
            event: Tkinter event object with x and y coordinates
        """
        self.last_x = event.x
        self.last_y = event.y

    def _on_mouse_move(self, event):
        """
        Handle mouse move event on canvas.

        Draws a line from the last mouse position to the current position
        on both the Tkinter canvas (for display) and the internal drawing
        canvas (for prediction processing).

        Arguments:
            event: Tkinter event object with x and y coordinates
        """
        if self.last_x is not None and self.last_y is not None:
            # Draw on Tkinter canvas for display
            self.canvas.create_line(
                self.last_x, self.last_y,
                event.x, event.y,
                fill='black',
                width=3
            )

            # Draw on internal canvas for prediction
            self.drawing_canvas.draw_line(
                self.last_x, self.last_y,
                event.x, event.y,
                brush_width=3
            )

            # Update last position
            self.last_x = event.x
            self.last_y = event.y

    def _on_mouse_up(self, event):
        """
        Handle mouse up event on canvas.

        Arguments:
            event: Tkinter event object (unused)
        """
        self.last_x = None
        self.last_y = None

    def on_predict(self):
        """
        Make a prediction based on the current drawing.

        Converts the drawing to the model's input format and calls the recognizer.
        Updates the result label with the predicted digit.
        Shows appropriate error messages for empty canvas or other errors.
        """
        try:
            # Get pixel data from internal canvas
            canvas_data = self.drawing_canvas.get_pixel_data()

            # Make prediction
            prediction = make_prediction_from_canvas(self.recognizer, canvas_data)

            # Update result label
            self.current_prediction = prediction
            self.result_label.config(text=f"Predicted: {prediction}")

        except ValueError as e:
            # Handle empty canvas error
            messagebox.showwarning("Empty Canvas", "Please draw a digit first")

        except Exception as e:
            # Handle other errors
            messagebox.showerror("Prediction Error", f"Error: {str(e)}")

    def on_clear(self):
        """
        Clear the canvas and reset the prediction display.

        Removes all drawings from both the Tkinter canvas and the internal
        drawing canvas. Resets the prediction label to default.
        """
        # Delete all canvas drawings
        self.canvas.delete("all")

        # Clear internal drawing canvas
        self.drawing_canvas.clear()

        # Reset result label
        self.result_label.config(text="Predicted: -")

        # Reset current prediction
        self.current_prediction = None

    def run(self):
        """
        Start the Tkinter event loop.

        Blocks until the window is closed.
        """
        self.root.mainloop()
