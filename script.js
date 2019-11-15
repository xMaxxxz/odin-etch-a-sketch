//UI (Coloring)
let colorOptions = document.querySelectorAll(".color");
let color;
colorOptions.forEach(function(e) {
    e.addEventListener("click", function(e) {
        let selectedColor = e.target.getAttribute("class");
        color = selectedColor.split(" ").pop();
    });
});

//Random color
function randomColorPicker() {
    let randomHexValue = Math.floor(Math.random()*16777215).toString(16);
    return "#" + randomHexValue;
}
//Creating grid

let gridArray = [];

function createGrid(size) {
    let grid = document.querySelector("#grid");
    let gridWidth = Math.round(window.innerWidth / 100 * 30); //Returns an integer representing 30% of the doc width
    grid.style.width = `${gridWidth}px`;
    let elementWidth =  (gridWidth / size) / 2 - 0.5;
    
    let firstElement = grid.firstElementChild;
    while (firstElement) {
        firstElement.remove();
        firstElement = grid.firstElementChild;
    }

    for (let i = 0; i < (size * size); i++) {
        gridArray[i] = document.createElement("div");
        gridArray[i].setAttribute("style", `padding: ${elementWidth}px;`);
        gridArray[i].classList.add("grid-element");
        grid.appendChild(gridArray[i]);
    }
    colorGrid();
}
//Default grid size and color
createGrid(8);
colorGrid();

//Create a new grid
let btn = document.querySelector("#grid-btn");
btn.addEventListener("click", function() {
let size = prompt("What area grid would you like?");
createGrid(size);
});

//Coloring grid
function colorGrid() {
    let gridElements = document.querySelectorAll(".grid-element");
    gridElements.forEach(function(e) {
        e.addEventListener("mouseenter", function(e) {
            e.target.style.backgroundColor = "";
            e.target.removeAttribute("class");
            if (color === "random") {
                let randomHexValue = randomColorPicker();
                e.target.style.backgroundColor = `${randomHexValue}`;
            } else {
                e.target.classList.add("grid-element", color);
            }
        });
    });
}
