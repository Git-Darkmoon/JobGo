import { ROUTES } from "@/lib/routes"
import { BarChart3Icon, BriefcaseIcon, PlusIcon } from "lucide-react"
import Link from "next/link"

function Sidebar() {
  return (
    <aside className="hidden h-[calc(100dvh-4rem)] min-w-64 bg-primary lg:flex flex-col gap-12 py-12">
      <Link
        className="text-3xl w-full flex items-center gap-2 px-12 py-6 text-slate-950 italic hover:bg-slate-50 transition-colors"
        href={ROUTES.ADD_JOB}
      >
        <PlusIcon className="text-slate-800" strokeWidth={2.5} />
        <h3 className="font-semibold text-gradient-green">Add Job</h3>
      </Link>
      <Link
        className="text-3xl w-full flex items-center gap-2 px-12 py-6 text-slate-950 italic hover:bg-slate-50 transition-colors"
        href={ROUTES.ALL_JOBS}
      >
        <BriefcaseIcon className="text-slate-800" strokeWidth={2.5} />
        <h3 className="font-semibold text-gradient-green">All Jobs</h3>
      </Link>
      <Link
        className="text-3xl w-full flex items-center gap-2 px-12 py-6 text-slate-950 italic hover:bg-slate-50 transition-colors"
        href={ROUTES.STATS}
      >
        <BarChart3Icon className="text-slate-800" strokeWidth={2.5} />
        <h3 className="font-semibold text-gradient-green">Stats</h3>
      </Link>
    </aside>
  )
}
export default Sidebar
