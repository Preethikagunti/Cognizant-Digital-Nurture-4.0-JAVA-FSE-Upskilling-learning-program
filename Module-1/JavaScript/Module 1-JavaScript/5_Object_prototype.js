// Constructor function to define Event objects
function Event(name, date, seats, category) {
  this.name = name;
  this.date = date;
  this.seats = seats;
  this.category = category;
}

// Add a method to the prototype
Event.prototype.checkAvailability = function () {
  return this.seats > 0 ? "Seats Available" : "Sold Out";
};

// Create sample events
const event1 = new Event("Tech Conference", "2025-08-10", 30, "Tech");
const event2 = new Event("Art Expo", "2025-07-05", 0, "Art");

// Display event info and availability
const display = document.getElementById("eventDetails");

[event1, event2].forEach((event, index) => {
  const eventInfo = document.createElement("div");

  // Get keys and values using Object.entries
  const details = Object.entries(event)
    .map(([key, value]) => `<p><strong>${key}:</strong> ${value}</p>`)
    .join("");

  eventInfo.innerHTML = `
    <h3>Event ${index + 1}</h3>
    ${details}
    <p><strong>Availability:</strong> ${event.checkAvailability()}</p>
    <hr/>
  `;

  display.appendChild(eventInfo);
});
