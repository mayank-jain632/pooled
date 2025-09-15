import type { Task } from "./types"

// In-memory storage for tasks
const tasks: Task[] = [
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

export async function getTasks(): Promise<Task[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100))
  return [...tasks].sort((a, b) => {
    // Sort by completion status (incomplete first) then by creation date (newest first)
    if (a.completed !== b.completed) {
      return a.completed ? 1 : -1
    }
    return b.createdAt.getTime() - a.createdAt.getTime()
  })
}

export async function getTask(id: string): Promise<Task | undefined> {
  await new Promise((resolve) => setTimeout(resolve, 100))
  return tasks.find((task) => task.id === id)
}
