type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  center = false,
}: SectionHeaderProps) {
  return (
    <div
      className={`max-w-3xl ${
        center ? "mx-auto text-center" : ""
      }`}
    >
      {eyebrow && (
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-[#2563EB]">
          {eyebrow}
        </p>
      )}

      <h2 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="text-lg leading-8 text-[#CBD5E1]">
          {description}
        </p>
      )}
    </div>
  );
}