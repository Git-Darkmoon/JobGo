import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export const formatCurrency = (value: string | number) => {
  if (!value) return ""
  const numberValue = Number(value)

  return numberValue.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
