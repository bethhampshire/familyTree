"use client";

import Link from "next/link";
import styles from "./header.module.css";
import Image from 'next/image';
import logo from "../../../public/ft-logo.svg";

export default function Header(props: any) {
    return (
    <header className={styles.header}>
        <Link className={styles.title} href={props.homeHref}>
            <div>
                <Image src={logo} alt="Family tree logo of nodes" width="64" height="64"/>
            </div>
        </Link>

        <nav className={styles.nav}>
            <ul className={styles.items}>
                <li className={styles.item}>
                    <Link href={props.membersHref}>Members</Link>   
                </li>
                <li className={styles.item}>
                    <Link href={props.treeHref}>Tree</Link>
                </li>
            </ul>
        </nav>  
    </header>
    )
}