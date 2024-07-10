import { useRef, useEffect } from 'react'
import './Modal.css'
import { X } from '@phosphor-icons/react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

export function Modal({ isOpen, onClose, children }: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (dialog) {
      if (isOpen) {
        dialog.showModal()
      } else {
        dialog.close()
      }
    }
  }, [isOpen])

  return (
    <dialog ref={dialogRef} className='modal'>
      <div className='modal-content'>
        {children}
        <button onClick={onClose} className='modal-close-button'>
          <X size={32} color='#f87171' />
        </button>
      </div>
    </dialog>
  )
}
