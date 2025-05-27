$(document).ready(function() {
  // Handle click event on register button
  $('#registerBtn').click(function() {
    console.log("Register button clicked!");
    
    // Show event card with fadeIn
    $('.event-card').fadeIn(500);

    // Hide after 3 seconds with fadeOut
    setTimeout(() => {
      $('.event-card').fadeOut(500);
    }, 3000);
  });
});
