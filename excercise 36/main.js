const picker = document.querySelector("#picker");
const previewBox = document.querySelector("#previewBox");
const history = document.querySelector("#history");
const clearBtn = document.querySelector("#clearBtn");

const usedColors = new Set();

picker.addEventListener("input", () => {
  const color = picker.value;
  previewBox.style.backgroundColor = color;

  if (!usedColors.has(color)) {
    usedColors.add(color);
    addColorBox(color);
  }
});

function addColorBox(color) {
  const box = document.createElement("div");
  box.className = "color-box";
  box.style.backgroundColor = color;

  box.addEventListener("click", () => {
    previewBox.style.backgroundColor = color;
    picker.value = color;
  });

  history.appendChild(box);
}

clearBtn.addEventListener("click", () => {
  history.innerHTML = "";
  usedColors.clear();
});
