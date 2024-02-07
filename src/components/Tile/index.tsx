"use client";

import Link from "next/link";
import EditButton from "../EditButton";
import LockButton from "../LockButton";
import { useState } from "react";

export default function Tile(props: any) {
    const [edit, setEdit] = useState(false);
    const onChange = () => {
        setEdit(!edit)
      };

    return (
    <div className= "{styles.container} shadow-md shadow-slate-800 rounded border-slate-700 border-2 hover:bg-slate-800">
        {edit ?
        <p>in edit mode</p>
         :
         <div>
        <Link href={`/members/${props.id}`}>
            <h2>{props.firstName}</h2>
            <h3>{props.surname}</h3>
        </Link>
        </div>}
        
        <EditButton isEditing={edit} setEdit={setEdit}/>
        <LockButton />
    </div>
    )
}