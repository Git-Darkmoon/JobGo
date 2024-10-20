import React from "react"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
}

const Input: React.FC<InputProps> = ({
  label,
  id,
  name,
  placeholder,
  defaultValue,
  type,
  required = true,
  ...rest
}) => {
  return (
    <div>
      <label
        className="text-lg text-slate-600 font-medium"
        htmlFor={id || name}
      >
        {label}
      </label>
      <input
        className="block w-full p-3 border border-slate-300 rounded-md"
        type={type}
        id={id || name}
        name={name}
        placeholder={placeholder}
        defaultValue={defaultValue}
        required={required}
        autoComplete="off"
        autoCorrect="off"
        spellCheck="false"
        aria-required={required}
        {...rest}
      />
    </div>
  )
}

export default Input
