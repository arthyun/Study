const moveBox = document.querySelector('.slider_main');
const list = document.querySelectorAll('.slider_main div');
const totalWidth = list[0].clientWidth * list.length;
moveBox.style.width = `${totalWidth}px`;
const btns = document.querySelectorAll('.btns a');
let currentIdx = 0;
let translate = 0;

btns.forEach(el => {
    el.addEventListener('click', (e) => {
        e.preventDefault();
        moveBox.style.transition = 'all .3s';

        if(el.classList.contains('prev')){
            if(currentIdx !== list.length -1){
                translate += list[0].clientWidth;
                moveBox.style.transform = `translateX(-${translate}px)`;
                currentIdx++;
            } 
        }
        if(el.classList.contains('next')){
            if(currentIdx !== 0){
                translate -= list[0].clientWidth;
                moveBox.style.transform = `translateX(-${translate}px)`;
                currentIdx--;
            }
        }
    })
})
