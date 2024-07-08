import { Prohibit, Check, Trash } from '@phosphor-icons/react'

import './Task.css'

interface TaskProps {
  task: {
    id: string
    title: string
    description: string
    completed: boolean
  }
  onDelete: (id: string) => void
  onComplete: (id: string) => void
}

export function Task({ task, onDelete, onComplete }: TaskProps) {
  return (
    <div className={`task-list-item ${task.completed ? 'completed' : ''}`}>
      <div className='task-header'>
        <h3 className='task-title'>{task.title}</h3>
        <div className='task-actions'>
          <button className='complete-btn' onClick={() => onComplete(task.id)}>
            {task.completed ? <Prohibit /> : <Check />}
          </button>
          <button className='delete-btn' onClick={() => onDelete(task.id)}>
            <Trash />
          </button>
        </div>
      </div>

      <div className='task-body'>
        <p className='task-description'>{task.description}</p>
      </div>
    </div>
  )
}
