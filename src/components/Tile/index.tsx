"use client";

import Link from "next/link";
import styles from "./tile.module.css";
import Image from 'next/image';
import EditButton from "../EditButton";

export default function Tile(props: any) {
    return (
    <div className= "{styles.container} shadow-md shadow-slate-800 rounded border-slate-700 border-2 hover:bg-slate-800">
        <div>
        <Link href={`/members/${props.id}`}>
            <h2>{props.firstName}</h2>
            <h3>{props.surname}</h3>
        </Link>
        </div>
        <EditButton />
    </div>
    )
}