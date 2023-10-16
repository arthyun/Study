"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import styles from "../../app/styles/page.module.css";
import { useParams, usePathname, useRouter } from "next/navigation";
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
   // const router = useRouter();
   const pathname: string | null = usePathname();
   // const [isLogin, setIsLogin] = useRecoilState<boolean>(loginStore);

   // useEffect(() => {
   //    isLogin ? router.push("/") : router.push("/login");
   //    console.log(isLogin);
   //    // getData();
   // }, [isLogin]);

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
               <Link
                  href="/upload"
                  style={pathname === "/upload" ? { color: "orange" } : { color: "white" }}
               >
                  Upload
               </Link>
            </li>
            <li>
               <Link
                  href="/crop"
                  style={pathname === "/crop" ? { color: "orange" } : { color: "white" }}
               >
                  Crop
               </Link>
            </li>
         </ul>
      </Nav>
   );
};

export default Sidebar;
