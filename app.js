const colorBtn = document.querySelector('#btn-1');
const boxes = document.querySelectorAll('.box');

let running = false;

function getRandomColor(){
    let letters = "0123456789ABCDEF"
    let color = '#'
    for(let i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}

function startThisShit(){
    if(running){
        boxes.forEach(color => {
            color.style.background = getRandomColor();
        })
        setTimeout(startThisShit, 50);
    }
}

colorBtn.addEventListener('click', function(){
    colorBtn.innerText = 'Desligar Paredão';
    if(running){
        running = false;
        colorBtn.innerText = 'Ligar Paredão'
    }
    else{
        running = true;
        startThisShit()
    }
})