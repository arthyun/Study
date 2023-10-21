"use client";

import React, { useRef, useState } from "react";
import { Cropper, ReactCropperElement } from "react-cropper"; // Crop library
import imageCompression from "browser-image-compression"; // Compression library
import "cropperjs/dist/cropper.css"; // css도 import 해야 크롭 화면이 정상적으로 동작
import Image from "next/image";

interface PropsType {
   children: React.ReactNode;
   aspectRatio?: number;
   onCrop(image: string): void;
}

// 이미지 자르기 컴포넌트
const CropComponents = ({ children, aspectRatio, onCrop }: PropsType) => {
   const [image, setImage] = useState<null | string>(null);
   const inputRef = useRef<HTMLInputElement>(null);
   const cropperRef = useRef<ReactCropperElement>(null);

   const handleChildrenClick = () => {
      if (inputRef.current) inputRef.current.click();
   };

   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();

      const files = e.target.files;

      if (!files) return;

      const reader = new FileReader();
      reader.onload = () => {
         setImage(reader.result as string);
      };
      reader.readAsDataURL(files[0]);
   };

   const getCropData = () => {
      if (typeof cropperRef.current?.cropper !== "undefined") {
         onCrop(cropperRef.current?.cropper.getCroppedCanvas().toDataURL());
         setImage(null);
      }
   };

   return (
      <>
         <input
            type="file"
            ref={inputRef}
            style={{ display: "none" }}
            onChange={handleFileChange}
         />
         <span onClick={handleChildrenClick}>{children}</span>
         {image && (
            <div className="container">
               <div className="backdrop" />
               <div className="modal">
                  <h3>이미지 편집하기</h3>
                  <div className="content-wrapper">
                     <div className="content">
                        <Cropper
                           ref={cropperRef}
                           aspectRatio={aspectRatio}
                           src={image}
                           viewMode={1}
                           width={800}
                           height={500}
                           background={false}
                           responsive
                           autoCropArea={1}
                           checkOrientation={false}
                           guides
                        />
                     </div>
                  </div>
                  <div className="footer">
                     <button onClick={() => setImage(null)}>취소</button>
                     <br />
                     <button
                        className="crop"
                        onClick={getCropData}
                     >
                        적용하기
                     </button>
                  </div>
               </div>
            </div>
         )}
      </>
   );
};

// 최종 정리 컴포넌트
const MainCropper = () => {
   const [convertedFile, setConvertedFile] = useState<string | null>(null); // cropped 된 이미지
   const [isLoading, setIsLoading] = useState(false); // 압축 중 로딩용

   // 이미지 적용 전 압축하는 함수
   // const compressImage = async (convertedFile: string) => {
   //    if (isLoading) return;
   //    setIsLoading(true);

   //    const base64Data = convertedFile;
   //    const base64 = await fetch(base64Data);
   //    const blob = await base64.blob();

   //    const options = {
   //       maxSizeMB: 2,
   //       maxWidthOrHeight: 1920,
   //    };

   //    try {
   //       const compressedFile = await imageCompression(blob, options);
   //       setIsLoading(false);
   //       return console.log(compressedFile);
   //    } catch (error) {
   //       setIsLoading(false);
   //       console.log(error);
   //    }
   // };

   // 이미지 자르기 함수
   const onCrop = (image: string): void => {
      setConvertedFile(image);
   };

   return (
      <>
         <CropComponents onCrop={onCrop}>
            {convertedFile !== null && (
               <Image
                  src={convertedFile}
                  width={500}
                  height={225}
                  alt="Cropped Images"
               />
            )}
            <button type="button">이미지 자르기</button>
         </CropComponents>
         <br />
         <br />
         {/* {convertedFile !== null && (
            <button
               type="button"
               onClick={() => compressImage(convertedFile)}
            >
               이미지 압축하기
            </button>
         )} */}
      </>
   );
};

export default MainCropper;
