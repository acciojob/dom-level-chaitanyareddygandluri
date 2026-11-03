
const element = document.getElementById("level");

let count = 0;

let current = element;

while (current !== null) {
    count++;
    current = current.parentElement;
}

alert("The level of the element is: " + (count - 1));
