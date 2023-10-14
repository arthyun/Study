"use client";

import { ReactNode } from "react";
import { RecoilRoot, atom } from "recoil";

type Props = {
   children: ReactNode;
};

export default function Recoil({ children }: Props) {
   return <RecoilRoot>{children}</RecoilRoot>;
}

export const loginStore = atom({
   key: "",
   default: false,
});
