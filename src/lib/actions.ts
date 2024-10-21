"use server"

import db from "@/lib/db"
import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { jobSchema, validateWithZodSchema } from "./schemas"

const getAuthUser = async () => {
  const user = await currentUser()
  if (!user) redirect("/")

  return user
}

export const createJobAction = async (formData: FormData) => {
  const user = await getAuthUser()
  console.log(Object.fromEntries(formData))

  try {
    const rawData = Object.fromEntries(formData)
    const validatedFields = validateWithZodSchema(jobSchema, rawData)

    console.log(rawData)
    console.log(validatedFields)

    await db.job.create({
      data: {
        ...validatedFields,
        clerkId: user.id,
      },
    })
    console.log("Job created")
  } catch (error) {
    console.log(error)
  }
  redirect("/")
}
