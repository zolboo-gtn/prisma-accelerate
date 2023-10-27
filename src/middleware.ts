import type { NextMiddleware } from "next/server";

// import prisma from "@/db";

export const config = {
  matcher: ["/((?!api|_next|assets|favicon.ico).*)"],
};
export const middleware: NextMiddleware = async (request) => {
  // const users = await prisma.user.findMany({ cacheStrategy: { ttl: 60 } });
};
