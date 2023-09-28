const baseURL = "https://mockbac6.onrender.com"

const signupForm = document.getElementById('signupForm');

signupForm.addEventListener('submit', function (event) {
    event.preventDefault();

    // Retrieve user information from the form
    const username = signupForm.elements.username.value;
    const avatar = signupForm.elements.avatar.value;
    const email = signupForm.elements.email.value;
    const password = signupForm.elements.password.value;

    // Prepare the request body
    const requestBody = {
        username: username,
        avatar:avatar,
        email: email,
        password: password
    };


    fetch(`${baseURL}/api/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
        if (data.message === 'User registered') {
            window.location.href = '../index.html';
        } else {
            alert('Signup failed. ' + data.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred during signup. Please try again later.');
    });
});