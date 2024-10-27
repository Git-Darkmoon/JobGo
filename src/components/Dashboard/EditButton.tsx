"use client"

import { useRouter } from "next/navigation"
import Button from "../ui/Button"
import { ROUTES } from "@/lib/routes"

function EditButton({ jobId }: { jobId: string }) {
  const navigate = useRouter()

  const handleClick = () => {
    navigate.push(`${ROUTES.ALL_JOBS}/${jobId}/edit`)
  }

  return (
    <>
      <Button
        onClick={handleClick}
        variant="primary"
        className="text-slate-100"
      >
        Edit
      </Button>
    </>
  )
}
export default EditButton
