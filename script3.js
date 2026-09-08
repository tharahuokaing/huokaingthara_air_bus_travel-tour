/**
 * Huokaing Thara Air Travel & Tour
 * Cost Estimator, Detailed Accordion Articles & Expansion Planner
 */

document.addEventListener("DOMContentLoaded", () => {
  initCostEstimator();
  renderUpcomingArticlesAccordion();
  initAccordionToggle();
});

// Interactive Tour Cost Calculator
function initCostEstimator() {
  const calcForm = document.getElementById("tourCalculator");
  if (!calcForm) return;

  const guestsInput = document.getElementById("calcGuests");
  const tourTypeSelect = document.getElementById("calcTourType");
  const transportSelect = document.getElementById("calcTransport");
  const totalDisplay = document.getElementById("calcTotalDisplay");

  const basePrices = {
    angkor: 45,      // Per person base rate
    atv: 60,         // Per person base rate
    kulen: 75,        // Opening Soon package rate estimate
    battambang: 85   // Opening Soon package rate estimate
  };

  const transportMultiplier = {
    standard: 1.0,
    vip_van: 1.25,
    private_car: 1.15
  };

  function calculateCost() {
    const guests = parseInt(guestsInput.value) || 1;
    const tourKey = tourTypeSelect.value || "angkor";
    const transportKey = transportSelect.value || "standard";

    const basePrice = basePrices[tourKey] || 45;
    const multiplier = transportMultiplier[transportKey] || 1.0;

    const total = Math.round(basePrice * guests * multiplier);
    if (totalDisplay) {
      totalDisplay.innerText = `$${total} USD`;
    }
  }

  // Bind calculation triggers
  [guestsInput, tourTypeSelect, transportSelect].forEach((element) => {
    if (element) {
      element.addEventListener("change", calculateCost);
      element.addEventListener("input", calculateCost);
    }
  });

  calculateCost();
}

// Opening Soon expanded article dataset
const upcomingExpansionsArticles = [
  {
    title: "Phnom Kulen Sacred Waterfalls & River of a Thousand Lingas",
    badge: "Opening Soon",
    category: "Mountain Wilderness Retreat",
    content: `
      <p>Huokaing Thara Air Travel & Tour is thrilled to announce our upcoming dedicated mountain retreat to Phnom Kulen National Park. Located northeast of the main Angkor archaeological zone, this sacred plateau offers visitors an unparalleled mix of natural beauty and deep historical significance.</p>
      <br/>
      <p>Guests will experience carved sandstone riverbeds dating back centuries, serene natural swimming basins beneath cascading waterfalls, and visits to active hilltop monasteries featuring massive reclining Buddha statues carved directly into natural boulders.</p>
    `
  },
  {
    title: "Battambang Heritage Trail & Twilight Bat Cave Expedition",
    badge: "Opening Soon",
    category: "Colonial Architecture & Wildlife",
    content: `
      <p>Expanding our reach westward, this upcoming itinerary connects travelers from Siem Reap straight into the heart of Battambang's art deco colonial quarters and scenic rural riverbanks.</p>
      <br/>
      <p>Highlights include private rides aboard the historic bamboo railway, artisan workshop visits, and an unforgettable evening viewing Millions of bats emerging from the caves of Mount Sampeau at dusk.</p>
    `
  },
  {
    title: "Koh Ker Pyramid & Jungle-Clad Beng Mealea Ruins",
    badge: "Opening Soon",
    category: "Deep Jungle Archaeology",
    content: `
      <p>Designed for travelers seeking peaceful exploration away from high-density tourist routes, this upcoming charter focuses on the remote 10th-century capital of Koh Ker and its magnificent 7-tiered step pyramid, Prasat Thom.</p>
      <br/>
      <p>The journey concludes with a trek through Beng Mealea—an unrestored temple enveloped by massive tree roots and overgrown jungle flora.</p>
    `
  }
];

// Renders expandable article accordion
function renderUpcomingArticlesAccordion() {
  const container = document.getElementById("upcomingAccordionContainer");
  if (!container) return;

  container.innerHTML = upcomingExpansionsArticles
    .map(
      (article) => `
      <div class="accordion-item">
        <button class="accordion-header">
          <span>
            <span class="badge-soon" style="margin-right: 0.5rem;">${article.badge}</span>
            ${article.title}
          </span>
          <span class="accordion-icon">+</span>
        </button>
        <div class="accordion-content">
          <div style="padding-top: 1rem;">
            <p><strong>Category:</strong> ${article.category}</p>
            <br/>
            ${article.content}
            <br/>
            <button class="btn-primary" style="margin-top: 1rem;" onclick="openBookingModal('custom')">Pre-Register Interest</button>
          </div>
        </div>
      </div>
    `
    )
    .join("");
}

// Collapsible accordion drawer handler
function initAccordionToggle() {
  document.addEventListener("click", (e) => {
    const header = e.target.closest(".accordion-header");
    if (!header) return;

    const item = header.parentElement;
    const content = item.querySelector(".accordion-content");
    const isOpen = item.classList.contains("open");

    // Close all open items
    document.querySelectorAll(".accordion-item").forEach((accItem) => {
      accItem.classList.remove("open");
      const accContent = accItem.querySelector(".accordion-content");
      if (accContent) accContent.style.maxHeight = null;
    });

    // Toggle clicked item
    if (!isOpen) {
      item.classList.add("open");
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
