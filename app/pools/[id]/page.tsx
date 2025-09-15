import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"

interface PoolMember {
  id: string
  name: string
  role: "Organizer" | "Contributor"
  avatar: string
}

export default function PoolDetails({ params }: { params: { id: string } }) {
  // This would normally come from an API or database
  const poolData = {
    id: params.id,
    name: "Vacation Fund",
    goal: 600,
    current: 350,
    members: [
      { id: "1", name: "Isabella", role: "Organizer", avatar: "/placeholder.svg?height=40&width=40" },
      { id: "2", name: "Liam", role: "Contributor", avatar: "/placeholder.svg?height=40&width=40" },
      { id: "3", name: "Ava", role: "Contributor", avatar: "/placeholder.svg?height=40&width=40" },
      { id: "4", name: "Lucas", role: "Contributor", avatar: "/placeholder.svg?height=40&width=40" },
    ] as PoolMember[],
  }

  const progress = (poolData.current / poolData.goal) * 100

  return (
    <div className="p-4 pb-20">
      <div className="flex items-center mb-6">
        <Link href="/pools">
          <Button size="icon" variant="ghost" className="rounded-full mr-2">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <h1 className="text-2xl font-bold">{poolData.name}</h1>
      </div>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-3">Goal</h2>
        <div className="bg-gray-900 p-4 rounded-lg">
          <div className="flex justify-between mb-2">
            <span className="text-gray-400">Progress</span>
            <span className="font-medium">
              ${poolData.current} / ${poolData.goal}
            </span>
          </div>
          <Progress value={progress} className="h-2 mb-2" />
          <div className="text-right text-sm text-gray-400">${poolData.goal - poolData.current} remaining</div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-3">Members</h2>
        <div className="space-y-4">
          {poolData.members.map((member) => (
            <div key={member.id} className="flex items-center justify-between">
              <div className="flex items-center">
                <Avatar className="h-10 w-10 mr-3">
                  <img src={member.avatar || "/placeholder.svg"} alt={member.name} />
                </Avatar>
                <div>
                  <p className="font-medium">{member.name}</p>
                  <p className="text-sm text-gray-400">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="flex space-x-4">
        <Button className="flex-1">Contribute</Button>
        <Button variant="outline" className="flex-1">
          Invite
        </Button>
        <Button variant="outline" className="flex-1">
          Leave Pool
        </Button>
      </div>
    </div>
  )
}
