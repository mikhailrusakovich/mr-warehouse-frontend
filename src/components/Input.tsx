type InputProps = {
  name: string;
  placeholder: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  textarea?: boolean;
  type?: string;
  required?: boolean;
};

export default function Input({
  name,
  placeholder,
  value,
  onChange,
  textarea,
  type = "text",
  required = false,
}: InputProps) {
  const className =
    "rounded-2xl border border-white/10 bg-white/[0.04] px-5 text-white outline-none transition-all placeholder:text-[#94A3B8] focus:border-[#2563EB]";

  if (textarea) {
    return (
      <textarea
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={`${className} min-h-[140px] py-4`}
      />
    );
  }

  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className={`${className} h-14`}
    />
  );
}