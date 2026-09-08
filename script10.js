/**
 * Huokaing Thara Air Travel & Tour
 * VIP Loyalty Portal, Route Estimator & Coastal Opening Soon Articles Engine
 */

document.addEventListener("DOMContentLoaded", () => {
  renderLoyaltyTiers();
  initRouteEstimator();
  renderCoastalOpeningSoonArticles();
});

// VIP Loyalty Tier Dataset
const loyaltyTiersData = [
  {
    badge: "Explorer Level",
    name: "Silver Pass",
    description: "Ideal for first-time travelers booking Angkor Wat sunrise circuits and Tonle Sap lake boat charters.",
    benefits: [
      "Priority Siem Reap desk check-in",
      "5% discount on overland express charters",
      "Complimentary cold towel & bottled water service"
    ],
    status: "Standard Tier"
  },
  {
    badge: "VIP Club Level",
    name: "Gold Member",
    description: "Tailored for frequent regional travelers requiring air ticket reservations and multi-province itineraries.",
    benefits: [
      "Dedicated travel agent hotline",
      "10% discount on private tour transfers",
      "Early priority notifications for Opening Soon packages"
    ],
    status: "Recommended"
  },
  {
    badge: "Elite Travel Charter",
    name: "Platinum Diamond",
    description: "Exclusive access to private helicopter charters, custom mountain treks, and executive cross-border shuttles.",
    benefits: [
      "24/7 personal travel concierge desk",
      "Free airport express transfer vouchers",
      "Guaranteed early reservation slots for new route launches"
    ],
    status: "VIP Exclusive"
  }
];

// Renders Loyalty Tier Cards
function renderLoyaltyTiers() {
  const container = document.getElementById("loyaltyTiersContainer");
  if (!container) return;

  container.innerHTML = loyaltyTiersData
    .map(
      (tier) => `
      <div class="tier-card ${tier.status === "Recommended" ? "active-tier" : ""}">
        <span class="tier-badge">${tier.badge}</span>
        <h4>${tier.name}</h4>
        <p>${tier.description}</p>
        <ul class="tier-benefits-list">
          ${tier.benefits.map((b) => `<li>✓ ${b}</li>`).join("")}
        </ul>
        <button class="btn-primary full-width" onclick="openBookingModal('VIP Membership: ${tier.name}')">
          Join ${tier.name}
        </button>
      </div>
    `
    )
    .join("");
}

// Distance and Travel Time Matrix for Route Estimator
const routeMatrix = {
  "siemreap-angkor": { distance: "8 km", duration: "15 Mins", price: "$15 USD" },
  "siemreap-tonlesap": { distance: "18 km", duration: "30 Mins", price: "$25 USD" },
  "siemreap-kulen": { distance: "55 km", duration: "1.5 Hours", price: "$55 USD" },
  "siemreap-battambang": { distance: "165 km", duration: "3 Hours", price: "$85 USD" },
  "siemreap-phnompenh": { distance: "320 km", duration: "45 Mins (Air) / 5.5 Hours (Road)", price: "$85 - $120 USD" }
};

// Initializes Route Distance & Time Estimator
function initRouteEstimator() {
  const routeSelect = document.getElementById("estimatorRouteSelect");
  const distanceOutput = document.getElementById("estimateDistance");
  const durationOutput = document.getElementById("estimateDuration");
  const priceOutput = document.getElementById("estimatePrice");

  if (!routeSelect || !distanceOutput || !durationOutput || !priceOutput) return;

  function updateEstimate() {
    const selectedKey = routeSelect.value;
    const data = routeMatrix[selectedKey] || { distance: "N/A", duration: "N/A", price: "N/A" };

    distanceOutput.innerText = data.distance;
    durationOutput.innerText = data.duration;
    priceOutput.innerText = data.price;
  }

  routeSelect.addEventListener("change", updateEstimate);
  updateEstimate();
}

// Long-Form Articles for Upcoming Coastal and Island Routes
const coastalOpeningSoonArticles = [
  {
    title: "Koh Rong & Koh Rong Sanloem Marine Paradise Charter",
    region: "Sihanoukville Coastal Gate",
    category: "Tropical Island Transit",
    status: "Opening Soon",
    content:
      "Huokaing Thara Air Travel & Tour is establishing seamless air-to-sea connection packages. Travelers flying into Sihanoukville Coastal Gate will receive instant speed-ferry ticketing and luxury island resort transfers to Koh Rong's white-sand beaches."
  },
  {
    title: "Preah Vihear Clifftop Temple Aerial Excursion",
    region: "Northern Border Ridge",
    category: "UNESCO Archaeological Height",
    status: "Opening Soon",
    content:
      "A forthcoming high-altitude heritage route taking visitors to the cliffside sanctuary of Preah Vihear, towering over the Dângrêk Mountains. This itinerary combines express charter transit with expert historical narration."
  }
];

// Renders coastal opening soon articles
function renderCoastalOpeningSoonArticles() {
  const container = document.getElementById("coastalArticlesContainer");
  if (!container) return;

  container.innerHTML = coastalOpeningSoonArticles
    .map(
      (art) => `
      <article class="coastal-card">
        <div class="coastal-header">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.4rem;">
            <span style="font-size:0.8rem; color:var(--primary-color); font-weight:700;">📍 ${art.region}</span>
            <span class="badge-soon">${art.status}</span>
          </div>
          <h3>${art.title}</h3>
        </div>
        <div class="coastal-body">
          <p>${art.content}</p>
          <div style="margin-top:auto;">
            <button class="btn-primary full-width" onclick="openBookingModal('custom')">
              Pre-Register for Launch Updates
            </button>
          </div>
        </div>
      </article>
    `
    )
    .join("");
}
