"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SignUp() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    
    // For demo purposes, redirect to dashboard after signup
    // In a real app, you'd create the account first
    router.push("/dashboard")
  }

  return (
    <div className="p-4 h-full flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <Link href="/auth/login">
          <Button size="icon" variant="ghost" className="rounded-full">
            <X className="h-6 w-6" />
          </Button>
        </Link>
      </div>

      <h1 className="text-2xl font-bold mb-8">Sign up</h1>

      <form onSubmit={handleSubmit} className="space-y-6 flex-1">
        <div className="space-y-2">
          <Label htmlFor="firstName">First name</Label>
          <Input
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="bg-gray-900 border-gray-800"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="lastName">Last name</Label>
          <Input
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="bg-gray-900 border-gray-800"
            required
          />
        </div>

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

        <div className="space-y-2">
          <Label htmlFor="confirmPassword">Confirm password</Label>
          <Input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="bg-gray-900 border-gray-800"
            required
          />
        </div>

        <Button type="submit" className="w-full">
          Sign up
        </Button>
      </form>

      <div className="mt-6 text-center text-sm text-gray-400">
        Already have an account?{" "}
        <Link href="/auth/login" className="text-blue-400 hover:underline">
          Log in
        </Link>
      </div>
    </div>
  )
}
