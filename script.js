
const container = document.querySelector('div.container');
const res = document.querySelector('.reset');
let color = `rgba(${Math.floor(Math.random()*100)},${Math.floor(Math.random()*100)},${Math.floor(Math.random()*100)},${Math.random()});`


function table() {
    for (let i = 0; i < Math.pow(numb,2); i++) {
        const box = document.createElement('div');
        container.appendChild(box);
        box.addEventListener('mouseover', () => {
            box.setAttribute('style', `background-color: ${color}`)
        });
        box.addEventListener('mouseuot', () => {
            box.removeAttribute('style', `background-color: ${color}`)
        });
        res.addEventListener('click', () => {
            box.setAttribute('style', 'background-color:green;')
        });        
}}

let numb = 0
const btn = document.querySelector('button');
btn.addEventListener('click', () => {
    numb = +prompt('enter number of grid size (less than 19)')
    if (numb >= 19) {
        numb = 19
    }
    container.setAttribute("style", `width: ${numb*40}px`)
    table();
});