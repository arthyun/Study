"use strict";
// tsc에서 DOM의 타입을 지정할 때
var para1 = document.querySelector('.innerZone1');
var para2 = document.querySelector('.innerZone2');
// 변수명 뒤에 타입 지정할 때
var age = 20;
// 배열의 타입을 지정할 때
var arr = [1, 2, 3, 4, 5];
arr.map(val => {
    document.write(`${String(val)} `);
});
// 매개변수에 타입 지정할 때
function first(language, age) {
    return `<span>언어: ${language}, 내나이: ${age}</span>`;
}
para1.innerHTML = first('Typescript', age);
// 함수 리턴값의 타입을 지정할 때
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
// sp는 그냥 element로 인식되기 때문에 HTMLElement로 표명을 해주어야 함*
const spans = document.querySelectorAll('.innerZone2 > span');
spans.forEach(sp => {
    sp.style.display = 'block';
});
const tupleZone = ['튜플아니고 터플이라 불러라', 2, false];
// tupleZone.push('바보들'); -> readonly로 인해 사용 불가능!
console.log(tupleZone);
// Narrowing 방식**
function Nar(x) {
    //매개변수가 넘버타입일때
    if (typeof x === "number") {
        console.log(x + 3);
    }
    else {
        //매개변수가 문자타입일때
        console.log(x);
    }
}
Nar(120);
// Type Assertion (타입 단언/표명)**
// - 타입스크립트가 추론하지 못하는 타입을 as키워드 or 꺽쇠를 통해 명시해주는 것
// 1. as 방식
let someValue1 = "this is a string";
let strLength1 = someValue1.length;
// 2. 꺾쇠(Angle bracket) 방식
// - unknown 타입이지만 Type Assertion을 통해서 타입 추론을 가능하게 해준다.
// - React에서는 as 방식을 선호한다.(꺽쇠는 태그와 혼동될 수 있기때문)
let someValue2 = "this is a string";
let strLength2 = someValue2.length;
// 3. 제네릭 방식 (화살표 함수에선 안돼네...)
function identity(x) {
    return x;
}
;
console.log(identity('심바'));
//열거형 enum
var Response1;
(function (Response1) {
    Response1["name"] = "\uC2EC\uBC14";
    Response1[Response1["age"] = 4] = "age";
})(Response1 || (Response1 = {}));
const respond = (who, life) => {
    console.log(`이름: ${who} / 나이: ${life}살`);
};
respond(Response1.name, Response1.age);
