import Input from "@/components/ui/Input"

function AddJob() {
  return (
    <div className="w-full">
      <h1 className="text-6xl text-center font-semibold italic text-slate-900 mb-3">
        Add Your Next Adventure
      </h1>
      <p className="text-center text-lg">
        Start tracking your job applications effortlessly with JobGo. Let's get
        that dream job!
      </p>

      <form action="" className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <Input
          label="Job Title"
          id="jobTitle"
          name="jobTitle"
          required
          type="text"
          placeholder="Software Engineer"
          minLength={5}
          maxLength={50}
        />
        <Input
          label="Job Title"
          id="jobTitle"
          name="jobTitle"
          required
          type="text"
          placeholder="Software Engineer"
          minLength={5}
          maxLength={50}
        />
        <Input
          label="Job Title"
          id="jobTitle"
          name="jobTitle"
          required
          type="text"
          placeholder="Software Engineer"
          minLength={5}
          maxLength={50}
        />
        <Input
          label="Job Title"
          id="jobTitle"
          name="jobTitle"
          required
          type="text"
          placeholder="Software Engineer"
          minLength={5}
          maxLength={50}
        />
      </form>
    </div>
  )
}
export default AddJob
