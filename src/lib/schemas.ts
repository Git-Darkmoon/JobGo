import { z, ZodSchema } from "zod"

export const jobSchema = z.object({
  role: z
    .string()
    .min(4, { message: "Must be at least 4 characters" })
    .max(30, { message: "Must be at least 4 characters." }),
  company: z
    .string()
    .min(4, { message: "Must be at least 4 characters" })
    .max(30, { message: "Must be at least 4 characters." }),
  location: z
    .string()
    .min(4, { message: "Must be at least 4 characters" })
    .max(30, { message: "Must be at least 4 characters." }),
  status: z
    .string()
    .min(4, { message: "Must be at least 4 characters" })
    .max(30, { message: "Must be at least 4 characters." }),
  modality: z
    .string()
    .min(4, { message: "Must be at least 4 characters" })
    .max(30, { message: "Must be at least 4 characters." }),
  salary: z.coerce
    .number()
    .int()
    .min(1000, { message: "Must be at least 1000" })
    .max(100000, { message: "Must be at most 100000" }),
})

export function validateWithZodSchema<T>(
  schema: ZodSchema<T>,
  data: unknown
): T {
  const result = schema.safeParse(data)

  if (!result.success) {
    const errors = result.error.errors.map((error) => error.message)
    throw new Error(errors.join(", "))
  }

  return result.data
}
