document.addEventListener("DOMContentLoaded", () => {
  const inquiryForm = document.getElementById("inquiryForm");

  if (inquiryForm) {
    inquiryForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("name").value;
      const tourType = document.getElementById("tourType").value;

      alert(
        `Thank you, ${name}! Your inquiry for "Huokaing Thara Air Travel & Tour" regarding the ${tourType} option has been received. Our desk will contact you shortly.`
      );

      inquiryForm.reset();
    });
  }
});

function openBookingModal() {
  const contactSection = document.getElementById("contact");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
}
