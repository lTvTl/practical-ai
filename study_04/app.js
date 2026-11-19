/**
 * 냉장고 파먹기 AI 셰프 (Fridge-to-Recipe AI Web App) 프론트엔드 스크립트
 * - Step 1: 냉장고 사진 업로드/샘플 로드 및 inclusionai/ling-3.2-flash:free 식재료 인식
 * - Step 2: 맞춤 레시피 & recraft/recraft-v4.1-flash-v2:free 요리 이미지 생성
 * - Step 3: 사용자 프로필 관리 및 나만의 레시피북 CRUD / 백업·복원
 */

const FALLBACK_IMAGE = "/static/sample_fridge.jpg";
const SEARCH_DEBOUNCE_MS = 200;

const state = {
  currentStep: 1,
  // Step 1
  selectedFile: null,
  previewObjectUrl: null,
  useSample: false,
  ingredients: [], // [{ id, name, category, quantity, selected: true }]
  // Step 2
  currentRecipe: null,
  baseServings: 2,
  displayServings: 2,
  completedSteps: new Set(),
  // Step 3
  activeProfileId: "usr_default",
  profiles: [],
  savedRecipes: [],
  stats: {},
  recipeFilter: "all",
  recipeSearch: "",
  // 진행 중 표시(중복 클릭 방지)
  recognizing: false,
  generating: false,
  saving: false,
  modalTrigger: null, // 모달을 연 요소(닫을 때 포커스 복귀용)
};

// ==========================================
// 공통 유틸리티 (이스케이프, API 호출, 토스트, 테마, 탭 전환)
// ==========================================
function escapeHtml(value) {
  return String(value == null ? "" : value).replace(/[&<>"']/g, (ch) => {
    switch (ch) {
      case "&": return "&amp;";
      case "<": return "&lt;";
      case ">": return "&gt;";
      case '"': return "&quot;";
      default: return "&#39;";
    }
  });
}

/** 이미지 경로는 서버 정적 경로(/static/...)만 허용합니다. 그 외(외부 URL, javascript: 등)는 기본 이미지로 대체. */
function safeImageUrl(url) {
  if (typeof url === "string" && url.startsWith("/static/") && !url.startsWith("//")) {
    return url;
  }
  return FALLBACK_IMAGE;
}

function jsonRequest(method, body) {
  return {
    method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  };
}

/** API 호출 공통 처리: 네트워크 오류/비정상 응답/비JSON 응답을 하나의 Error 로 통일합니다. */
async function apiRequest(url, options, fallbackMessage) {
  let res;
  try {
    res = await fetch(url, options);
  } catch (_err) {
    throw new Error("서버에 연결할 수 없습니다. 네트워크 상태를 확인해 주세요.");
  }
  let data = null;
  try {
    data = await res.json();
  } catch (_err) {
    data = null;
  }
  if (!res.ok) {
    throw new Error((data && data.error) || fallbackMessage || `요청 실패 (${res.status})`);
  }
  return data || {};
}

function debounce(fn, delayMs) {
  let timer = null;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delayMs);
  };
}

/** 토스트 알림. type 이 "error" 이면 빨간 계열로 표시하고 더 오래 보여줍니다. */
function showToast(message, type) {
  const container = document.getElementById("toastContainer");
  const el = document.createElement("div");
  el.className = type === "error" ? "toast toast-error" : "toast";
  el.textContent = message;
  container.appendChild(el);
  setTimeout(() => el.remove(), type === "error" ? 6000 : 3200);
}

/** 입력 근처의 인라인 오류 영역에 메시지를 표시합니다. message 가 비어 있으면 숨깁니다. */
function setInlineError(elementId, message) {
  const el = document.getElementById(elementId);
  if (!el) return;
  el.textContent = message || "";
  el.classList.toggle("hidden", !message);
}

function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia
    && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function switchStep(stepNum) {
  state.currentStep = stepNum;
  document.querySelectorAll(".step-tab").forEach((btn) => {
    const isActive = Number(btn.dataset.step) === stepNum;
    btn.classList.toggle("active", isActive);
    if (isActive) {
      btn.setAttribute("aria-current", "step");
    } else {
      btn.removeAttribute("aria-current");
    }
  });
  document.querySelectorAll(".step-section").forEach((sec, idx) => {
    sec.classList.toggle("active", idx + 1 === stepNum);
  });

  if (stepNum === 2) {
    renderStep2IngredientSelector();
    updateProfileFilterNotice();
  } else if (stepNum === 3) {
    fetchStep3State();
  }
}

function initTheme() {
  let saved = null;
  try {
    saved = localStorage.getItem("fridge_ai_theme");
  } catch (_err) {
    saved = null;
  }
  if (!saved) {
    // 저장된 선택이 없으면 기기의 다크 모드 설정을 따릅니다.
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    saved = prefersDark ? "dark" : "light";
  }
  const btn = document.getElementById("themeToggleBtn");
  const paint = (theme) => {
    document.documentElement.setAttribute("data-theme", theme);
    const label = theme === "dark" ? "라이트 모드로 전환" : "다크 모드로 전환";
    btn.textContent = theme === "dark" ? "☀️" : "🌙";
    btn.title = label;
    btn.setAttribute("aria-label", label);
  };
  paint(saved);
  btn.addEventListener("click", () => {
    const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    paint(next);
    try {
      localStorage.setItem("fridge_ai_theme", next);
    } catch (_err) {
      // 저장 실패는 무시: 이번 방문 동안만 적용됩니다.
    }
  });
}

// ==========================================
// STEP 1: 냉장고 사진 업로드 및 식재료 인식
// ==========================================
function revokePreviewObjectUrl() {
  if (state.previewObjectUrl) {
    URL.revokeObjectURL(state.previewObjectUrl);
    state.previewObjectUrl = null;
  }
}

function setPreviewImage(srcUrl) {
  const preview = document.getElementById("imagePreview");
  const empty = document.getElementById("dropzoneEmpty");
  const container = document.getElementById("previewContainer");
  const recognizeBtn = document.getElementById("recognizeBtn");

  preview.src = srcUrl;
  empty.classList.add("hidden");
  container.classList.remove("hidden");
  recognizeBtn.disabled = false;
  document.getElementById("recognizeHint").classList.add("hidden");
  setInlineError("uploadError", "");
}

function clearPreviewImage() {
  state.selectedFile = null;
  state.useSample = false;
  revokePreviewObjectUrl();
  document.getElementById("imageFileInput").value = "";
  document.getElementById("dropzoneEmpty").classList.remove("hidden");
  document.getElementById("previewContainer").classList.add("hidden");
  document.getElementById("recognizeBtn").disabled = true;
  document.getElementById("recognizeHint").classList.remove("hidden");
  setInlineError("uploadError", "");
}

function handleFileSelect(file) {
  if (!file || !file.type.startsWith("image/")) {
    setInlineError("uploadError", "이미지 파일만 올릴 수 있어요. JPG, PNG, WEBP 형식의 사진을 선택해 주세요.");
    return;
  }
  state.selectedFile = file;
  state.useSample = false;
  // Data URL(전체 base64 문자열) 대신 Blob URL 을 사용해 메모리/디코딩 비용을 줄입니다.
  revokePreviewObjectUrl();
  state.previewObjectUrl = URL.createObjectURL(file);
  setPreviewImage(state.previewObjectUrl);
}

async function recognizeIngredients() {
  if (state.recognizing) return; // 진행 중 중복 요청 방지
  state.recognizing = true;

  const loadingBox = document.getElementById("step1Loading");
  const recognizeBtn = document.getElementById("recognizeBtn");
  const sampleBtn = document.getElementById("loadSampleBtn");
  loadingBox.classList.remove("hidden");
  recognizeBtn.disabled = true;
  sampleBtn.disabled = true;
  setInlineError("uploadError", "");
  setInlineError("ingredientError", "");

  try {
    let options;
    if (state.selectedFile && !state.useSample) {
      const formData = new FormData();
      formData.append("image", state.selectedFile);
      options = { method: "POST", body: formData };
    } else {
      options = jsonRequest("POST", { useSample: state.useSample });
    }
    const data = await apiRequest(
      "/api/step1/recognize-ingredients",
      options,
      "식재료를 인식하지 못했어요. 잠시 후 다시 시도하거나, 아래 입력창에서 직접 추가해 주세요."
    );

    state.ingredients = (data.ingredients || []).map((item, idx) => ({
      id: item.id || `ing_${Date.now()}_${idx}`,
      name: item.name,
      category: item.category || "기타",
      quantity: item.quantity || "적당량",
      selected: true,
    }));

    const summaryEl = document.getElementById("recognitionSummary");
    if (data.summary) {
      summaryEl.textContent = `🤖 AI 분석 요약: ${data.summary}`;
      summaryEl.classList.remove("hidden");
    } else {
      summaryEl.classList.add("hidden");
    }

    renderIngredientChips();
    if (state.ingredients.length === 0) {
      setInlineError(
        "uploadError",
        "사진에서 식재료를 찾지 못했어요. 더 밝고 가까이에서 찍은 사진으로 다시 시도하거나, 오른쪽에서 직접 추가해 주세요."
      );
    } else {
      showToast(`✅ 식재료 ${state.ingredients.length}개를 찾았어요. 틀린 것은 삭제하고, 빠진 것은 추가해 주세요.`);
    }
  } catch (err) {
    setInlineError("uploadError", err.message);
  } finally {
    state.recognizing = false;
    loadingBox.classList.add("hidden");
    recognizeBtn.disabled = !(state.selectedFile || state.useSample);
    sampleBtn.disabled = false;
  }
}

function renderIngredientChips() {
  const container = document.getElementById("ingredientChipsContainer");
  const countPill = document.getElementById("ingredientCountPill");
  countPill.textContent = `${state.ingredients.length}개 식재료`;
  setInlineError("ingredientError", "");

  if (state.ingredients.length === 0) {
    container.innerHTML = `<p class="empty-hint">아직 식재료가 없어요. 위에서 사진을 분석하거나, 아래 입력창에서 직접 추가해 보세요.</p>`;
    return;
  }

  const fragment = document.createDocumentFragment();
  state.ingredients.forEach((item) => {
    const chip = document.createElement("div");
    chip.className = "ing-chip";
    chip.innerHTML = `
      <span class="cat-tag">${escapeHtml(item.category)}</span>
      <button type="button" class="ing-name" title="클릭하여 수량 수정" aria-label="${escapeHtml(item.name)} 수량 수정">${escapeHtml(item.name)}</button>
      <span class="qty-tag">(${escapeHtml(item.quantity)})</span>
      <button type="button" class="ing-del" aria-label="${escapeHtml(item.name)} 삭제" title="삭제" data-id="${escapeHtml(item.id)}">✕</button>
    `;

    // 수량/이름 인라인 편집
    chip.querySelector(".ing-name").addEventListener("click", () => {
      const nextQty = prompt(`'${item.name}'의 수량을 수정하세요:`, item.quantity);
      if (nextQty !== null && nextQty.trim()) {
        item.quantity = nextQty.trim();
        renderIngredientChips();
      }
    });

    // 삭제 버튼
    chip.querySelector(".ing-del").addEventListener("click", () => {
      state.ingredients = state.ingredients.filter((x) => x.id !== item.id);
      renderIngredientChips();
    });

    fragment.appendChild(chip);
  });
  container.replaceChildren(fragment);
}

function getCheckedPantryItems() {
  return Array.from(document.querySelectorAll("#pantryCheckboxes input:checked")).map(
    (cb) => cb.value
  );
}

// ==========================================
// STEP 2: 맞춤 레시피 & 요리 이미지 생성
// ==========================================
function renderStep2IngredientSelector() {
  const container = document.getElementById("step2IngredientSelector");
  if (state.ingredients.length === 0) {
    container.innerHTML = `<span class="muted-text">아직 식재료가 없어요. '← 식재료 다시 수정'을 눌러 1단계에서 사진을 인식하거나 재료를 추가해 주세요.</span>`;
    return;
  }

  const fragment = document.createDocumentFragment();
  state.ingredients.forEach((item) => {
    const btn = document.createElement("button");
    btn.type = "button";
    const paint = () => {
      const selected = item.selected !== false;
      btn.className = `select-chip ${selected ? "selected" : ""}`;
      btn.textContent = `${selected ? "✓ " : ""}${item.name} (${item.quantity})`;
      btn.setAttribute("aria-pressed", selected ? "true" : "false");
      if (selected) setInlineError("step2Error", "");
    };
    paint();
    btn.addEventListener("click", () => {
      item.selected = item.selected === false ? true : false;
      paint(); // 전체 재렌더링 없이 해당 버튼만 갱신
    });
    fragment.appendChild(btn);
  });
  container.replaceChildren(fragment);
}

function getActiveProfile() {
  return (
    state.profiles.find((p) => p.profileId === state.activeProfileId) ||
    state.profiles[0] || {
      nickname: "자취요리왕",
      avatar: "👨‍🍳",
      skillLevel: "초급",
      dietType: "일반식",
      allergies: [],
      dislikedIngredients: [],
    }
  );
}

function updateProfileFilterNotice() {
  const prof = getActiveProfile();
  const excluded = [...(prof.allergies || []), ...(prof.dislikedIngredients || [])];
  const bar = document.getElementById("profileFilterNotice");
  if (excluded.length > 0) {
    bar.textContent = `👤 '${prof.avatar} ${prof.nickname}' 프로필 기준으로 추천해요 (식단: ${prof.dietType}). 알레르기·기피 재료는 자동으로 빼고 만듭니다: ${excluded.join(", ")}`;
    bar.classList.remove("hidden");
  } else {
    bar.textContent = `👤 '${prof.avatar} ${prof.nickname}' 프로필 기준으로 추천해요 (식단: ${prof.dietType}). 알레르기·기피 재료는 프로필 탭에서 등록할 수 있어요.`;
    bar.classList.remove("hidden");
  }
}

async function generateRecipe() {
  if (state.generating) return; // 진행 중 중복 요청 방지
  const selectedIngs = state.ingredients.filter((x) => x.selected !== false);
  if (selectedIngs.length === 0) {
    setInlineError(
      "step2Error",
      "사용할 식재료가 선택되지 않았어요. 위에서 재료를 한 개 이상 눌러 선택하거나, '← 식재료 다시 수정'에서 추가해 주세요."
    );
    return;
  }
  setInlineError("step2Error", "");
  state.generating = true;

  const loadingBox = document.getElementById("step2Loading");
  const genBtn = document.getElementById("generateRecipeBtn");
  const regenBtn = document.getElementById("regenerateRecipeBtn");

  loadingBox.classList.remove("hidden");
  genBtn.disabled = true;
  regenBtn.disabled = true;

  const prof = getActiveProfile();
  const excluded = [...(prof.allergies || []), ...(prof.dislikedIngredients || [])];

  try {
    const recipe = await apiRequest(
      "/api/step2/generate-recipe",
      jsonRequest("POST", {
        ingredients: selectedIngs,
        pantryItems: getCheckedPantryItems(),
        cuisine: document.getElementById("cuisineSelect").value,
        maxTime: Number(document.getElementById("maxTimeSelect").value),
        difficulty: document.getElementById("difficultySelect").value,
        servings: Number(document.getElementById("servingsSelect").value),
        excludedIngredients: excluded,
        dietType: prof.dietType || "일반식",
      }),
      "레시피를 만들지 못했어요. 잠시 후 '다시 추천받기'를 눌러 주세요."
    );

    state.currentRecipe = recipe;
    state.baseServings = Number(recipe.servings) || 2;
    state.displayServings = state.baseServings;
    state.completedSteps = new Set();

    renderRecipeResult();
    regenBtn.classList.remove("hidden");
    document.getElementById("recipeResultContainer").scrollIntoView({
      behavior: prefersReducedMotion() ? "auto" : "smooth",
      block: "start",
    });
    showToast("🍳 레시피와 요리 사진이 완성되었어요!");
  } catch (err) {
    setInlineError("step2Error", err.message);
  } finally {
    state.generating = false;
    loadingBox.classList.add("hidden");
    genBtn.disabled = false;
    regenBtn.disabled = false;
  }
}

function formatScaled(value, decimals) {
  if (Number.isInteger(value)) return String(value);
  if (decimals === 2) return String(Math.round(value * 100) / 100);
  return value.toFixed(1).replace(/\.0$/, "");
}

/**
 * 재료 분량 문자열의 숫자를 인분 비율에 맞춰 변환합니다.
 * "2개", "1.5컵", 분수 "1/2모", 대분수 "1 1/2컵"을 하나의 수량으로 취급합니다.
 */
function scaleAmountText(amountText, ratio) {
  if (!amountText || ratio === 1) return amountText;
  const pattern = /(\d+)\s+(\d+)\/(\d+)|(\d+)\/(\d+)|(\d+(?:\.\d+)?)/g;
  return String(amountText).replace(pattern, (match, whole, n1, d1, n2, d2, decimal) => {
    if (whole !== undefined) {
      if (Number(d1) === 0) return match;
      return formatScaled((Number(whole) + Number(n1) / Number(d1)) * ratio, 2);
    }
    if (n2 !== undefined) {
      if (Number(d2) === 0) return match;
      return formatScaled((Number(n2) / Number(d2)) * ratio, 2);
    }
    return formatScaled(parseFloat(decimal) * ratio, 1);
  });
}

function hasValue(v) {
  return v !== undefined && v !== null && v !== "" && !(typeof v === "number" && Number.isNaN(v));
}

/** 텍스트가 있으면 배지를 보여주고, 없으면 숨깁니다. */
function setBadge(elementId, text) {
  const el = document.getElementById(elementId);
  el.textContent = text;
  el.classList.toggle("hidden", !text);
}

function renderRecipeResult() {
  const rcp = state.currentRecipe;
  if (!rcp) return;

  const container = document.getElementById("recipeResultContainer");
  container.classList.remove("hidden");

  const recipeImg = document.getElementById("recipeGeneratedImg");
  recipeImg.src = safeImageUrl(rcp.imageUrl);
  recipeImg.alt = rcp.title ? `${rcp.title} 완성 요리 이미지` : "AI가 생성한 완성 요리 이미지";

  // 값이 없는 항목은 지어낸 기본값을 보여주지 않고 배지 자체를 숨깁니다.
  setBadge("rcpCuisine", rcp.cuisine ? String(rcp.cuisine) : "");
  setBadge("rcpMatchRate", hasValue(rcp.matchRate) ? `재료 매칭률 ${rcp.matchRate}%` : "");
  setBadge("rcpTime", hasValue(rcp.cookingTimeMinutes) ? `⏱️ ${rcp.cookingTimeMinutes}분` : "");
  setBadge("rcpDifficulty", rcp.difficulty ? `🌱 ${rcp.difficulty}` : "");
  setBadge("rcpCalories", rcp.calories ? `🔥 ${rcp.calories}` : "");
  document.getElementById("rcpTitle").textContent = rcp.title || "추천 레시피";
  document.getElementById("rcpSubtitle").textContent = rcp.subtitle || "";
  document.getElementById("rcpSubtitle").classList.toggle("hidden", !rcp.subtitle);
  document.getElementById("rcpChefTip").textContent = rcp.chefTip || "";
  document.getElementById("chefTipBox").classList.toggle("hidden", !rcp.chefTip);

  // 알레르기/기피 재료 경고: 토스트(금방 사라짐) 대신 결과 카드 상단에 계속 표시
  const warnEl = document.getElementById("rcpWarning");
  const warnings = Array.isArray(rcp.excludedWarnings) ? rcp.excludedWarnings : [];
  if (warnings.length > 0) {
    warnEl.textContent = `⚠️ 주의: 알레르기·기피로 설정한 재료(${warnings.join(", ")})가 이 레시피에 들어 있어요. 먹기 전에 꼭 확인하거나, '다시 추천받기'를 눌러 주세요.`;
    warnEl.classList.remove("hidden");
  } else {
    warnEl.textContent = "";
    warnEl.classList.add("hidden");
  }

  // 인분 변환 버튼 상태 업데이트
  document.querySelectorAll("#servingsScalerBtns button").forEach((btn) => {
    const isActive = Number(btn.dataset.servings) === state.displayServings;
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-pressed", isActive ? "true" : "false");
  });

  const ratio = state.displayServings / (state.baseServings || 1);

  const ownedList = document.getElementById("rcpOwnedList");
  ownedList.innerHTML = "";
  ((rcp.ingredients && rcp.ingredients.owned) || []).forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `<span>${escapeHtml(item.name)}</span><strong>${escapeHtml(scaleAmountText(item.amount, ratio))}</strong>`;
    ownedList.appendChild(li);
  });

  const missingList = document.getElementById("rcpMissingList");
  missingList.innerHTML = "";
  const missingItems = (rcp.ingredients && rcp.ingredients.missing) || [];
  if (missingItems.length === 0) {
    missingList.innerHTML = `<li><span>추가 필요 재료 없음</span><strong>완벽!</strong></li>`;
  } else {
    missingItems.forEach((item) => {
      const li = document.createElement("li");
      li.innerHTML = `<span>${escapeHtml(item.name)}</span><strong>${escapeHtml(scaleAmountText(item.amount, ratio))}</strong>`;
      missingList.appendChild(li);
    });
  }

  renderCookingSteps();
}

function renderCookingSteps() {
  const rcp = state.currentRecipe;
  if (!rcp) return;
  const steps = rcp.steps || [];
  const listEl = document.getElementById("rcpStepsList");
  listEl.innerHTML = "";

  // 항목별 리스너 대신 #rcpStepsList 의 이벤트 위임(toggleCookingStep)으로 처리합니다.
  steps.forEach((stepText, idx) => {
    const li = document.createElement("li");
    const isDone = state.completedSteps.has(idx);
    if (isDone) li.classList.add("done");
    li.dataset.idx = String(idx);
    li.tabIndex = 0;
    li.setAttribute("role", "checkbox");
    li.setAttribute("aria-checked", isDone ? "true" : "false");
    li.innerHTML = `
      <span class="step-idx" aria-hidden="true">${isDone ? "✓" : idx + 1}</span>
      <span>${escapeHtml(stepText)}</span>
    `;
    listEl.appendChild(li);
  });

  const doneCount = state.completedSteps.size;
  const total = steps.length || 1;
  const percent = Math.round((doneCount / total) * 100);
  document.getElementById("cookingProgressText").textContent = `${doneCount} / ${steps.length} 완료`;
  document.getElementById("cookingProgressBar").style.width = `${percent}%`;
  document.getElementById("cookingProgressWrap").setAttribute("aria-valuenow", String(percent));
}

/** 조리 단계 체크 토글(클릭 또는 Enter/Space). 다시 그린 뒤에도 같은 항목에 포커스를 유지합니다. */
function toggleCookingStep(e) {
  if (e.type === "keydown" && e.key !== "Enter" && e.key !== " ") return;
  const li = e.target.closest("li[data-idx]");
  if (!li) return;
  e.preventDefault();
  const idx = Number(li.dataset.idx);
  if (state.completedSteps.has(idx)) {
    state.completedSteps.delete(idx);
  } else {
    state.completedSteps.add(idx);
  }
  renderCookingSteps();
  const next = document.querySelector(`#rcpStepsList li[data-idx="${idx}"]`);
  if (next && e.type === "keydown") next.focus();
}

async function saveCurrentRecipeToProfile() {
  if (!state.currentRecipe || state.saving) return; // 더블 클릭으로 같은 레시피가 중복 저장되는 것을 방지
  state.saving = true;
  const saveBtn = document.getElementById("saveToProfileBtn");
  saveBtn.disabled = true;
  const rating = Number(document.getElementById("saveRatingSelect").value);
  const memo = document.getElementById("saveMemoInput").value;

  try {
    const data = await apiRequest(
      "/api/step3/recipes",
      jsonRequest("POST", {
        profileId: state.activeProfileId,
        recipe: state.currentRecipe,
        userRating: rating,
        userMemo: memo,
      }),
      "레시피를 저장하지 못했어요. 잠시 후 다시 시도해 주세요."
    );

    document.getElementById("saveMemoInput").value = "";
    // 전체 재조회 대신 응답(saved, stats)으로 로컬 상태만 갱신
    if (data.saved) state.savedRecipes.unshift(data.saved);
    state.stats = data.stats || state.stats;
    renderHeaderProfile();
    renderStatsDashboard();
    renderSavedRecipesGrid();
    showToast("⭐ 내 레시피북에 저장했어요. '프로필 & 레시피북' 탭에서 볼 수 있습니다.");
  } catch (err) {
    showToast(err.message, "error");
  } finally {
    state.saving = false;
    saveBtn.disabled = false;
  }
}

// ==========================================
// STEP 3: 사용자 프로필 및 나만의 레시피북
// ==========================================
function applyStep3State(data) {
  state.activeProfileId = data.activeProfileId;
  state.profiles = data.profiles || [];
  state.savedRecipes = data.savedRecipes || [];
  state.stats = data.stats || {};
  renderHeaderProfile();
  renderProfileSidebar();
  renderStatsDashboard();
  renderSavedRecipesGrid();
}

async function fetchStep3State() {
  try {
    applyStep3State(await apiRequest("/api/step3/state", undefined, "프로필과 레시피북을 불러오지 못했어요. 페이지를 새로고침해 주세요."));
  } catch (err) {
    console.error("Failed to fetch Step 3 state:", err);
    showToast(err.message, "error");
  }
}

function renderHeaderProfile() {
  const prof = getActiveProfile();
  document.getElementById("headerProfileAvatar").textContent = prof.avatar || "👨‍🍳";
  document.getElementById("headerProfileName").textContent = prof.nickname || "셰프";
  document.getElementById("headerSavedCount").textContent = state.stats.totalSaved || 0;
}

function renderProfileSidebar() {
  const listEl = document.getElementById("profileSelectorList");
  const fragment = document.createDocumentFragment();

  state.profiles.forEach((prof) => {
    const isActive = prof.profileId === state.activeProfileId;
    // 키보드로도 전환할 수 있도록 button 으로 만듭니다(이벤트 위임은 .profile-item 기준 그대로).
    const row = document.createElement("button");
    row.type = "button";
    row.className = `profile-item ${isActive ? "active" : ""}`;
    row.dataset.profileId = prof.profileId;
    row.setAttribute("aria-pressed", isActive ? "true" : "false");
    row.innerHTML = `
      <span class="profile-item-text">
        <strong>${escapeHtml(prof.avatar)} ${escapeHtml(prof.nickname)}</strong>
        <span class="muted-text" style="display:block;">${escapeHtml(prof.dietType)} · ${escapeHtml(prof.skillLevel)}</span>
      </span>
      <span class="profile-item-state">${isActive ? "✓ 사용 중" : "선택"}</span>
    `;
    fragment.appendChild(row);
  });
  listEl.replaceChildren(fragment);

  // 프로필이 1개뿐이면 삭제할 수 없으므로 미리 비활성화하고 이유를 알려 줍니다.
  const delBtn = document.getElementById("deleteProfileBtn");
  const onlyOne = state.profiles.length <= 1;
  delBtn.disabled = onlyOne;
  delBtn.title = onlyOne
    ? "프로필이 1개뿐이라 삭제할 수 없어요. 새 프로필을 만든 뒤 삭제할 수 있습니다."
    : "현재 프로필과 저장된 레시피를 삭제합니다";
  setInlineError("profileFormError", "");

  // 현재 활성 프로필 정보를 폼에 채우기
  const cur = getActiveProfile();
  document.getElementById("profileFormTitle").textContent = `'${cur.nickname}' 프로필 설정 편집`;
  document.getElementById("profIdInput").value = cur.profileId || "";
  document.getElementById("profAvatarInput").value = cur.avatar || "👨‍🍳";
  document.getElementById("profNicknameInput").value = cur.nickname || "";
  document.getElementById("profBioInput").value = cur.bio || "";
  document.getElementById("profSkillInput").value = cur.skillLevel || "초급";
  document.getElementById("profDietInput").value = cur.dietType || "일반식";
  document.getElementById("profAllergiesInput").value = (cur.allergies || []).join(", ");
  document.getElementById("profDislikedInput").value = (cur.dislikedIngredients || []).join(", ");
}

function renderStatsDashboard() {
  const s = state.stats || {};
  document.getElementById("statTotalSaved").textContent = `${s.totalSaved || 0}개`;
  document.getElementById("statStarred").textContent = `${s.starredCount || 0}개`;
  document.getElementById("statCooked").textContent = `${s.totalCookedCount || 0}회`;

  const topIngs = (s.topIngredients || []).map((x) => `${x.name}(${x.count})`).join(", ");
  document.getElementById("statTopIngredients").textContent = topIngs || "아직 기록 없음";
}

function matchesRecipeFilter(item) {
  const q = state.recipeSearch.trim().toLowerCase();
  const rcp = item.recipe || {};
  if (state.recipeFilter === "starred" && !item.starred) return false;
  if (
    state.recipeFilter !== "all" &&
    state.recipeFilter !== "starred" &&
    rcp.cuisine !== state.recipeFilter
  ) {
    return false;
  }
  if (!q) return true;
  const titleMatch = (rcp.title || "").toLowerCase().includes(q);
  const memoMatch = (item.userMemo || "").toLowerCase().includes(q);
  const ingMatch = ((rcp.ingredients && rcp.ingredients.owned) || []).some((ing) =>
    (ing.name || "").toLowerCase().includes(q)
  );
  return titleMatch || memoMatch || ingMatch;
}

function buildSavedCard(item) {
  const rcp = item.recipe || {};
  const card = document.createElement("article");
  card.className = "saved-card";
  card.dataset.savedId = item.savedId;
  const ratingNum = Math.max(0, Math.min(5, Number(item.userRating) || 5));
  const stars = "⭐".repeat(ratingNum);
  const title = rcp.title || "레시피";
  const metaBadges = [
    rcp.cuisine ? `<span class="badge badge-cuisine">${escapeHtml(rcp.cuisine)}</span>` : "",
    hasValue(rcp.cookingTimeMinutes) ? `<span class="badge badge-meta">⏱️ ${escapeHtml(rcp.cookingTimeMinutes)}분</span>` : "",
    `<span class="badge badge-meta">🍽️ 조리 ${escapeHtml(item.cookedCount || 0)}회</span>`,
  ].join("");

  card.innerHTML = `
    <div class="saved-card-img">
      <img src="${escapeHtml(safeImageUrl(rcp.imageUrl))}" alt="${escapeHtml(title)} 요리 이미지" loading="lazy" decoding="async" />
      <button type="button" class="star-btn" title="${item.starred ? "즐겨찾기 해제" : "즐겨찾기에 추가"}" aria-label="${escapeHtml(title)} ${item.starred ? "즐겨찾기 해제" : "즐겨찾기에 추가"}" aria-pressed="${item.starred ? "true" : "false"}">${item.starred ? "⭐" : "☆"}</button>
    </div>
    <div class="saved-card-body">
      <div class="recipe-badges">${metaBadges}</div>
      <div class="saved-card-title">${escapeHtml(title)}</div>
      <div class="saved-rating" aria-label="내 평점 ${ratingNum}점">평점: ${stars}</div>
      <div class="saved-memo">${item.userMemo ? `📝 ${escapeHtml(item.userMemo)}` : "등록된 메모가 없습니다."}</div>
      <div class="saved-card-actions">
        <button type="button" class="btn btn-sm btn-outline btn-detail" aria-label="${escapeHtml(title)} 상세 보기">상세 보기</button>
        <button type="button" class="btn btn-sm btn-secondary btn-cooked" aria-label="${escapeHtml(title)} 요리 완료 횟수 1 올리기">🍽️ 요리 완료 (+1)</button>
        <button type="button" class="btn btn-sm btn-outline btn-memo" aria-label="${escapeHtml(title)} 메모 수정">메모 수정</button>
        <button type="button" class="btn btn-sm btn-danger-outline btn-del" aria-label="${escapeHtml(title)} 삭제">삭제</button>
      </div>
    </div>
  `;
  return card;
}

function emptyRecipesNode() {
  const wrap = document.createElement("div");
  wrap.className = "card empty-recipes";
  // 저장된 게 하나도 없는 경우와, 검색/필터 결과가 없는 경우를 구분해서 안내합니다.
  const message = state.savedRecipes.length === 0
    ? "아직 저장한 레시피가 없어요. 2단계에서 레시피를 만들고 '내 레시피북에 저장'을 눌러 보세요."
    : "조건에 맞는 레시피가 없어요. 검색어를 바꾸거나 '전체' 필터를 눌러 보세요.";
  wrap.innerHTML = `<p class="muted-text">${escapeHtml(message)}</p>`;
  return wrap;
}

function renderSavedRecipesGrid() {
  const grid = document.getElementById("savedRecipesGrid");
  const filtered = state.savedRecipes.filter(matchesRecipeFilter);

  if (filtered.length === 0) {
    grid.replaceChildren(emptyRecipesNode());
    return;
  }

  const fragment = document.createDocumentFragment();
  filtered.forEach((item) => fragment.appendChild(buildSavedCard(item)));
  grid.replaceChildren(fragment);
}

function findCard(savedId) {
  const grid = document.getElementById("savedRecipesGrid");
  return Array.from(grid.querySelectorAll(".saved-card")).find((el) => el.dataset.savedId === savedId) || null;
}

/** 수정된 레시피 1건만 상태/DOM 에 반영합니다(전체 재조회·전체 재렌더링 없음). */
function applyRecipeUpdate(saved, stats) {
  const idx = state.savedRecipes.findIndex((x) => x.savedId === saved.savedId);
  if (idx >= 0) state.savedRecipes[idx] = saved;
  if (stats) state.stats = stats;
  renderHeaderProfile();
  renderStatsDashboard();

  const grid = document.getElementById("savedRecipesGrid");
  const card = findCard(saved.savedId);
  if (card) {
    if (matchesRecipeFilter(saved)) {
      card.replaceWith(buildSavedCard(saved));
    } else {
      card.remove();
      if (!grid.querySelector(".saved-card")) grid.replaceChildren(emptyRecipesNode());
    }
  }
}

async function patchSavedRecipe(item, body, failMessage) {
  const data = await apiRequest(`/api/step3/recipes/${encodeURIComponent(item.savedId)}`, jsonRequest("PATCH", body), failMessage);
  applyRecipeUpdate(data.saved, data.stats);
}

async function handleSavedCardAction(e) {
  const card = e.target.closest(".saved-card");
  if (!card) return;
  const item = state.savedRecipes.find((x) => x.savedId === card.dataset.savedId);
  if (!item) return;
  const rcp = item.recipe || {};
  const title = rcp.title || "레시피";
  const clickedButton = e.target.closest("button");
  if (!clickedButton) return;
  if (card.dataset.busy === "1") return; // 같은 카드의 요청이 끝나기 전 중복 클릭 방지

  try {
    if (e.target.closest(".btn-detail")) {
      openRecipeModal(item, clickedButton);
      return;
    }
    if (e.target.closest(".btn-memo")) {
      const nextMemo = prompt("나만의 레시피 메모를 입력하세요:", item.userMemo || "");
      if (nextMemo === null) return;
      card.dataset.busy = "1";
      clickedButton.disabled = true;
      await patchSavedRecipe(item, { userMemo: nextMemo }, "메모를 수정하지 못했어요. 잠시 후 다시 시도해 주세요.");
      showToast("📝 메모를 수정했어요.");
      return;
    }
    if (e.target.closest(".btn-del")) {
      if (!confirm(`'${title}' 레시피를 삭제할까요?\n삭제하면 되돌릴 수 없어요.`)) return;
    }

    card.dataset.busy = "1";
    clickedButton.disabled = true;
    if (e.target.closest(".star-btn")) {
      await patchSavedRecipe(item, { starred: !item.starred }, "즐겨찾기를 바꾸지 못했어요. 잠시 후 다시 시도해 주세요.");
    } else if (e.target.closest(".btn-cooked")) {
      await patchSavedRecipe(item, { incrementCooked: true }, "요리 완료 기록을 남기지 못했어요. 잠시 후 다시 시도해 주세요.");
      showToast(`🎉 '${title}' 요리 완료 횟수가 1 늘었어요!`);
    } else if (e.target.closest(".btn-del")) {
      const data = await apiRequest(`/api/step3/recipes/${encodeURIComponent(item.savedId)}`, { method: "DELETE" }, "레시피를 삭제하지 못했어요. 잠시 후 다시 시도해 주세요.");
      state.savedRecipes = state.savedRecipes.filter((x) => x.savedId !== item.savedId);
      state.stats = (data.state && data.state.stats) || state.stats;
      renderHeaderProfile();
      renderStatsDashboard();
      card.remove();
      const grid = document.getElementById("savedRecipesGrid");
      if (!grid.querySelector(".saved-card")) grid.replaceChildren(emptyRecipesNode());
      showToast("🗑️ 레시피를 삭제했어요.");
    }
  } catch (err) {
    showToast(err.message, "error");
  } finally {
    // 카드가 다시 그려졌다면 이 값은 새 노드에 없으므로 무해합니다. 그대로 남은 카드만 풀어 줍니다.
    delete card.dataset.busy;
    clickedButton.disabled = false;
    // 카드가 새로 그려졌다면 키보드 사용자가 같은 버튼에서 이어서 조작할 수 있게 포커스를 되돌립니다.
    if (!card.isConnected) {
      const fresh = findCard(item.savedId);
      const cls = ["star-btn", "btn-cooked", "btn-memo"].find((c) => clickedButton.classList.contains(c));
      const target = fresh && cls ? fresh.querySelector(`.${cls}`) : null;
      if (target) target.focus();
    }
  }
}

async function handleProfileSelect(e) {
  const row = e.target.closest(".profile-item");
  if (!row) return;
  const prof = state.profiles.find((p) => p.profileId === row.dataset.profileId);
  if (!prof) return;
  try {
    const data = await apiRequest("/api/step3/profiles/select", jsonRequest("POST", { profileId: prof.profileId }), "프로필을 바꾸지 못했어요. 잠시 후 다시 시도해 주세요.");
    applyStep3State(data.state);
    showToast(`👤 '${prof.nickname}' 프로필로 바꿨어요.`);
    // 목록이 다시 그려져도 키보드 포커스를 유지합니다.
    const again = document.querySelector(`#profileSelectorList .profile-item[data-profile-id="${CSS.escape(prof.profileId)}"]`);
    if (again) again.focus();
  } catch (err) {
    showToast(err.message, "error");
  }
}

function openRecipeModal(savedItem, triggerEl) {
  const rcp = savedItem.recipe || {};
  const title = rcp.title || "레시피 상세";
  document.getElementById("modalRecipeTitle").textContent = title;
  const owned = ((rcp.ingredients && rcp.ingredients.owned) || [])
    .map((i) => `${escapeHtml(i.name)} (${escapeHtml(i.amount)})`)
    .join(", ");
  const stepsHtml = (rcp.steps || [])
    .map((s, idx) => `<li><strong>${idx + 1}.</strong> ${escapeHtml(s)}</li>`)
    .join("");
  const warnings = Array.isArray(rcp.excludedWarnings) ? rcp.excludedWarnings : [];

  document.getElementById("modalRecipeBody").innerHTML = `
    ${warnings.length > 0 ? `<div class="alert-danger" role="alert">⚠️ 주의: 알레르기·기피로 설정한 재료(${escapeHtml(warnings.join(", "))})가 이 레시피에 들어 있어요.</div>` : ""}
    <img src="${escapeHtml(safeImageUrl(rcp.imageUrl))}" alt="${escapeHtml(title)} 요리 이미지" style="width:100%; max-height:300px; object-fit:cover; border-radius:10px; margin-bottom:14px;" />
    ${rcp.subtitle ? `<p class="muted-text" style="margin-bottom:10px;">${escapeHtml(rcp.subtitle)}</p>` : ""}
    ${owned ? `<p style="margin-bottom:10px;"><strong>✅ 주재료:</strong> ${owned}</p>` : ""}
    <h4 style="margin:12px 0 8px;">👩‍🍳 조리 순서</h4>
    <ol style="list-style:none; display:flex; flex-direction:column; gap:8px; margin-bottom:14px;">${stepsHtml}</ol>
    ${rcp.chefTip ? `<div class="chef-tip-box"><strong>💡 셰프 팁:</strong> ${escapeHtml(rcp.chefTip)}</div>` : ""}
  `;
  state.modalTrigger = triggerEl || document.activeElement;
  document.getElementById("recipeModal").classList.remove("hidden");
  document.getElementById("closeModalBtn").focus();
}

function closeRecipeModal() {
  const modal = document.getElementById("recipeModal");
  if (modal.classList.contains("hidden")) return;
  modal.classList.add("hidden");
  const trigger = state.modalTrigger;
  state.modalTrigger = null;
  if (trigger && trigger.isConnected && typeof trigger.focus === "function") trigger.focus();
}

// ==========================================
// 초기 이벤트 바인딩
// ==========================================
if (typeof document !== "undefined") {
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  fetchStep3State();

  // 상단 탭 네비게이션
  document.querySelectorAll(".step-tab").forEach((btn) => {
    btn.addEventListener("click", () => switchStep(Number(btn.dataset.step)));
  });

  document.getElementById("headerProfileBtn").addEventListener("click", () => switchStep(3));

  // Step 1: 파일 업로드 / 드래그앤드롭 / 붙여넣기 / 샘플 로드
  const dropzone = document.getElementById("imageDropzone");
  const fileInput = document.getElementById("imageFileInput");

  dropzone.addEventListener("click", (e) => {
    if (e.target.id === "clearImageBtn") return;
    fileInput.click();
  });

  // 키보드 사용자도 Enter / Space 로 파일 선택 창을 열 수 있게 합니다.
  dropzone.addEventListener("keydown", (e) => {
    if (e.target !== dropzone) return; // 안쪽 '다른 사진 선택' 버튼의 키 입력은 그대로 둡니다.
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      fileInput.click();
    }
  });

  fileInput.addEventListener("change", (e) => {
    if (e.target.files && e.target.files[0]) {
      handleFileSelect(e.target.files[0]);
    }
  });

  dropzone.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropzone.classList.add("dragover");
  });
  dropzone.addEventListener("dragleave", () => dropzone.classList.remove("dragover"));
  dropzone.addEventListener("drop", (e) => {
    e.preventDefault();
    dropzone.classList.remove("dragover");
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileSelect(e.dataTransfer.files[0]);
    }
  });

  window.addEventListener("paste", (e) => {
    const items = (e.clipboardData || {}).items || [];
    for (const item of items) {
      if (item.type.startsWith("image/")) {
        handleFileSelect(item.getAsFile());
        break;
      }
    }
  });

  document.getElementById("clearImageBtn").addEventListener("click", (e) => {
    e.stopPropagation();
    clearPreviewImage();
  });

  document.getElementById("loadSampleBtn").addEventListener("click", async () => {
    if (state.recognizing) return; // 인식 중에는 샘플 버튼이 중복으로 동작하지 않게 합니다.
    state.useSample = true;
    state.selectedFile = null;
    revokePreviewObjectUrl();
    setPreviewImage(`/api/step1/sample-image?t=${Date.now()}`);
    document.getElementById("imagePreview").alt = "샘플 냉장고 사진";
    showToast("🧪 샘플 냉장고 사진을 불러왔어요. 바로 식재료를 찾아볼게요.");
    await recognizeIngredients();
  });

  document.getElementById("recognizeBtn").addEventListener("click", recognizeIngredients);

  // 수동 식재료 추가
  document.getElementById("addIngredientForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const nameInput = document.getElementById("newIngName");
    const catInput = document.getElementById("newIngCategory");
    const qtyInput = document.getElementById("newIngQty");

    const name = nameInput.value.trim();
    if (!name) {
      setInlineError("ingredientError", "식재료 이름을 입력해 주세요. (예: 양파, 삼겹살)");
      nameInput.focus();
      return;
    }
    if (state.ingredients.some((x) => x.name === name)) {
      setInlineError("ingredientError", `'${name}'은(는) 이미 목록에 있어요. 수량을 바꾸려면 목록의 재료 이름을 눌러 주세요.`);
      nameInput.focus();
      return;
    }

    state.ingredients.push({
      id: `ing_${Date.now()}`,
      name,
      category: catInput.value,
      quantity: qtyInput.value.trim() || "적당량",
      selected: true,
    });
    nameInput.value = "";
    qtyInput.value = "";
    renderIngredientChips();
    nameInput.focus(); // 이어서 다음 재료를 바로 입력할 수 있게 합니다.
  });

  document.getElementById("goToStep2Btn").addEventListener("click", () => {
    if (state.ingredients.length === 0) {
      setInlineError("ingredientError", "식재료가 하나도 없어요. 사진을 인식하거나, 위 입력창에서 재료를 1개 이상 추가한 뒤 눌러 주세요.");
      return;
    }
    switchStep(2);
  });

  // Step 2 이벤트
  document.getElementById("backToStep1Btn").addEventListener("click", () => switchStep(1));
  document.getElementById("generateRecipeBtn").addEventListener("click", generateRecipe);
  document.getElementById("regenerateRecipeBtn").addEventListener("click", generateRecipe);

  document.querySelectorAll("#servingsScalerBtns button").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.displayServings = Number(btn.dataset.servings);
      renderRecipeResult();
    });
  });

  // 조리 단계 체크는 목록 하나에서 이벤트 위임으로 처리(클릭 + 키보드)
  const stepsList = document.getElementById("rcpStepsList");
  stepsList.addEventListener("click", toggleCookingStep);
  stepsList.addEventListener("keydown", toggleCookingStep);

  document.getElementById("saveToProfileBtn").addEventListener("click", saveCurrentRecipeToProfile);

  // Step 3 이벤트 (카드/프로필 목록은 이벤트 위임: 리스너 1개로 처리)
  document.getElementById("savedRecipesGrid").addEventListener("click", handleSavedCardAction);
  document.getElementById("profileSelectorList").addEventListener("click", handleProfileSelect);

  document.getElementById("newProfileModeBtn").addEventListener("click", () => {
    document.getElementById("profileFormTitle").textContent = "새 프로필 생성";
    document.getElementById("profIdInput").value = "";
    document.getElementById("profNicknameInput").value = "";
    document.getElementById("profBioInput").value = "";
    document.getElementById("profAllergiesInput").value = "";
    document.getElementById("profDislikedInput").value = "";
    // 아직 저장 전인 새 프로필은 삭제할 대상이 없으므로 삭제 버튼을 막아 현재 프로필이 지워지는 오조작을 방지합니다.
    const delBtn = document.getElementById("deleteProfileBtn");
    delBtn.disabled = true;
    delBtn.title = "새 프로필은 저장한 뒤에 삭제할 수 있어요.";
    setInlineError("profileFormError", "");
    document.getElementById("profNicknameInput").focus();
  });

  document.getElementById("profileForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!document.getElementById("profNicknameInput").value.trim()) {
      setInlineError("profileFormError", "닉네임을 입력해 주세요. 프로필을 구분하는 이름으로 쓰여요.");
      document.getElementById("profNicknameInput").focus();
      return;
    }
    setInlineError("profileFormError", "");
    const saveProfileBtn = document.getElementById("saveProfileBtn");
    if (saveProfileBtn.disabled) return;
    saveProfileBtn.disabled = true;
    const payload = {
      profileId: document.getElementById("profIdInput").value || undefined,
      avatar: document.getElementById("profAvatarInput").value,
      nickname: document.getElementById("profNicknameInput").value,
      bio: document.getElementById("profBioInput").value,
      skillLevel: document.getElementById("profSkillInput").value,
      dietType: document.getElementById("profDietInput").value,
      allergies: document.getElementById("profAllergiesInput").value,
      dislikedIngredients: document.getElementById("profDislikedInput").value,
    };
    try {
      const data = await apiRequest("/api/step3/profiles", jsonRequest("POST", payload), "프로필을 저장하지 못했어요. 잠시 후 다시 시도해 주세요.");
      applyStep3State(data.state);
      showToast("✅ 프로필을 저장했어요.");
    } catch (err) {
      setInlineError("profileFormError", err.message);
    } finally {
      saveProfileBtn.disabled = false;
    }
  });

  document.getElementById("deleteProfileBtn").addEventListener("click", async () => {
    const cur = getActiveProfile();
    const savedCount = state.savedRecipes.length;
    const recipeNote = savedCount > 0 ? `이 프로필에 저장된 레시피 ${savedCount}개도 함께 삭제됩니다.` : "저장된 레시피는 없습니다.";
    if (!confirm(`'${cur.nickname}' 프로필을 삭제할까요?\n${recipeNote}\n삭제하면 되돌릴 수 없어요. (필요하면 먼저 'JSON 백업 내보내기'로 저장해 두세요.)`)) return;
    const delBtn = document.getElementById("deleteProfileBtn");
    delBtn.disabled = true;
    try {
      const data = await apiRequest(
        `/api/step3/profiles/${encodeURIComponent(state.activeProfileId)}`,
        { method: "DELETE" },
        "프로필을 삭제하지 못했어요. 잠시 후 다시 시도해 주세요."
      );
      applyStep3State(data);
      showToast("🗑️ 프로필을 삭제했어요.");
    } catch (err) {
      setInlineError("profileFormError", err.message);
      delBtn.disabled = state.profiles.length <= 1;
    }
  });

  // 검색 입력은 디바운스: 타이핑마다 DOM 을 재생성하지 않고 입력이 멈춘 뒤 1회만 렌더링
  const debouncedSearchRender = debounce(renderSavedRecipesGrid, SEARCH_DEBOUNCE_MS);
  document.getElementById("recipeSearchInput").addEventListener("input", (e) => {
    state.recipeSearch = e.target.value;
    debouncedSearchRender();
  });

  document.querySelectorAll("#recipeFilterTabs .filter-tab").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#recipeFilterTabs .filter-tab").forEach((b) => {
        b.classList.remove("active");
        b.setAttribute("aria-pressed", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-pressed", "true");
      state.recipeFilter = btn.dataset.filter;
      renderSavedRecipesGrid();
    });
  });

  // 백업 내보내기 / 불러오기
  document.getElementById("exportBackupBtn").addEventListener("click", async () => {
    try {
      const data = await apiRequest("/api/step3/backup", undefined, "백업 파일을 만들지 못했어요. 잠시 후 다시 시도해 주세요.");
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      const dateStr = new Date().toISOString().slice(0, 10);
      a.href = url;
      a.download = `recipe_book_backup_${dateStr}.json`;
      a.click();
      URL.revokeObjectURL(url);
      showToast("💾 레시피북 백업 파일을 내려받았어요.");
    } catch (err) {
      showToast(err.message, "error");
    }
  });

  const importInput = document.getElementById("importBackupInput");
  document.getElementById("importBackupBtn").addEventListener("click", () => importInput.click());
  importInput.addEventListener("change", (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    // 복원은 현재 데이터를 덮어쓰므로 파일을 읽기 전에 한 번 더 확인합니다.
    if (!confirm("백업 파일로 복원하면 현재 프로필과 레시피북이 백업 내용으로 바뀝니다.\n계속할까요?")) {
      importInput.value = "";
      return;
    }
    const reader = new FileReader();
    reader.onload = async (ev) => {
      let parsed;
      try {
        parsed = JSON.parse(ev.target.result);
      } catch (_err) {
        showToast("백업 파일을 읽지 못했어요. 이 앱에서 내보낸 .json 백업 파일을 선택해 주세요.", "error");
        return;
      }
      try {
        const data = await apiRequest("/api/step3/restore", jsonRequest("POST", parsed), "백업을 복원하지 못했어요. 파일이 올바른지 확인해 주세요.");
        applyStep3State(data);
        showToast("📂 백업 데이터를 복원했어요.");
      } catch (err) {
        showToast(err.message, "error");
      }
    };
    reader.onerror = () => showToast("파일을 읽지 못했어요. 다시 선택해 주세요.", "error");
    reader.readAsText(file);
    importInput.value = "";
  });

  // 모달 닫기
  document.getElementById("closeModalBtn").addEventListener("click", closeRecipeModal);
  document.getElementById("recipeModal").addEventListener("click", (e) => {
    if (e.target.id === "recipeModal") closeRecipeModal();
  });
  document.addEventListener("keydown", (e) => {
    const modal = document.getElementById("recipeModal");
    if (modal.classList.contains("hidden")) return;
    if (e.key === "Escape") {
      closeRecipeModal();
    } else if (e.key === "Tab") {
      // 모달 안에서만 Tab 이동: 모달 내부 포커스 가능 요소 사이를 순환
      const focusables = modal.querySelectorAll("button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])");
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      } else if (!modal.contains(document.activeElement)) {
        e.preventDefault();
        first.focus();
      }
    }
  });
});
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { escapeHtml, safeImageUrl, scaleAmountText, debounce };
}
