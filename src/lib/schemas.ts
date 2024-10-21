import { z, ZodSchema } from "zod"

export const jobSchema = z.object({
  role: z
    .string()
    .min(3, { message: "Must be at least 3 characters" })
    .max(30, { message: "Cannot be more than 30 characters." }),
  company: z
    .string()
    .min(1, { message: "Must be at least 1 character" })
    .max(30, { message: "Cannot be more than 30 characters." }),
  location: z
    .string()
    .min(4, { message: "Must be at least 4 characters" })
    .max(30, { message: "Cannot be more than 30 characters." }),
  status: z
    .string()
    .min(4, { message: "Must be at least 4 characters" })
    .max(30, { message: "Cannot be more than 30 characters." }),
  modality: z
    .string()
    .min(4, { message: "Must be at least 4 characters" })
    .max(30, { message: "Cannot be more than 30 characters." }),
  salary: z.coerce
    .number()
    .int()
    .min(500, { message: "Must be at least 500" })
    .max(10000, { message: "Must be at most 10000" }),
})

export function validateWithZodSchema<T>(
  schema: ZodSchema<T>,
  data: unknown
): T {
  const validatedFields = schema.safeParse(data)

  if (!validatedFields.success) {
    const errors = validatedFields.error.message as string

    throw new Error(errors)
  }

  return validatedFields.data
}
