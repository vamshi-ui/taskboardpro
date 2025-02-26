import { ChevronLeft, ChevronRight, MoreVertical, Plus } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="flex-1 px-4 py-6 md:px-8">
      {/* Calendar Section */}
      <div className="mb-8 grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 rounded-xl bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-lg font-semibold">March 2022</h2>
            <div className="flex gap-2">
              <button className="rounded-lg p-1 hover:bg-gray-100">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button className="rounded-lg p-1 hover:bg-gray-100">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-1">
            {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((day) => (
              <div key={day} className="p-2 text-center text-sm text-gray-500">
                {day}
              </div>
            ))}
            {Array.from({ length: 31 }).map((_, i) => (
              <div
                key={i}
                className={`rounded-lg p-2 text-center ${
                  i === 2 ? "bg-yellow-400" : "hover:bg-gray-50"
                }`}
              >
                {i + 1}
              </div>
            ))}
          </div>
        </div>

        {/* Tasks Section */}
        <div className="rounded-xl bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-lg font-semibold">My tasks (05)</h2>
            <button>
              <MoreVertical className="h-5 w-5 text-gray-400" />
            </button>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-5 w-5 rounded-full border-2 border-yellow-400 bg-yellow-400" />
              <span className="flex-1 text-sm line-through">
                Finish monthly reporting
              </span>
              <span className="text-sm text-yellow-600">Today</span>
            </div>
            {[
              "Contract signing",
              "Market overview keyno...",
              "Project research",
            ].map((task) => (
              <div key={task} className="flex items-center gap-3">
                <div className="h-5 w-5 rounded-full border-2 border-gray-300" />
                <span className="flex-1 text-sm">{task}</span>
                <span className="text-sm text-gray-500">Today</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Categories and Tracking */}
      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 rounded-xl bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-lg font-semibold">My categories</h2>
            <button>
              <MoreVertical className="h-5 w-5 text-gray-400" />
            </button>
          </div>

          <div className="space-y-4">
            {["Work", "Family", "Freelance work 01", "Conference planning"].map(
              (category) => (
                <div
                  key={category}
                  className="flex items-center justify-between rounded-lg border p-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-5 w-5 rounded-lg bg-gray-100" />
                    <span>{category}</span>
                  </div>
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <img
                        key={i}
                        src="https://placeholder.pics/svg/32"
                        alt={`Team member ${i}`}
                        className="h-8 w-8 rounded-full border-2 border-white"
                      />
                    ))}
                  </div>
                </div>
              )
            )}
            <button className="flex w-full items-center justify-center gap-2 rounded-lg border p-3 text-gray-500 hover:bg-gray-50">
              <Plus className="h-5 w-5" />
              Add more
            </button>
          </div>
        </div>

        {/* Comments Section */}
        <div className="rounded-xl bg-white p-6 shadow-sm">
          <h2 className="mb-6 text-lg font-semibold">New comments</h2>
          <div className="space-y-4">
            {[
              "Find my keynote attached...",
              "I've added the data. Let's check it out toge...",
            ].map((comment) => (
              <div
                key={comment}
                className="flex items-center gap-4 rounded-lg border p-3"
              >
                <div className="flex-1">
                  <div className="font-medium">Market research</div>
                  <div className="text-sm text-gray-500">{comment}</div>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </div>
            ))}
            <button className="flex w-full items-center justify-center gap-2 rounded-lg border p-3 text-gray-500 hover:bg-gray-50">
              <Plus className="h-5 w-5" />
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
