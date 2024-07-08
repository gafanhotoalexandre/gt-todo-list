import './TaskForm.css'
import { useRef } from 'react'

interface TaskFormProps {
  addTask: (title: string, description: string) => void
}

export function TaskForm({ addTask }: TaskFormProps) {
  const titleRef = useRef<HTMLInputElement>(null)
  const descriptionRef = useRef<HTMLTextAreaElement>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const title = titleRef.current?.value.trim()
    const description = descriptionRef.current?.value.trim()

    if (!(title && description)) {
      return alert('Por favor, insira um título e uma descrição')
    }

    addTask(title, description)
    if (titleRef.current) titleRef.current.value = ''
    if (descriptionRef.current) descriptionRef.current.value = ''
  }

  return (
    <form onSubmit={handleSubmit} className='task-form'>
      <div>
        <label htmlFor='title'>Título:</label>
        <input
          type='text'
          placeholder='Título da tarefa...'
          id='title'
          ref={titleRef}
        />
      </div>

      <div>
        <label htmlFor='description'>Descrição:</label>
        <textarea
          id='description'
          placeholder='Descrição da tarefa...'
          ref={descriptionRef}
        ></textarea>
      </div>
      <button type='submit'>Adicionar Tarefa</button>
    </form>
  )
}
