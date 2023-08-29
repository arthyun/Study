import React from 'react';
import { createPortal } from 'react-dom';
import { useRecoilValue } from 'recoil';
import { testStore } from '../store';

const PopupPortal = ({ children }) => {
    const target = document.getElementById('popup-root');
    return createPortal(children, target);
}

const Popup = () => {
    // 테스트용 상태
    const recoilCnt = useRecoilValue(testStore);

    return (
        <>
          <PopupPortal>
            <style>
              {` #root {display: none;} `}
            </style>
            
            <div style={{margin: '1rem'}}>
              <h2>{recoilCnt}</h2>
            </div>
          </PopupPortal>
        </>
    )
}
    

export default Popup;