
const container = document.querySelector('div.container');
//container.setAttribute('style', 'display: flex; width: 640px; flex-wrap: wrap;')
function table() {
    for (let i = 0; i < Math.pow(numb,2); i++) {
        const box = document.createElement('div');
        container.appendChild(box);
        box.addEventListener('mouseover', () => {
            box.setAttribute('style', 'background-color:rgba(7, 67, 7, 0.805);')
        });
}}

const boxes = document.querySelectorAll('.container > div');
let numb = 0
const btn = document.querySelector('button');
btn.addEventListener('click', () => {
    numb = +prompt('enter number of grid size (less than 10)')
    if (numb <= 18) {
        container.setAttribute("style", `width: ${numb*40}px`)
    } //else if (numb > 18 || numb <25) {
      //  boxes.setAttribute('style', 'width: 20; height: 20;')
       // container.setAttribute("style", `width: ${numb*20}px`)
    //}; 
    table();
}, );


