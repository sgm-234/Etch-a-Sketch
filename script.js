const container = document.querySelector("#container");
const button = document.querySelector("#resetBtn");

function createGrid(size) {
  container.innerHTML = "";

  const containerSize = 960;
  const squareSize = containerSize / size;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;


    square.dataset.opacity = 0;
    square.dataset.r = Math.floor(Math.random() * 256);
    square.dataset.g = Math.floor(Math.random() * 256);
    square.dataset.b = Math.floor(Math.random() * 256);

    square.addEventListener("mouseenter", () => {
      let opacity = Number(square.dataset.opacity);
      if (opacity < 1) {
        opacity += 0.1;
        square.dataset.opacity = opacity;
        square.style.backgroundColor = `rgba(${square.dataset.r}, ${square.dataset.g}, ${square.dataset.b}, ${opacity})`;
      }
    });

    container.appendChild(square);
  }
}

createGrid(16);

button.addEventListener("click", () => {
  const newSize = Number(prompt("Enter number of squares per side (max 100):"));
  if (newSize > 0 && newSize <= 100) {
    createGrid(newSize);
  } else {
    alert("Please enter a number between 1 and 100.");
  }
});
