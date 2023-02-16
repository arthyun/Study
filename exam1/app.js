//nav
const navBtn = document.querySelector('.navBtn');
const navZone = document.querySelector('.navZone');
const aside = document.querySelector('.navZone aside');
let cnt = 0;

navBtn.addEventListener('click', (e) => {
    e.preventDefault();
    cnt++;
    if(cnt % 2 == 1){
        navZone.style.width = 0;
        aside.style.display = 'none';
        navBtn.style.background = 'url(./images/sidebar02.png) no-repeat';
    } else {
        navZone.style.width = 17.5+'%';
        aside.style.display = 'block';
        navBtn.style.background = 'url(./images/sidebar01.png) no-repeat';
    }
});

//category
const tabBtns = document.querySelectorAll('.tabBtns a');
const blogZone = document.querySelector('.blogZone');
const storyZone = document.querySelector('.storyZone');

tabBtns[0].classList.add('on');
blogZone.style.display = 'block';

tabBtns.forEach(el => {
    el.addEventListener('click', (e) => {
        e.preventDefault();
        for(let i = 0; i < 2; i++){
            tabBtns[i].classList.remove('on');
            e.currentTarget.classList.add('on');
            if(e.currentTarget.dataset.id == 1){
                blogZone.style.display = 'block';
                storyZone.style.display = 'none';
            } else {
                blogZone.style.display = 'none';
                storyZone.style.display = 'block';
            }
        }
    });
});

//slide1
const firstUl = document.querySelector('.move1');
const secondUl = document.querySelector('.move2');
const moveBox1 = document.querySelector('.newZone .firstUl ul');
const moveBox2 = document.querySelector('.newZone .secondUl ul');
const prevSpan1 = document.querySelector('.prevSpan1');
const nextSpan1 = document.querySelector('.nextSpan1');
const prevSpan2 = document.querySelector('.prevSpan2');
const nextSpan2 = document.querySelector('.nextSpan2');
const clone1 = moveBox1.cloneNode(true);
const clone2 = moveBox2.cloneNode(true);
firstUl.appendChild(clone1);
secondUl.appendChild(clone2);
let cnt2 = 0;

prevSpan1.addEventListener('click', (e) => {
    e.preventDefault();
    cnt2++;
    if(cnt2 > 5){
        cnt2 = 0;
        firstUl.style.transform = `translateX(0%)`;
    } else {
        firstUl.style.transform = `translateX(-${20.5 * cnt2}%)`;
    }
});
nextSpan1.addEventListener('click', (e) => {
    e.preventDefault();
    cnt2--;
    if(cnt2 < 0){
        cnt2 = 5;
    }
    firstUl.style.transform = `translateX(-${20.5 * cnt2}%)`;
});
prevSpan2.addEventListener('click', (e) => {
    e.preventDefault();
    cnt2++;
    if(cnt2 > 1){
        cnt2 = 0;
        secondUl.style.transform = `translateX(0%)`;
    } else {
        secondUl.style.transform = `translateX(-${50.5 * cnt2}%)`;
    }
});
nextSpan2.addEventListener('click', (e) => {
    e.preventDefault();
    cnt2--;
    if(cnt2 < 0){
        cnt2 = 1;
    }
    secondUl.style.transform = `translateX(-${50.5 * cnt2}%)`;
});

//slides3
const prevNextBtns = document.querySelectorAll('.lastZone > a');
const slideBox = document.querySelector('.lastSlide');
const ul = document.querySelector('.lastSlide ul');
const cloneul = ul.cloneNode(true);
slideBox.appendChild(cloneul);
let curPos = 10.4;
let listWidth = 33.5;

prevNextBtns.forEach(el => {
    el.addEventListener('click', (e) => {
        e.preventDefault();
        if(el.classList.contains('prev')){
            if(curPos == 43.9){
                curPos = 10.4;
                slideBox.style.transform = `translateX(-${curPos}%)`;
            } else {
                slideBox.style.transform = `translateX(-${curPos += listWidth}%)`;
            }
        } 
        if(el.classList.contains('next')){
            if(curPos <= 10.4){
                curPos = 43.9;
                slideBox.style.transform = `translateX(-${curPos}%)`;
            } else {
                slideBox.style.transform = `translateX(-${curPos -= listWidth}%)`;
            }
        }
    });
});

