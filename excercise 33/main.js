function changeContent() {
  const heading = document.querySelector("#heading");
  heading.textContent = "Content Updated";

  const message = document.querySelector("#message");
  message.innerHTML =
    "<strong>The content has been changed successfully.</strong>";
}

const button = document.querySelector("#changeBtn");
button.addEventListener("click", changeContent);
