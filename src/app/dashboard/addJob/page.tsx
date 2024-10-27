"use client"

import Form from "@/components/Dashboard/Form"
import { createJobAction } from "@/lib/actions"

function AddJob() {
  return (
    <div className="w-full">
      <h1 className="text-6xl text-center font-semibold italic text-slate-900 mt-12 mb-1">
        Add Your Next Adventure
      </h1>
      <p className="text-center font-medium text-slate-500/90 text-lg">
        Start tracking your job applications effortlessly with JobGo. Let&apos;s
        get that dream job!
      </p>

      <Form action={createJobAction} />
    </div>
  )
}
export default AddJob
