import { actionFunction } from "@/lib/types"
import Button from "../ui/Button"
import FormContainer from "../ui/FormContainer"
import Input from "../ui/Input"
import Select from "../ui/Select"
import { Job } from "@prisma/client"

function Form({ data, action }: { data?: Job; action: actionFunction }) {
  return (
    <FormContainer
      action={action}
      className="grid grid-cols-2 lg:grid-cols-3 gap-6 mt-10 p-5 rounded-md shadow-md bg-white"
    >
      {/* ROLE */}
      <Input
        label="Role / Job Title"
        id="role"
        name="role"
        required
        type="text"
        placeholder="Sr Software Engineer"
        minLength={3}
        maxLength={30}
        defaultValue={data?.role}
      />
      {/* COMPANY */}
      <Input
        label="company"
        id="company"
        name="company"
        required
        type="text"
        placeholder="EPAM Systems"
        minLength={1}
        maxLength={25}
        defaultValue={data?.company}
      />
      {/* LOCATION */}
      <Input
        label="location"
        id="location"
        name="location"
        required
        type="text"
        placeholder="New York, USA"
        minLength={5}
        maxLength={30}
        defaultValue={data?.location}
      />
      {/* JOB STATUS */}
      <Select
        id="status"
        name="status"
        required
        label="status"
        options={["interview", "pending", "rejected"]}
        defaultValue={data?.status}
      />
      {/* JOB MODALITY */}
      <Select
        id="modality"
        name="modality"
        required
        label="modality"
        options={["on-site", "hybrid", "remote"]}
        defaultValue={data?.modality}
      />
      {/* SALARY */}
      <Input
        label="Salary (monthly)"
        id="salary"
        name="salary"
        required
        type="number"
        min={500}
        max={10000}
        placeholder="5000"
        defaultValue={data?.salary}
      />
      <Button variant="primary" type="submit">
        {data ? "Update" : "Add"}
      </Button>
    </FormContainer>
  )
}
export default Form
