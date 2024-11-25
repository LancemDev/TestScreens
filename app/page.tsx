import { ChatInput } from "@/components/chat-input"

export default function ChatPage() {
  return (
    <div className="flex-1 flex flex-col">
      <div className="flex-1 overflow-y-auto p-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-secondary rounded-lg p-3 inline-block">
            <p>Hey there!</p>
          </div>
        </div>
      </div>
      <ChatInput />
    </div>
  )
}

