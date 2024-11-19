document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
  
    if (username === 'TKA-1C' && password === 'cclasstka') {
      window.location.href = 'pilihan.html';
    } else {
      errorMessage.textContent = 'Invalid username or password!';
    }
  });
