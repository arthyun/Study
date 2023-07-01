import { useDispatch, useSelector } from "react-redux";
import { increaseCnt } from '../store';


export default function Sub1(){
    const dispatch = useDispatch();

    const selectReduxState = useSelector(state => state.first.cnt);

    const increaseHandle = (num) => {
        dispatch(increaseCnt(num));
        console.log('클릭 완료3');
    };


    return (
        <div style={{ background: '#555' }}>
            <h3>Sub1 Pages</h3>

            <p style={{ display: 'inline-block', marginRight: '1rem' }}>{selectReduxState}</p>
            <button onClick={() => increaseHandle(1)}>INCREASE</button>
        </div>
    )
}