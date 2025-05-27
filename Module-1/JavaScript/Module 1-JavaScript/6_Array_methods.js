// Array to store community events
const events = [];

// ---------------------------
// Add new events using .push()
// ---------------------------
events.push(
  { name: "Workshop on Baking", category: "Cooking" },
  { name: "Live Jazz Night", category: "Music" },
  { name: "Guitar Jam Session", category: "Music" },
  { name: "Yoga & Mindfulness", category: "Health" },
  { name: "Photography 101", category: "Art" }
);

// ---------------------------
// Use .filter() to get only music events
// ---------------------------
const musicEvents = events.filter(event => event.category === "Music");

// ---------------------------
// Use .map() to create formatted display cards
// ---------------------------
function formatEventCards(eventArray) {
  return eventArray.map(event => `
    <div style="border:1px solid #ccc; padding:10px; margin:10px;">
      <h3>${event.name}</h3>
      <p>Category: ${event.category}</p>
    </div>
  `).join("");
}

// ---------------------------
// Display All Events
// ---------------------------
document.getElementById("allEvents").innerHTML = formatEventCards(events);

// ---------------------------
// Display Music Events
// ---------------------------
document.getElementById("musicEvents").innerHTML = formatEventCards(musicEvents);
