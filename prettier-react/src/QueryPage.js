import React, { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getData } from "./my-api";

const QueryPage = () => {
  const [data, setData] = useState([]);

  const queryClient = useQueryClient();

  const getFetch = useQuery({
    queryKey: ["get"],
    queryFn: () => getData(1),
    onSuccess: (e) => setData(e),
    onError: () => {
      throw new Error("update Error!");
    },
  });
  if (getFetch.isLoading) {
    return <h1>Loading...</h1>;
  }
  if (getFetch.error) {
    return "An error has occured: " + getFetch.error.message;
  }

  return (
    <div>
      <button onClick={() => console.log(data)}>GET</button>
    </div>
  );
};

export default QueryPage;
