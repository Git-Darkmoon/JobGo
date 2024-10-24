"use client"

import Button from "@/components/ui/Button"
import FormContainer from "@/components/ui/FormContainer"
import Input from "@/components/ui/Input"
import Select from "@/components/ui/Select"
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

      <FormContainer
        action={createJobAction}
        className="grid grid-cols-2 lg:grid-cols-3 gap-6 mt-10 p-5 rounded-md shadow-md bg-white"
      >
        {/* ROLE */}
        <Input
          label="Role / Job Title"
          id="role"
          name="role"
          required
          type="text"
          placeholder="Sr Software Engineer"
          minLength={3}
          maxLength={30}
        />
        {/* COMPANY */}
        <Input
          label="company"
          id="company"
          name="company"
          required
          type="text"
          placeholder="EPAM Systems"
          minLength={1}
          maxLength={25}
        />
        {/* LOCATION */}
        <Input
          label="location"
          id="location"
          name="location"
          required
          type="text"
          placeholder="New York, USA"
          minLength={5}
          maxLength={30}
        />
        {/* JOB STATUS */}
        <Select
          id="status"
          name="status"
          required
          label="status"
          options={["interview", "pending", "rejected"]}
        />
        {/* JOB MODALITY */}
        <Select
          id="modality"
          name="modality"
          required
          label="modality"
          options={["on-site", "hybrid", "remote"]}
        />
        {/* SALARY */}
        <Input
          label="Salary (monthly)"
          id="salary"
          name="salary"
          required
          type="number"
          min={500}
          max={10000}
          placeholder="5000"
        />
        <Button variant="primary" type="submit">
          Add Job
        </Button>
      </FormContainer>
    </div>
  )
}
export default AddJob
