import Link from "next/link";
import { use } from "react";

import { db } from "@/database/drizzle";

import { createUser } from "./actions";
import { UserCard } from "./user_card";
import { CreateButton } from "./create_button";

const DrizzlePage: React.Page = () => {
  const users = use(db.query.user.findMany());

  return (
    <main className="flex flex-col">
      <h1>{`DrizzlePage`}</h1>
      <Link href="/prisma">{`to PrismaPage`}</Link>
      <form action={createUser}>
        <CreateButton />
      </form>
      <ul className="flex flex-col gap-y-2.5">
        {users.map((user) => {
          return (
            <li key={user.id}>
              <UserCard id={user.id} />
            </li>
          );
        })}
      </ul>
    </main>
  );
};
export default DrizzlePage;
