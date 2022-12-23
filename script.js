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
    let space = `${960/grid}px`;
    container.style.gridTemplateColumns = `repeat(${grid}, ${space})`;
    container.style.gridTemplateRows = `repeat(${grid}, ${space})`;
    square.forEach(item => {
        item.style.height = `${space}`;
        item.style.width = `${space}`;
    })
}

function colorGrid (color = 'black') {
    square.forEach((item) => item.addEventListener('mouseover', () => {
        item.style.backgroundColor = color; 
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

const blackButton = document.querySelector('#colorBlack');
const rgbButton = document.querySelector('#colorRGB');
const shadeButton = document.querySelector('#colorShade');
const rgbColors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#00FFFF', 
'#FF00FF','#800000', '#808000', '#008000', '#800080', '#008080', '#000080'];
rgbButton.addEventListener('click', () => {
    square.forEach((item) => item.remove());
    createGrid(grid);
    square.forEach((item) => item.addEventListener('mouseover', () => {
        item.style.backgroundColor = rgbColors[Math.floor(Math.random()*rgbColors.length)];
    }))  
})

blackButton.addEventListener('click', () => {
    colorGrid(); 
})

shadeButton.addEventListener('click', () => {
    square.forEach((item) => item.remove());
    createGrid(grid);
    square.forEach((item) => item.addEventListener('mouseover', () => {
        item.style.backgroundColor = 'rgb(255,255,255)';
        item.addEventListener('mouseover', () => {
            let i = item.style.backgroundColor; // returns string rgb value example: rgb(255, 0, 255)
            i = i.slice(4,-1).split(",")
            let red = Number(i[0]);
            let green = Number(i[1]);
            let blue = Number(i[2]);
            red *= 0.9;
            green *= 0.9;
            blue *= 0.9;
            i = item.style.backgroundColor = `rgb(${red},${green},${blue})`;
        })

    })) 
})
createGrid();
buttonClick();
colorGrid();
