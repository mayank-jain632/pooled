"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { addTask } from "@/lib/actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Plus } from "lucide-react"

export function AddTaskForm() {
  const [text, setText] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!text.trim()) return

    setIsSubmitting(true)
    await addTask(text)
    setText("")
    router.refresh()
    setIsSubmitting(false)
  }

  return (
    <Card>
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Add a new task..."
            className="flex-1"
            disabled={isSubmitting}
          />
          <Button type="submit" disabled={isSubmitting || !text.trim()}>
            <Plus className="h-4 w-4 mr-1" /> Add Task
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
