import React, { useState } from 'react';


const KyeolJae = ({ modalOpen, setValue }) => {
  const [firstRow, setFirstRow] = useState(['김재준','송영환','오은택','김명래','손현호']);
  const [secondRow, setSecondRow] = useState([]);

  // const onSelectName = (selectedName) => {
  //   if (secondRow.includes(selectedName)) {
  //     alert('중복된 값입니다.');
  //   } else {
  //     setSecondRow(prev => [...prev, selectedName]);
  //   }
  // };

  //성능향상을 위한 some() 메소드 활용
  const onSelectName = (selectedName) => {
    const isError = secondRow.some(item => item === selectedName);
  
    if (isError) {
      alert('중복된 값입니다.');
    } else {
      setSecondRow(prev => [...prev, selectedName]);
    }
  };

  const onUpHandle = (text) => {
    const thirdRow = [...secondRow];
    const selectedIndex = thirdRow.indexOf(text);

    if (selectedIndex !== -1 && selectedIndex > 0){
      [thirdRow[selectedIndex], thirdRow[selectedIndex - 1]] = 
      [thirdRow[selectedIndex - 1], thirdRow[selectedIndex]];
    }
    setSecondRow(thirdRow);
  };

  const ondownHandle = (text) => {
    const thirdRow = [...secondRow];
    const selectedIndex = thirdRow.indexOf(text);

    if (selectedIndex !== -1 && selectedIndex < thirdRow.length - 1){
      [thirdRow[selectedIndex], thirdRow[selectedIndex + 1]] = 
      [thirdRow[selectedIndex + 1], thirdRow[selectedIndex]];
    }
    setSecondRow(thirdRow);
  };
  


  return (
    <>
      <div className='kyeoljae' onClick={modalOpen}></div>

      <div className='mainWrap'>
        <div>
          <h3>결재자</h3>
          <ul className='firstUl'>
            {
              firstRow.map((name, i) => {
                return (
                  <li key={i} onDoubleClick={() => onSelectName(name)}>{name}</li>
                )
              })
            }
          </ul>
        </div>
        <div>
          <h3>결재선</h3>
          <ul className='secondUl'>
            {
              secondRow.map((renderName, i) => {
                return (
                  <li key={i}>{renderName} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span onClick={() => onUpHandle(renderName)}>⬆</span>&nbsp;&nbsp;&nbsp;
                  <span onClick={() => ondownHandle(renderName)}>⬇</span>
                  </li>
                )
              })
            }
          </ul>
        <button onClick={() => {
          setValue('name', secondRow[0]);
          modalOpen();
        }}>저장</button>
        </div>
      </div>
      
      
      <style jsx='true'>
        {`
          .kyeoljae {
            position: absolute;
            left: 0;
            top: 0;
            z-index: 100;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
          }
          .mainWrap {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            z-index: 110;
            display: flex;
            gap: 50px;
            justify-content: center;
            background: #fff;
            width: 600px;
            height: 500px;
          }
          span {
            display: inline-block;
            text-align: center;
            width: 20px;
            height: 20px;
            cursor: pointer;
          }
          span:hover {
            background: red;
            color: #fff;
            border-radius: 100px;
          }
          .firstUl,
          .secondUl {
            width: 200px;
            height: 400px;
            border: 1px solid #333;
            padding: 15px;
            box-sizing: border-box;
          }
          .firstUl > li:hover {
            background: #0081cc;
            color: #fff;
          }
        `}
      </style>
    </>
  );
}

export default KyeolJae;
