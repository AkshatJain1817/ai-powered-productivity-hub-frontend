import { useState } from "react";
import TaskBoard from "../components/TaskBoard"

export default function TaskManager() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Task Manager</h1>
      <TaskBoard />
    </div>
  )
}