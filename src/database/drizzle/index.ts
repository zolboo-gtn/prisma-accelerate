import { drizzle } from "drizzle-orm/neon-serverless";
import { Pool } from "@neondatabase/serverless";

import { key, session, user } from "./schemas";

export const schema = {
  key,
  session,
  user,
};

const client = new Pool({
  connectionString: process.env.DRIZZLE_DATABASE_URL!,
});
export const db = drizzle(client, { schema });
