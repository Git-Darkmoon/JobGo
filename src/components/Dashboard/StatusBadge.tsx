import { cn } from "@/lib/utils"

function StatusBadge({ status }: { status: string }) {
  return (
    <span
      className={cn("px-3 py-1 text-sm font-medium rounded-full capitalize", {
        "bg-primary/50 text-green-700": status === "interview",
        "bg-yellow-500/50 text-yellow-700": status === "pending",
        "bg-red-500/50 text-red-700": status === "rejected",
      })}
    >
      {status}
    </span>
  )
}
export default StatusBadge
