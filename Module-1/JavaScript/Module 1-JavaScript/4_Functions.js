// ----------------------------
// Closure to track total registrations by category
// ----------------------------
function createCategoryTracker() {
  const registrationCount = {};

  return function register(category) {
    if (!registrationCount[category]) {
      registrationCount[category] = 0;
    }
    registrationCount[category]++;
    console.log(`Total registrations for ${category}: ${registrationCount[category]}`);
  };
}

const trackCategoryRegistration = createCategoryTracker();

// ----------------------------
// Array to store all events
// ----------------------------
const events = [];

// ----------------------------
// Function to add a new event
// ----------------------------
function addEvent(name, date, seats, category) {
  events.push({ name, date, seats, category });
}

// ----------------------------
// Function to register a user
// ----------------------------
function registerUser(eventIndex) {
  const event = events[eventIndex];

  if (event.seats > 0) {
    event.seats--;
    trackCategoryRegistration(event.category);
    alert(`Registered for ${event.name}. Remaining seats: ${event.seats}`);
    displayEvents(); // Refresh display
  } else {
    alert(`No seats available for ${event.name}`);
  }
}

// ----------------------------
// Higher-order function to filter by category
// ----------------------------
function filterEventsByCategory(callback) {
  return events.filter(callback);
}

// ----------------------------
// Function to display all events in the DOM
// ----------------------------
function displayEvents() {
  const container = document.getElementById("eventsList");
  container.innerHTML = ""; // Clear previous

  // Filter upcoming events only
  const upcomingEvents = events.filter(e => new Date(e.date) > new Date() && e.seats > 0);

  upcomingEvents.forEach((event, index) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <h3>${event.name}</h3>
      <p>Date: ${event.date}</p>
      <p>Category: ${event.category}</p>
      <p>Seats: ${event.seats}</p>
      <button onclick="registerUser(${index})">Register</button>
    `;
    container.appendChild(div);
  });
}

// ----------------------------
// Sample usage
// ----------------------------

// Add events
addEvent("AI Conference", "2025-08-01", 10, "Tech");
addEvent("Yoga Retreat", "2025-07-10", 5, "Health");
addEvent("Startup Pitch", "2025-06-20", 0, "Business");
addEvent("Web Dev Bootcamp", "2025-09-05", 20, "Tech");

// Filter example: Find all Tech events
const techEvents = filterEventsByCategory(event => event.category === "Tech");
console.log("Tech Events:", techEvents);

// Initial display
displayEvents();
