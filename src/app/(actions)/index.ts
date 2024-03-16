"use server";

import { revalidatePath } from "next/cache";
import { orderByLatestCreated } from "../(helpers)";

const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const filePath = process.cwd() + "src/app/(fakeDB)/index.json";

export const getTasks = () => {
  
  try {
    if (fs.existsSync(filePath)) {
      
      const jsonData = fs.readFileSync(filePath, "utf8");
      const fakeDB = JSON.parse(jsonData);
      return fakeDB;
    } else {
      fs.writeFileSync(filePath, [], "utf8");
      return [];
    }
  } catch (error) {
    console.log("filePath = ",console.log(filePath));
    return error;
  }
};

const saveToFakeDB = (payload) => {
  const ordered = orderByLatestCreated(payload);
  const newJsonData = JSON.stringify(ordered);
  fs.writeFileSync(filePath, newJsonData, "utf8");
};

export const addTask = (props: FormData | string) => {
  const content = (typeof props === "string") ? props : props.get("task");
  const id = uuidv4();
  const createdAt = Date.now();
  const newTask = { id, content, completed: false, createdAt };
  const newTaskList = [...getTasks(), newTask];
  saveToFakeDB(newTaskList);
  revalidatePath("/tasks");
};

export const deleteTask = (id) => {
  const newTaskList = getTasks().filter((task) => task.id !== id);
  saveToFakeDB(newTaskList);
  revalidatePath("/tasks");
};

export const updateTask = (payload)=>{
    const removedItemToUpdate = getTasks().filter((task) => task.id !== payload.id);
    const newTaskList = [...removedItemToUpdate, {...payload, completed:!payload.completed}];
    saveToFakeDB(newTaskList);
    revalidatePath("/tasks");
}
