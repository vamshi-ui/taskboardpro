import { Badge } from "@/components/ui/badge";

export default function TasksPage() {
  return (
    <div className="flex-1 px-4 py-6 md:px-8">
      {/* Today's Tasks */}
      <div className="mb-8">
        <h2 className="mb-4 text-lg font-semibold">Today</h2>
        <div className="rounded-lg border bg-white">
          <div className="grid grid-cols-[1fr,100px,100px,120px,80px] gap-4 border-b px-4 py-2 text-sm text-gray-500">
            <div>TASK</div>
            <div>DUE DATE</div>
            <div>STAGE</div>
            <div>PRIORITY</div>
            <div>TEAM</div>
          </div>
          {[
            {
              task: "Finish monthly reporting",
              dueDate: "Today",
              stage: "In progress",
              priority: "High",
              team: "Marketing 02",
              assignee: "/placeholder.svg?height=32&width=32",
            },
            {
              task: "Contract signing",
              dueDate: "Today",
              stage: "In progress",
              priority: "Medium",
              team: "Operations",
              assignee: "/placeholder.svg?height=32&width=32",
            },
            {
              task: "Market overview keynote",
              dueDate: "Today",
              stage: "In progress",
              priority: "High",
              team: "Customer Care",
              assignee: "/placeholder.svg?height=32&width=32",
            },
          ].map((task, i) => (
            <div
              key={i}
              className="grid grid-cols-[1fr,100px,100px,120px,80px] items-center gap-4 border-b px-4 py-3 last:border-0"
            >
              <div className="flex items-center gap-3">
                <div className="h-5 w-5 rounded-full border-2 border-gray-300" />
                <span>{task.task}</span>
              </div>
              <div className="text-sm text-yellow-600">{task.dueDate}</div>
              <div>
                <Badge
                  variant="secondary"
                  className="bg-yellow-100 text-yellow-700"
                >
                  {task.stage}
                </Badge>
              </div>
              <div>
                <Badge
                  variant="secondary"
                  className={
                    task.priority === "High"
                      ? "bg-orange-100 text-orange-700"
                      : "bg-yellow-100 text-yellow-700"
                  }
                >
                  {task.priority}
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">{task.team}</span>
                <img
                  src={task.assignee || "/placeholder.svg"}
                  alt="Assignee"
                  className="h-8 w-8 rounded-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tomorrow's Tasks */}
      <div className="mb-8">
        <h2 className="mb-4 text-lg font-semibold">Tomorrow</h2>
        <div className="rounded-lg border bg-white">
          <div className="grid grid-cols-[1fr,100px,100px,120px,80px] gap-4 border-b px-4 py-2 text-sm text-gray-500">
            <div>TASK</div>
            <div>DUE DATE</div>
            <div>STAGE</div>
            <div>PRIORITY</div>
            <div>TEAM</div>
          </div>
          {[
            {
              task: "Brand proposal",
              dueDate: "Tomorrow",
              stage: "Not started",
              priority: "High",
              team: "Marketing 02",
              assignee: "/placeholder.svg?height=32&width=32",
            },
            {
              task: "Social media review",
              dueDate: "Tomorrow",
              stage: "In progress",
              priority: "Medium",
              team: "Operations",
              assignee: "/placeholder.svg?height=32&width=32",
            },
            {
              task: "Report - Week 30",
              dueDate: "Tomorrow",
              stage: "Not started",
              priority: "Low",
              team: "Operations",
              assignee: "/placeholder.svg?height=32&width=32",
            },
          ].map((task, i) => (
            <div
              key={i}
              className="grid grid-cols-[1fr,100px,100px,120px,80px] items-center gap-4 border-b px-4 py-3 last:border-0"
            >
              <div className="flex items-center gap-3">
                <div className="h-5 w-5 rounded-full border-2 border-gray-300" />
                <span>{task.task}</span>
              </div>
              <div className="text-sm text-yellow-600">{task.dueDate}</div>
              <div>
                <Badge
                  variant="secondary"
                  className={
                    task.stage === "In progress"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-gray-100 text-gray-700"
                  }
                >
                  {task.stage}
                </Badge>
              </div>
              <div>
                <Badge
                  variant="secondary"
                  className={
                    task.priority === "High"
                      ? "bg-orange-100 text-orange-700"
                      : task.priority === "Medium"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-gray-100 text-gray-700"
                  }
                >
                  {task.priority}
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">{task.team}</span>
                <img
                  src={task.assignee || "/placeholder.svg"}
                  alt="Assignee"
                  className="h-8 w-8 rounded-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* This Week's Tasks */}
      <div>
        <h2 className="mb-4 text-lg font-semibold">This week</h2>
        <div className="rounded-lg border bg-white">
          <div className="grid grid-cols-[1fr,100px,100px,120px,80px] gap-4 border-b px-4 py-2 text-sm text-gray-500">
            <div>TASK</div>
            <div>DUE DATE</div>
            <div>STAGE</div>
            <div>PRIORITY</div>
            <div>TEAM</div>
          </div>
          {[
            {
              task: "Order check-ins",
              dueDate: "Wednesday",
              stage: "In progress",
              priority: "Medium",
              team: "Retails",
              assignee: "/placeholder.svg?height=32&width=32",
            },
            {
              task: "HR reviews",
              dueDate: "Wednesday",
              stage: "Not started",
              priority: "Medium",
              team: "People",
              assignee: "/placeholder.svg?height=32&width=32",
            },
            {
              task: "Report - Week 30",
              dueDate: "Friday",
              stage: "Not started",
              priority: "Low",
              team: "Development",
              assignee: "/placeholder.svg?height=32&width=32",
            },
          ].map((task, i) => (
            <div
              key={i}
              className="grid grid-cols-[1fr,100px,100px,120px,80px] items-center gap-4 border-b px-4 py-3 last:border-0"
            >
              <div className="flex items-center gap-3">
                <div className="h-5 w-5 rounded-full border-2 border-gray-300" />
                <span>{task.task}</span>
              </div>
              <div className="text-sm">{task.dueDate}</div>
              <div>
                <Badge
                  variant="secondary"
                  className={
                    task.stage === "In progress"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-gray-100 text-gray-700"
                  }
                >
                  {task.stage}
                </Badge>
              </div>
              <div>
                <Badge
                  variant="secondary"
                  className={
                    task.priority === "High"
                      ? "bg-orange-100 text-orange-700"
                      : task.priority === "Medium"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-gray-100 text-gray-700"
                  }
                >
                  {task.priority}
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">{task.team}</span>
                <img
                  src={task.assignee || "/placeholder.svg"}
                  alt="Assignee"
                  className="h-8 w-8 rounded-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
