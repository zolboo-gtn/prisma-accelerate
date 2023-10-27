"use server";

import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

import { db } from "@/database/drizzle";
import { user } from "@/database/drizzle/schemas";

export const createUser = async () => {
  await db.insert(user).values({
    id: new Date().getTime().toString(),
  });
  revalidatePath("/drizzle", "page");
};

export const deleteUser = async (formData: FormData) => {
  const id = formData.get("id");
  if (typeof id !== "string") {
    return;
  }
  await db.delete(user).where(eq(user.id, id));
  revalidatePath("/drizzle", "page");
};
