/* Dog Paw interactive features */
document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".site-nav");
  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const expanded = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!expanded));
      nav.classList.toggle("open", !expanded);
      menuButton.textContent = expanded ? "Menu" : "Close";
    });
  }

  function setupSearch(inputId, listId, countId, emptyId, noun) {
    const input = document.getElementById(inputId);
    const list = document.getElementById(listId);
    if (!input || !list) return;
    const cards = Array.from(list.querySelectorAll(".searchable"));
    const count = document.getElementById(countId);
    const empty = document.getElementById(emptyId);
    const filter = () => {
      const term = input.value.trim().toLowerCase();
      let visible = 0;
      cards.forEach(card => {
        const haystack = (card.dataset.search || "") + " " + card.textContent;
        const match = haystack.toLowerCase().includes(term);
        card.hidden = !match;
        if (match) visible++;
      });
      if (count) count.textContent = term ? `Showing ${visible} of ${cards.length} ${noun}` : `Showing all ${noun}`;
      if (empty) empty.hidden = visible !== 0;
    };
    input.addEventListener("input", filter);
    filter();
  }
  setupSearch("service-search", "service-list", "service-count", "service-empty", "services");
  setupSearch("care-search", "care-list", "care-count", "care-empty", "topics");

  function showError(form, messageId, message) {
    const status = document.getElementById(messageId);
    if (status) {
      status.textContent = message;
      status.className = "form-message error";
    }
  }
  function clearError(messageId) {
    const status = document.getElementById(messageId);
    if (status) { status.textContent = ""; status.className = "form-message"; }
  }
  function validateForm(form, messageId) {
    clearError(messageId);
    if (!form.checkValidity()) {
      form.reportValidity();
      showError(form, messageId, "Please check the highlighted fields and complete all required information.");
      return false;
    }
    return true;
  }

  const enquiryForm = document.getElementById("enquiry-form");
  if (enquiryForm) {
    enquiryForm.addEventListener("submit", event => {
      event.preventDefault();
      if (!validateForm(enquiryForm, "enquiry-message")) return;
      const data = new FormData(enquiryForm);
      const result = document.getElementById("enquiry-result");
      const status = document.getElementById("enquiry-message");
      const type = String(data.get("type") || "");
      let guidance = "The Dog Paw team would need to confirm the next steps and current availability.";
      if (type === "Assistance for my dog") guidance = "Please keep your contact details available. Any assistance depends on current resources and service-area coverage.";
      if (type === "Volunteering") guidance = "Thank you for offering your time. Ask the organisation about current volunteer opportunities.";
      if (type === "Sponsorship or donation") guidance = "Thank you for considering support. Confirm current needs and official donation arrangements before contributing.";
      result.innerHTML = "";
      const heading = document.createElement("h3");
      heading.textContent = "Enquiry summary";
      const summary = document.createElement("p");
      summary.textContent = `Thank you, ${data.get("name")}. Your enquiry type is: ${type}. Area: ${data.get("area")}. ${guidance}`;
      const details = document.createElement("p");
      details.textContent = "Your details have only been processed in this browser demo; they have not been sent or saved.";
      result.append(heading, summary, details);
      result.hidden = false;
      status.textContent = "Your information passed the form checks.";
      status.className = "form-message success";
    });
  }

  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", event => {
      event.preventDefault();
      if (!validateForm(contactForm, "contact-status")) return;
      const data = new FormData(contactForm);
      // Replace this placeholder with Dog Paw's verified official email address before publishing.
      const recipient = "REPLACE-WITH-OFFICIAL-DOG-PAW-EMAIL@example.com";
      const subject = encodeURIComponent(`Dog Paw website: ${data.get("type")}`);
      const body = encodeURIComponent(
        `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nMessage type: ${data.get("type")}\n\nMessage:\n${data.get("message")}`
      );
      const status = document.getElementById("contact-status");
      if (recipient.includes("REPLACE-WITH")) {
        status.textContent = "The form is valid, but the recipient email address must be configured in js/script.js before the email link can be used.";
        status.className = "form-message error";
        return;
      }
      status.textContent = "Opening your email application. Please review and send the message there.";
      status.className = "form-message success";
      window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    });
  }
});