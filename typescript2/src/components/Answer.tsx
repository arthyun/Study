import jsonData from '../Question.json';
import React from 'react';
import '../Answer.scss';

function Answer(){
    interface QuizStr1 {
        id: number;
    }
    interface QuizStr2 extends QuizStr1 {
        exam: string;
        answer: string;
    }
    let data: QuizStr2[] = jsonData.quiz;

    return (
        <div className='answerArea'>
            <h2>해설</h2><br/>
            
            <div className='answerZone'>
                <ul>
                {
                    data.map(li => {
                        return (
                            <li key={li.id}>
                                <dl>
                                    <dt>
                                        <strong>{li.id}. </strong> 
                                        {li.exam}
                                    </dt>
                                    <dd>{li.answer}</dd>
                                </dl>
                            </li>
                        );
                    })
                }
                </ul>
            </div>
            <footer>
                <address>
                    End line
                </address>
            </footer>
        </div>
    );
}

export default Answer;