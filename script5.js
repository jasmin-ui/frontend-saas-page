    const form = document.getElementById('signupForm');
    const message = document.getElementById('message');

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      // Simple client-side validation
      message.classList.remove('hidden');
      form.reset();
    });