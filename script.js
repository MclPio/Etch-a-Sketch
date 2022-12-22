const container = document.querySelector("#container");
let square = []; //array to hold grid
let grid; //for storing grid size

function createGrid(size = 16) {
    for (let i = 0; i < size**2; i++) {
        square[i] = document.createElement('div');
        square[i].className = "square";
        container.appendChild(square[i]);
        grid = size;
    }
    container.style.gridTemplateColumns = `repeat(${grid}, 2rem)`;
    container.style.gridTemplateRows = `repeat(${grid}, 2rem)`;
}

function colorGrid (color = 'colorBlack') {
    square.forEach((item) => item.addEventListener('mouseover', () => {
        item.classList.add(color); 
    }))  
}

const button = document.querySelector('#gridSize');
function buttonClick () {
    button.addEventListener('click', () => {
        while (true) {
            grid = prompt('Enter grid size <= 100')
            if (grid>100 && grid>0){
            } else if (grid <=100 && grid >0) {
                break;
            } else break;
        }
        square.forEach((item) => item.remove());
        createGrid(grid);
        colorGrid();
    })
}


createGrid();
buttonClick();
colorGrid();