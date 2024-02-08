import { LargeNumberLike } from "crypto"

export type Person = {
    id: number | undefined;
    firstName: string | undefined, 
    surname?: string | undefined,
    birthAt?: Date | undefined,
    deathAt?: Date | undefined,
    middlename?: string | undefined,
    nee? : string | undefined,
    isConfident: Boolean | undefined,
}