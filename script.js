const sizeButton = document.querySelector('.size-button');
sizeButton.addEventListener('click', function() {
  let userInput = prompt("Enter the size of your grid:");
  if(userInput > 100) {
    alert("please enter number less than 100");
  }
})


const container = document.querySelector('#grid-container');
const totalCells = 16 * 16;

for (let i = 0; i < totalCells; i++) {
  const cell = document.createElement('div');
  cell.classList.add('grid-cell');
  
  cell.addEventListener('mouseover', function() {
    cell.style.backgroundColor = 'black';
  })
  container.appendChild(cell);
}

