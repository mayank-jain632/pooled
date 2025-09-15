"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Wallet, Activity, CreditCard, User } from "lucide-react"
import { cn } from "@/lib/utils"

export function BottomNavigation() {
  const pathname = usePathname()

  const navItems = [
    {
      name: "Home",
      href: "/dashboard",
      icon: Home,
    },
    {
      name: "Pools",
      href: "/pools",
      icon: Wallet,
    },
    {
      name: "Activity",
      href: "/activity",
      icon: Activity,
    },
    {
      name: "Cards",
      href: "/cards",
      icon: CreditCard,
    },
    {
      name: "Account",
      href: "/account",
      icon: User,
    },
  ]

  return (
    <div className="flex justify-around items-center py-3 border-t border-gray-800 bg-black">
      {navItems.map((item) => {
        const isActive = pathname === item.href
        return (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              "flex flex-col items-center justify-center text-xs",
              isActive ? "text-blue-400" : "text-gray-400",
            )}
          >
            <item.icon className="h-6 w-6 mb-1" />
            <span>{item.name}</span>
          </Link>
        )
      })}
    </div>
  )
}
