import jsonData from '../Question.json';
import React from 'react';

interface inputProps {
    cnt : number;
}

function Content(props: inputProps){
    interface QuizStr1 {
        id: number;
    }
    interface QuizStr2 extends QuizStr1 {
        exam: string;
    }
    let data: QuizStr2[] = jsonData.quiz;

    // console.log(data[props.cnt].exam);

    return (
        <div className='contentArea'>
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
                <p> <strong>{data[props.cnt].id}.</strong>&nbsp;&nbsp;
                    {data[props.cnt].exam}
                </p>
            </li>
            <br/>
            <textarea className='textArea' />
            </ul>
        </div>
    );
}

export default Content;