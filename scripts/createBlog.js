const baseURL = "https://mockbac6.onrender.com"

const userData = JSON.parse(localStorage.getItem('userData'))
const token = localStorage.getItem('token') || ""
console.log(userData,token)

// Assuming you have the form element with id "createBlogForm"
const createBlogForm = document.getElementById('createBlogForm');
const usernameInput = document.getElementById('username');

if (userData && userData.username) {
    usernameInput.value = userData.username;
}


createBlogForm.addEventListener('submit', function (event) {
    event.preventDefault();

    // Get the values from the form fields
    const title = createBlogForm.elements.title.value;
    const content = createBlogForm.elements.content.value;
    const category = createBlogForm.elements.category.value;

    // Construct the blog post data
    const blogData = {
        username:userData.username,
        title: title,
        content: content,
        category: category
    };

    // Make a POST request to your backend API
    fetch(`${baseURL}/api/blogs`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify(blogData)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        alert('Blog post created successfully.');
        window.location.href = 'blog.html'
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while creating the blog post. Please try again later.');
    });
});
