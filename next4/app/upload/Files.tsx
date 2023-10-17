"use client";
import axios from "axios";
import Image from "next/image";
import React, { FormEvent, useState } from "react";

const Files = () => {
   const [file, setFile] = useState<File[]>([]);
   const [path, setPath] = useState<string>("");

   const encodeFileToBase64 = (fileBlob: Blob): Promise<void> => {
      const reader = new FileReader();
      const result = reader.readAsDataURL(fileBlob);
      // console.log(result);
      return new Promise((resolve) => {
         reader.onload = () => {
            setPath(reader.result as string);
            resolve();
         };
      });
   };

   const onChangeFile = async (e: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
      if (e.target && e.target.files) {
         const selectedFiles = Array.from(e.target.files);
         setFile(selectedFiles);
         encodeFileToBase64(e.target.files[0]);
      }
   };

   const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append("File", file[0]);
      try {
         const response = await fetch("http://localhost:3000/api/getFiles", {
            method: "POST",
            headers: {
               "Content-Type": "multipart/form-data",
            },
            body: formData,
         });
         const result = await response.json();
         console.log(result);
         // return Response.json(result);
      } catch (err) {
         console.error(err);
      }
   };

   return (
      <>
         <form
            style={{ margin: "15px 0" }}
            onSubmit={onSubmit}
         >
            {path !== "" && (
               <Image
                  src={path}
                  alt="preview-img"
                  width={322}
                  height={84}
                  priority
               />
            )}
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
            <button type="submit">서버로 전송</button>
         </form>
      </>
   );
};

export default Files;
