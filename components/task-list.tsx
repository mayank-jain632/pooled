"use client"

import { useState } from "react"
import type { Task } from "@/lib/types"
import { deleteTask, updateTask } from "@/lib/actions"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Trash2, Edit, Save, X } from "lucide-react"
import { Input } from "@/components/ui/input"

interface TaskListProps {
  initialTasks: Task[]
}

export default function TaskList({ initialTasks }: TaskListProps) {
  const [tasks, setTasks] = useState<Task[]>(initialTasks)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editText, setEditText] = useState("")

  const handleDelete = async (id: string) => {
    await deleteTask(id)
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const handleToggleComplete = async (task: Task) => {
    const updatedTask = { ...task, completed: !task.completed }
    await updateTask(updatedTask)
    setTasks(tasks.map((t) => (t.id === task.id ? updatedTask : t)))
  }

  const startEditing = (task: Task) => {
    setEditingId(task.id)
    setEditText(task.text)
  }

  const cancelEditing = () => {
    setEditingId(null)
  }

  const saveEdit = async (task: Task) => {
    const updatedTask = { ...task, text: editText }
    await updateTask(updatedTask)
    setTasks(tasks.map((t) => (t.id === task.id ? updatedTask : t)))
    setEditingId(null)
  }

  if (tasks.length === 0) {
    return <div className="text-center py-10 text-gray-500">No tasks yet. Add one above to get started!</div>
  }

  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <Card key={task.id} className={task.completed ? "opacity-70" : ""}>
          <CardContent className="pt-6 flex items-center gap-4">
            <Checkbox checked={task.completed} onCheckedChange={() => handleToggleComplete(task)} className="h-5 w-5" />

            {editingId === task.id ? (
              <Input value={editText} onChange={(e) => setEditText(e.target.value)} className="flex-1" autoFocus />
            ) : (
              <span className={`flex-1 ${task.completed ? "line-through text-gray-500" : ""}`}>{task.text}</span>
            )}
          </CardContent>

          <CardFooter className="flex justify-end gap-2">
            {editingId === task.id ? (
              <>
                <Button size="sm" variant="outline" onClick={cancelEditing}>
                  <X className="h-4 w-4 mr-1" /> Cancel
                </Button>
                <Button size="sm" onClick={() => saveEdit(task)}>
                  <Save className="h-4 w-4 mr-1" /> Save
                </Button>
              </>
            ) : (
              <>
                <Button size="sm" variant="outline" onClick={() => startEditing(task)}>
                  <Edit className="h-4 w-4 mr-1" /> Edit
                </Button>
                <Button size="sm" variant="destructive" onClick={() => handleDelete(task.id)}>
                  <Trash2 className="h-4 w-4 mr-1" /> Delete
                </Button>
              </>
            )}
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
