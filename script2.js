/**
 * Huokaing Thara Air Travel & Tour
 * Interactive Article, Filter & Spotlight Engine
 */

document.addEventListener("DOMContentLoaded", () => {
  renderFeaturedArticles();
  renderUpcomingDestinations();
  initCategoryFilters();
  initReviewCarousel();
});

// Primary dataset for destination guides and articles
const articlesData = [
  {
    id: 1,
    title: "Sunrise at Angkor Wat: Complete First-Timer Preparation Guide",
    category: "Guides",
    status: "Published",
    summary:
      "Essential insights for navigating pre-dawn temple access, securing temple passes, choosing ideal photographic reflections at the Northern Lotus Pond, and working with local guides.",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Phnom Kulen Mountain Riverbed & Sacred Waterfalls",
    category: "Excursions",
    status: "Opening Soon",
    summary:
      "A upcoming wilderness retreat exploring the thousand lingas carved directly into the riverbed, ancient jungle pagodas, and refreshing natural swimming basins.",
    readTime: "7 min read"
  },
  {
    id: 3,
    title: "Floating Villages of Tonle Sap: Route Comparison & Logistics",
    category: "Culture",
    status: "Published",
    summary:
      "Understanding the seasonal water shifts between Kampong Phluk and Chong Kneas, ethical community visiting tips, and sunset boat charter arrangements.",
    readTime: "6 min read"
  },
  {
    id: 4,
    title: "Battambang Heritage Trail & Night Bat Flight Expedition",
    category: "Excursions",
    status: "Opening Soon",
    summary:
      "An upcoming express tour featuring historic French colonial streetscapes, traditional bamboo train excursions, and twilight wildlife spectacles near Mount Sampeau.",
    readTime: "4 min read"
  }
];

// Renders filtered article list dynamically into the container
function renderFeaturedArticles(filterCategory = "All") {
  const container = document.getElementById("articlesContainer");
  if (!container) return;

  const filtered = filterCategory === "All"
    ? articlesData
    : articlesData.filter(item => item.category === filterCategory);

  container.innerHTML = filtered
    .map(article => `
      <article class="article-card">
        <div class="article-body">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
            <span class="badge-category">${article.category}</span>
            ${article.status === "Opening Soon" ? `<span class="badge-soon">Opening Soon</span>` : ""}
          </div>
          <h3>${article.title}</h3>
          <p>${article.summary}</p>
          <div style="margin-top: auto; display: flex; justify-content: space-between; align-items: center; font-size: 0.85rem; color: var(--text-muted);">
            <span>${article.readTime}</span>
            <button class="btn-primary" style="padding: 0.4rem 1rem; font-size: 0.85rem;" onclick="handleArticleClick('${article.title}')">
              ${article.status === "Opening Soon" ? "Pre-Register" : "Read Article"}
            </button>
          </div>
        </div>
      </article>
    `)
    .join("");
}

// Handles category filter button behavior
function initCategoryFilters() {
  const filterButtons = document.querySelectorAll(".filter-btn");

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      const category = button.getAttribute("data-category");
      renderFeaturedArticles(category);
    });
  });
}

// Injects spotlight content for upcoming tour packages
function renderUpcomingDestinations() {
  const spotlightContainer = document.getElementById("spotlightContainer");
  if (!spotlightContainer) return;

  spotlightContainer.innerHTML = `
    <div class="spotlight-banner">
      <span class="badge-soon" style="margin-bottom: 1rem;">Opening Soon</span>
      <h2>Koh Ker & Beng Mealea Overgrown Ruins Charter</h2>
      <p>
        Huokaing Thara Air Travel & Tour is expanding its expedition network to deep-jungle 10th-century pyramid structures and unrestored stone labyrinths away from main crowds.
      </p>
      <button class="btn-primary" onclick="openBookingModal('custom')">Inquire for Early Access</button>
    </div>
  `;
}

// Customer review engine
function initReviewCarousel() {
  const reviewsContainer = document.getElementById("reviewsContainer");
  if (!reviewsContainer) return;

  const reviews = [
    {
      name: "Marcus & Elena V.",
      origin: "International Travelers",
      rating: "★★★★★",
      comment: "Huokaing Thara Air Travel & Tour arranged our 5:00 AM Angkor Wat sunrise driver perfectly. Smooth vehicles, clear timing, and zero stress."
    },
    {
      name: "Sophea K.",
      origin: "Domestic Business Visitor",
      rating: "★★★★★",
      comment: "Fast flight ticketing service and easy communication at their Siem Reap desk. Highly reliable team."
    }
  ];

  reviewsContainer.innerHTML = reviews
    .map(rev => `
      <div class="review-card">
        <div class="review-rating">${rev.rating}</div>
        <p>"${rev.comment}"</p>
        <div class="review-author">${rev.name}</div>
        <div class="review-location">${rev.origin}</div>
      </div>
    `)
    .join("");
}

// Interaction handler
function handleArticleClick(title) {
  if (typeof openBookingModal === "function") {
    openBookingModal("custom");
  } else {
    alert(`Thank you for your interest in "${title}". Please contact our desk for more information.`);
  }
}
