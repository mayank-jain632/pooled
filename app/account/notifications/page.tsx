"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

interface NotificationSetting {
  id: string
  title: string
  description: string
  enabled: boolean
}

export default function Notifications() {
  const [settings, setSettings] = useState<NotificationSetting[]>([
    {
      id: "pool-updates",
      title: "Pool updates",
      description: "Updates on pool activity",
      enabled: true,
    },
    {
      id: "invitations",
      title: "Invitations",
      description: "When you're invited to a pool",
      enabled: true,
    },
    {
      id: "transactions",
      title: "Transaction alerts",
      description: "When money is added or removed",
      enabled: true,
    },
  ])

  const toggleSetting = (id: string) => {
    setSettings(settings.map((setting) => (setting.id === id ? { ...setting, enabled: !setting.enabled } : setting)))
  }

  return (
    <div className="p-4 pb-20">
      <div className="flex items-center mb-6">
        <Link href="/account">
          <Button size="icon" variant="ghost" className="rounded-full mr-2">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <h1 className="text-2xl font-bold">Notifications</h1>
      </div>

      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-3">Pools</h2>
        <div className="space-y-4">
          {settings
            .filter((s) => s.id === "pool-updates")
            .map((setting) => (
              <div key={setting.id} className="flex items-center justify-between p-4 bg-gray-900 rounded-lg">
                <div>
                  <Label htmlFor={setting.id} className="font-medium">
                    {setting.title}
                  </Label>
                  <p className="text-sm text-gray-400">{setting.description}</p>
                </div>
                <Switch id={setting.id} checked={setting.enabled} onCheckedChange={() => toggleSetting(setting.id)} />
              </div>
            ))}
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-3">Invitations</h2>
        <div className="space-y-4">
          {settings
            .filter((s) => s.id === "invitations")
            .map((setting) => (
              <div key={setting.id} className="flex items-center justify-between p-4 bg-gray-900 rounded-lg">
                <div>
                  <Label htmlFor={setting.id} className="font-medium">
                    {setting.title}
                  </Label>
                  <p className="text-sm text-gray-400">{setting.description}</p>
                </div>
                <Switch id={setting.id} checked={setting.enabled} onCheckedChange={() => toggleSetting(setting.id)} />
              </div>
            ))}
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-3">Transactions</h2>
        <div className="space-y-4">
          {settings
            .filter((s) => s.id === "transactions")
            .map((setting) => (
              <div key={setting.id} className="flex items-center justify-between p-4 bg-gray-900 rounded-lg">
                <div>
                  <Label htmlFor={setting.id} className="font-medium">
                    {setting.title}
                  </Label>
                  <p className="text-sm text-gray-400">{setting.description}</p>
                </div>
                <Switch id={setting.id} checked={setting.enabled} onCheckedChange={() => toggleSetting(setting.id)} />
              </div>
            ))}
        </div>
      </section>
    </div>
  )
}
