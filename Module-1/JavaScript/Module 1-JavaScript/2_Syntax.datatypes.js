// Declare event details using appropriate data types
const eventName = "Tech Meetup 2025";
const eventDate = "June 15, 2025";
let availableSeats = 50;

// Display event info using template literals
document.getElementById("eventInfo").textContent = `Event: ${eventName} | Date: ${eventDate}`;
document.getElementById("seatCount").textContent = `Available Seats: ${availableSeats}`;

// Function to simulate user registration
function registerUser() {
  if (availableSeats > 0) {
    availableSeats--; // Decrease seat count
    document.getElementById("seatCount").textContent = `Available Seats: ${availableSeats}`;
    console.log("User registered successfully.");
  } else {
    alert("Sorry, no more seats available!");
  }
}
