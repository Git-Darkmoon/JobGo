import Form from "@/components/Dashboard/Form"
import { fetchJobData, updateJobAction } from "@/lib/actions"
import { Job } from "@prisma/client"

async function EditJobPage({ params }: { params: { jobId: string } }) {
  const { jobId } = params

  const jobData = (await fetchJobData(jobId)) as Job

  const updateJob = updateJobAction.bind(null, { jobId })

  return (
    <div>
      <h1>EditJobPage: {params.jobId}</h1>
      <Form data={jobData} action={updateJob} />
    </div>
  )
}
export default EditJobPage
