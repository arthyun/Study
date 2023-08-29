import React from 'react';
import { createPortal } from 'react-dom';
import { useRecoilValue } from 'recoil';
import { testStore } from '../store';

const PopupPortal = ({ children }) => {
    const target = document.getElementById('popup-root');
    return createPortal(children, target);
}

const Popup = () => {
    // 테스트용 상태 - 유지 안됌...
    const recoilCnt1 = useRecoilValue(testStore);

    // 로컬스토리지에서 값을 가져와서 대체
    const recoilCnt2 = localStorage.getItem('recoilValue');

    return (
        <>
          <PopupPortal>
            <style>
              {` #root {display: none;} `}
            </style>
            
            <div style={{margin: '1rem'}}>
              <h2>{recoilCnt2}</h2>
            </div>
          </PopupPortal>
        </>
    )
}
    

export default Popup;