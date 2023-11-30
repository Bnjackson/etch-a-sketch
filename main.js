const grid = document.getElementById('grid');
const gridRange = document.getElementById('rangeInput');
const rangeLabel = document.getElementById('rangeLabel');

// Variable to track mouse state. Value will be true when mouse held down and over the grid
let isMouseDown = false;

gridRange.addEventListener('input', () => {
    createGrid(rangeInput.value);
});

function createGrid(rangeInput) {
    updateRangeLabel(rangeInput);
    grid.innerHTML = '';
    const numOfGridItems = rangeInput * rangeInput;
    for (let i = 0; i < numOfGridItems; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        grid.append(gridItem);
    }
    grid.style.gridTemplateColumns = `repeat(${rangeInput}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${rangeInput}, ifr)`;
    addEventHandlers();
}

function updateRangeLabel() {
    rangeLabel.innerText = `${rangeInput.value} x ${rangeInput.value}`;
}

function addEventHandlers() {
    // Add event listeners to listen for when the mouse is dragged over the grid, and the state of the mouse 
    grid.addEventListener('mousedown', handleMouseDown);
    grid.addEventListener('mouseup', handleMouseUp);
    grid.addEventListener('mouseover', handleMouseOver);
}

function handleMouseDown() {
    isMouseDown = true;
}

function handleMouseUp() {
    isMouseDown = false;
}

function handleMouseOver(event) {
    console.log(event);
    if (isMouseDown) {
        changeColor(event.target)
    }
}

function changeColor(item) {
    
}

createGrid(16);