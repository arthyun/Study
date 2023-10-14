import React from "react";
import Sidebar from "./Sidebar";

const Header = () => {
   return (
      <header style={{ width: "100%", borderBottom: "1px solid #fff", padding: "20px 30px" }}>
         <Sidebar />
      </header>
   );
};

export default Header;
