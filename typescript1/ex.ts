//tsc에서 DOM의 타입을 지정할 때
var para1 = document.querySelector('.innerZone1') as HTMLParagraphElement;
var para2 = document.querySelector('.innerZone2') as HTMLElement;

//변수명 뒤에 타입 지정할 때
var age: number = 20;

//배열의 타입을 지정할 때
var arr: number[] = [1, 2, 3, 4, 5];
arr.map(val => {
    document.write(`${String(val)} `);
})

//매개변수에 타입 지정할 때
function first(language: string, age: number){
    return `<span>언어: ${language}, 내나이: ${age}</span>`;
}
para1.innerHTML = first('Typescript', age);

//함수 리턴값의 타입을 지정할 때
function second():number{
    return 200;
}
console.log(second());

//튜플(Tuple) 방식
type Member1 = [number, boolean];
let a: Member1 = [300, false];
console.log(a);

//[key in string]: string - 객체에 타입을 지정해야할 속성이 너무 많을때(interface에서는 불가!)
type Member2 = {
    [key: string]: string
}
let b: Member2 = {
    browser: 'chrome',
    car: 'seltos'
}
console.log(b);

//type 사용해보기 (type는 각각 콤마로 구분)
type Third = {
    name: string,
    age: number,
    gender?: string,
    address: string
}
const info1: Third[] = [
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
]
info1.map((list, i) => {
    const span = document.createElement('span');
    para2.appendChild(span).classList.add(`span${i + 1}`);
    span.innerText = `이름: ${list.name} / 나이: ${list.age} / 성별: ${list.gender} / 주소: ${list.address}`;
})
//sp는 그냥 element로 인식되기 때문에 HTMLElement로 표명을 해주어야 함*
const spans = document.querySelectorAll('.innerZone2 > span');
spans.forEach(sp => {
    (sp as HTMLElement).style.display = 'block';
});