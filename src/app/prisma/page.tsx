import Link from "next/link";
import { use } from "react";

import { prisma } from "@/database/prisma";

import { createUser, deleteUser } from "./actions";

const PrismaPage: React.Page = () => {
  const users = use(prisma.user.findMany());

  return (
    <main className="flex flex-col">
      <h1>{`PrismaPage`}</h1>
      <Link href="/drizzle">{`to DrizzlePage`}</Link>

      <form action={createUser}>
        <button type="submit">Create User</button>
      </form>
      <ul className="flex flex-col">
        {users.map((user) => {
          return (
            <li key={user.id}>
              <div className="flex gap-x-2.5">
                {user.id}
                <form action={deleteUser}>
                  <input type="hidden" name="id" defaultValue={user.id} />
                  <button type="submit">X</button>
                </form>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
};
export default PrismaPage;
