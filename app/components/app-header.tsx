import { SidebarTrigger } from "@/components/ui/sidebar";
import { Plus, Bell } from "lucide-react";
import { AddTaskDialog } from "./add-task-dialog";

export function Header() {
  return (
    <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-white px-4 md:px-8">
      <div className="flex items-center gap-4">
        <SidebarTrigger />
        <div className="w-full max-w-[280px]">
          <input
            type="search"
            placeholder="Search"
            className="w-full rounded-lg border bg-gray-50 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
      <AddTaskDialog>
        <button className="hidden items-center gap-2 rounded-lg bg-yellow-400 px-4 py-2 font-medium hover:bg-yellow-500 md:flex">
          <Plus className="h-5 w-5" />
          New task
        </button>
        </AddTaskDialog>
        <button className="rounded-lg border p-2 hover:bg-gray-50">
          <Bell className="h-5 w-5 text-gray-600" />
        </button>
        <button className="rounded-lg border p-2 hover:bg-gray-50">
          <img
            src="https://placeholder.pics/svg/20"
            alt="Profile"
            className="h-5 w-5 rounded-full "
          />
        </button>
      </div>
    </header>
  );
}
