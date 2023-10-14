"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import styles from "../page.module.css";
import { usePathname, useRouter } from "next/navigation";

// Recoil
import { useRecoilState } from "recoil";
import { loginStore } from "../store/Recoil";

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
   const [isLogin, setIsLogin] = useRecoilState<boolean>(loginStore);
   const router = useRouter();

   if (typeof window !== "undefined") {
      const userInfo = localStorage.getItem("userInfo");
      console.log(userInfo);
   }

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
