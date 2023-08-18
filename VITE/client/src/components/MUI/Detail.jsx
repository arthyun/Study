import React from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const params = useParams();
  //   console.log(params.id);

  return (
    <>
      <h1>나는 상세페이지 입니다.</h1>
      <p>전달받은 값 : {params.id}</p>
    </>
  );
};

export default Detail;
