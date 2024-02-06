import Link from "next/link";
import { getPeople } from "../data/people";
import Tile from "@/components/Tile";
import styles from "./members.module.css";
import { Person } from "@prisma/client";


export default async function Members() {
  const people = await getPeople();
  return (
    <div className={styles.container}>
        {people.map((person: Person) => {
          return (
            <div key={person.id}>
              <Tile firstName={person.name} surname={person.surname} id={person.id} isLocked={person.isConfident}/>

            </div>
          )
        })}
    </div>
  );
}
