import Link from "next/link";
import { getPeople } from "../data/people";
import Tile from "@/components/Tile";
import styles from "./members.module.css";

export default async function Members() {
  const people = await getPeople();
  return (
    <div className={styles.container}>
        {people.map((person: any) => {
          return (
            <div key={person.id}>
              <Link href={`/members/${person.id}`}>
                <Tile firstName={person.name} surname={person.surname}/>
              </Link>
            </div>
          )
        })}
    </div>
  );
}
