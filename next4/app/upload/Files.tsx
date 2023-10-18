"use client";
import axios, { AxiosResponse } from "axios";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Files = () => {
   const [img, setImg] = useState<Blob | null>(null);
   const [imgToBase64, setImgToBase64] = useState<string>("");
   const imgRef = useRef<HTMLInputElement>(null);
   // const [imgUrl, setImgUrl] = useState<string>("");

   const onChangeFile = (e: React.ChangeEvent<{ files: FileList | null }>) => {
      if (e.target.files && e.target.files.length > 0) {
         const file = e.target.files[0];
         setImg((_pre) => file);
      }
   };

   const imgRendering = () => {
      //window FileReader 사용
      const reader = new window.FileReader();
      if (img) {
         reader.readAsDataURL(img);
         reader.onloadend = () => {
            const base64 = reader.result;
            if (base64) {
               //base64를 string으로 변환하여 state 변경
               setImgToBase64((_pre) => base64.toString());
            }
         };
         reader.onerror = () => {
            alert("upload error!!"); //실패시
         };
      }
   };

   useEffect(() => {
      //useEffect cleanup 언마운트시 실행
      return imgRendering();
   }, [img]); //img가 바뀔때만 실행

   //미리보기 리셋
   const imgReset = () => {
      setImg((_pre) => null);
      setImgToBase64((_pre) => "");
   };

   // 전송
   const send = async () => {
      if (imgRef.current && imgRef.current.files && imgRef.current.files.length > 0) {
         const formData = new FormData();
         formData.append("img", imgRef.current.files[0]);
         formData.append("title", "title");
         const result: AxiosResponse<{ message: string }> = await axios.post("/api/getFiles", formData, {
            headers: {
               "Content-Type": "multipart/form-data",
            },
         });
         console.log(result);
         //보내고 나면 리셋
         imgReset();
      }
   };

   console.log("첨부파일: ", img);
   console.log("첨부경로: ", imgToBase64);

   return (
      <>
         <form style={{ margin: "15px 0" }}>
            <label
               style={{ display: "block", margin: "15px 15px 15px 0" }}
               htmlFor="files"
            >
               파일 첨부하기
            </label>
            <input
               id="files"
               type="file"
               ref={imgRef}
               onChange={onChangeFile}
            />
            <button
               type="button"
               onClick={imgReset}
            >
               삭제하기
            </button>
         </form>
         {/* imgToBase64 있을때만 미리보기와 send버튼이 활성화 */}
         {imgToBase64 && (
            <div>
               <Image
                  src={imgToBase64} //base64를 직접 img src로 쓸 수 있다.
                  alt="preview-img"
                  width={322}
                  height={84}
                  priority
               />
               <button onClick={send}>submit</button>
            </div>
         )}
      </>
   );
};

export default Files;
