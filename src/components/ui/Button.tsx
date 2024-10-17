import { cva } from "class-variance-authority"

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: "primary" | "outline" | "ghost"
  children: React.ReactNode
}

export default function Button({
  variant,
  children,
  ...props
}: ButtonProps): JSX.Element {
  return (
    <button {...props} className={buttonVariants({ variant })}>
      {children}
    </button>
  )
}

const buttonVariants = cva(
  "py-2 px-4 rounded-md font-semibold text-lg hover:scale-105 transition-all",
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
