"use client";

import React from "react";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import styles from "../page.module.css";

const Nav = styled.nav`
   ul {
      display: flex;
      gap: 30px;
      list-style: none;
   }
   ul li a {
      font-size: 16px;
      /* font-weight: bold; */
      &:hover {
         color: orange;
      }
   }
`;

const Sidebar = () => {
   // if (typeof window !== "undefined") {
   //    const userInfo = localStorage.getItem("userInfo");
   //    console.log(userInfo);
   // }

   return (
      <Nav>
         <ul>
            <Link href="/">
               <Image
                  src="./next.svg"
                  alt="next Logo"
                  className={styles.vercelLogo}
                  width={100}
                  height={20}
                  priority
               />
            </Link>
            <li>
               <Link href="/upload">Upload</Link>
            </li>
            <li>
               <Link href="/crop">Crop</Link>
            </li>
         </ul>
      </Nav>
   );
};

export default Sidebar;
