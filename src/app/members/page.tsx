import Link from "next/link";
import { getUsers } from "../data/users";

export default async function Members() {
  const users = await getUsers();
  console.log(users);
  return (
    <div>
        <h1>List of members</h1>
        {users.map((user: any) => {
          return (
            <div key={user.id}>
              {user.username}
            </div>
          )
        })}
        <div>
            <Link href="/members/1">Member 1</Link>
            <Link href="/members/2">Member 2</Link>
        </div>
    </div>
  );
}
