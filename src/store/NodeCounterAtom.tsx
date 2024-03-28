import { atom } from "recoil";

export interface NodeAttributes{
    data: number,
    next: string
}


export const NodeAtom = atom({
    key: 'NodeAtom',
    default: [] as NodeAttributes[]
})