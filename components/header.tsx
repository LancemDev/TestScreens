import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Header() {
  return (
    <header className="border-b p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Oscar" />
            <AvatarFallback>OS</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="font-semibold">Oscar</h2>
            <p className="text-sm text-muted-foreground">The Retention Marketer</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Auto Pilot</Button>
          <Button className="bg-yellow-500 text-black hover:bg-yellow-600">Co-Pilot</Button>
        </div>
      </div>
    </header>
  )
}

