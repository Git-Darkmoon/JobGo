import JobCard from "@/components/Dashboard/JobCard"
import Button from "@/components/ui/Button"
import { fetchAllJobs } from "@/lib/actions"
import { ROUTES } from "@/lib/routes"
import { Job } from "@prisma/client"
import Image from "next/image"
import Link from "next/link"

async function AllJobs() {
  const allJobs = (await fetchAllJobs()) as Job[]

  if (allJobs.length === 0) {
    return (
      <div className="select-none w-full flex flex-col items-center justify-center gap-6 mt-12">
        <p className="text-slate-500 font-semibold text-xl">
          You haven&apos;t added any job yet. Start by adding new jobs
        </p>
        <Link href={ROUTES.ADD_JOB}>
          <Button variant="primary">Add a Job</Button>
        </Link>
        <Image
          src="/empty_jobs.svg"
          alt="empty-state"
          width={300}
          height={300}
          className="w-full max-w-xs mt-6 object-cover"
        />
      </div>
    )
  }

  return (
    <div className="w-full">
      <header className="text-balance">
        <p className="text-green-600 font-bold text-base">
          Stay on Top of Your Job Hunt
        </p>
        <h2 className="text-6xl font-redHat tracking-tight font-extrabold mt-2 mb-6 ">
          Your Job Applications
        </h2>
        <p className="text-slate-700 font-redHat font-semibold">
          Here&apos;s a detailed list of all the jobs you&apos;ve applied to.
          Keep track of your progress and stay organized
        </p>
      </header>
      <section className="mt-6 flex flex-col gap-5">
        {allJobs.map((job) => {
          return <JobCard {...job} key={job.id} />
        })}
      </section>
    </div>
  )
}
export default AllJobs
