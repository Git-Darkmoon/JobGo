"use client"

import { useFormState } from "react-dom"
import { useEffect } from "react"
import { toast } from "sonner"
import { actionFunction } from "@/lib/types"

const initialState = {
  message: "",
}

function FormContainer({
  action,
  children,
  className = "",
}: {
  action: actionFunction
  children: React.ReactNode
  className?: string
}) {
  const [state, formAction] = useFormState(action, initialState)

  console.log(state)

  useEffect(() => {
    if (state?.message) {
      toast.info(state.message)
    }
  }, [state])
  return (
    <form className={className} action={formAction}>
      {children}
    </form>
  )
}
export default FormContainer
