import { use } from "react";

import prisma from "@/db";
import { revalidatePath } from "next/cache";

const HomePage: React.FC = () => {
  const users = use(prisma.user.findMany({ cacheStrategy: { ttl: 60 } }));

  const createUser = async () => {
    "use server";

    await prisma.user.create({
      data: { id: new Date().getTime().toString() },
    });
    revalidatePath("/", "page");
  };

  return (
    <main>
      {`HOME PAGE`}
      <div>{JSON.stringify(users)}</div>
      <form action={createUser}>
        <button type="submit">Create User</button>
      </form>
    </main>
  );
};
export default HomePage;
