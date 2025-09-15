"use server"

import { revalidatePath } from "next/cache"
import type { Task } from "./types"

// In-memory storage reference (same as in tasks.ts)
let tasks: Task[] = [
  {
    id: "1",
    text: "Learn Next.js",
    completed: false,
    createdAt: new Date(),
  },
  {
    id: "2",
    text: "Build a task manager",
    completed: true,
    createdAt: new Date(),
  },
  {
    id: "3",
    text: "Deploy to Vercel",
    completed: false,
    createdAt: new Date(),
  },
]

export async function addTask(text: string) {
  const newTask: Task = {
    id: Date.now().toString(),
    text,
    completed: false,
    createdAt: new Date(),
  }

  tasks.unshift(newTask)
  revalidatePath("/")
  return newTask
}

export async function deleteTask(id: string) {
  tasks = tasks.filter((task) => task.id !== id)
  revalidatePath("/")
  return { success: true }
}

export async function updateTask(updatedTask: Task) {
  tasks = tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
  revalidatePath("/")
  return updatedTask
}
