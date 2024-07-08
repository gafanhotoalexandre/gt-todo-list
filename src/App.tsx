import { TaskForm } from './components/TaskForm'
import { TaskList } from './components/TaskList'
import './App.css'

import { useLocalStorageTasks } from './hooks/useLocalStorageTasks'

export default function App() {
  const { tasks, addTask, deleteTask, completeTask } = useLocalStorageTasks()

  return (
    <div className='app'>
      <h1>Lista de Tarefas</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} onComplete={completeTask} />
    </div>
  )
}
