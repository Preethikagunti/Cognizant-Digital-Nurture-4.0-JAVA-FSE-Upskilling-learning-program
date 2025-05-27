// Sample event list
const events = [
  { name: "Live Jazz Night", category: "Music", seats: 5 },
  { name: "Yoga Retreat", category: "Health", seats: 2 },
  { name: "Tech Meetup", category: "Tech", seats: 10 },
  { name: "Music Jam", category: "Music", seats: 0 }
];

// DOM references
const eventContainer = document.querySelector("#eventContainer");
const categoryFilter = document.querySelector("#categoryFilter");
const searchInput = document.querySelector("#searchInput");

// Function to render event cards
function renderEvents(filteredEvents) {
  eventContainer.innerHTML = "";

  filteredEvents.forEach((event, index) => {
    const card = document.createElement("div");
    card.style.border = "1px solid #ccc";
    card.style.margin = "10px";
    card.style.padding = "10px";
    card.style.borderRadius = "6px";

    card.innerHTML = `
      <h3>${event.name}</h3>
      <p>Category: ${event.category}</p>
      <p id="seats-${index}">Available Seats: ${event.seats}</p>
    `;

    const registerBtn = document.createElement("button");
    registerBtn.textContent = "Register";
    registerBtn.disabled = event.seats <= 0;

    registerBtn.onclick = () => {
      if (event.seats > 0) {
        event.seats--;
        document.querySelector(`#seats-${index}`).textContent = `Available Seats: ${event.seats}`;
        if (event.seats === 0) registerBtn.disabled = true;
      }
    };

    card.appendChild(registerBtn);
    eventContainer.appendChild(card);
  });
}

// Function to apply filters
function applyFilters() {
  const category = categoryFilter.value;
  const search = searchInput.value.toLowerCase();

  let filtered = events;

  if (category !== "All") {
    filtered = filtered.filter(e => e.category === category);
  }

  if (search) {
    filtered = filtered.filter(e => e.name.toLowerCase().includes(search));
  }

  renderEvents(filtered);
}

// Initial display
renderEvents(events);

// Event listeners
categoryFilter.onchange = applyFilters;
searchInput.addEventListener("keydown", () => setTimeout(applyFilters, 100)); // delay for input to register
