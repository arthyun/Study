// tsc에서 DOM의 타입을 지정할 때
var para1 = document.querySelector('.innerZone1') as HTMLParagraphElement;
var para2 = document.querySelector('.innerZone2') as HTMLParagraphElement;

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
// console.log(tupleZone);

// Narrowing 방식**
function Nar(x :number | string){
    //매개변수가 넘버타입일때
    if(typeof x === "number"){
        // console.log(x + 3);
    } else {
        //매개변수가 문자타입일때
        // console.log(x);
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
// console.log(identity<string>('심바'));

//열거형 enum
enum Response1 {
    name = '심바',
    age = 4,
}
const respond = (who: Response1, life: Response1): void => {
    // console.log(`이름: ${who} / 나이: ${life}살`);
};
respond(Response1.name, Response1.age);

// 유틸리티를 사용하는 법
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
    // console.log(x);
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

//물음표를 사용한다면?
interface Student3 {
    id?: number;
    name?: string;
    age?: number;
    gender: string;
    subject: string;
    courseCompleted: boolean;
}
function getStudentDetatils3():Student3{
    return {
        gender: 'male',
        subject: '남자다',
        courseCompleted: true
    }
}

//인터페이스를 매개변수 자리에 넣어보자 (리턴값이 없으므로 void)
interface Student4 {
    id: number;
    name: string;
    age: number;
    readonly gender: string;
    subject: string;
    courseCompleted: boolean;
}
function getStudentDetatils4(student: Student4): void{
    // student.gender = 'female'; -> readeonly이기 때문에 재 할당 할 수 없음
}
getStudentDetatils4(
    {
        id: 2,
        name: 'hyun',
        age: 30,
        gender: 'male',
        subject: '남자다',
        courseCompleted: true
    }
);

//화살표 함수로는 어떻게 표현하나?
const getStudentDetatils5 = (): Student4 => {
    return {
        id: 3,
        name: 'hyun',
        age: 30,
        gender: 'male',
        subject: '남자다',
        courseCompleted: true
    }
}
// console.log(getStudentDetatils5());

//enum과 리터럴 타입
enum Enum1 {
    male,  //이렇게 작성하면 타입이 넘버다.
    female = 'female', //이렇게 작성하면 타입이 문자다.
}
interface Student5 {
    id: number;
    name: string;
    age: number;
    gender: 'male' | 'female' | 'genderless'; //리터럴 타입은 오토컴플릿을 제공
    subject: string;
    courseCompleted: boolean;
}
function getStudentDetatils6(): Student5 {
    return {
        id: 123123,
        name: '이넘~~~~',
        age: 30,
        // gender: Enum1.female, //타입이 male은 넘버, female은 문자가 된다.
        gender: "genderless",
        subject: '이넘@@@@',
        courseCompleted: true
    }
}
console.log(getStudentDetatils6().gender);

//유니언 타입 (파이프로 구분을 해줌 |)
let price: number | string = 5;
price = 'free';
price = 1;
// price = true; 에러다

type StrOrNum = number | string; // 타입 앨리어시스라고 부른다.
let itemPrice: number;

function print1(x: StrOrNum): void {
    // itemPrice = x; -> 에러가 표시된다. 타입이 두가지라고 했기에 if문으로 narrowing 해야하는듯?
    // typeof operator로 구분해 주어야함
    if(typeof x === 'string'){
        itemPrice = 0;
    } else {
        itemPrice = x;
    }
}
print1(20);

// 함수에 타입을 명시할 때 선택적 매개변수는 필수 매개변수 뒤에 와야한다!!!
// 매개변수가 필수 요소가 아닐땐 물음표 처리를 하거나 default 매개변수로 지정할 것!!!
// default 매개변수로 등록해 놓으면 기본적으로 해당 값을 토대로 타입을 추론한다.
function select1(get1: number, get2?: string, get3 = 'there'):void {
    console.log(get1, get3);
}
select1(100);

// Class문법과의 상관관계 1
class Ex1 {
    name: string;
    age: number;

    getEx1 = ():void => {
        console.log(`내 이름은 ${this.name}이고 나이는 ${this.age}살입니다.`);
    }
}
let ExPrint1: Ex1 = new Ex1();
ExPrint1.name = 'SIMBA';
ExPrint1.age = 4;
ExPrint1.getEx1();

// Class문법과의 상관관계 2 - constructor를 사용해서 초기화하기****
// *외부로 부터 접근을 통제하기 위해 Access Modifiers를 사용해보자*
// 3가지 키워드가 존재 -> Public / Private / Protected
// 클래스 내부 메소드는 기본적으로 Public이다.
class Ex2 {
    private _name: string;
    age: number;
    protected gender: string;
    
    //필수 매개변수가 아니라면 물음표를 붙여라
    constructor(name: string, age: number, gender?: string){
        this._name = name;
        this.age = age;
    }
    get name(){
        return this._name;
    }
    set name(value){
        this._name = value;
    }
    public getEx2 = ():void => {
        console.log(`내 이름은 ${this._name}이고 나이는 ${this.age}살입니다.`);
    }
}
let ExPrint2: Ex2 = new Ex2('SIMBA', 4);
console.log(ExPrint2.name); //getter로 접근했다!
ExPrint2.name = 'SON'; //setter로 접근했다!
//ExPrint2.gender = 'male'; -> protected property이기 때문에 외부 접근불가!!!
ExPrint2.getEx2();

// ExPrint2.name = 'SON'; -> private property이기 때문에 외부에서 접근 불가하다!!!
// 그럼 위처럼 외부접근이 불가능할때는 어떻게 접근해서 변경할까?
// 위 의문을 해결해주기 위해 타입스크립트에서는 getter & setter를 지원한다!!!!
// 우선 private가 적용된 변수는 앞에 언더바를 추가한다.(암묵적 룰임)

// public : 클래스의 멤버 함수에서 접근 가능, 자식 클래스의 멤버 함수에서 접근 가능, 외부에서 접근 가능.
// protected : 클래스의 멤버 함수에서 접근 가능, 자식 클래스의 멤버 함수에서 접근 가능, 외부에서 접근 불가능.
// private : 클래스의 멤버 함수에서 접근 가능, 자식 클래스의 멤버 함수에서 접근 불가능, 외부에서 접근 불가능.


//타입스크립트에서 HTML DOM을 조작하는 방법! (이벤트 포함)
const link1 = document.querySelector('#link');
const btn1 = document.querySelector('#button');

//총 다섯가지 방법으로 narrowing 할 수 있다.
if(link1 != null){
    link1.innerHTML = '나는 첫번째 방법!';
}
if(link1 instanceof Element){
    link1.innerHTML = '나는 두번째 방법!';
}
//세번째 방법은 선언문 뒤에 as Element 붙이기 (일명 Type assertion)
//as 는 자주 사용하지 않는 것이 좋음 (미리 확정지어버리기 때문)
if(link1?.innerHTML != undefined){
    link1.innerHTML = '나는 네번째 방법!';
}
//다섯째 방법 - 태그마다 수식어가 다르다! (a, div, btn...)
if(link1 instanceof HTMLAnchorElement){
    link1.href = 'https://kakao.com';
}
//태그에 이벤트를 등록하기 위한 방법!
//첫번째
// if(btn1 instanceof HTMLButtonElement){
//     btn1.addEventListener('click', () => {
//         alert('click!!!');
//         location.href = 'https://naver.com';
//         // location.reload();
//         // history.go(-1);
//     })
// }
//두번째 - 간결
let cnt:number = 0;
btn1?.addEventListener('click', (e) => {
    // alert('click!!!');
    // location.href = 'https://naver.com';
    // location.reload();
    // history.go(-1);
    cnt++;
    if(cnt % 2 == 1){
        showAPI();
    } else {
        (document.querySelector('#listZone') as HTMLUListElement).innerHTML = '';
    }
})

//tsc에서 fetch 사용해보자
let jsonURL:string = 'https://jsonplaceholder.typicode.com/comments';
let output1:string = '';

//인터페이스1
interface List1 {
    id:number;
    name:string;
    email:string;
    body:string;
}

//get 방식
let showAPI = () => {
fetch(jsonURL)
.then((res) => 
    res.json()
)
.then((data) => {
    let ulMain = document.querySelector('#listZone');
    if(ulMain instanceof HTMLUListElement){ //DOM 컨트롤 시 명시해 주어야 함
        data.map((list: List1) => {
            output1 += `<li>`;
            output1 += `<p>${list.id}</p>`;
            output1 += `<p>${list.name}</p>`;
            output1 += `<p>${list.email}</p>`;
            output1 += `<p>${list.body}</p>`;
            output1 += `</li>`;
        })
        ulMain.innerHTML = output1;
    }
})
};

//post 방식
fetch(jsonURL, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        title: "Test",
        body: "I'm Testing!",
        userId: 1,
    }),
})
.then((res) => 
    res.json()
)
.then((data) => 
    console.log(data)
)

const player = {
    age: 12
}
player.age = 15;

type tuple1 = [number, string];
type tuple2 = {
    [key in string]: string;
};

const they:tuple2[] = [
    {
        name: '10', 
        bar: 'hyun'
    }
];