const titleInput = document.getElementById("title");
const imageInput = document.getElementById("image");
const contentInput = document.getElementById("content");
const addPostBtn = document.getElementById("addPost");
const postsContainer = document.getElementById("posts");

document.addEventListener("DOMContentLoaded", loadPosts);

addPostBtn.addEventListener("click", () => {
  const title = titleInput.value.trim();
  const image = imageInput.value.trim();
  const content = contentInput.value.trim();

  if (!title || !content) {
    alert("Title and content are required");
    return;
  }

  const postData = { title, image, content };
  addPostToDOM(postData);
  savePost(postData);
  clearForm();
});

function addPostToDOM({ title, image, content }) {
  const post = document.createElement("div");
  post.className = "post";

  post.innerHTML = `
    <h3>${title}</h3>
    ${image ? `<img src="${image}">` : ""}
    <p>${content}</p>
    <div class="post-actions">
      <button class="edit-btn">Edit</button>
      <button class="delete-btn">Delete</button>
    </div>
  `;

  post.querySelector(".delete-btn").addEventListener("click", () => {
    post.remove();
    updateStorage();
  });

  post.querySelector(".edit-btn").addEventListener("click", () => {
    const newTitle = prompt(
      "Edit title:",
      post.querySelector("h3").textContent,
    );
    if (!newTitle) return;

    const newContent = prompt(
      "Edit content:",
      post.querySelector("p").textContent,
    );
    if (!newContent) return;

    const img = post.querySelector("img");
    const newImage = prompt(
      "Edit image URL (leave empty to remove):",
      img ? img.src : "",
    );

    post.querySelector("h3").textContent = newTitle;
    post.querySelector("p").textContent = newContent;

    if (newImage) {
      if (img) img.src = newImage;
      else {
        const newImg = document.createElement("img");
        newImg.src = newImage;
        post.insertBefore(newImg, post.querySelector("p"));
      }
    } else if (img) {
      img.remove();
    }

    updateStorage();
  });

  postsContainer.appendChild(post);
}

function savePost(post) {
  const posts = JSON.parse(localStorage.getItem("posts")) || [];
  posts.push(post);
  localStorage.setItem("posts", JSON.stringify(posts));
}

function updateStorage() {
  const posts = [];
  document.querySelectorAll(".post").forEach((post) => {
    posts.push({
      title: post.querySelector("h3").textContent,
      image: post.querySelector("img")?.src || "",
      content: post.querySelector("p").textContent,
    });
  });
  localStorage.setItem("posts", JSON.stringify(posts));
}

function loadPosts() {
  const posts = JSON.parse(localStorage.getItem("posts")) || [];
  posts.forEach(addPostToDOM);
}

function clearForm() {
  titleInput.value = "";
  imageInput.value = "";
  contentInput.value = "";
}
