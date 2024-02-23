import Link from "next/link";
import { getPeople } from "../data/people";
import Tile from "@/components/Tile";
import styles from "./members.module.css";
import { Person } from "@prisma/client";

export default async function Members() {
  const people: Person[] = await getPeople();
  return (
    <div className={styles.container}>
        {people.map((person: Person) => {
          return (
            <div key={person.id}>
              <Tile firstName={person.firstName} surname={person.surname} id={person.id} isLocked={person.isConfident}/>
            </div>
          )
        })}
    </div>
  );
}
