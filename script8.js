/**
 * Huokaing Thara Air Travel & Tour
 * Insurance Advisory, VIP Charter Portal & Remote Heritage Opening Soon Engine
 */

document.addEventListener("DOMContentLoaded", () => {
  renderInsuranceAdvisories();
  renderVIPCharterDetails();
  renderRemoteHeritageArticles();
});

// Travel Insurance & Medical Protection Dataset
const insuranceAdvisoryData = [
  {
    icon: "🏥",
    title: "Comprehensive Overseas Medical Coverage",
    description:
      "Huokaing Thara Air Travel & Tour coordinates with accredited local and international insurance partners to ensure full emergency medical evacuation and hospitalization coverage for all remote expedition packages."
  },
  {
    icon: "✈️",
    title: "Flight Delay & Cancellation Protection",
    description:
      "Safeguard your multi-province air ticket reservations against unexpected schedule modifications, weather disruptions, or regional travel route adjustments with our desk refund protection options."
  },
  {
    icon: "🎒",
    title: "Baggage & Personal Equipment Protection",
    description:
      "Specialized coverage designed for high-value camera gear, archaeological hiking equipment, and personal belongings during multi-day overland charters across remote provincial parks."
  }
];

// Renders travel insurance advisory cards
function renderInsuranceAdvisories() {
  const container = document.getElementById("insuranceAdvisoryContainer");
  if (!container) return;

  container.innerHTML = insuranceAdvisoryData
    .map(
      (item) => `
      <div class="insurance-card">
        <div class="ins-icon">${item.icon}</div>
        <h4>${item.title}</h4>
        <p>${item.description}</p>
        <button class="read-more-btn" style="margin-top:auto;" onclick="openBookingModal('Insurance Inquiry')">
          Inquire Coverage Options →
        </button>
      </div>
    `
    )
    .join("");
}

// VIP Private Helicopter & SUV Charter Data
const vipCharterSpecs = {
  title: "Bespoke Executive Air & SUV Charter Fleet",
  description:
    "For dignitaries, private groups, and luxury travelers requiring direct point-to-point transit. Huokaing Thara Air Travel & Tour provides private VIP helicopter transfers directly to remote temple platforms and luxury SUV convoys.",
  specs: [
    "Direct aerial access to remote temple zones",
    "Tinted VIP SUV ground convoys with private security options",
    "Dedicated English & French speaking personal travel concierges",
    "On-demand flight routing departing from Siem Reap International Airport"
  ]
};

// Renders VIP Charter Portal block
function renderVIPCharterDetails() {
  const container = document.getElementById("vipCharterContainer");
  if (!container) return;

  container.innerHTML = `
    <div class="charter-card">
      <div class="charter-details">
        <span class="badge-soon" style="margin-bottom:0.75rem;">Opening Soon Service</span>
        <h3>${vipCharterSpecs.title}</h3>
        <p>${vipCharterSpecs.description}</p>
        <ul class="charter-spec-list">
          ${vipCharterSpecs.specs.map((s) => `<li>✦ ${s}</li>`).join("")}
        </ul>
      </div>
      <div class="vip-card" style="align-self:center;">
        <h4>Executive Charter Request</h4>
        <p>Pre-register your custom route requirements with our Siem Reap VIP travel desk.</p>
        <button class="btn-primary full-width" onclick="openBookingModal('Executive VIP Charter')">
          Request Custom VIP Quote
        </button>
      </div>
    </div>
  `;
}

// Remote Archaeological Sites Opening Soon Dataset
const remoteHeritageArticles = [
  {
    title: "Banteay Chhmar Jungle Temple Complex Expedition",
    province: "Banteay Meanchey Province",
    category: "Archaeological Frontier",
    status: "Opening Soon",
    content:
      "Huokaing Thara Air Travel & Tour is introducing an all-inclusive overland expedition to Banteay Chhmar, one of the largest Jayavarman VII temple complexes. Still largely enveloped by jungle foliage and ancient moat networks, this site offers unparalleled solitude for photography enthusiasts."
  },
  {
    title: "Koh Ker Pyramid & Prasat Thom Deep-History Route",
    province: "Preah Vihear Boundary",
    category: "UNESCO World Heritage",
    status: "Opening Soon",
    content:
      "Journey to the 10th-century capital of the Khmer Empire. Highlights include climbing the 7-tiered 36-meter tall Prasat Prang pyramid structure and discovering remote forest sanctuaries surrounded by ancient reservoir systems."
  }
];

// Renders long-form remote heritage articles
function renderRemoteHeritageArticles() {
  const container = document.getElementById("remoteHeritageContainer");
  if (!container) return;

  container.innerHTML = remoteHeritageArticles
    .map(
      (art) => `
      <article class="remote-card">
        <div class="remote-header">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.4rem;">
            <span style="font-size:0.8rem; color:var(--primary-color); font-weight:700;">📍 ${art.province}</span>
            <span class="badge-soon">${art.status}</span>
          </div>
          <h3>${art.title}</h3>
        </div>
        <div class="remote-body">
          <p>${art.content}</p>
          <div style="margin-top:auto;">
            <button class="btn-primary full-width" onclick="openBookingModal('custom')">
              Pre-Register for Launch Notification
            </button>
          </div>
        </div>
      </article>
    `
    )
    .join("");
}
