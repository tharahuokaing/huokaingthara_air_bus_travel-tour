/**
 * Huokaing Thara Air Travel & Tour
 * VIP Flight Desk, Seasonality Travel Advisory & Regional Opening Soon Engine
 */

document.addEventListener("DOMContentLoaded", () => {
  renderFlightDeskRoutes();
  renderSeasonalityAdvisory();
  renderRegionalOpeningSoonArticles();
});

// VIP Air & Overland Transit Routes Dataset
const transitRoutesData = [
  {
    type: "Domestic Air Charter",
    route: "Siem Reap ⇄ Phnom Penh",
    duration: "45 Mins Flight",
    price: "$85 USD Base",
    status: "Daily Desk Ticketing"
  },
  {
    type: "Coastal Express Flight",
    route: "Siem Reap ⇄ Sihanoukville Coastal Gate",
    duration: "60 Mins Flight",
    price: "$110 USD Base",
    status: "Daily Desk Ticketing"
  },
  {
    type: "Cross-Border VIP Shuttle",
    route: "Siem Reap ⇄ Bangkok Suvarnabhumi",
    duration: "Overland Express Charter",
    price: "$45 USD Base",
    status: "Opening Soon"
  },
  {
    type: "Highland Helicopter Charter",
    route: "Siem Reap ⇄ Preah Vihear Ridge",
    duration: "Direct Aerial Transport",
    price: "Custom Group Quote",
    status: "Opening Soon"
  }
];

// Injects transit route cards
function renderFlightDeskRoutes() {
  const container = document.getElementById("transitRoutesContainer");
  if (!container) return;

  container.innerHTML = transitRoutesData
    .map(
      (item) => `
      <div class="transit-card">
        <span class="route-badge">${item.type}</span>
        <h4>${item.route}</h4>
        <p><strong>Duration:</strong> ${item.duration}<br/><strong>Rate:</strong> ${item.price}</p>
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <span style="font-size:0.8rem; color:${item.status === "Opening Soon" ? "var(--accent-gold)" : "var(--primary-color)"}; font-weight:600;">
            ${item.status}
          </span>
          <button class="btn-primary" style="padding:0.35rem 0.85rem; font-size:0.8rem;" onclick="openBookingModal('flight')">
            ${item.status === "Opening Soon" ? "Pre-Register" : "Book Ticket"}
          </button>
        </div>
      </div>
    `
    )
    .join("");
}

// Seasonality and Travel Advisory Dataset
const seasonalityData = [
  {
    icon: "☀️",
    season: "Dry Season Highlights",
    months: "November through April",
    guidance:
      "Ideal weather for temple photography, clear blue skies, and optimal ground road transit across remote archaeological parks. Early morning 5:00 AM departures with Huokaing Thara Air Travel & Tour provide cool temperatures at temple sites."
  },
  {
    icon: "🌿",
    season: "Green Monsoon Wonders",
    months: "May through October",
    guidance:
      "Vibrant green jungle landscapes, full temple moat reflections, and dramatically reduced visitor crowds. Perfect season for Tonle Sap floating village cruises and photography excursions."
  },
  {
    icon: "🚁",
    season: "Highland Expedition Window",
    months: "Opening Soon Services",
    guidance:
      "Specialized seasonal charters to Phnom Kulen, Mondulkiri, and the Cardamom Mountains timed specifically with water flows and optimal rainforest trekking conditions."
  }
];

// Renders travel advisory cards
function renderSeasonalityAdvisory() {
  const container = document.getElementById("seasonalityAdvisoryContainer");
  if (!container) return;

  container.innerHTML = seasonalityData
    .map(
      (card) => `
      <div class="advisory-card">
        <div class="season-icon">${card.icon}</div>
        <h4>${card.season}</h4>
        <p style="color:var(--primary-dark); font-weight:700; font-size:0.85rem; margin-bottom:0.5rem;">
          ${card.months}
        </p>
        <p>${card.guidance}</p>
      </div>
    `
    )
    .join("");
}

// Deep Long-Form Articles for Regional Destinations Opening Soon
const regionalOpeningSoonArticles = [
  {
    title: "Sambor Prei Kuk Ancient Isanapura Capital Expedition",
    province: "Kampong Thom Province",
    status: "Opening Soon",
    category: "Pre-Angkorian Heritage",
    articleBody:
      "Huokaing Thara Air Travel & Tour is completing preparations for a brand-new historical route targeting the pre-Angkorian brick sanctuaries of Sambor Prei Kuk. Dating back to the 6th–7th century Chenla Empire, these octagonal brick towers nestled inside quiet forests offer unmatched archaeological depth.",
    highlights: [
      "Guided tours of 6th-century octagonal brick temples",
      "Traditional home-cooked lunch stops in local forest communities",
      "Seamless private transit connecting Siem Reap to Kampong Thom"
    ]
  },
  {
    title: "Stung Treng Mekong River Dolphin & Wetland Eco-Charter",
    province: "Upper Mekong Region",
    status: "Opening Soon",
    category: "Wild River Conservation",
    articleBody:
      "Expanding into northeastern riverways, this upcoming eco-expedition guides travelers along Ramsar-protected Mekong wetlands. Highlights include serene wooden boat rides to observe rare Irrawaddy river dolphins near the Laos border and kayaking through submerged river forests.",
    highlights: [
      "Ramsar Conservation Zone boat excursions",
      "Irrawaddy dolphin watching with certified river captains",
      "Direct ticketing and multi-province ground transfer options"
    ]
  }
];

// Renders long-form regional opening soon article cards
function renderRegionalOpeningSoonArticles() {
  const container = document.getElementById("regionalOpeningSoonContainer");
  if (!container) return;

  container.innerHTML = regionalOpeningSoonArticles
    .map(
      (art) => `
      <article class="regional-article-card">
        <div class="regional-article-header">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem;">
            <span style="font-size:0.8rem; color:var(--primary-color); font-weight:700;">📍 ${art.province}</span>
            <span class="badge-soon">${art.status}</span>
          </div>
          <h3>${art.title}</h3>
        </div>
        <div class="regional-article-body">
          <p>${art.articleBody}</p>
          <ul class="regional-highlights-list">
            ${art.highlights.map((h) => `<li>${h}</li>`).join("")}
          </ul>
          <div style="margin-top:auto;">
            <button class="btn-primary full-width" onclick="openBookingModal('custom')">
              Pre-Register for Early Launch Vouchers
            </button>
          </div>
        </div>
      </article>
    `
    )
    .join("");
}
