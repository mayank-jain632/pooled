"use client"

import type React from "react"

import { usePathname } from "next/navigation"
import { BottomNavigation } from "./bottom-navigation"

export function MobileLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  // Don't show bottom navigation on auth pages
  const showNavigation = !pathname.includes("/auth")

  return (
    <div className="mx-auto max-w-md h-[100dvh] flex flex-col bg-black text-white overflow-hidden">
      <div className="flex-1 overflow-y-auto">{children}</div>
      {showNavigation && <BottomNavigation />}
    </div>
  )
}
