const gridContainer = document.createElement('div');
const screen = document.querySelector('.screen');
const gridszButton = document.querySelector('.gridszButton');
const clearButton = document.querySelector('.clearButton');
let gridChild = document.createElement('div');

gridChild.className = 'gridChild';
gridContainer.className = 'gridContainer';

screen.appendChild(gridContainer);
gridContainer.appendChild(gridChild);

function createGrid(rowNum, colNum) {

    gridChild.innerHTML = '';

    for (let i = 0; i < colNum; i++) {
        let column = document.createElement("div");
        column.className = 'columns';
        for (let j = 0; j < rowNum; j++) {
            let row = document.createElement("div");
            row.className = 'cells';
            column.appendChild(row);
        }
        gridChild.appendChild(column);
    }
    hoverEffect();
}

function hoverEffect() {
    const grid = document.querySelector('.gridChild');
    grid.addEventListener('mouseover', (e) => {
        e.stopPropagation();
        if (e.target.classList.contains('cells'))
            e.target.style.backgroundColor = 'rgb(' +
                (Math.floor(Math.random() * 256)) + ',' +
                (Math.floor(Math.random() * 256)) + ',' +
                (Math.floor(Math.random() * 256)) + ')';
    });
}

gridszButton.addEventListener('click', (e) => {
    e.stopPropagation();
    let str = '', values = [];
    do {
        str = prompt('Enter the number of columns and rows, separated by comma.', "15, 15");
        values = str.split(",");
        if (values[0] > 100 || values[1] > 100) alert("Less than 100!");
    }
    while (values[0] > 100 || values[1] > 100);
    createGrid(parseInt(values[0]), parseInt(values[1]));

});

clearButton.addEventListener('click', (e) => {
    e.stopPropagation();
    cells = gridContainer.querySelectorAll('.cells');
    cells.forEach(cell => {
        cell.style.backgroundColor = 'white';
    });
}
);


