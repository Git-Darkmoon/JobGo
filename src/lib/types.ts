export type actionFunction = (
  prevState: unknown,
  formData: FormData
) => Promise<{ message: string }>

export type Job = {
  id: string
  role: string
  company: string
  location: string
  status: string
  modality: string
  salary: number
}
