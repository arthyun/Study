import React from "react";
// import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Header />}
        >
          <Route
            index
            element={<Home />}
          />
          {/* <Route
            path="/about"
            element={<About />}
          /> */}
          {/* <Route
            path="/task"
            element={<Task />}
          /> */}
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
