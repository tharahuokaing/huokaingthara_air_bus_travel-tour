/**
 * Huokaing Thara Air Travel & Tour
 * Cultural Etiquette Engine, Activity Filter & Heritage Opening Soon Articles
 */

document.addEventListener("DOMContentLoaded", () => {
  renderEtiquetteRules();
  renderFilteredActivities("all");
  renderHeritageOpeningSoonArticles();
});

// Cultural Etiquette Guidelines Dataset
const etiquetteRulesData = [
  {
    rule: "Rule 01",
    title: "Sacred Dress Code Requirements",
    description:
      "When visiting Angkor Wat, Bayon, or active Buddhist monasteries, shoulders and knees must be fully covered. Light linen scarves and breathable trousers are recommended for comfort in the tropical heat."
  },
  {
    rule: "Rule 02",
    title: "Respecting Ancient Stone Structures",
    description:
      "Avoid touching ancient bas-relief carvings or sitting on unrestored sandstone blocks. Staying on designated wooden walkways preserves delicate archaeological surfaces for future generations."
  },
  {
    rule: "Rule 03",
    title: "Monk & Local Community Interaction",
    description:
      "Always ask permission before photographing monks or villagers. When offering alms or items, present them gently using both hands as a traditional sign of respect."
  }
];

// Renders cultural etiquette cards
function renderEtiquetteRules() {
  const container = document.getElementById("etiquetteContainer");
  if (!container) return;

  container.innerHTML = etiquetteRulesData
    .map(
      (item) => `
      <div class="etiquette-card">
        <span class="rule-number">${item.rule}</span>
        <h4>${item.title}</h4>
        <p>${item.description}</p>
      </div>
    `
    )
    .join("");
}

// Activity Filter Dataset
const tourActivitiesData = [
  {
    title: "Angkor Grand Circuit Sunrise",
    category: "culture",
    difficulty: "Easy",
    status: "Active",
    description: "Classic temples tour with minimal physical exertion, ideal for families and photography enthusiasts."
  },
  {
    title: "Tonle Sap Stilt Village Boat Cruise",
    category: "water",
    difficulty: "Easy",
    status: "Active",
    description: "Scenic boat navigation through floating communities with sunset viewing over the Great Lake."
  },
  {
    title: "Phnom Kulen Waterfall & Jungle Trek",
    category: "trekking",
    difficulty: "Moderate",
    status: "Opening Soon",
    description: "Full-day hiking excursion along sacred mountain riverbeds, sandstone carved lingas, and natural waterfall pools."
  },
  {
    title: "Cardamom Canopy Wildlife Expedition",
    category: "trekking",
    difficulty: "Challenging",
    status: "Opening Soon",
    description: "Multi-day deep wilderness tracking and kayaking along protected rainforest corridors."
  }
];

// Renders activity cards filtered by category
function renderFilteredActivities(category) {
  const container = document.getElementById("filteredActivitiesContainer");
  if (!container) return;

  const filtered = category === "all" 
    ? tourActivitiesData 
    : tourActivitiesData.filter((act) => act.category === category);

  container.innerHTML = filtered
    .map(
      (act) => `
      <div class="activity-card">
        <div class="activity-card-header">
          <span style="font-size:0.8rem; color:var(--primary-color); font-weight:700; text-transform:uppercase;">
            ${act.difficulty} Effort
          </span>
          ${act.status === "Opening Soon" ? `<span class="badge-soon">${act.status}</span>` : ""}
        </div>
        <h4>${act.title}</h4>
        <p>${act.description}</p>
        <div style="margin-top:auto;">
          <button class="btn-primary full-width" onclick="openBookingModal('${act.title}')">
            ${act.status === "Opening Soon" ? "Pre-Register Interest" : "Book Activity"}
          </button>
        </div>
      </div>
    `
    )
    .join("");

  // Update filter buttons active state
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("onclick").includes(`'${category}'`));
  });
}

// Long-Form Articles for Upcoming Heritage Routes
const heritageOpeningSoonArticles = [
  {
    title: "Banteay Chhmar Wilderness Temple Trail",
    province: "Banteay Meanchey Province",
    category: "Archaeological Discovery",
    status: "Opening Soon",
    content:
      "Huokaing Thara Air Travel & Tour is launching an exclusive route to Banteay Chhmar, one of Cambodia's largest and least-visited temple complexes. Nestled near the northwestern border, these sprawling Jayavarman VII ruins feature rare multi-faced towers enveloped by atmospheric jungle growth."
  },
  {
    title: "Preah Khan of Kampong Svay Remote Capital Circuit",
    province: "Preah Vihear Boundary",
    category: "Ancient Empire Route",
    status: "Opening Soon",
    content:
      "An upcoming overland safari leading to the massive archaeological enclosure of Preah Khan Kompong Svay. Designed for intrepid history enthusiasts, this route covers ancient industrial iron-smelting sites and massive sandstone enclosures situated far off the standard tourist trail."
  }
];

// Renders heritage opening soon articles
function renderHeritageOpeningSoonArticles() {
  const container = document.getElementById("heritageOpeningSoonContainer");
  if (!container) return;

  container.innerHTML = heritageOpeningSoonArticles
    .map(
      (art) => `
      <article class="heritage-article-card">
        <div class="heritage-article-header">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.4rem;">
            <span style="font-size:0.8rem; color:var(--primary-color); font-weight:700;">📍 ${art.province}</span>
            <span class="badge-soon">${art.status}</span>
          </div>
          <h3>${art.title}</h3>
        </div>
        <div class="heritage-article-body">
          <p>${art.content}</p>
          <div style="margin-top:auto;">
            <button class="btn-primary full-width" onclick="openBookingModal('custom')">
              Pre-Register for Early Priority Access
            </button>
          </div>
        </div>
      </article>
    `
    )
    .join("");
}
