"use server"

import db from "@/lib/db"
import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { jobSchema, validateWithZodSchema } from "./schemas"
import { ROUTES } from "./routes"
import { revalidatePath } from "next/cache"

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
  prevState: unknown,
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

export const fetchJobDetails = async (jobId: string) => {
  const user = await getAuthUser()

  try {
    return db.job.findUnique({
      where: {
        id: jobId,
        clerkId: user.id,
      },
    })
  } catch (error) {
    return renderError(error)
  }
}

export const deleteJobAction = async (prevState: { jobId: string }) => {
  const { jobId } = prevState

  try {
    await db.job.delete({
      where: {
        id: jobId,
      },
    })

    revalidatePath("/dashboard/allJobs")
    return { message: "job removed" }
  } catch (error) {
    return renderError(error)
  }
}
