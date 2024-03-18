"use server";

import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

export const getTasks = async () => {
  try {
    const { rows } = await sql`SELECT * from tasks ORDER BY createdAt DESC;`;
    return rows;
  } catch (error) {
    console.log("Error fetching tasks = ", console.log(error));
    return error;
  }
};

export const addTask = async (props: FormData | string) => {
  const content = typeof props === "string" ? props : props.get("task");
  const { rows } =
    await sql`INSERT INTO tasks (content) VALUES (${content}) RETURNING * ;`;
  revalidatePath("/tasks");
  return rows;
};

export const deleteTask = async (id) => {
  const response = await sql`DELETE FROM tasks WHERE id = ${id};`;
  revalidatePath("/tasks");
  return `resource with id: ${id} was deleted successfully`;
};

export const updateTask = async (payload) => {
  const response =
    await sql`UPDATE tasks SET completed = ${!payload.completed} WHERE id = ${
      payload.id
    } RETURNING * ;`;
  revalidatePath("/tasks");
  return response;
};
