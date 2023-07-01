import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCnt } from '../store';


const ReduxTest = () => {
    const dispatch = useDispatch();
    type RootRedux = {
        reduxTest: {
            cnt: number,
            name: string,
            boolean: boolean,
        }
    };
    const counterSelector = useSelector((state:RootRedux) => state.reduxTest.cnt);


    return(
        <div>
            <button onClick={() => dispatch(increaseCnt(1))}>
            count is {counterSelector}
            </button>
        </div>
    )
}