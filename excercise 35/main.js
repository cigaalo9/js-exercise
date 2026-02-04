function changeImage() {
    const img = document.querySelector("#profileImg");

    const newUrl = prompt("Enter a new image URL:");
    const borderClr = prompt("Enter a border color (e.g. red, #000, blue):");
    const imgWidth = prompt("Enter image width in pixels:");
    const imgHeight = prompt("Enter image height in pixels:");
    const radius = prompt("Enter border radius in pixels:");

    if (newUrl) img.src = newUrl;

    img.style.border = `3px solid ${borderClr || "black"}`;
    img.style.width = `${imgWidth || 200}px`;
    img.style.height = `${imgHeight || 200}px`;
    img.style.borderRadius = `${radius || 0}px`;

    // Additional dynamic styling
    img.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
    img.style.transition = "all 0.3s ease";
}
