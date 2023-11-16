import React from "react";
import { useRecoilState } from "recoil";
import { userStoreAtom, userStoreSelector } from "../store";

const About = () => {
   const [userStoreValue, setUserStoreValue] = useRecoilState<number>(userStoreAtom);
   const [storeSelector, setStoreSelector] = useRecoilState<number>(userStoreSelector);

   return (
      <div className="aboutWrap">
         <h1>초기값 : {userStoreValue}</h1>
         <button
            type="button"
            onClick={() => setUserStoreValue(userStoreValue + 1)}
         >
            초기값 변경하기
         </button>
         <h1>셀렉트 : {storeSelector}</h1>
         <button
            type="button"
            onClick={() => setStoreSelector((prev) => prev)}
         >
            셀렉트 변경하기
         </button>
      </div>
   );
};

export default About;
