import { TaskForm } from './components/TaskForm'
import { TaskList } from './components/TaskList'
import './App.css'

import { useLocalStorageTasks } from './hooks/useLocalStorageTasks'
import { Modal } from './components/Modal'
import { useModal } from './hooks/useModal'

export default function App() {
  const { tasks, addTask, deleteTask, completeTask } = useLocalStorageTasks()
  const { isModalOpen, openModal, closeModal } = useModal()

  return (
    <div className='app'>
      <h1>Lista de Tarefas</h1>

      <button onClick={openModal} className='open-modal-button'>
        Adicionar tarefa
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <TaskForm addTask={addTask} closeModal={closeModal} />
      </Modal>

      <TaskList tasks={tasks} onDelete={deleteTask} onComplete={completeTask} />
    </div>
  )
}
