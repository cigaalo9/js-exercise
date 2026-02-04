function processMessage(message, formatter) {
    return formatter(message);
}

function toUpperCaseFormat(text) {
    return text.toUpperCase();
}

function toLowerCaseFormat(text) {
    return text.toLowerCase();
}

function addExclamation(text) {
    return text + "!!!";
}

console.log(processMessage("Hello World", toUpperCaseFormat)); 
// Output: HELLO WORLD

console.log(processMessage("Hello World", toLowerCaseFormat)); 
// Output: hello world

console.log(processMessage("Hello World", addExclamation)); 
// Output: Hello World!!!
