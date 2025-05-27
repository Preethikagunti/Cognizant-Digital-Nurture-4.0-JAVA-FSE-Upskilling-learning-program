const form = document.getElementById('registrationForm');
const messageDiv = document.getElementById('message');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  console.log("Form submit event triggered");

  const formData = new FormData(form);
  const data = {
    name: formData.get('name').trim(),
    email: formData.get('email').trim(),
  };

  console.log("Collected form data:", data);

  // Simple validation
  if (!data.name || !data.email) {
    messageDiv.textContent = "Name and Email are required!";
    messageDiv.className = "error";
    console.log("Validation failed: missing fields");
    return;
  }

  // Use Chrome DevTools: set breakpoints here to inspect variables
  debugger; // triggers a breakpoint if DevTools is open

  // Make a POST request (replace URL with actual backend or mock)
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    console.log("Fetch response status:", response.status);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(result => {
    console.log("Fetch response JSON:", result);
    messageDiv.textContent = "Registration successful!";
    messageDiv.className = "success";
    form.reset();
  })
  .catch(error => {
    console.error("Fetch error:", error);
    messageDiv.textContent = `Registration failed: ${error.message}`;
    messageDiv.className = "error";
  });
});
