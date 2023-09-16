import React, { useEffect, useState } from "react";
import Sub1 from "./Sub1";

interface AppTypes {
  getTestApi: () => void;
}

const Home = () => {
  const [imgSrc, setImgSrc] = useState<never[]>([]);

  const getTestApi: AppTypes["getTestApi"] = async () => {
    const response = await fetch("http://localhost:5000/api/user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
    const result = response;
    return setImgSrc(result);
  };

  useEffect(() => {
    getTestApi();
  }, []);

  return (
    <div>
      <Sub1 data={imgSrc} />
    </div>
  );
};

export default Home;
