document.addEventListener("DOMContentLoaded", function () {
const baseURL = "https://mockbac6.onrender.com"


// function filterData(){
//     const filterNameInput = document.getElementById("filterNameInput").value;
//     const categorySelect = document.getElementById("categorySelect").value;
//     const sortSelect = document.getElementById("sortSelect").value;
//     console.log(filterNameInput,categorySelect,sortSelect)
// }


fetchData()

function createBlog(){
    window.location.href = './createBlog.html'
}



function fetchData(){
    fetch(`${baseURL}/api/blogs`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        showData(data.blogs)
    })
    .catch(error => {
        console.log('Error:', error);
        alert('An error occurred while creating the blog post. Please try again later.');
    });
}

function showData(blogData){
    const blogContainer = document.getElementById('blogContainer');

    const blogCards = blogData.map(blog => {
        const card = document.createElement('div');
        card.classList.add('blog-card');
        const titleElement = document.createElement('h2');
        titleElement.textContent = blog.title;
        const contentElement = document.createElement('p');
        contentElement.textContent = blog.content;
        const categoryElement = document.createElement('p');
        categoryElement.textContent = `Category: ${blog.category}`;
        const dateElement = document.createElement('p');
        dateElement.textContent = `Date: ${blog.date}`;
        const likeBtn = document.createElement('button');
        likeBtn.innerText = "LIKE"
        const commentBtn = document.createElement('button');
        commentBtn.innerText = "COMMENT"
        card.appendChild(titleElement);
        card.appendChild(contentElement);
        card.appendChild(categoryElement);
        card.appendChild(dateElement);
        card.appendChild(likeBtn);
        card.appendChild(commentBtn)

        return card; 
    });

    blogCards.forEach(card => {
        blogContainer.appendChild(card);
    });

}
})