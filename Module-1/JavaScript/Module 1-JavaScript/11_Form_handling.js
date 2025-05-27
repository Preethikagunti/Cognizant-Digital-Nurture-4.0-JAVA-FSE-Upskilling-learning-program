const form = document.getElementById("registrationForm");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const eventError = document.getElementById("eventError");
const resultMessage = document.getElementById("resultMessage");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form from submitting normally

  // Clear previous errors and messages
  nameError.textContent = "";
  emailError.textContent = "";
  eventError.textContent = "";
  resultMessage.textContent = "";
  resultMessage.className = "";

  // Get form input values
  const { name, email, event: selectedEvent } = form.elements;

  let valid = true;

  // Simple validation
  if (!name.value.trim()) {
    nameError.textContent = "Name is required.";
    valid = false;
  }

  if (!email.value.trim()) {
    emailError.textContent = "Email is required.";
    valid = false;
  } else if (!validateEmail(email.value.trim())) {
    emailError.textContent = "Enter a valid email address.";
    valid = false;
  }

  if (!selectedEvent.value) {
    eventError.textContent = "Please select an event.";
    valid = false;
  }

  if (valid) {
    // Simulate successful registration
    resultMessage.textContent = `Thank you, ${name.value.trim()}! You are registered for ${selectedEvent.value}.`;
    resultMessage.className = "success";
    form.reset();
  }
});

// Email validation helper
function validateEmail(email) {
  // Simple regex for basic validation
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
