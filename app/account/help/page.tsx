import Link from "next/link"
import { ArrowLeft, Plus, Percent, DollarSign, AlertTriangle, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function HelpSupport() {
  return (
    <div className="p-4 pb-20">
      <div className="flex items-center mb-6">
        <Link href="/account">
          <Button size="icon" variant="ghost" className="rounded-full mr-2">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <h1 className="text-2xl font-bold">Help & Support</h1>
      </div>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-3">Frequently Asked Questions</h2>

        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="creating-pool" className="border-b-0">
            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <AccordionTrigger className="px-4 py-3 hover:bg-gray-800 hover:no-underline">
                <div className="flex items-center">
                  <div className="h-8 w-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                    <Plus className="h-4 w-4" />
                  </div>
                  <span>Creating a Pool</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-3 pt-0 text-gray-400">
                <p>Learn how to create a pool and invite friends.</p>
                <p className="mt-2">
                  To create a new pool, tap the + button on the Pools screen and follow the prompts to set up your pool
                  details.
                </p>
              </AccordionContent>
            </div>
          </AccordionItem>

          <AccordionItem value="contributing" className="border-b-0">
            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <AccordionTrigger className="px-4 py-3 hover:bg-gray-800 hover:no-underline">
                <div className="flex items-center">
                  <div className="h-8 w-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <DollarSign className="h-4 w-4" />
                  </div>
                  <span>Contributing to a Pool</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-3 pt-0 text-gray-400">
                <p>Understand how to contribute to a pool.</p>
                <p className="mt-2">
                  To contribute to a pool, open the pool details and tap the "Contribute" button. You can then select
                  your payment method and amount.
                </p>
              </AccordionContent>
            </div>
          </AccordionItem>

          <AccordionItem value="withdrawing" className="border-b-0">
            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <AccordionTrigger className="px-4 py-3 hover:bg-gray-800 hover:no-underline">
                <div className="flex items-center">
                  <div className="h-8 w-8 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                    <DollarSign className="h-4 w-4" />
                  </div>
                  <span>Withdrawing Funds</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-3 pt-0 text-gray-400">
                <p>Find out how to withdraw funds from a pool.</p>
                <p className="mt-2">
                  Pool organizers can withdraw funds once the goal is met or the deadline is reached. Go to the pool
                  details and tap "Withdraw".
                </p>
              </AccordionContent>
            </div>
          </AccordionItem>

          <AccordionItem value="fees" className="border-b-0">
            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <AccordionTrigger className="px-4 py-3 hover:bg-gray-800 hover:no-underline">
                <div className="flex items-center">
                  <div className="h-8 w-8 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
                    <Percent className="h-4 w-4" />
                  </div>
                  <span>Fees and Charges</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-3 pt-0 text-gray-400">
                <p>Learn about the fees associated with using the app.</p>
                <p className="mt-2">
                  Pool charges a small service fee of 2.5% on contributions. There are no fees for creating pools or
                  inviting contributors.
                </p>
              </AccordionContent>
            </div>
          </AccordionItem>
        </Accordion>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-3">Troubleshooting</h2>

        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="login-problems" className="border-b-0">
            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <AccordionTrigger className="px-4 py-3 hover:bg-gray-800 hover:no-underline">
                <div className="flex items-center">
                  <div className="h-8 w-8 bg-red-500 rounded-full flex items-center justify-center mr-3">
                    <AlertTriangle className="h-4 w-4" />
                  </div>
                  <span>Login Problems</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-3 pt-0 text-gray-400">
                <p>Solutions for common login issues.</p>
                <p className="mt-2">
                  If you're having trouble logging in, try resetting your password or checking your internet connection.
                </p>
              </AccordionContent>
            </div>
          </AccordionItem>
        </Accordion>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-3">Contact Support</h2>

        <div className="space-y-4">
          <Link
            href="/account/contact"
            className="flex items-center justify-between p-4 bg-gray-900 rounded-lg hover:bg-gray-800"
          >
            <div className="flex items-center">
              <div className="h-8 w-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                <MessageSquare className="h-4 w-4" />
              </div>
              <span>Email Support</span>
            </div>
          </Link>

          <Link
            href="/account/chat"
            className="flex items-center justify-between p-4 bg-gray-900 rounded-lg hover:bg-gray-800"
          >
            <div className="flex items-center">
              <div className="h-8 w-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                <MessageSquare className="h-4 w-4" />
              </div>
              <span>Live Chat</span>
            </div>
          </Link>
        </div>
      </section>
    </div>
  )
}
