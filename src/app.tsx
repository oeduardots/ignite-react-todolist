import './global.css'

import { useEffect, useState } from 'react'

import { Header } from './components/header'
import { Tasks } from './components/tasks'

const LOCAL_STORAGE_KEY = 'todo:savedTasks'

export interface TaskType {
  id: string
  title: string
  isCompleted: boolean
}

export function App() {
  const [tasks, setTasks] = useState<TaskType[]>([])

  function loadSavedTasks() {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (saved) {
      setTasks(JSON.parse(saved))
    }
  }

  useEffect(() => {
    loadSavedTasks()
  }, [])

  function setTasksAndSave(newTasks: TaskType[]) {
    setTasks(newTasks)
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks))
  }

  function addTask(taskTitle: string) {
    setTasksAndSave([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false,
      },
    ])
  }

  function handleTaskComplete(taskId: string) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        }
      }
      return task
    })
    setTasksAndSave(newTasks)
  }

  function handleDeleteTask(taskId: string) {
    const newTasks = tasks.filter((task) => task.id !== taskId)
    setTasksAndSave(newTasks)
  }

  return (
    <main>
      <Header onAddTask={addTask} />
      <Tasks
        tasks={tasks}
        onComplete={handleTaskComplete}
        onDelete={handleDeleteTask}
      />
    </main>
  )
}
