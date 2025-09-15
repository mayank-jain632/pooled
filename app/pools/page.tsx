import Link from "next/link"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Pools() {
  return (
    <div className="p-4 pb-20">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Pools</h1>
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
            name="Birthday Gift"
            goal={500}
            current={350}
            image="/placeholder.svg?height=80&width=80"
            href="/pools/birthday-gift"
          />
          <PoolCard 
            name="Pizza" 
            goal={25} 
            current={12}
            image="/placeholder.svg?height=80&width=80" 
            href="/pools/pizza" 
          />
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-3">Completed Pools</h2>
        <div className="space-y-4">
          <PoolCard
            name="Birthday Gift"
            goal={200}
            current={200}
            image="/placeholder.svg?height=80&width=80"
            href="/pools/birthday-gift"
            completed={true}
          />
        </div>
      </section>
    </div>
  )
}

function PoolCard({ 
  name, 
  goal, 
  current, 
  image, 
  href, 
  completed = false 
}: { 
  name: string; 
  goal: number; 
  current: number;
  image: string; 
  href: string;
  completed?: boolean;
}) {
  const percentage = Math.round((current / goal) * 100)
  
  return (
    <Link href={href}>
      <Card className="bg-gray-900 border-gray-800">
        <CardContent className="p-4">
          <div className="flex items-center mb-3">
            <div className="w-16 h-16 rounded-lg overflow-hidden mr-4">
              <img src={image || "/placeholder.svg"} alt={name} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium">{name}</h3>
              <p className="text-sm text-gray-400">
                ${current} of ${goal} goal
              </p>
            </div>
            {completed && (
              <div className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                Complete
              </div>
            )}
          </div>
          
          <div className="w-full bg-gray-800 rounded-full h-2">
            <div 
              className={`h-2 rounded-full ${completed ? 'bg-green-500' : 'bg-blue-500'}`}
              style={{ width: `${Math.min(percentage, 100)}%` }}
            ></div>
          </div>
          <p className="text-xs text-gray-400 mt-1">{percentage}% complete</p>
        </CardContent>
      </Card>
    </Link>
  )
} 