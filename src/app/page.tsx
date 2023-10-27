import { use } from "react";

import prisma from "@/db";

export const dynamic = "force-dynamic";
const HomePage: React.FC = () => {
  const users = use(prisma.user.findMany({ cacheStrategy: { ttl: 60 } }));
  console.log("HomePage", { users });

  return (
    <main>
      {`HOME PAGE`}
      <div>{JSON.stringify(users)}</div>
    </main>
  );
};
export default HomePage;
