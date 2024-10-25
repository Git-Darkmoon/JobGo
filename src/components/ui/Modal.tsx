"use client"
import { cn } from "@/lib/utils"
import { useState } from "react"

function Modal({ isOpen }: { isOpen: boolean }) {
  const [isModalOpen, setIsModalOpen] = useState(isOpen)

  return (
    <div
      className={cn(
        "absolute top-0 left-0 grid place-items-center w-screen h-screen z-10 bg-slate-950/80 backdrop-blur-sm transition-all",
        isModalOpen ? "grid" : "hidden"
      )}
    >
      <dialog open={isModalOpen} className="w-full max-w-xs bg-cyan-200">
        <h1>Soy Modal</h1>
        <button onClick={() => setIsModalOpen(false)}>Close</button>
      </dialog>
    </div>
  )
}
export default Modal
