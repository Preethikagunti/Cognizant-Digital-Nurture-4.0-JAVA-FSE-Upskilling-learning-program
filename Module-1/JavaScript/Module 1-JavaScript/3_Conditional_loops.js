// Sample event data
const events = [
  { name: "Tech Meetup", date: "2025-06-15", seats: 10 },
  { name: "Startup Pitch", date: "2025-04-10", seats: 5 },
  { name: "AI Conference", date: "2025-07-20", seats: 0 },
  { name: "Developer Fest", date: "2025-09-01", seats: 25 }
];

// Utility function to check if the event is upcoming
function isUpcoming(dateString) {
  const today = new Date();
  const eventDate = new Date(dateString);
  return eventDate >= today;
}

// Display events that are valid (upcoming and not full)
const eventsListDiv = document.getElementById("eventsList");

events.forEach((event, index) => {
  if (isUpcoming(event.date) && event.seats > 0) {
    // Create HTML for valid event
    const eventDiv = document.createElement("div");
    eventDiv.innerHTML = `
      <h3>${event.name}</h3>
      <p>Date: ${event.date}</p>
      <p>Available Seats: <span id="seats-${index}">${event.seats}</span></p>
      <button onclick="register(${index})">Register</button>
    `;
    eventsListDiv.appendChild(eventDiv);
  }
});

// Handle user registration with error handling
function register(index) {
  try {
    const event = events[index];
    if (!isUpcoming(event.date)) {
      throw new Error("This event is no longer available.");
    }
    if (event.seats <= 0) {
      throw new Error("No seats available.");
    }

    // Decrease seat count
    event.seats--;
    document.getElementById(`seats-${index}`).textContent = event.seats;
    console.log(`Registered for ${event.name}`);
    alert(`Successfully registered for ${event.name}`);
  } catch (error) {
    console.error(error.message);
    alert(error.message);
  }
}
