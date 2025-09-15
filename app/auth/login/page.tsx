"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Login() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    
    // For demo purposes, redirect to dashboard after login
    // In a real app, you'd validate credentials first
    router.push("/dashboard")
  }

  return (
    <div className="p-4 h-full flex flex-col">
      <h1 className="text-2xl font-bold mb-8">Log in</h1>

      <form onSubmit={handleSubmit} className="space-y-6 flex-1">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="bg-gray-900 border-gray-800"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            className="bg-gray-900 border-gray-800"
            required
          />
        </div>

        <div className="text-right">
          <Link href="/auth/forgot-password" className="text-sm text-blue-400 hover:underline">
            Forgot password?
          </Link>
        </div>

        <Button type="submit" className="w-full">
          Log in
        </Button>
      </form>

      <div className="mt-6 text-center text-sm text-gray-400">
        Don't have an account?{" "}
        <Link href="/auth/signup" className="text-blue-400 hover:underline">
          Sign up
        </Link>
      </div>
    </div>
  )
}
