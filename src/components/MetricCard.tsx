type MetricCardProps = {
  value: string;
  label: string;
  description: string;
};

export default function MetricCard({
  value,
  label,
  description,
}: MetricCardProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm">
      <p className="mb-3 text-5xl font-bold text-[#2563EB]">
        {value}
      </p>

      <h3 className="mb-3 text-xl font-semibold text-white">
        {label}
      </h3>

      <p className="leading-7 text-[#CBD5E1]">
        {description}
      </p>
    </div>
  );
}