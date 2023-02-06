import jsonData from '../Question.json';
import React, { useState } from 'react';

// interface inputProps {
//     cnt : number;
// }

function Content(){
    interface QuizStr1 {
        id: number;
    }
    interface QuizStr2 extends QuizStr1 {
        exam: string;
        answer: string;
    }
    let data: QuizStr2[] = jsonData.quiz;

    // console.log(data[props.cnt].exam);

    //state에 타입을 지정할때는 useState<제네릭>으로 지정해줄 것!
    const [cnt, setCnt] = useState<number>(0);

    return (
        <div className='contentArea'>
            <h2>FE 면접 랜덤 문제풀이</h2><br/>

            <button onClick={() => {
                setCnt(Math.floor(Math.random() * 81));
                let area1 = document.querySelector('.textArea');
                if(area1 instanceof HTMLTextAreaElement){
                    area1.value = '';
                }
            }}>문제 주세요~!</button>

            <ul>
            {/* {
                data.map((li) => {
                    return (
                    <li key={li.id}>
                    <p>{li.exam}</p>
                    </li>)
                })
            } */}
            <li>
                <p> 
                    <strong>{data[cnt].id}.</strong>&nbsp;&nbsp;
                    {data[cnt].exam}
                </p>
            </li>
            <br/>
            <textarea className='textArea' />
            </ul>
        </div>
    );
}

export default Content;