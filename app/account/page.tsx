import Link from "next/link"
import { Settings, Bell, DollarSign, HelpCircle, MessageSquare, LogOut, ChevronRight } from "lucide-react"
import { Avatar } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"

export default function Account() {
  return (
    <div className="p-4 pb-20">
      <h1 className="text-2xl font-bold mb-6">Account</h1>

      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-3">Settings</h2>
        <div className="bg-gray-900 rounded-lg overflow-hidden">
          <div className="p-4 flex items-center">
            <Avatar className="h-12 w-12 mr-4">
              <img src="/placeholder.svg?height=48&width=48" alt="Jennifer Lee" />
            </Avatar>
            <div>
              <p className="font-medium">Jennifer Lee</p>
              <p className="text-sm text-gray-400">jennifer.lee@email.com</p>
            </div>
          </div>

          <Separator className="bg-gray-800" />

          <Link href="/account/change-password" className="flex items-center justify-between p-4 hover:bg-gray-800">
            <div className="flex items-center">
              <Settings className="h-5 w-5 mr-3 text-gray-400" />
              <span>Change Password</span>
            </div>
            <ChevronRight className="h-5 w-5 text-gray-400" />
          </Link>

          <Link href="/account/notifications" className="flex items-center justify-between p-4 hover:bg-gray-800">
            <div className="flex items-center">
              <Bell className="h-5 w-5 mr-3 text-gray-400" />
              <span>Notifications</span>
            </div>
            <ChevronRight className="h-5 w-5 text-gray-400" />
          </Link>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-3">Preferences</h2>
        <div className="bg-gray-900 rounded-lg overflow-hidden">
          <Link href="/account/billing" className="flex items-center justify-between p-4 hover:bg-gray-800">
            <div className="flex items-center">
              <DollarSign className="h-5 w-5 mr-3 text-gray-400" />
              <span>Billing</span>
            </div>
            <ChevronRight className="h-5 w-5 text-gray-400" />
          </Link>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-3">Support</h2>
        <div className="bg-gray-900 rounded-lg overflow-hidden">
          <Link href="/account/help" className="flex items-center justify-between p-4 hover:bg-gray-800">
            <div className="flex items-center">
              <HelpCircle className="h-5 w-5 mr-3 text-gray-400" />
              <span>Help Center</span>
            </div>
            <ChevronRight className="h-5 w-5 text-gray-400" />
          </Link>

          <Link href="/account/contact" className="flex items-center justify-between p-4 hover:bg-gray-800">
            <div className="flex items-center">
              <MessageSquare className="h-5 w-5 mr-3 text-gray-400" />
              <span>Contact Us</span>
            </div>
            <ChevronRight className="h-5 w-5 text-gray-400" />
          </Link>
        </div>
      </section>

      <button className="w-full flex items-center justify-center p-4 bg-gray-900 rounded-lg hover:bg-gray-800">
        <LogOut className="h-5 w-5 mr-3 text-gray-400" />
        <span>Log Out</span>
      </button>
    </div>
  )
}
