import Link from "next/link"
import { ArrowLeft, CreditCard, Plus, MapPin, Edit } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

interface PaymentMethod {
  id: string
  type: string
  last4: string
  expiry: string
}

interface PaymentHistory {
  id: string
  type: string
  amount: number
  date: string
}

export default function Billing() {
  // This would normally come from an API or database
  const paymentMethods: PaymentMethod[] = [
    {
      id: "card-1",
      type: "Visa",
      last4: "4242",
      expiry: "03/2025",
    },
  ]

  const paymentHistory: PaymentHistory[] = [
    {
      id: "payment-1",
      type: "Payment Received",
      amount: 50,
      date: "May 15, 2024",
    },
    {
      id: "payment-2",
      type: "Payment Received",
      amount: 50,
      date: "April 15, 2024",
    },
    {
      id: "payment-3",
      type: "Payment Received",
      amount: 50,
      date: "March 15, 2024",
    },
  ]

  return (
    <div className="p-4 pb-20">
      <div className="flex items-center mb-6">
        <Link href="/account">
          <Button size="icon" variant="ghost" className="rounded-full mr-2">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <h1 className="text-2xl font-bold">Billing</h1>
      </div>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-3">Payment Methods</h2>
        <div className="bg-gray-900 rounded-lg overflow-hidden">
          {paymentMethods.map((method, index) => (
            <div key={method.id}>
              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="h-10 w-10 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                    <CreditCard className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">
                      {method.type} ...{method.last4}
                    </p>
                    <p className="text-sm text-gray-400">Expires {method.expiry}</p>
                  </div>
                </div>
                <Button size="icon" variant="ghost">
                  <Edit className="h-4 w-4" />
                </Button>
              </div>
              {index < paymentMethods.length - 1 && <Separator className="bg-gray-800" />}
            </div>
          ))}

          <Button variant="ghost" className="w-full flex items-center justify-center gap-2 p-4 hover:bg-gray-800">
            <Plus className="h-4 w-4" />
            Add Payment Method
          </Button>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-3">Billing History</h2>
        <div className="bg-gray-900 rounded-lg overflow-hidden">
          {paymentHistory.map((payment, index) => (
            <div key={payment.id}>
              <div className="p-4 flex items-center justify-between">
                <div>
                  <p className="font-medium">{payment.type}</p>
                  <p className="text-sm text-gray-400">{payment.date}</p>
                </div>
                <p className="font-medium">${payment.amount.toFixed(2)}</p>
              </div>
              {index < paymentHistory.length - 1 && <Separator className="bg-gray-800" />}
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-3">Billing Address</h2>
        <div className="bg-gray-900 rounded-lg overflow-hidden">
          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center">
              <div className="h-10 w-10 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="font-medium">Home Address</p>
                <p className="text-sm text-gray-400">123 Main St, Anytown, CA 91234</p>
              </div>
            </div>
            <Button size="icon" variant="ghost">
              <Edit className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
