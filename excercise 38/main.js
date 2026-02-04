document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggleBtn");
  const navbarLinks = document.getElementById("navbarLinks");
  const navLinks = document.querySelectorAll(".navbar-links a");

  toggleBtn.addEventListener("click", () => {
    toggleBtn.classList.toggle("active");
    navbarLinks.classList.toggle("active");
  });

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      toggleBtn.classList.remove("active");
      navbarLinks.classList.remove("active");
    });
  });
});
