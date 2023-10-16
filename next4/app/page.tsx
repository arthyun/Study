import React from "react";

interface Result {
   ID: number;
   CONTENT: string;
   CREATE_AT: string;
   UPDATE_AT: string;
}

export default async function Home() {
   const getMemos = await fetch("http://localhost:3000/api/getMemos");
   const result = await getMemos.json();
   console.log(result);

   return (
      <div>
         <h3>HelloWorld</h3>
         {result?.map((item: Result) => {
            return (
               <ul
                  key={item.ID}
                  style={{ margin: "17.5px" }}
               >
                  <li>{item.CONTENT}</li>
                  <li style={{ fontSize: "12px" }}>{item.CREATE_AT}</li>
                  <li style={{ fontSize: "12px" }}>{item.UPDATE_AT}</li>
               </ul>
            );
         })}
      </div>
   );
}
