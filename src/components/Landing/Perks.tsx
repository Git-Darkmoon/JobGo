import { BriefcaseIcon, ChartColumnIcon, PlusIcon } from "lucide-react"

const perks = [
  {
    name: "Add Jobs",
    description:
      "Easily add new job applications with all the important details.",
    icon: PlusIcon,
  },
  {
    name: "Track Progress",
    description:
      "View all your job applications and their current status at a glance.",
    icon: BriefcaseIcon,
  },
  {
    name: "Analyze Stats",
    description: "Get insights into your job search with detailed statistics.",
    icon: ChartColumnIcon,
  },
]

function Perks() {
  return (
    <>
      <div className="my-12 grid grid-cols-1 lg:grid-cols-2">
        <h2 className="text-4xl font-medium text-balance">
          Focusing on organization,
          <span className="text-primary font-semibold italic">
            we simplify your job search.
          </span>
        </h2>
        <p className="text-slate-700 font-normal">
          We ensure that every job application is tracked, so you never miss a
          step. Stay organized, from submitting applications to preparing for
          interviews. With JobGo, focus on landing your next opportunity with
          complete confidence.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-20">
        {perks.map((perk) => {
          const { name, description } = perk
          return (
            <div className="shadow-md rounded-md border border-slate-300/40 py-4 px-6 group flex flex-col items-center justify-center gap-2">
              <perk.icon className="text-primary" size={36} />
              <h3 className="text-3xl text-slate-900 font-bold italic capitalize">
                {name}
              </h3>
              <p className="text-slate-600 text-pretty">{description}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}
export default Perks
