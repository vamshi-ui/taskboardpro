"use client";

import type React from "react";

import { Plus} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function AddTaskDialog({ children }: { children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle>Add task</DialogTitle>

          </div>
        </DialogHeader>
        <div className="grid gap-6 py-4">
          <Input placeholder="Name of task" />

          <div className="grid gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full border-2" />
                <Label>Day</Label>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="h-8">
                  Today
                </Button>
                <Button variant="outline" size="sm" className="h-8">
                  Tomorrow
                </Button>
                <Button variant="outline" size="sm" className="h-8">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full border-2" />
                <Label>Notification</Label>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="h-8">
                  In 1 hour
                </Button>
                <Button variant="outline" size="sm" className="h-8">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full border-2" />
                <Label>Priority</Label>
              </div>
              <Button variant="outline" size="sm" className="h-8">
                <Plus className="h-4 w-4 mr-2" />
                Add priority
              </Button>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full border-2" />
                <Label>Tags</Label>
              </div>
              <Button variant="outline" size="sm" className="h-8">
                <Plus className="h-4 w-4 mr-2" />
                Add tags
              </Button>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full border-2" />
                <Label>Assign</Label>
              </div>
              <Button variant="outline" size="sm" className="h-8">
                <Plus className="h-4 w-4 mr-2" />
                Add assignee
              </Button>
            </div>
          </div>

          <div className="grid gap-2">
            <Label>Description</Label>
            <Textarea className="min-h-[100px]" />
          </div>
        </div>
        <div className="flex justify-end">
          <Button className="bg-yellow-400 hover:bg-yellow-500">
            Create task
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
