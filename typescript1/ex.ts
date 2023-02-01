// tsc에서 DOM의 타입을 지정할 때
var para1 = document.querySelector('.innerZone1') as HTMLParagraphElement;
var para2 = document.querySelector('.innerZone2') as HTMLElement;

// 변수명 뒤에 타입 지정할 때
var age: number = 20;

// 배열의 타입을 지정할 때
var arr: number[] = [1, 2, 3, 4, 5];
arr.map(val => {
    document.write(`${String(val)} `);
})

// 매개변수에 타입 지정할 때
function first(language: string, age: number){
    return `<span>언어: ${language}, 내나이: ${age}</span>`;
}
para1.innerHTML = first('Typescript', age);

// 함수 리턴값의 타입을 지정할 때
function second():number{
    return 200;
}
// console.log(second());

// 튜플(Tuple) 방식
type Member1 = [number, boolean];
let a: Member1 = [300, false];
// console.log(a);

// [key in string]: string - 객체에 타입을 지정해야할 속성이 너무 많을때(interface에서는 불가!)
type Member2 = {
    // [key: string]: string
    [key in string]: string
}
let b: Member2 = {
    browser: 'chrome',
    car: 'seltos'
}
// console.log(b);

// type 사용해보기 (type는 각각 콤마로 구분)
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
// sp는 그냥 element로 인식되기 때문에 HTMLElement로 표명을 해주어야 함*
const spans = document.querySelectorAll('.innerZone2 > span');
spans.forEach(sp => {
    (sp as HTMLElement).style.display = 'block';
});

// Tuple 사용중 push를 통해 순리를 깰 수 있음 그리하여 -> readonly를 사용해야한다!!!
type Tuple1 = readonly [string, number, boolean];
const tupleZone: Tuple1 = ['튜플아니고 터플이라 불러라', 2, false];
// tupleZone.push('바보들'); -> readonly로 인해 사용 불가능!
console.log(tupleZone);

// Narrowing 방식**
function Nar(x :number | string){
    //매개변수가 넘버타입일때
    if(typeof x === "number"){
        console.log(x + 3);
    } else {
        //매개변수가 문자타입일때
        console.log(x);
    }
}
Nar(120);

// Type Assertion (타입 단언/표명)**
// - 타입스크립트가 추론하지 못하는 타입을 as키워드 or 꺽쇠를 통해 명시해주는 것
// 1. as 방식
let someValue1: unknown = "this is a string";
let strLength1: number = (someValue1 as string).length;
// 2. 꺾쇠(Angle bracket) 방식
// - unknown 타입이지만 Type Assertion을 통해서 타입 추론을 가능하게 해준다.
// - React에서는 as 방식을 선호한다.(꺽쇠는 태그와 혼동될 수 있기때문)
let someValue2: unknown = "this is a string";
let strLength2: number = (<string>someValue2).length;

// 3. 제네릭 방식 (화살표 함수에선 안돼네...)
function identity<T> (x: T): T {
    return x;
};
console.log(identity<string>('심바'));

//열거형 enum
enum Response1 {
    name = '심바',
    age = 4,
}
const respond = (who: Response1, life: Response1): void => {
    console.log(`이름: ${who} / 나이: ${life}살`);
};
respond(Response1.name, Response1.age);

// 유틸리니를 사용하는 법
interface User {
    name: string;
    age: number;
}
let seletedUser: User | null = null //선택된 항목은 있을수도 없을수도 있음

//seletedUser.doSomthing(); // null이라고 읽지않도록 if문을 추가해보자
// 이렇게 if문을 작성해주면 null이 아닌 User라고 인식해준다.
// if(!seletedUser){
//     seletedUser.doSomthing();

// 면접준비하러...

// 인터페이스를 좀더 자세히 사용하려면...
interface Student1 {
    id: number;
    name: string;
    age: number;
    gender: string;
    subject: string;
    courseCompleted: boolean;
}
function getStudentDetatils1(x: Student1['id']){
    console.log(x);
}
getStudentDetatils1(10);

//인터페이스를 함수에 지정했다면 똑같은 객체값을 반환해야 오류가 없음
interface Student2 {
    id: number;
    name: string;
    age: number;
    gender: string;
    subject: string;
    courseCompleted: boolean;
}
function getStudentDetatils2():Student2{
    return {
        id: 2,
        name: 'hyun',
        age: 30,
        gender: 'male',
        subject: '남자다',
        courseCompleted: true
    }
}