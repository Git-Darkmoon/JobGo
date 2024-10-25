"use client"

import { SquarePenIcon } from "lucide-react"
import Button from "../ui/Button"

function EditJobButton() {
  return (
    <form action="">
      <Button
        variant="primary"
        className="flex w-full items-center gap-x-2 text-slate-100 text-sm lg:text-base"
      >
        <SquarePenIcon size={20} />
        <p>Edit</p>
      </Button>
    </form>
  )
}
export default EditJobButton
