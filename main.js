const btn = document.querySelector('.reset')
const grid = document.querySelector('.grid')
let num; 

function createBoxes(num)
{
    const boxDimension = grid.clientWidth/num;
    for (i = 0; i < num**2; i++)
    {
        const box = document.createElement('div')
        box.style.height = `${boxDimension}px`;
        box.style.width = `${boxDimension}px`;        
        grid.appendChild(box);
    };
}

btn.addEventListener('click', () =>
{
    num = prompt('How many boxes do you want in a row?');
    if (isNaN(num) || (num < 1 || num > 64)) 
    {
        alert("Please input a positive integer less than 65!");
        return;
    };
    createBoxes(num);
})