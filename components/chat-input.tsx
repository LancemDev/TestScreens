"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mic, Paperclip } from 'lucide-react'
import { useState } from "react"

export function ChatInput() {
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!message.trim()) return
    // Handle message submission here
    setMessage("")
  }

  return (
    <form onSubmit={handleSubmit} className="p-4 border-t">
      <div className="flex items-center gap-2">
        <Input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Send a Message"
          className="flex-1"
        />
        <Button type="button" size="icon" variant="ghost">
          <Mic className="h-5 w-5" />
        </Button>
        <Button type="button" size="icon" variant="ghost">
          <Paperclip className="h-5 w-5" />
        </Button>
      </div>
    </form>
  )
}

