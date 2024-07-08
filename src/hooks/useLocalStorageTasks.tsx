import { useState, useEffect } from 'react'
import { ITask } from '../types'

const TASKS_STORAGE_KEY = 'tasks'

export function useLocalStorageTasks() {
  function getInitialTasks(): ITask[] {
    const storedTasks = localStorage.getItem(TASKS_STORAGE_KEY)
    return storedTasks ? JSON.parse(storedTasks) : []
  }

  const [tasks, setTasks] = useState<ITask[]>(getInitialTasks)

  useEffect(() => {
    localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks))
  }, [tasks])

  function addTask(title: string, description: string) {
    const newTask: ITask = {
      id: crypto.randomUUID(),
      title,
      description,
      completed: false,
    }
    setTasks((prevTasks) => [...prevTasks, newTask])
  }

  function deleteTask(id: string) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id))
  }

  function completeTask(id: string) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }

  return { tasks, addTask, deleteTask, completeTask }
}
