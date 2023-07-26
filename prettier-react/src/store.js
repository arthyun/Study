import React, { createContext } from "react";

export const TestContext = createContext();

const TestStore = ({ children }) => {
  const data = {
    name: "hyun",
    company: "k2",
    team: "cloud",
    email: "son@k2systems.kr",
    address: "판교",
  };
  return <TestContext.Provider value={data}>{children}</TestContext.Provider>;
};

export default TestStore;
