import { ChangeEvent, FormEvent } from "react";

export interface AllTypes {
    submitHandle?: (e: FormEvent<HTMLFormElement>) => void,
    changeHandle?: (e: ChangeEvent<HTMLInputElement>) => void,
    bringUser?: {id: string, pass: string},
    isLogin?: (a: boolean) => void,
    openNav?: () => void,
}