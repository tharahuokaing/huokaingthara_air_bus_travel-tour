/**
 * Huokaing Thara Air Travel & Tour
 * Google Translate 10-Language Integration Engine & Multilingual Opening Soon Articles
 */

document.addEventListener("DOMContentLoaded", () => {
  loadGoogleTranslateScript();
  renderLanguageSelectorWidget();
  renderMultilingualOpeningSoonArticles();
});

// Supported 10 Languages Config (Includes Khmer)
const supportedLanguages = [
  { code: "km", name: "ភាសាខ្មែរ (Khmer)", flag: "🇰🇭" },
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "fr", name: "Français (French)", flag: "🇫🇷" },
  { code: "zh-CN", name: "中文 (Chinese)", flag: "🇨🇳" },
  { code: "th", name: "ไทย (Thai)", flag: "🇹🇭" },
  { code: "lo", name: "ລາວ (Lao)", flag: "🇱🇦" },
  { code: "ja", name: "日本語 (Japanese)", flag: "🇯🇵" },
  { code: "ko", name: "한국어 (Korean)", flag: "🇰🇷" },
  { code: "vi", name: "Tiếng Việt (Vietnamese)", flag: "🇻🇳" },
  { code: "de", name: "Deutsch (German)", flag: "🇩🇪" }
];

// Dynamically injects Google Translate element and script
function loadGoogleTranslateScript() {
  if (document.getElementById("google-translate-script")) return;

  const translateDiv = document.createElement("div");
  translateDiv.id = "google_translate_element";
  document.body.appendChild(translateDiv);

  window.googleTranslateElementInit = function () {
    new google.translate.TranslateElement(
      {
        pageLanguage: "en",
        includedLanguages: "km,en,fr,zh-CN,th,lo,ja,ko,vi,de",
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false
      },
      "google_translate_element"
    );
  };

  const script = document.createElement("script");
  script.id = "google-translate-script";
  script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
  script.async = true;
  document.head.appendChild(script);
}

// Renders clean UI language switcher widget
function renderLanguageSelectorWidget() {
  const container = document.getElementById("languageSelectorContainer");
  if (!container) return;

  container.innerHTML = `
    <div class="lang-switcher-container">
      <span class="lang-switcher-label">🌐 Language:</span>
      <select id="customLangSelect" class="lang-dropdown-select" onchange="triggerGoogleTranslate(this.value)">
        ${supportedLanguages
          .map((lang) => `<option value="${lang.code}">${lang.flag} ${lang.name}</option>`)
          .join("")}
      </select>
    </div>
  `;
}

// Triggers Google Translate engine based on custom dropdown selection
function triggerGoogleTranslate(langCode) {
  const selectElem = document.querySelector(".goog-te-combo");
  if (selectElem) {
    selectElem.value = langCode;
    selectElem.dispatchEvent(new Event("change"));
  } else {
    // Retry if Google script is still initializing
    setTimeout(() => {
      const retryElem = document.querySelector(".goog-te-combo");
      if (retryElem) {
        retryElem.value = langCode;
        retryElem.dispatchEvent(new Event("change"));
      }
    }, 500);
  }
}

// Multilingual Opening Soon Articles Dataset
const multilingualArticlesData = [
  {
    title: "Khmer Cultural Heritage & Mekong River Transit",
    region: "Siem Reap to Kratie Gate",
    status: "Opening Soon",
    category: "River Heritage",
    description:
      "Huokaing Thara Air Travel & Tour is launching an upcoming overland and riverboat charter connecting Siem Reap to the Mekong dolphin sanctuaries in Kratie. Available with multilingual guided services for global international guests."
  },
  {
    title: "Phnom Penh Executive Sky Charter & VIP Overland Shuttle",
    region: "Capital Express Gateway",
    status: "Opening Soon",
    category: "Executive Transit",
    description: "An upcoming premium VIP shuttle service offering direct flight desk coordination, fast-track boarding passes, and private chauffeur connections across major Cambodian provinces."
  }
];

// Renders multilingual article cards
function renderMultilingualOpeningSoonArticles() {
  const container = document.getElementById("multilingualArticlesContainer");
  if (!container) return;

  container.innerHTML = multilingualArticlesData
    .map(
      (art) => `
      <article class="multilingual-card">
        <div class="multilingual-header">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.4rem;">
            <span style="font-size:0.8rem; color:var(--accent-gold); font-weight:700;">📍 ${art.region}</span>
            <span class="badge-soon">${art.status}</span>
          </div>
          <h3>${art.title}</h3>
        </div>
        <div class="multilingual-body">
          <p>${art.description}</p>
          <div style="margin-top:auto;">
            <button class="btn-primary full-width" onclick="openBookingModal('custom')">
              Pre-Register for Multi-Language Guided Tours
            </button>
          </div>
        </div>
      </article>
    `
    )
    .join("");
}
