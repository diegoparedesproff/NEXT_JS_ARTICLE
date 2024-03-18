import { addTask, getTasks } from "@/app/(actions)";
import { NextResponse } from "next/server";

const fs = require("fs");

//This is a standard js request object
export const GET = async (request: Request) => {
  const data = await getTasks();
  console.log("data = ", data);
  return NextResponse.json(data);
};

export const POST = async (request: Request) => {
  const data = await request.json();
  addTask(data.content);
  return NextResponse.json({ message: "success" });
};
