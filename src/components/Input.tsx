type InputProps = {
  placeholder: string;
  textarea?: boolean;
};

export default function Input({
  placeholder,
  textarea,
}: InputProps) {
  if (textarea) {
    return (
      <textarea
        placeholder={placeholder}
        className="min-h-[140px] rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-white outline-none transition-all placeholder:text-[#94A3B8] focus:border-[#2563EB]"
      />
    );
  }

  return (
    <input
      placeholder={placeholder}
      className="h-14 rounded-2xl border border-white/10 bg-white/[0.04] px-5 text-white outline-none transition-all placeholder:text-[#94A3B8] focus:border-[#2563EB]"
    />
  );
}