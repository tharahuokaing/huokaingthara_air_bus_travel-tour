/**
 * Huokaing Thara Air Travel & Tour
 * Live Availability Checker, Destination Guides & Deep Article Reader
 */

document.addEventListener("DOMContentLoaded", () => {
  renderDestinationGuides();
  renderLiveDeskAvailability();
  initArticleReaderModal();
});

// Destination Guides Dataset featuring current and upcoming locations
const destinationGuidesData = [
  {
    title: "Angkor Archaeological Park & Sunrise Circuit",
    location: "Siem Reap Central Zone",
    status: "Active Daily",
    description:
      "Comprehensive early-bird excursions covering Angkor Wat, the carved smiling stone faces of Bayon, and root-enveloped Ta Prohm.",
    highlights: ["5:00 AM Sunrise Pickups", "Certified Khmer Guides", "Air-Conditioned Transfers"]
  },
  {
    title: "Preah Vihear Cliffside Temple Sanctuary",
    location: "Dangrek Mountain Escarpment",
    status: "Opening Soon",
    description:
      "An upcoming high-altitude mountain expedition visiting the UNESCO-listed 11th-century Khmer empire sanctuary perched 525 meters above the plains.",
    highlights: ["Scenic Mountain Ridge Views", "Historical Empire Border Posts", "Private Vehicle Charters"]
  },
  {
    title: "Kirirom Pine Forest & Highland Plateau Retreat",
    location: "Kampong Speu Province",
    status: "Opening Soon",
    description:
      "A forthcoming eco-adventure combining highland pine forest trails, mountain stream picnicking, and secluded waterfall trekking away from tropical heat.",
    highlights: ["Cool Climate Trails", "Glamping Opportunities", "Eco-Friendly Nature Hikes"]
  }
];

// Injects destination guide cards dynamically
function renderDestinationGuides() {
  const container = document.getElementById("destinationGuidesContainer");
  if (!container) return;

  container.innerHTML = destinationGuidesData
    .map(
      (item) => `
      <div class="destination-card">
        <div class="destination-header">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem;">
            <span class="location-tag">📍 ${item.location}</span>
            ${item.status === "Opening Soon" ? `<span class="badge-soon">${item.status}</span>` : ""}
          </div>
          <h3>${item.title}</h3>
        </div>
        <div class="destination-body">
          <p>${item.description}</p>
          <ul style="list-style:none; margin-bottom:1.25rem; font-size:0.85rem; color:var(--text-muted);">
            ${item.highlights.map((h) => `<li style="margin-bottom:0.3rem;">• ${h}</li>`).join("")}
          </ul>
          <div style="margin-top:auto;">
            <button class="btn-primary full-width" onclick="${
              item.status === "Opening Soon"
                ? "openExpeditionArticle('" + item.title + "')"
                : "openBookingModal('" + item.title + "')"
            }">
              ${item.status === "Opening Soon" ? "Read Expedition Briefing" : "Book Excursion"}
            </button>
          </div>
        </div>
      </div>
    `
    )
    .join("");
}

// Simulated real-time desk availability slots for daily departures
function renderLiveDeskAvailability() {
  const trackerContainer = document.getElementById("deskAvailabilityContainer");
  if (!trackerContainer) return;

  const slots = [
    { tour: "Angkor Sunrise Express", departure: "5:00 AM", status: "3 Seats Left" },
    { tour: "Tonle Sap Sunset Cruise", departure: "2:30 PM", status: "Available" },
    { tour: "Countryside ATV Safari", departure: "4:00 PM", status: "Available" },
    { tour: "Phnom Kulen Wilderness (Opening Soon)", departure: "Pre-Register", status: "Waitlist Open" }
  ];

  trackerContainer.innerHTML = `
    <div class="availability-tracker">
      <div class="tracker-header">
        <h3>Siem Reap Desk Departure Tracker</h3>
        <span class="status-indicator">
          <span class="pulse-dot"></span> Desk Open (5:00 AM – 11:30 PM)
        </span>
      </div>
      <div class="seats-grid">
        ${slots
          .map(
            (slot) => `
          <div class="seat-slot">
            <strong>${slot.tour}</strong>
            <span>Departure: ${slot.departure}</span>
            <span style="color:var(--primary-dark); font-weight:600; margin-top:0.25rem;">${slot.status}</span>
          </div>
        `
          )
          .join("")}
      </div>
    </div>
  `;
}

// Deep Article Reader Modal trigger for Opening Soon tours
function openExpeditionArticle(tourTitle) {
  const modal = document.getElementById("articleReaderModal");
  const modalBody = document.getElementById("articleReaderContent");

  if (!modal || !modalBody) return;

  modalBody.innerHTML = `
    <div class="article-modal-body">
      <span class="badge-soon" style="margin-bottom:0.75rem;">Opening Soon</span>
      <h2>${tourTitle} Expedition Overview</h2>
      <p>
        <strong>Huokaing Thara Air Travel & Tour</strong> is actively finalizing logistical routes, private transport charters, and expert regional guide alignments for our upcoming launch of the <em>${tourTitle}</em>.
      </p>
      <p>
        Designed to provide an exclusive, crowd-free alternative to standard tourist itineraries, this expedition features:
      </p>
      <ul>
        <li>Direct private transport from our Sivutha Boulevard desk in Siem Reap.</li>
        <li>Customized itineraries curated by licensed local Khmer heritage experts.</li>
        <li>Full flexibility for individual travelers, couples, and private corporate groups.</li>
      </ul>
      <p>
        Pre-registering your interest guarantees early notification as soon as official booking slots open.
      </p>
      <button class="btn-primary" style="margin-top:1rem;" onclick="closeArticleReaderModal(); openBookingModal('custom');">
        Pre-Register Your Interest
      </button>
    </div>
  `;

  modal.style.display = "flex";
}

function closeArticleReaderModal() {
  const modal = document.getElementById("articleReaderModal");
  if (modal) {
    modal.style.display = "none";
  }
}

function initArticleReaderModal() {
  window.addEventListener("click", (e) => {
    const modal = document.getElementById("articleReaderModal");
    if (e.target === modal) {
      closeArticleReaderModal();
    }
  });
}
