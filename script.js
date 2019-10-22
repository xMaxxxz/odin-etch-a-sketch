//Grid stuff

let gridArray = [];

function createGrid(size) {
    let grid = document.querySelector("#grid");
    let elementWidth = (grid.clientWidth / Math.sqrt(size)) / 2 - 1.1; //Substracting 1.1 because of the borders + precision error

    for (let i = 0; i < size; i++) {
        gridArray[i] = document.createElement("div");
        gridArray[i].setAttribute("style", `padding: ${elementWidth}px;`);
        gridArray[i].classList.add("grid-element");
        grid.appendChild(gridArray[i]);
    }
}
createGrid(64);

let gridElements = document.querySelectorAll(".grid-element");
gridElements.forEach(function(e) {
    e.addEventListener("mouseenter", function(e) {
        e.target.classList.add("black");
    });
});