// Sample array of events
const events = [
  { name: "Live Concert", date: "2025-07-01", seats: 5 },
  { name: "Art Workshop", date: "2025-06-20", seats: 3 },
  { name: "Yoga Session", date: "2025-08-15", seats: 0 }
];

// Access DOM container using querySelector
const eventContainer = document.querySelector("#eventContainer");

// Function to render all events
function renderEvents() {
  eventContainer.innerHTML = ""; // Clear previous UI

  events.forEach((event, index) => {
    const card = document.createElement("div");
    card.style.border = "1px solid #ccc";
    card.style.padding = "10px";
    card.style.margin = "10px";
    card.style.borderRadius = "8px";

    const title = document.createElement("h3");
    title.textContent = event.name;

    const date = document.createElement("p");
    date.textContent = `Date: ${event.date}`;

    const seats = document.createElement("p");
    seats.textContent = `Available Seats: ${event.seats}`;
    seats.id = `seats-${index}`;

    const registerBtn = document.createElement("button");
    registerBtn.textContent = "Register";
    registerBtn.disabled = event.seats <= 0;
    registerBtn.onclick = () => {
      if (event.seats > 0) {
        event.seats--;
        document.querySelector(`#seats-${index}`).textContent = `Available Seats: ${event.seats}`;
        registerBtn.disabled = event.seats === 0;
      }
    };

    const cancelBtn = document.createElement("button");
    cancelBtn.textContent = "Cancel";
    cancelBtn.style.marginLeft = "10px";
    cancelBtn.onclick = () => {
      event.seats++;
      document.querySelector(`#seats-${index}`).textContent = `Available Seats: ${event.seats}`;
      registerBtn.disabled = false;
    };

    // Append all elements to the card
    card.appendChild(title);
    card.appendChild(date);
    card.appendChild(seats);
    card.appendChild(registerBtn);
    card.appendChild(cancelBtn);

    // Append the card to the container
    eventContainer.appendChild(card);
  });
}

// Initial render
renderEvents();
