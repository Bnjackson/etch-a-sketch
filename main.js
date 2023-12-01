const grid = document.getElementById('grid');
const gridRange = document.getElementById('rangeInput');
const rangeLabel = document.getElementById('rangeLabel');
const colourPicker = document.getElementById('colorPicker');
const colourButton = document.getElementById('colorButton');
const rainbowButton = document.getElementById('rainbowButton');
const eraserButton = document.getElementById('eraserButton');
const clearButton = document.getElementById('clearButton');
const colorButtons = document.querySelectorAll('.color-buttons');

// Variable to track mouse state. Value will be true when mouse held down and over the grid
let isMouseDown = false;
//  Variable to store the users choice of color mode. Options are colorPicker, rainbow, or eraser
let colourMode = 'colourPicker';
let selectedColor = '#000';

colourPicker.addEventListener('input', () => {
    selectedColor = colourPicker.value;
});

gridRange.addEventListener('input', () => {
    createGrid(rangeInput.value);
});

clearButton.addEventListener('click', () => {
    // Call createGrid function with rangeInput.value
    console.log(gridRange.value);
    createGrid(gridRange.value);
});

function addEventHandlers() {
    // Add event listeners to listen for when the mouse is dragged over the grid, and the state of the mouse 
    grid.addEventListener('mousedown', handleMouseDown);
    grid.addEventListener('mouseup', handleMouseUp);
    grid.addEventListener('mouseover', handleMouseOver);
    grid.addEventListener('mouseleave', handleMouseLeave);
}

colorButtons.forEach((button) => {
    button.addEventListener('click',() => {
        changeColorMode(event.target);
    });
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


function handleMouseDown(event) {
    isMouseDown = true;
    changeColor(event.target);
}

function handleMouseUp() {
    isMouseDown = false;
}

function handleMouseOver(event) {
    if (isMouseDown) {
        changeColor(event.target)
    }
}

function handleMouseLeave() {
    isMouseDown = false;
}


function changeColor(item) {
    if (colourMode === 'colourPicker') {
        item.style.backgroundColor = selectedColor;
    } else if (colourMode === 'rainbow') {
        item.style.backgroundColor = generateRandomColour();
    } else if (colourMode === 'eraser') {
        item.style.backgroundColor = 'white';
    }
}

function changeColorMode(target) {
    colourButton.classList.remove('current-mode');
    rainbowButton.classList.remove('current-mode');
    eraserButton.classList.remove('current-mode');

    if (target.id === 'colorButton') {
        colourMode = 'colourPicker';
        colourButton.classList.add('current-mode');
    } else if (target.id === 'rainbowButton') {
        colourMode = 'rainbow';
        rainbowButton.classList.add('current-mode');
    } else if (target.id === 'eraserButton') {
        colourMode = 'eraser';
        eraserButton.classList.add('current-mode');
    }
}

function generateRandomColour() {
    const red = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    return `rgb(${red}, ${green}, ${blue})`;
}


createGrid(16);