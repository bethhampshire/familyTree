import { LargeNumberLike } from "crypto"

export type Person = {
    id: number,
    name: string, 
    surname?: string,
    birthAt?: Date,
    deathAt?: Date,
    middlename?: string,
    nee? : string,
    isConfident: Boolean,
}