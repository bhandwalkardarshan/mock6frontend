const baseURL = "https://mockbac6.onrender.com"

const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const email = loginForm.elements.email.value;
    const password = loginForm.elements.password.value;

    const requestBody = {
        email: email,
        password: password
    };

    fetch(`${baseURL}/api/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.user)
        
        if (data.message === 'Login Successful') {
            console.log(data.user)
            localStorage.setItem('userData', JSON.stringify(data.user));
            localStorage.setItem('token', data.token);
            alert(data.message)
            window.location.href = 'html/blog.html';
        } else {
            alert('Login failed. Please check your email and password.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred during login. Please try again later.');
    });
});