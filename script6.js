/**
 * Huokaing Thara Air Travel & Tour
 * Custom Route Builder, Multi-Province Guides & FAQ Drawer Engine
 */

document.addEventListener("DOMContentLoaded", () => {
  renderCustomRouteBuilder();
  renderProvinceGuides();
  renderFAQList();
});

// Destination options for interactive custom itinerary builder
const routeDestinations = [
  { id: "angkor", name: "Angkor Park Circuit", duration: "1-2 Days", price: 45, status: "Active" },
  { id: "tonlesap", name: "Tonle Sap Floating Village", duration: "Half Day", price: 30, status: "Active" },
  { id: "kulen", name: "Phnom Kulen Wilderness", duration: "1 Day", price: 75, status: "Opening Soon" },
  { id: "battambang", name: "Battambang Colonial Trail", duration: "1-2 Days", price: 85, status: "Opening Soon" },
  { id: "cardamom", name: "Cardamom Rainforest Trek", duration: "3 Days", price: 210, status: "Opening Soon" }
];

let selectedRouteIds = ["angkor"];

// Renders the interactive route builder grid
function renderCustomRouteBuilder() {
  const container = document.getElementById("builderSelectorContainer");
  if (!container) return;

  container.innerHTML = routeDestinations
    .map((dest) => {
      const isSelected = selectedRouteIds.includes(dest.id);
      return `
        <div class="select-card ${isSelected ? "selected" : ""}" onclick="toggleRouteSelection('${dest.id}')">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.4rem;">
            <h5>${dest.name}</h5>
            ${dest.status === "Opening Soon" ? `<span class="badge-soon" style="font-size:0.65rem;">Soon</span>` : ""}
          </div>
          <p>Duration: ${dest.duration}</p>
          <p style="color:var(--primary-dark); font-weight:600; margin-top:0.2rem;">Est. $${dest.price} USD</p>
        </div>
      `;
    })
    .join("");

  updateBuilderSummary();
}

// Toggle selection state for custom route builder
function toggleRouteSelection(id) {
  if (selectedRouteIds.includes(id)) {
    if (selectedRouteIds.length > 1) {
      selectedRouteIds = selectedRouteIds.filter((item) => item !== id);
    }
  } else {
    selectedRouteIds.push(id);
  }
  renderCustomRouteBuilder();
}

// Recalculates custom route duration and estimated price
function updateBuilderSummary() {
  const summaryTitle = document.getElementById("builderSelectedCount");
  const summaryPrice = document.getElementById("builderTotalPrice");

  if (!summaryTitle || !summaryPrice) return;

  const selectedItems = routeDestinations.filter((d) => selectedRouteIds.includes(d.id));
  const totalPrice = selectedItems.reduce((acc, curr) => acc + curr.price, 0);

  summaryTitle.innerText = `${selectedItems.length} Destinaton(s) Selected`;
  summaryPrice.innerText = `$${totalPrice} USD / Person`;
}

// Multi-Province upcoming guides dataset
const provinceGuidesData = [
  {
    province: "Mondulkiri Highland Reserve",
    status: "Opening Soon",
    category: "Eco-Trail Expedition",
    overview:
      "Huokaing Thara Air Travel & Tour is establishing overland connectivity to Eastern Cambodia. This upcoming excursion focuses on ethical elephant sanctuaries, rolling pine forest valleys, and Bou Sra Waterfall.",
    highlights: ["Ethical Elephant Valley Project Visits", "Bou Sra Double-Tier Waterfall Trek", "Highland Indigenous Coffee Plantations"]
  },
  {
    province: "Kep & Kampot Coastal Circuit",
    status: "Opening Soon",
    category: "Southern Coast & Heritage",
    overview:
      "A upcoming route combining Kampot's historic riverside French architecture, organic pepper plantation tastings, and Kep's famous seaside crab market charters.",
    highlights: ["Organic Kampot Pepper Estate Tours", "Bokor Mountain Historic Plateau Excursions", "Sunset River Cruises"]
  }
];

// Renders province guide cards
function renderProvinceGuides() {
  const container = document.getElementById("provinceGuidesContainer");
  if (!container) return;

  container.innerHTML = provinceGuidesData
    .map(
      (prov) => `
      <div class="province-card">
        <div class="province-card-body">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.75rem;">
            <span class="badge-category">${prov.category}</span>
            <span class="badge-soon">${prov.status}</span>
          </div>
          <h3>${prov.province}</h3>
          <p>${prov.overview}</p>
          <ul style="list-style:none; margin-bottom:1.5rem; font-size:0.9rem; color:var(--text-muted);">
            ${prov.highlights.map((h) => `<li style="margin-bottom:0.3rem;">✓ ${h}</li>`).join("")}
          </ul>
          <div style="margin-top:auto;">
            <button class="btn-primary full-width" onclick="openBookingModal('custom')">Pre-Register Interest</button>
          </div>
        </div>
      </div>
    `
    )
    .join("");
}

// Travel FAQ Dataset
const faqDataset = [
  {
    q: "How far in advance should I book my Angkor Wat Sunrise tour with Huokaing Thara?",
    a: "We recommend booking at least 24 to 48 hours in advance to ensure preferred vehicle assignments and guide language matching, especially for our 5:00 AM departures."
  },
  {
    q: "Can Huokaing Thara Air Travel & Tour process domestic and international flight tickets?",
    a: "Yes, our travel desk at Sivutha Boulevard in Siem Reap assists with instant air ticket booking across domestic Khmer airlines as well as regional flights."
  },
  {
    q: "How do I pre-register for upcoming expeditions tagged 'Opening Soon'?",
    a: "You can click any 'Pre-Register Interest' button across our platform to send your contact information to our travel desk. You will receive priority notifications before public ticket sales launch."
  }
];

// Renders FAQ Drawer list
function renderFAQList() {
  const container = document.getElementById("faqContainer");
  if (!container) return;

  container.innerHTML = faqDataset
    .map(
      (item, idx) => `
      <div class="faq-item" id="faq-item-${idx}">
        <button class="faq-question" onclick="toggleFAQ(${idx})">
          <span>${item.q}</span>
          <span id="faq-icon-${idx}">+</span>
        </button>
        <div class="faq-answer" id="faq-ans-${idx}">
          <p>${item.a}</p>
        </div>
      </div>
    `
    )
    .join("");
}

// FAQ accordion toggler
function toggleFAQ(index) {
  const ans = document.getElementById(`faq-ans-${index}`);
  const icon = document.getElementById(`faq-icon-${index}`);
  const parent = document.getElementById(`faq-item-${index}`);

  if (!ans) return;

  const isOpen = parent.classList.contains("open");

  document.querySelectorAll(".faq-item").forEach((item) => {
    item.classList.remove("open");
    const a = item.querySelector(".faq-answer");
    if (a) a.style.maxHeight = null;
  });

  if (!isOpen) {
    parent.classList.add("open");
    ans.style.maxHeight = ans.scrollHeight + "px";
    if (icon) icon.innerText = "−";
  } else {
    if (icon) icon.innerText = "+";
  }
}
