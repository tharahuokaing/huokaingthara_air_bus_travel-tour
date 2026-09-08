/**
 * Huokaing Thara Air Travel & Tour
 * Multi-Currency Engine, Route Planner & Regional Opening Soon Articles
 */

document.addEventListener("DOMContentLoaded", () => {
  initCurrencyCalculator();
  renderRoutePlannerCards();
  renderLongFormOpeningSoonArticles();
});

// Exchange Rate Conversion Logic for Foreign Travelers
function initCurrencyCalculator() {
  const amountInput = document.getElementById("currAmount");
  const currencySelect = document.getElementById("currSelect");
  const resultDisplay = document.getElementById("currResultDisplay");

  if (!amountInput || !currencySelect || !resultDisplay) return;

  const ratesToUSD = {
    USD: 1.0,
    KHR: 0.00025, // Cambodian Riel
    THB: 0.028,   // Thai Baht
    EUR: 1.08,    // Euro
    SGD: 0.74     // Singapore Dollar
  };

  function updateConversion() {
    const amount = parseFloat(amountInput.value) || 0;
    const selectedCurrency = currencySelect.value;
    const rate = ratesToUSD[selectedCurrency] || 1.0;

    let convertedUSD = amount * rate;
    if (selectedCurrency === "USD") {
      convertedUSD = amount;
    }

    resultDisplay.innerText = `$${convertedUSD.toFixed(2)} USD`;
  }

  amountInput.addEventListener("input", updateConversion);
  currencySelect.addEventListener("change", updateConversion);
  updateConversion();
}

// Custom Route Planner Dataset
const routePlannerData = [
  {
    title: "Angkor Wat Sunrise & Outer Temple Loop",
    duration: "Full Day (10 Hours)",
    estCost: "$55 USD",
    status: "Active",
    description: "Includes 5:00 AM hotel pickup, licensed English-speaking guide, air-conditioned vehicle, and visits to Angkor Wat, Bayon, and Banteay Srei."
  },
  {
    title: "Tonle Sap Lake Floating Village Boat Charter",
    duration: "Half Day (4 Hours)",
    estCost: "$35 USD",
    status: "Active",
    description: "Private cruise through Kampong Phluk stilt village, mangrove forest canoe rentals, and sunset views over the Great Lake."
  },
  {
    title: "Phnom Kulen Mountain Riverbed Safari",
    duration: "Full Day (8 Hours)",
    estCost: "$75 USD",
    status: "Opening Soon",
    description: "Upcoming mountain expedition to thousand lingas riverbed carvings, sacred reclining Buddha statues, and waterfall picnic basins."
  }
];

// Renders route planner cards
function renderRoutePlannerCards() {
  const container = document.getElementById("routePlannerContainer");
  if (!container) return;

  container.innerHTML = routePlannerData
    .map(
      (item) => `
      <div class="planner-card">
        <div class="planner-card-header">
          <h4>${item.title}</h4>
          ${item.status === "Opening Soon" ? `<span class="badge-soon">${item.status}</span>` : ""}
        </div>
        <p><strong>Duration:</strong> ${item.duration} | <strong>Est:</strong> ${item.estCost}</p>
        <p>${item.description}</p>
        <div style="margin-top:auto;">
          <button class="btn-primary full-width" onclick="openBookingModal('${item.title}')">
            ${item.status === "Opening Soon" ? "Pre-Register" : "Select Route"}
          </button>
        </div>
      </div>
    `
    )
    .join("");
}

// Long-Form Articles for Upcoming Routes
const longFormArticlesData = [
  {
    title: "Cardamom Mountain Rainforest & Wilderness Eco-Charter",
    region: "Koh Kong / Pursat Boundary",
    category: "Eco-Adventure",
    status: "Opening Soon",
    content:
      "Huokaing Thara Air Travel & Tour is establishing dedicated wilderness charters into the Cardamom Mountains. Designed for eco-tourists and nature enthusiasts, this route features ranger-guided wildlife treks, mangrove kayaking, and stays at sustainable forest lodges."
  },
  {
    title: "Ratanakiri Volcanic Crater Lake & Highland Tribal Trail",
    region: "Northeastern Highlands",
    category: "Highland Culture",
    status: "Opening Soon",
    content:
      "A forthcoming high-altitude itinerary connecting Siem Reap travelers directly to Banlung. Highlights include swimming in the volcanic Yeak Laom crater lake, visiting highland waterfalls, and exploring traditional indigenous artisan villages."
  }
];

// Renders long-form articles
function renderLongFormOpeningSoonArticles() {
  const container = document.getElementById("longFormArticlesContainer");
  if (!container) return;

  container.innerHTML = longFormArticlesData
    .map(
      (art) => `
      <article class="longform-card">
        <div class="longform-header">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.4rem;">
            <span style="font-size:0.8rem; color:var(--primary-color); font-weight:700;">📍 ${art.region}</span>
            <span class="badge-soon">${art.status}</span>
          </div>
          <h3>${art.title}</h3>
        </div>
        <div class="longform-body">
          <p>${art.content}</p>
          <div style="margin-top:auto;">
            <button class="btn-primary full-width" onclick="openBookingModal('custom')">
              Pre-Register for Early Access
            </button>
          </div>
        </div>
      </article>
    `
    )
    .join("");
}
