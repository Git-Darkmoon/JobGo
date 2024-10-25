import { formatCurrency } from "@/lib/utils"

function JobInfo({
  property,
  value,
}: {
  property: string
  value: string | number
}) {
  return (
    <div>
      <h3 className="capitalize text-base font-medium text-slate-500">
        {property}
      </h3>
      <p className="text-base text-slate-900 capitalize">
        {typeof value === "number" ? formatCurrency(value) : value}
      </p>
    </div>
  )
}
export default JobInfo
