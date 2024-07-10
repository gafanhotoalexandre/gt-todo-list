// src/hooks/useModal.ts
import { useState, useEffect, useRef } from 'react'

interface UseModal {
  isModalOpen: boolean
  openModal: () => void
  closeModal: () => void
  dialogRef: React.RefObject<HTMLDialogElement>
}

export function useModal(): UseModal {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const dialogRef = useRef<HTMLDialogElement>(null)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  useEffect(() => {
    const dialog = dialogRef.current
    if (dialog) {
      if (isModalOpen) {
        dialog.showModal()
      } else {
        dialog.close()
      }
    }
  }, [isModalOpen])

  return { isModalOpen, openModal, closeModal, dialogRef }
}
