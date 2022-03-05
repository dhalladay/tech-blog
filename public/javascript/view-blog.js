// allows user to select and view the solution after it has been created
async function displayBlogHandler(event) {
  event.preventDefault();

  const blogId = event.target.closest('button').getAttribute('id');

  console.log(blogId);

  document.location.replace(`/blog/${blogId}`)
};

document.querySelector('#blog-list').addEventListener('click', displayBlogHandler)