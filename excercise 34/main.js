function addItem() {
  const list = document.querySelector("#taskList");

  const newItem = document.createElement("li");
  newItem.textContent = "ITEM LAGU DARAY";

  list.appendChild(newItem);
}

function removeItem() {
  const list = document.querySelector("#taskList");

  if (list.lastElementChild) {
    list.removeChild(list.lastElementChild);
  }
}

document.querySelector("#addBtn").addEventListener("click", addItem);
document.querySelector("#removeBtn").addEventListener("click", removeItem);
