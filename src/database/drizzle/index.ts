import { drizzle } from "drizzle-orm/neon-http";
import { neon, neonConfig } from "@neondatabase/serverless";

import { key, session, user } from "./schemas";

export const schema = {
  key,
  session,
  user,
};

neonConfig.fetchConnectionCache = true;

const client = neon(process.env.DRIZZLE_DATABASE_URL!);
export const db = drizzle(client, { schema });
