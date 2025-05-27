const spinner = document.getElementById("spinner");
const container = document.getElementById("eventContainer");

// Show loading spinner
spinner.style.display = "block";

// Fetch using .then()/.catch()
fetch("mock-events.json")
  .then(response => {
    if (!response.ok) throw new Error("Failed to fetch events.");
    return response.json();
  })
  .then(events => {
    spinner.style.display = "none";
    renderEvents(events);
  })
  .catch(error => {
    spinner.style.display = "none";
    container.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
  });

// Render function
function renderEvents(events) {
  container.innerHTML = "";
  events.forEach(event => {
    const card = document.createElement("div");
    card.style.border = "1px solid #ccc";
    card.style.margin = "10px";
    card.style.padding = "10px";
    card.innerHTML = `
      <h3>${event.name}</h3>
      <p>Category: ${event.category}</p>
      <p>Seats: ${event.seats}</p>
    `;
    container.appendChild(card);
  });
}
