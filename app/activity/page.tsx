import { Plus, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Transaction {
  id: string
  poolName: string
  amount: number
  time: string
}

export default function Activity() {
  // This would normally come from an API or database
  const transactions: Transaction[] = Array.from({ length: 10 }, (_, i) => ({
    id: `tx-${i}`,
    poolName: "Vacation Fund",
    amount: 50,
    time: "12:30 PM",
  }))

  return (
    <div className="p-4 pb-20">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Activity</h1>
        <Button size="icon" variant="ghost" className="rounded-full">
          <Plus className="h-6 w-6" />
        </Button>
      </div>

      <div className="space-y-4">
        {transactions.map((tx) => (
          <div key={tx.id} className="flex items-center justify-between p-4 bg-gray-900 rounded-lg">
            <div>
              <p className="font-medium">Pool: {tx.poolName}</p>
              <p className="text-sm text-gray-400">{tx.time}</p>
            </div>
            <div className="h-8 w-8 bg-blue-500 rounded-full flex items-center justify-center">
              <DollarSign className="h-4 w-4" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
