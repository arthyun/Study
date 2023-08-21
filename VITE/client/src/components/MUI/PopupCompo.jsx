import React from 'react';

// 팝업 내에 보여질 컴포넌트
const PopupCompo = ({ params }) => {
  // 클릭 이벤트
  const clickEvent1 = () => {
    alert('나를 눌렀습니다.');
  };

  return (
    <div>
      <h1>나는 팝업입니다.</h1>
      <button onClick={clickEvent1}>버튼</button>

      <ul>
        <li>
          <p>{params.id}</p>
        </li>
        {/* {popupData.map((item, i) => {
          return (
            <li key={i}>
              <p>{item.id}</p>
              <p>{item.title}</p>
              <p>{item.body}</p>
            </li>
          );
        })} */}
      </ul>
    </div>
  );
};

export default PopupCompo;
