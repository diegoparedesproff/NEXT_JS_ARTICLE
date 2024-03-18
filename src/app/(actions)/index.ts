"use server";

import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { orderByLatestCreated } from "../(helpers)";

const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const filePath = process.cwd() + "src/app/(fakeDB)/index.json";

export const getTasks = async () => {
  try {
    const { rows } = await sql`SELECT * from tasks ORDER BY createdAt`;
    console.log("rows === ", rows);
    return rows;
  } catch (error) {
    console.log("Error fetching tasks = ", console.log(error));
    return error;
  }
};

const saveToFakeDB = (payload) => {
  const ordered = orderByLatestCreated(payload);
  const newJsonData = JSON.stringify(ordered);
  fs.writeFileSync(filePath, newJsonData, "utf8");
};

export const addTask = async (props: FormData | string) => {
  const content = typeof props === "string" ? props : props.get("task");
  const { rows } = await sql`INSERT INTO tasks (content) VALUES (${content})`;
  revalidatePath("/tasks");
};

export const deleteTask = async (id) => {
  const newTaskList = await sql`DELETE FROM tasks WHERE id = ${id}`;
  revalidatePath("/tasks");
};

export const updateTask = async (payload) => {
  const query =
    await sql`UPDATE tasks SET completed = ${!payload.completed} WHERE id = ${
      payload.id
    };`;
  revalidatePath("/tasks");
};
