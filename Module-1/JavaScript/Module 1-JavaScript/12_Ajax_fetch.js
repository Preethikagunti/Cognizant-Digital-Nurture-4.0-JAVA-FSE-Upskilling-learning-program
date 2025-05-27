const form = document.getElementById('registrationForm');
const responseMessage = document.getElementById('responseMessage');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  responseMessage.textContent = 'Submitting...';
  responseMessage.className = 'message';

  const formData = new FormData(form);
  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
  };

  // Simulate a delayed response using setTimeout inside a Promise
  function mockPostRequest(url, data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Randomly simulate success or failure (80% success rate)
        if (Math.random() < 0.8) {
          resolve({ status: 200, message: 'Registration successful' });
        } else {
          reject({ status: 500, message: 'Server error, please try again later' });
        }
      }, 2000); // 2 second delay
    });
  }

  // Use fetch() to POST data to mock API (using mockPostRequest here)
  mockPostRequest('https://mockapi.example.com/register', data)
    .then(response => {
      if (response.status === 200) {
        responseMessage.textContent = response.message;
        responseMessage.className = 'message success';
        form.reset();
      } else {
        throw new Error(response.message);
      }
    })
    .catch(error => {
      responseMessage.textContent = error.message || 'Failed to submit registration.';
      responseMessage.className = 'message failure';
    });
});
