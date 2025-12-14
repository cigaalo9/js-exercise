// const add= (a, b) => {
//     return a + b;
// }
// console.log(add(51, 10));
// console.log(add(-30, 71));
// console.log(add(1, 10));

let message = "Hello from the global scope!";

function showMessage() {
  let message = "Hello from the local scope!";

  console.log(message);
}

showMessage();

console.log(message);

{
  let blockMessage = "Hello from inside the block!";
  console.log(blockMessage);
}

console.log(blockMessage); 
