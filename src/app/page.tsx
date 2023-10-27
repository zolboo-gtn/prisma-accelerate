import { use } from "react";

import prisma from "@/db";

const HomePage: React.FC = () => {
  const users = use(prisma.user.findMany({ cacheStrategy: { ttl: 60 } }));
  console.log("HomePage", { users });

  return <main>{`HOME PAGE`}</main>;
};
export default HomePage;
