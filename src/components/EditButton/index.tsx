"use client";

import Link from "next/link";
import styles from "./edit-button.module.css";
import Image from 'next/image';
import logo from "../../../public/ft-logo.svg";
import { useState } from "react";

export default function EditButton(props: any) {
    const [edit, setEdit] = useState(false);
    return (
    <div>
        {!edit ? 
        <button onClick={() => setEdit(!edit)}> edit</button> : 
        <div>
            <button onClick={() => setEdit(!edit)}>
                save
            </button>
            <button></button>
        </div>
        }
    </div>
    )
}