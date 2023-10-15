"use client";
import Image from "next/image";
import React, { useState } from "react";

const Files = () => {
   const [file, setFile] = useState("");

   //    const encodeFileToBase64 = (fileBlob) => {
   //       const reader = new FileReader();
   //       const result = reader.readAsDataURL(fileBlob);
   //       console.log(result);
   //         return new Promise((resolve) => {
   //            reader.onload = () => {
   //               setFile(reader.result);
   //               resolve();
   //            };
   //         });
   //    };

   const onChangeFile = async (e: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
      if (e.target && e.target.files) {
         const reader = new FileReader();
         reader.readAsDataURL(e.target.files[0]);
         try {
            await new Promise<void>((resolve) => {
               reader.onload = () => {
                  setFile(reader.result as string);
                  resolve();
               };
            });
         } catch (error) {
            console.error("An error occurred:", error);
         }
      }
   };

   return (
      <>
         <form style={{ margin: "0 0 15px 0" }}>
            <label
               style={{ display: "block", margin: "15px 15px 15px 0" }}
               htmlFor="files"
            >
               이미지 파일 첨부하기
            </label>
            <input
               id="files"
               type="file"
               onChange={onChangeFile}
            />
         </form>
         {file && (
            <Image
               src={file}
               alt="preview-img"
               width={322}
               height={84}
               priority
            />
         )}
      </>
   );
};

export default Files;
