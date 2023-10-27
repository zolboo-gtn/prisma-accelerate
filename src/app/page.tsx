import { use } from "react";

import prisma from "@/db";

import { createUser, deleteUser } from "./actions";

const HomePage: React.FC = () => {
  const users = use(prisma.user.findMany());

  return (
    <main>
      {`HOME PAGE`}
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
export default HomePage;
