type ProblemCardProps = {
  title: string;
  description: string;
};

export default function ProblemCard({
  title,
  description,
}: ProblemCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:border-[#2563EB]/40 hover:bg-white/[0.05]">
      <div className="mb-5 h-2 w-12 rounded-full bg-[#2563EB]" />

      <h3 className="mb-3 text-xl font-semibold text-white">
        {title}
      </h3>

      <p className="text-base leading-7 text-[#CBD5E1]">
        {description}
      </p>
    </div>
  );
}