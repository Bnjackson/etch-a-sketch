const grid = document.getElementById('grid');
const gridRange = document.getElementById('rangeInput');
const rangeLabel = document.getElementById('rangeLabel');

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
}

function updateRangeLabel() {
    rangeLabel.innerText = `${rangeInput.value} x ${rangeInput.value}`;
}

createGrid(16);