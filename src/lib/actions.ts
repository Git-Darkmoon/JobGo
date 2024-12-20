"use server"

import db from "@/lib/db"
import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { jobSchema, validateWithZodSchema } from "./schemas"
// import { ROUTES } from "./routes"
// import { revalidatePath } from "next/cache"

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
    // return { message: "job added" }
  } catch (error) {
    return renderError(error)
  }
  redirect("/dashboard/allJobs")
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

export const fetchJobData = async (jobId: string) => {
  const user = await getAuthUser()

  try {
    return db.job.findFirst({
      where: {
        id: jobId,
        clerkId: user.id,
      },
    })
  } catch (error) {
    renderError(error)
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

    // revalidatePath("/dashboard/allJobs")
    // return { message: "job removed" }
  } catch (error) {
    return renderError(error)
  }
  redirect("/dashboard/allJobs")
}

export const updateJobAction = async (
  jobId: string,
  formData: FormData
): Promise<{ message: string }> => {
  try {
    const rawData = Object.fromEntries(formData)
    const validatedFields = validateWithZodSchema(jobSchema, rawData)

    await db.job.update({
      where: {
        id: jobId,
      },
      data: {
        ...validatedFields,
      },
    })
  } catch (error) {
    return renderError(error)
  }
  redirect("/dashboard/allJobs")
}
