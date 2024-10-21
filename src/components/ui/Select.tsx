import React from "react"

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  id: string
  options: string[]
  label: string
  name: string
  required?: boolean
}

function Select({ id, options, label, required, name, ...rest }: SelectProps) {
  return (
    <div>
      <label
        className="text-lg text-slate-600 font-medium capitalize"
        htmlFor={id}
      >
        {label}
      </label>
      <select
        id={id}
        required={required}
        name={name}
        {...rest}
        className="block w-full p-3 border border-slate-300 rounded-md"
      >
        {options.map((option) => (
          <option key={option} value={option} className="capitalize">
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}
export default Select
