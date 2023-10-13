"use client";
import React from "react";
import axios from "axios";

const page: React.FC = () => {
  return (
    <button
      type="button"
      onClick={async () => {
        const response = await axios.get("/api/getTest");
        const result = response;
        console.log(result);
      }}
    >
      바보
    </button>
  );
};

export default page;
