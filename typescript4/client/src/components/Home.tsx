import React, { useEffect, useState } from "react";
import Sub1 from "./Sub1";

interface AppTypes {
  getTestApi: () => Promise<void>;
  getDbApi: () => Promise<void>;
  dbData1: {
    ID: number;
    CONTENT: string;
    CREATE_AT: string;
    UPDATE_AT: string;
  }[];
}

const Home = () => {
  const [imgSrc, setImgSrc] = useState<never[]>([]);
  const [dbData1, setDbData1] = useState<AppTypes["dbData1"]>([]);

  // 유저리스트 호출
  const getTestApi: AppTypes["getTestApi"] = async () => {
    const response = await fetch("/api/user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
    const result = response;
    return setImgSrc(result);
  };

  // DB 초기값 호출
  const getDbApi: AppTypes["getDbApi"] = async () => {
    const response = await fetch("/api/database", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
    const result = response;
    console.log(result);
    return setDbData1(result);
  };

  // 렌더링 직후 호출
  useEffect(() => {
    getTestApi();
    getDbApi();
  }, []);

  return (
    <div>
      Home
      <Sub1 data={imgSrc} />
      {dbData1.map((item, index) => {
        return (
          <ul
            key={index}
            style={{ listStyle: "none", textAlign: "start" }}
          >
            <li style={{ fontWeight: "bold" }}>번호: {item.ID}</li>
            <li>내용: {item.CONTENT}</li>
            <li>생성날짜: {item.CREATE_AT}</li>
            <li>업데이트날짜: {item.UPDATE_AT}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default Home;
