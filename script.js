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
}

function colorGrid (color = 'colorBlack') {
    square.forEach((item) => item.addEventListener('mouseover', () => {
        item.classList.add(color); 
    }))  
}

createGrid();
colorGrid();