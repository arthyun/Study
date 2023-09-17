import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Task from "./components/Task";

const AppRouter = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Header />}
      >
        <Route path="sub1">
          <Route
            path="home"
            element={<Home />}
          />
        </Route>
        <Route path="sub2">
          <Route
            path="about"
            element={<About />}
          />
        </Route>
        <Route path="sub3">
          <Route
            path="task"
            element={<Task />}
          />
        </Route>
        {/* <Route
            path="/about"
            element={<About />}
          />
          <Route
            path="/task"
            element={<Task />}
          /> */}
      </Route>
    </Routes>
  );
};

export default AppRouter;
