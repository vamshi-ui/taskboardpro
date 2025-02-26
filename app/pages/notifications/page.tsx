import { Archive, Bell, Link2, MoreVertical, Plus, X } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

export default function NotificationsPage() {
  return (
    <div className="grid flex-1 md:grid-cols-[1fr,400px]">
    {/* Notifications List */}
    <main className="border-r">
      <div className="p-6">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-lg font-semibold">Latest notifications</h1>
          <button>
            <MoreVertical className="h-5 w-5 text-gray-400" />
          </button>
        </div>

        <div className="space-y-4">
          {[
            {
              task: "Company research",
              action: "added a new task",
              user: "John Deere",
              avatar: "/placeholder.svg?height=40&width=40",
              status: "new",
            },
            {
              task: "Company research",
              action: "marked the task complete",
              user: "John Deere",
              avatar: "/placeholder.svg?height=40&width=40",
              status: "completed",
            },
            {
              task: "Market ideation",
              action: "marked the task complete",
              user: "John Deere",
              avatar: "/placeholder.svg?height=40&width=40",
              status: "completed",
            },
            {
              task: "Illustrations invoicing",
              action: "marked the task on hold",
              user: "John Deere",
              avatar: "/placeholder.svg?height=40&width=40",
              status: "hold",
            },
            {
              task: "Yearly wrap-up",
              action: "marked the task complete",
              user: "John Deere",
              avatar: "/placeholder.svg?height=40&width=40",
              status: "completed",
            },
          ].map((notification, i) => (
            <div
              key={i}
              className={`flex items-start gap-4 rounded-lg border bg-white p-4 ${
                i === 0 ? "border-l-4 border-l-yellow-400" : ""
              }`}
            >
              <div
                className={`mt-1 h-5 w-5 rounded-full border-2 ${
                  notification.status === "completed"
                    ? "border-yellow-400 bg-yellow-400"
                    : notification.status === "hold"
                      ? "border-gray-300"
                      : "border-yellow-400"
                }`}
              />
              <div className="flex-1">
                <div className="mb-1 font-medium">{notification.task}</div>
                <div className="text-sm text-gray-500">
                  {notification.user} {notification.action}.
                </div>
              </div>
              <img
                src={notification.avatar || "/placeholder.svg"}
                alt={notification.user}
                className="h-10 w-10 rounded-full"
              />
            </div>
          ))}
        </div>
      </div>
    </main>

    {/* Task Detail */}
    <aside className="border-l">
      <Card className="rounded-none border-0">
        <CardHeader className="flex-row items-start justify-between space-y-0 px-6">
          <div className="space-y-1.5">
            <CardTitle>Company research</CardTitle>
          </div>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent className="px-6">
          <div className="space-y-6">
            <div className="grid gap-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm">
                  <div className="h-5 w-5 rounded-full border-2" />
                  Assignee
                </div>
                <div className="flex items-center gap-2">
                  <img src="/placeholder.svg?height=24&width=24" alt="Me" className="h-6 w-6 rounded-full" />
                  <span className="text-sm">Me</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm">
                  <div className="h-5 w-5 rounded-full border-2" />
                  Deadline
                </div>
                <Badge variant="secondary" className="bg-gray-900 text-white">
                  Today
                </Badge>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm">
                  <div className="h-5 w-5 rounded-full border-2" />
                  Projects
                </div>
                <Badge variant="secondary" className="bg-gray-100">
                  Secret project
                </Badge>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm">
                  <div className="h-5 w-5 rounded-full border-2" />
                  Priority
                </div>
                <Badge variant="secondary" className="bg-yellow-100 text-yellow-700">
                  Medium
                </Badge>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium">Attachments</h3>
              <div className="flex items-center justify-between rounded-lg bg-gray-50 px-4 py-3">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <div className="h-5 w-5 rounded-full border-2" />
                  No attachments
                </div>
                <Button variant="ghost" size="sm">
                  Attach
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium">Links</h3>
              <div className="flex items-center justify-between rounded-lg bg-gray-50 px-4 py-3">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Link2 className="h-4 w-4" />
                  No links
                </div>
                <Button variant="ghost" size="sm">
                  Add
                </Button>
              </div>
            </div>

            <div className="flex gap-2">
              <Button variant="outline" className="w-full">
                <Archive className="mr-2 h-4 w-4" />
                Archive task
              </Button>
              <Button variant="destructive" className="w-full">
                Delete task
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </aside>
  </div>
  )
}

