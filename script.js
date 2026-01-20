const cont = document.querySelector("#container");

const gridsize = 16;
const containserSize = 960;
const squareSize = containserSize/ gridsize;

function createGrid(size) {
    container.innerHTML = "";

    const containerSize = 960;
    const squareSize = containerSize / size;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.classList.add("square");

        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        square.addEventListener("mouseenter", () => {
            square.style.backgroundColor = "black";
        });

        container.appendChild(square);
    }
}

createGrid(16);


const button = document.querySelector("#resetBtn");

button.addEventListener("click", () => {
    let newSize = prompt("Enter number of squares per side (max 100):");

    newSize = Number(newSize);

    if (newSize > 0 && newSize <= 100) {
        createGrid(newSize);
    } else {
        alert("Please enter a number between 1 and 100.");
    }
});

square.addEventListener("mouseenter", () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});
