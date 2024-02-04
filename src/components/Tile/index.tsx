"use client";

import Link from "next/link";
import styles from "./tile.module.css";
import Image from 'next/image';

export default function Tile(props: any) {
    return (
    <div className={styles.container}>
        <div>
            <h2>{props.firstName}</h2>
            <h3>{props.surname}</h3>
        </div>
    </div>
    )
}