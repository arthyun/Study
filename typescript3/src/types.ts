import { ChangeEvent, FormEvent, MouseEvent } from "react";

export interface AllTypes {
    changeHandle?: (e: ChangeEvent<HTMLInputElement>) => void,
    submitHandle?: (e: FormEvent<HTMLFormElement>) => void,
    depthHandle?: (e: MouseEvent<HTMLAnchorElement>) => void,    
    bringUser?: {id: string, pass: string},
    isLogin?: (a: boolean) => void,
    openNav?: () => void,
}