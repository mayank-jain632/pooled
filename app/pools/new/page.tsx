"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { X, LinkIcon, UserPlus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function NewPool() {
  const [formData, setFormData] = useState({
    poolName: "",
    goalAmount: "",
    deadline: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <div className="p-4 h-full flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <Link href="/pools">
          <Button size="icon" variant="ghost" className="rounded-full">
            <X className="h-6 w-6" />
          </Button>
        </Link>
      </div>

      <h1 className="text-2xl font-bold mb-6">New Pool</h1>

      <div className="mb-6 h-40 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
        <img src="/placeholder.svg?height=120&width=120" alt="Pool illustration" className="h-24 w-24 object-contain" />
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 flex-1">
        <div className="space-y-2">
          <Label htmlFor="poolName">Pool name</Label>
          <Input
            id="poolName"
            name="poolName"
            value={formData.poolName}
            onChange={handleChange}
            className="bg-gray-900 border-gray-800"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="goalAmount">Goal amount</Label>
          <Input
            id="goalAmount"
            name="goalAmount"
            type="number"
            value={formData.goalAmount}
            onChange={handleChange}
            className="bg-gray-900 border-gray-800"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="deadline">Deadline</Label>
          <Input
            id="deadline"
            name="deadline"
            type="date"
            value={formData.deadline}
            onChange={handleChange}
            className="bg-gray-900 border-gray-800"
            required
          />
        </div>

        <Button type="button" variant="outline" className="w-full flex items-center justify-center gap-2">
          <UserPlus className="h-4 w-4" />
          Add participants
        </Button>

        <Button type="button" variant="outline" className="w-full flex items-center justify-center gap-2">
          <LinkIcon className="h-4 w-4" />
          Invite with link
        </Button>

        <Button type="submit" className="w-full">
          Create Pool
        </Button>
      </form>
    </div>
  )
}
