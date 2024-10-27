import { formatCurrency } from "@/lib/utils"
import {
  BriefcaseBusinessIcon,
  DollarSignIcon,
  GlobeIcon,
  MapPinIcon,
} from "lucide-react"
import StatusBadge from "./StatusBadge"
import { Job } from "@prisma/client"
import Button from "../ui/Button"
import FormContainer from "../ui/FormContainer"
import { deleteJobAction } from "@/lib/actions"
import EditButton from "./EditButton"

function JobCard({
  id,
  role,
  company,
  location,
  status,
  modality,
  salary,
}: Job) {
  return (
    // TODO: Add edit / delete functionality in the page of each job
    <div>
      <article className="bg-white shadow-sm border-b border-slate-300/50 py-6 px-4 rounded-lg hover:scale-105 transition-transform">
        <header>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-4">
              <div className="bg-white size-16 border border-black/10 rounded-full flex items-center justify-center">
                <span className="text-3xl text-slate-700 uppercase font-semibold">
                  {company.charAt(0).toUpperCase()}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-left text-primary capitalize font-medium">
                  {company}
                </span>
                <h3 className="text-lg text-left font-semibold text-slate-900 ">
                  {role}
                </h3>
              </div>
            </div>
            <StatusBadge status={status} />
          </div>
        </header>
        <div className="text-sm text-slate-700 mt-4 flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-x-2">
            <BriefcaseBusinessIcon size={20} strokeWidth={2.5} />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-x-2">
            <GlobeIcon size={20} strokeWidth={2.5} />
            <span>{modality}</span>
          </div>
          <div className="flex items-center gap-x-2">
            <MapPinIcon size={20} strokeWidth={2.5} />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-x-2">
            <DollarSignIcon size={20} strokeWidth={2.5} />
            <span>{formatCurrency(salary)}</span>
          </div>
        </div>
        <div className="flex justify-end gap-4 mt-4">
          <EditButton jobId={id} />
          <DeleteJob jobId={id} />
        </div>
      </article>
    </div>
  )
}
export default JobCard

function DeleteJob({ jobId }: { jobId: string }) {
  const deleteJob = deleteJobAction.bind(null, { jobId })

  return (
    <FormContainer action={deleteJob}>
      <Button variant="outline" className="text-primary">
        Delete
      </Button>
    </FormContainer>
  )
}
