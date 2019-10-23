//UI
let colorOptions = document.querySelectorAll(".color");
let color;
colorOptions.forEach(function(e) {
    e.addEventListener("click", function(e) {
        color = e.target.getAttribute("id");
    });
});

//Creating grid

let gridArray = [];

function createGrid(size) {
    let grid = document.querySelector("#grid");
    let elementWidth = (grid.clientWidth / Math.sqrt(size)) / 2 - 1.1; //Substracting 1.1 because of the borders + precision error
    
    let firstElement = grid.firstElementChild;
    while (firstElement) {
        firstElement.remove();
        firstElement = grid.firstElementChild;
    }

    for (let i = 0; i < size; i++) {
        gridArray[i] = document.createElement("div");
        gridArray[i].setAttribute("style", `padding: ${elementWidth}px;`);
        gridArray[i].classList.add("grid-element");
        grid.appendChild(gridArray[i]);
    }
    colorGrid();
}
//Default grid size and color
createGrid(64);
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
            e.target.removeAttribute("class");
            e.target.classList.add("grid-element", color);
        });
    });
}
