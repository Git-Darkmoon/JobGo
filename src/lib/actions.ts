"use server"

import db from "@/lib/db"
import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { jobSchema, validateWithZodSchema } from "./schemas"
import { ROUTES } from "./routes"

const getAuthUser = async () => {
  const user = await currentUser()
  if (!user) redirect("/")

  return user
}

const renderError = (
  error: unknown
): {
  message: string
} => {
  console.log(error)
  return {
    message: error instanceof Error ? error.message : "there was an error...",
  }
}

export const createJobAction = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  const user = await getAuthUser()

  try {
    const rawData = Object.fromEntries(formData)
    const validatedFields = validateWithZodSchema(jobSchema, rawData)

    await db.job.create({
      data: {
        ...validatedFields,
        clerkId: user.id,
      },
    })
  } catch (error) {
    return renderError(error)
  }
  redirect(ROUTES.ALL_JOBS)
}

export const fetchAllJobs = async () => {
  const user = await getAuthUser()

  try {
    return db.job.findMany({
      where: {
        clerkId: user.id,
      },
    })
  } catch (error) {
    return renderError(error)
  }
}
