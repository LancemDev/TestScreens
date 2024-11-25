import Link from "next/link"
import { Calendar, BarChart2, Mail, Share2, GitGraph } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Sidebar() {
  return (
    <div className="w-64 bg-background border-r">
      <div className="p-4">
        <div className="flex items-center gap-2 mb-8">
          <Image 
            src="/placeholder.svg?height=32&width=32" 
            alt="Logo" 
            width={32} 
            height={32}
            className="rounded-full bg-yellow-500"
          />
          <span className="text-yellow-500 font-bold text-xl">Sauti</span>
        </div>
        <nav className="space-y-1">
          <Button asChild variant="ghost" className="w-full justify-start">
            <Link href="/">
              <Mail className="mr-2 h-4 w-4" />
              Chats
            </Link>
          </Button>
          <Button asChild variant="ghost" className="w-full justify-start">
            <Link href="/calendar">
              <Calendar className="mr-2 h-4 w-4" />
              Calendar
            </Link>
          </Button>
          <Button asChild variant="ghost" className="w-full justify-start">
            <Link href="/analytics">
              <BarChart2 className="mr-2 h-4 w-4" />
              Analytics
            </Link>
          </Button>
          <Button asChild variant="ghost" className="w-full justify-start">
            <Link href="/campaigns">
              <Share2 className="mr-2 h-4 w-4" />
              Campaigns
            </Link>
          </Button>
          <Button asChild variant="ghost" className="w-full justify-start">
            <Link href="/flows">
              <GitGraph className="mr-2 h-4 w-4" />
              Flows
            </Link>
          </Button>
        </nav>
      </div>
    </div>
  )
}

