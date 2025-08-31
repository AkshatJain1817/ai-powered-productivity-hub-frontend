import { useState } from "react"
import TaskForm from "./TaskForm"
import TaskCard from "./TaskCard"

export default function TaskBoard() {
  const [tasks, setTasks] = useState([])

  const handleAddTask = (data) => {
    setTasks((prev) => [...prev, { ...data, id: Date.now() }])
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {/* Left side: Form */}
      <div>
        <h2 className="text-xl font-bold mb-4">Add a New Task</h2>
        <TaskForm onSubmit={handleAddTask} />
      </div>

      {/* Right side: Task List */}
      <div>
        <h2 className="text-xl font-bold mb-4">Your Tasks</h2>
        <div className="space-y-4">
          {tasks.length === 0 ? (
            <p className="text-gray-500">No tasks yet. Add one above 👆</p>
          ) : (
            tasks.map((task) => (
              <TaskCard
                key={task.id}
                title={task.title}
                description={task.description}
                deadline={task.deadline}
                priority={task.priority}
              />
            ))
          )}
        </div>
      </div>
    </div>
  )
}
