//slider
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

//tab
const tabBtns = document.querySelectorAll('.tabBtns a');
const tabPrintMain = document.querySelector('.tabPrint');
const tabPrint = document.querySelectorAll('.tabPrint p');

tabPrint[0].style.position = 'relative';
tabPrint[0].style.left = 0;

tabBtns.forEach((el, i) => {
    el.addEventListener('click', (e) => {
        e.preventDefault();

        tabPrint.forEach(le => {
            le.style.position = 'absolute';
            le.style.left = '-100%';
        });

        tabPrint[i].style.position = 'relative';
        tabPrint[i].style.left = 0;
        
        // if(el.classList.contains('1')){
        //     tabPrint[0].style.display = 'block';
        // } else if(el.classList.contains('2')){
        //     tabPrint[1].style.display = 'block';
        // } else if(el.classList.contains('3')){
        //     tabPrint[2].style.display = 'block';
        // } else if(el.classList.contains('4')){
        //     tabPrint[3].style.display = 'block';
        // }


    })
});


//acordian1
const widths = document.querySelectorAll('.acordian div');

widths.forEach((el, i) => {
    el.addEventListener('mouseover', (e) => {

        widths.forEach(le => {
            le.style.width = '10%';
        });

        e.target.style.width = '70%';
        // if(e.target){
        //     e.target.style.width = '97%';
        // } else {
        //     widths.forEach(le => {
        //         le.style.width = '1%';
        //     });
        // }
    });
});

//acordian2
const tabs = document.querySelectorAll('.acordian2 ul li');
const para = document.querySelectorAll('.acordian2 ul li p');

tabs[0].style.maxHeight = '70px';

tabs.forEach((list, i) => {
    list.addEventListener('click', (e) => {
        e.preventDefault();

        //smooth하게
        tabs.forEach(list2 => {
            list2.style.maxHeight = '25px';
        });

        list.style.maxHeight = '70px';

        //hard하게
        // para.forEach(list2 => {
        //     list2.style.display = 'none';
        // });
        // para[i].style.display = 'block';
    })
})