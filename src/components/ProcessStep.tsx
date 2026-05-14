type ProcessStepProps = {
  number: string;
  title: string;
  description: string;
};

export default function ProcessStep({
  number,
  title,
  description,
}: ProcessStepProps) {
  return (
    <div className="group relative rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm transition duration-300 hover:border-[#2563EB]/50 hover:bg-white/[0.06]">
      <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#2563EB] text-lg font-bold text-white shadow-lg shadow-[#2563EB]/25">
        {number}
      </div>

      <h3 className="mb-4 text-2xl font-semibold text-white">
        {title}
      </h3>

      <p className="text-base leading-7 text-[#CBD5E1]">
        {description}
      </p>
    </div>
  );
}