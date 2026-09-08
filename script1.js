/**
 * Huokaing Thara Air Travel & Tour
 * Interactive Feature Script
 */

document.addEventListener("DOMContentLoaded", () => {
  initInquiryForm();
  initTabbedContent();
  initModalListeners();
  injectFutureExpansions();
});

// Handle form submissions with inline notifications
function initInquiryForm() {
  const inquiryForm = document.getElementById("inquiryForm");

  if (inquiryForm) {
    inquiryForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const tourType = document.getElementById("tourType").value;

      if (!name || !tourType) {
        showNotification("Please complete all required fields.", "error");
        return;
      }

      showNotification(
        `Thank you, ${name}! Your booking query for Huokaing Thara Air Travel & Tour has been recorded. Our Siem Reap desk will confirm details with you shortly.`,
        "success"
      );

      inquiryForm.reset();
    });
  }
}

// Interactive Tab Switcher for Tour Categories
function initTabbedContent() {
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabPanes = document.querySelectorAll(".tab-pane");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetTab = button.getAttribute("data-tab");

      tabButtons.forEach((btn) => btn.classList.remove("active"));
      tabPanes.forEach((pane) => pane.classList.remove("active"));

      button.classList.add("active");
      const activePane = document.getElementById(targetTab);
      if (activePane) {
        activePane.classList.add("active");
      }
    });
  });
}

// Modal handling logic
function openBookingModal(tourName = "") {
  const modal = document.getElementById("bookingModal");
  const tourSelect = document.getElementById("tourType");

  if (tourSelect && tourName) {
    tourSelect.value = tourName;
  }

  if (modal) {
    modal.style.display = "flex";
  }
}

function closeBookingModal() {
  const modal = document.getElementById("bookingModal");
  if (modal) {
    modal.style.display = "none";
  }
}

function initModalListeners() {
  window.addEventListener("click", (e) => {
    const modal = document.getElementById("bookingModal");
    if (e.target === modal) {
      closeBookingModal();
    }
  });
}

// Dynamic injection of upcoming destination articles
function injectFutureExpansions() {
  const expansionContainer = document.getElementById("futureExpansions");

  if (!expansionContainer) return;

  const upcomingDestinations = [
    {
      title: "Phnom Kulen Waterfall & Sacred Ridge Excursion",
      status: "Opening Soon",
      description:
        "An exclusive full-day wilderness retreat combining sacred mountain riverbeds, thousand lingas carvings, and secluded jungle waterfall picnicking.",
      category: "Ecotourism"
    },
    {
      title: "Battambang Heritage Rail & Cave Expedition",
      status: "Opening Soon",
      description:
        "Experience historic French colonial architecture, authentic bamboo train excursions, and twilight bat flight spectacles across Mount Sampeau.",
      category: "Cultural Express"
    },
    {
      title: "Koh Ker & Beng Mealea Overgrown Ruins Charter",
      status: "Opening Soon",
      description:
        "A deep-jungle expedition targeting remote 10th-century pyramid temples and unrestored stone labyrinths away from main crowds.",
      category: "Archeology"
    }
  ];

  expansionContainer.innerHTML = upcomingDestinations
    .map(
      (item) => `
    <div class="article-card">
      <div class="article-body">
        <span class="badge-soon">${item.status}</span>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <button class="btn-primary" onclick="openBookingModal('custom')">Pre-Register Interest</button>
      </div>
    </div>
  `
    )
    .join("");
}

// Toast notification helper
function showNotification(message, type = "success") {
  const alertBox = document.createElement("div");
  alertBox.className = `toast-notification toast-${type}`;
  alertBox.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: ${type === "success" ? "#00210c" : "#8b0000"};
    color: #ffffff;
    padding: 1rem 1.5rem;
    border-radius: 8px;
    border-left: 4px solid #00eb5b;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    z-index: 3000;
    font-size: 0.95rem;
    max-width: 380px;
  `;
  alertBox.innerText = message;

  document.body.appendChild(alertBox);

  setTimeout(() => {
    alertBox.remove();
  }, 4500);
}
