"use server";

import prisma from "@/db";
import { revalidatePath } from "next/cache";

export const createUser = async () => {
  await prisma.user.create({
    data: { id: new Date().getTime().toString() },
  });
  revalidatePath("/", "page");
};

export const deleteUser = async (formData: FormData) => {
  const id = formData.get("id");
  if (typeof id !== "string") {
    return;
  }
  await prisma.user.delete({ where: { id } });
  revalidatePath("/", "page");
};
