/**
 * Huokaing Thara Air Travel & Tour
 * VIP Waitlist, Expeditions Spotlight & Knowledge Base Article Engine
 */

document.addEventListener("DOMContentLoaded", () => {
  renderExpeditionSpotlight();
  renderKnowledgeBaseArticles();
  initVIPWaitlistForm();
});

// Deep-dive dataset for upcoming expeditions
const upcomingExpeditionsData = [
  {
    id: "cardamom",
    title: "Cardamom Mountain Rainforest & Eco-Lodge Charter",
    badge: "Opening Soon",
    region: "Koh Kong / Pursat Boundary",
    duration: "3 Days / 2 Nights",
    transport: "Private 4x4 Off-Road Charter",
    description:
      "Huokaing Thara Air Travel & Tour is expanding into Southeast Asia's largest remaining rainforest wilderness. This upcoming eco-charter guides travelers through protected wildlife corridors, remote river kayaking, and sustainable jungle lodge stays situated deep in the Cardamom range.",
    highlights: [
      "Guided wildlife tracking with forest rangers",
      "Kayaking along pristine coastal mangrove tributaries",
      "All-inclusive eco-lodge accommodations & meals"
    ]
  },
  {
    id: "ratanakiri",
    title: "Ratanakiri Crater Lake & Highland Tribal Trail",
    badge: "Opening Soon",
    region: "Northeastern Highlands",
    duration: "4 Days / 3 Nights",
    transport: "Express Flight + Highland VIP Charter",
    description:
      "Venture to the volcanic highlands of Banlung. Highlights include swimming in the crystal-clear turquoise waters of the Yeak Laom volcanic crater lake, trekking through primary canopy forests, and visiting traditional indigenous village artisans.",
    highlights: [
      "Volcanic crater lake swimming & nature walks",
      "Highland waterfalls & elephant sanctuaries",
      "Direct air ticketing & ground transfer integration"
    ]
  }
];

// Injects spotlight cards for future expedition packages
function renderExpeditionSpotlight() {
  const container = document.getElementById("expeditionSpotlightContainer");
  if (!container) return;

  container.innerHTML = upcomingExpeditionsData
    .map(
      (exp) => `
      <div class="featured-expedition-card">
        <div class="expedition-details">
          <span class="badge-soon" style="margin-bottom: 0.75rem;">${exp.badge}</span>
          <h3>${exp.title}</h3>
          <div class="expedition-meta">
            <span>📍 ${exp.region}</span>
            <span>⏱️ ${exp.duration}</span>
            <span>🚘 ${exp.transport}</span>
          </div>
          <p>${exp.description}</p>
          <ul style="list-style: none; margin-bottom: 1.5rem; color: #d0e6d6; font-size: 0.95rem;">
            ${exp.highlights.map((h) => `<li style="margin-bottom: 0.4rem;">• ${h}</li>`).join("")}
          </ul>
        </div>
        <div class="vip-card">
          <h4>Priority Notification</h4>
          <p>Join the Huokaing Thara VIP registry to receive early access tickets before public release.</p>
          <button class="btn-primary full-width" onclick="openWaitlistModal('${exp.title}')">
            Join Launch Waitlist
          </button>
        </div>
      </div>
    `
    )
    .join("");
}

// Articles knowledge base dataset
const kbArticlesData = [
  {
    id: "kb-1",
    title: "Navigating Angkor Pass Options for Multi-Day Travelers",
    category: "Travel Advisory",
    status: "Published Guide",
    snippet: "Understanding 1-Day, 3-Day, and 7-Day Angkor Enterprise ticket validity, digital pass options, and temple entrance checkpoints.",
    fullText:
      "When planning your visit through Huokaing Thara Air Travel & Tour, selecting the right pass duration is critical. The 3-day pass remains our most recommended option as it does not require consecutive daily use, allowing rest days between intensive archaeological treks. Digital passes can now be generated at our Siem Reap desk upon arrival."
  },
  {
    id: "kb-2",
    title: "Phnom Kulen Mountain: What to Pack for the Wilderness Excursion",
    category: "Expedition Prep",
    status: "Opening Soon",
    snippet: "Recommended attire, footwear, hydration gear, and cultural etiquette for visiting sacred mountain riverbeds and waterfalls.",
    fullText:
      "As we prepare for the official launch of our Phnom Kulen Wilderness Expedition, travelers are advised to bring modest swimwear for the waterfall basins, sturdy trail shoes for slippery sandstone riverbeds, and light shoulder covers for active hilltop monasteries."
  },
  {
    id: "kb-3",
    title: "Cross-Border Overland Logistics: Siem Reap to Bangkok & Ho Chi Minh",
    category: "Transit Logistics",
    status: "Published Guide",
    snippet: "A breakdown of express VIP bus charter options, border crossing procedures at Poipet, and international air connection ticketing.",
    fullText:
      "Huokaing Thara Air Travel & Tour provides daily assistance for overland cross-border travelers. Our desk coordinates fast-track border transit vouchers, private van charters to the border, and connecting flight ticketing directly out of Siem Reap International Airport."
  }
];

// Render Knowledge Base cards
function renderKnowledgeBaseArticles() {
  const container = document.getElementById("kbArticlesContainer");
  if (!container) return;

  container.innerHTML = kbArticlesData
    .map(
      (article) => `
      <div class="kb-card">
        <div class="kb-card-header">
          <span class="badge-category">${article.category}</span>
          ${article.status === "Opening Soon" ? `<span class="badge-soon">${article.status}</span>` : ""}
        </div>
        <h4>${article.title}</h4>
        <p>${article.snippet}</p>
        <button class="read-more-btn" onclick="toggleKBPanel('${article.id}')">
          Read Full Article <span id="icon-${article.id}">→</span>
        </button>
        <div id="panel-${article.id}" class="kb-expanded-panel">
          <p>${article.fullText}</p>
          <button class="btn-primary" style="margin-top: 1rem; padding: 0.4rem 1rem; font-size: 0.85rem;" onclick="openBookingModal('custom')">
            Contact Travel Desk
          </button>
        </div>
      </div>
    `
    )
    .join("");
}

// Collapsible article panel trigger
function toggleKBPanel(articleId) {
  const panel = document.getElementById(`panel-${articleId}`);
  const icon = document.getElementById(`icon-${articleId}`);

  if (!panel) return;

  const isActive = panel.classList.contains("active");

  // Close all other open panels
  document.querySelectorAll(".kb-expanded-panel").forEach((p) => p.classList.remove("active"));
  document.querySelectorAll(".read-more-btn span").forEach((s) => (s.innerText = "→"));

  if (!isActive) {
    panel.classList.add("active");
    if (icon) icon.innerText = "↓";
  }
}

// VIP Waitlist Modal Handler
function openWaitlistModal(expeditionTitle) {
  if (typeof openBookingModal === "function") {
    openBookingModal(`Waitlist: ${expeditionTitle}`);
  } else {
    alert(`Thank you for registering interest in ${expeditionTitle}. Our Siem Reap desk will note your request.`);
  }
}

function initVIPWaitlistForm() {
  const waitlistForm = document.getElementById("vipWaitlistForm");
  if (waitlistForm) {
    waitlistForm.addEventListener("submit", (e) => {
      e.preventDefault();
      if (typeof showNotification === "function") {
        showNotification("You have been added to the Huokaing Thara VIP Priority Launch Registry!", "success");
      } else {
        alert("Pre-registration successful!");
      }
      waitlistForm.reset();
    });
  }
}
