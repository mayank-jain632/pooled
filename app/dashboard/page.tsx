import Link from "next/link"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Dashboard() {
  return (
    <div className="p-4 pb-20">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <Link href="/pools/new">
          <Button size="icon" variant="ghost" className="rounded-full">
            <Plus className="h-6 w-6" />
          </Button>
        </Link>
      </div>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-3">Active Pools</h2>
        <div className="space-y-4">
          <PoolCard
            name="Vacation Fund"
            goal={500}
            image="/placeholder.svg?height=80&width=80"
            href="/pools/vacation-fund"
          />
          <PoolCard name="New Car" goal={1000} image="/placeholder.svg?height=80&width=80" href="/pools/new-car" />
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-3">Recent Contributions</h2>
        <div className="space-y-4">
          <ContributionCard name="Vacation Fund" amount={50} image="/placeholder.svg?height=60&width=60" />
          <ContributionCard name="New Car" amount={20} image="/placeholder.svg?height=60&width=60" />
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-3">Pending Invitations</h2>
        <div className="space-y-4">
          <InvitationCard name="Birthday Gift" from="Olivia" image="/placeholder.svg?height=60&width=60" />
        </div>
      </section>
    </div>
  )
}

function PoolCard({ name, goal, image, href }: { name: string; goal: number; image: string; href: string }) {
  return (
    <Link href={href}>
      <Card className="bg-gray-900 border-gray-800">
        <CardContent className="p-4 flex items-center">
          <div className="w-16 h-16 rounded-lg overflow-hidden mr-4">
            <img src={image || "/placeholder.svg"} alt={name} className="w-full h-full object-cover" />
          </div>
          <div>
            <h3 className="font-medium">{name}</h3>
            <p className="text-sm text-gray-400">Goal: ${goal}</p>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

function ContributionCard({ name, amount, image }: { name: string; amount: number; image: string }) {
  return (
    <Card className="bg-gray-900 border-gray-800">
      <CardContent className="p-4 flex items-center">
        <div className="w-12 h-12 rounded-lg overflow-hidden mr-4">
          <img src={image || "/placeholder.svg"} alt={name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h3 className="font-medium">{name}</h3>
          <p className="text-sm text-gray-400">Amount: ${amount}</p>
        </div>
      </CardContent>
    </Card>
  )
}

function InvitationCard({ name, from, image }: { name: string; from: string; image: string }) {
  return (
    <Card className="bg-gray-900 border-gray-800">
      <CardContent className="p-4 flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-lg overflow-hidden mr-4">
            <img src={image || "/placeholder.svg"} alt={name} className="w-full h-full object-cover" />
          </div>
          <div>
            <h3 className="font-medium">{name}</h3>
            <p className="text-sm text-gray-400">From: {from}</p>
          </div>
        </div>
        <div className="flex space-x-2">
          <Button size="sm" variant="outline" className="h-8">
            Decline
          </Button>
          <Button size="sm" className="h-8">
            Accept
          </Button>
        </div>
      </CardContent>
    </Card>
  )
} 