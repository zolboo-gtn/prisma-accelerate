import type { NextMiddleware } from "next/server";

import { db } from "@/database/drizzle";
import { prisma } from "@/database/prisma";

export const config = {
  matcher: ["/((?!api|_next|assets|favicon.ico).*)"],
};
export const middleware: NextMiddleware = async (request) => {
  const users = await prisma.user.findMany();
  const _users = await db.query.user.findMany();
};
