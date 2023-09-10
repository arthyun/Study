import { ChangeEvent, FormEvent, MouseEvent } from "react";

export interface AllTypes {
    count? : number,
    // navOpenClose: () => void,
    changeHandle?: (e: ChangeEvent<HTMLInputElement>) => void,
    submitHandle?: (e: FormEvent<HTMLFormElement>) => void,
    depthHandle?: (e: MouseEvent<HTMLAnchorElement>) => void,    
    bringUser?: {id: string, pass: string},
    isLogin?: (prev: boolean) => boolean;
    openNav?: () => void
}

export interface Userinfo {
    id: string,
    date: string,
    hour: string | number,
    minute: string | number,
    emergency: boolean,
    notice: boolean,
}