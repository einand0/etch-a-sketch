const grid = document.querySelector('#sketch-grid');


for (i = 0; i < 256; i++) {
    const square = document.createElement('div');
    square.classList.add('square')
    grid.appendChild(square);
    console.log("created");
}

const squares = document.querySelectorAll('.square');

squares.forEach((item) => {
    item.addEventListener('mouseover', () =>{
        item.style.backgroundColor = "black";
    });
})



// ERASE 

const eraseBtn = document.querySelector('#erase-btn');

eraseBtn.addEventListener('click', () => {
    squares.forEach((item) => {
        item.style.backgroundColor = "white";
    })
})