"use strict";
//tsc에서 DOM의 타입을 지정할 때
var para1 = document.querySelector('.innerZone1');
var para2 = document.querySelector('.innerZone2');
//변수명 뒤에 타입 지정할 때
var age = 20;
//배열의 타입을 지정할 때
var arr = [1, 2, 3, 4, 5];
arr.map(val => {
    document.write(`${String(val)} `);
});
//매개변수에 타입 지정할 때
function first(language, age) {
    return `<span>언어: ${language}, 내나이: ${age}</span>`;
}
para1.innerHTML = first('Typescript', age);
//함수 리턴값의 타입을 지정할 때
function second() {
    return 200;
}
let a = [300, false];
let b = {
    browser: 'chrome',
    car: 'seltos'
};
const info1 = [
    {
        name: '손현호',
        age: 31,
        gender: 'male',
        address: '경기도 과천시 별양로 110'
    },
    {
        name: '김아영',
        age: 31,
        gender: 'female',
        address: '경기도 군포시 부곡로'
    }
];
info1.map((list, i) => {
    const span = document.createElement('span');
    para2.appendChild(span).classList.add(`span${i + 1}`);
    span.innerText = `이름: ${list.name} / 나이: ${list.age} / 성별: ${list.gender} / 주소: ${list.address}`;
});
//sp는 그냥 element로 인식되기 때문에 HTMLElement로 표명을 해주어야 함*
const spans = document.querySelectorAll('.innerZone2 > span');
spans.forEach(sp => {
    sp.style.display = 'block';
});
const tupleZone = ['튜플아니고 터플이라 불러라', 2, false];
// tupleZone.push('바보들'); -> readonly로 인해 사용 불가능!
console.log(tupleZone);
