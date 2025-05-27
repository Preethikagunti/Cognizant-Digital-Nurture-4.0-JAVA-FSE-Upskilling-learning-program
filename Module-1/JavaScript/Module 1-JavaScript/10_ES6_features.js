// Sample events array
const events = [
  { name: "Music Festival", category: "Music", seats: 20 },
  { name: "Health Workshop", category: "Health", seats: 15 },
  { name: "Tech Talk", category: "Tech", seats: 10 }
];

// Function with default parameter and destructuring
const displayEvents = (eventArray = events) => {
  const eventListDiv = document.getElementById("eventList");
  eventListDiv.innerHTML = ""; // Clear existing

  eventArray.forEach(({ name, category, seats }) => {
    const eventCard = document.createElement("div");
    eventCard.style.border = "1px solid #ddd";
    eventCard.style.margin = "8px";
    eventCard.style.padding = "8px";
    eventCard.innerHTML = `
      <h3>${name}</h3>
      <p>Category: ${category}</p>
      <p>Seats Available: ${seats}</p>
    `;
    eventListDiv.appendChild(eventCard);
  });
};

// Use spread operator to clone array before filtering
const filteredEvents = [...events].filter(({ category }) => category === "Music");

// Display all events
displayEvents();

// Display filtered events (you could use this in UI or console)
console.log("Filtered Music Events:", filteredEvents);

// Example: display filtered music events after 3 seconds
setTimeout(() => displayEvents(filteredEvents), 3000);
