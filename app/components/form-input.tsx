interface FormInputProps {
  icon: React.ReactNode;
  placeholder: string;
  type: string;
  required: boolean;
  errors: string[];
  name: string;
}

export default function FormInput({
  icon,
  placeholder,
  type,
  required,
  errors,
  name,
}: FormInputProps) {
  return (
    <div>
      <div className="relative">
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          required={required}
          className="pl-20 w-full outline-none ring-1 focus:ring-2 focus:ring-gray-400 ring-neutral-300 border-orange-100"
        />
        {icon}
      </div>
      {errors.map((error, index) => (
        <span key={index} className="text-red-500">
          {error}
        </span>
      ))}
    </div>
  );
}
