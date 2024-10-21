"use client"

import { cva } from "class-variance-authority"
import { Loader2Icon } from "lucide-react"
import { useFormStatus } from "react-dom"

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: "primary" | "outline" | "ghost"
  children: React.ReactNode
}

export default function Button({
  variant,
  children,
  ...props
}: ButtonProps): JSX.Element {
  const { pending } = useFormStatus()

  return (
    <button
      {...props}
      disabled={pending}
      className={buttonVariants({ variant })}
    >
      {pending ? (
        <p>
          <span className="animate-pulse flex items-center justify-between gap-2">
            Loading...
            <span>
              <Loader2Icon className="animate-spin" />
            </span>
          </span>
        </p>
      ) : (
        children
      )}
    </button>
  )
}

const buttonVariants = cva(
  "py-2 px-4 rounded-md font-semibold text-lg hover:scale-105 transition-all disabled:cursor-not-allowed disabled:opacity-50 ",
  {
    variants: {
      variant: {
        primary: "bg-primary text-slate-900",
        outline: "border-2 border-primary text-slate-100",
        ghost: "bg-gray-100 text-black",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
)
