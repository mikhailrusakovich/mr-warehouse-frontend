import Image from "next/image";

type ServiceCardProps = {
  title: string;
  description: string;
  image: string;
};

export default function ServiceCard({
  title,
  description,
  image,
}: ServiceCardProps) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm transition duration-300 hover:border-[#2563EB]/40 hover:bg-white/[0.05]">
      <div className="relative h-40 overflow-hidden lg:h-44 xl:h-48">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#07111F]/20 to-[#07111F]/95" />
      </div>

      <div className="p-6 xl:p-7">
        <h3 className="mb-3 text-2xl font-semibold leading-tight text-white">
          {title}
        </h3>

        <p className="text-base leading-7 text-[#CBD5E1]">
          {description}
        </p>
      </div>
    </div>
  );
}