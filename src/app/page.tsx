"use client";
import styles from "./home.module.css";

export default function Home() {
  const name = "Hampshire family tree"
  return (
    <div className={styles.container}>
      <h1>Hampshire family tree</h1>
      <div>
        <div>
          A place to see and grow the Hampshire family tree so that we can all see it frpom wherever we are.
        </div>
        <div>
          Random member
        </div>
      </div>
    </div>
  );
}
