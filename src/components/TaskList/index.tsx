import { ITask } from '../../types'
import { Task } from '../Task'
import './TaskList.css'

interface TaskListProps {
  tasks: ITask[]
  onDelete: (id: string) => void
  onComplete: (id: string) => void
}

export function TaskList({ tasks, onDelete, onComplete }: TaskListProps) {
  return (
    <div className='task-list-container'>
      {tasks.length === 0 ? (
        <p className='empty-list'>Nenhuma tarefa registrada.</p>
      ) : (
        tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={onDelete}
            onComplete={onComplete}
          />
        ))
      )}
    </div>
  )
}
