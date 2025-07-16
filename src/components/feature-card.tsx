
import { cn } from "@/lib/utils";

interface FeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient?: "purple-teal" | "teal-purple" | "orange-purple";
}

export function FeatureCard({
  icon,
  title,
  description,
  gradient = "purple-teal",
  className,
  ...props
}: FeatureCardProps) {
  const gradientClasses = {
    "purple-teal": "from-brand-purple/20 to-brand-teal/20",
    "teal-purple": "from-brand-teal/20 to-brand-purple/20",
    "orange-purple": "from-brand-orange/20 to-brand-purple/20",
  };

  return (
    <div
      className={cn(
        "blockchain-card card-hover",
        className
      )}
      {...props}
    >
      <div className="mb-4 rounded-full bg-gradient-to-br from-brand-purple to-brand-teal p-2 w-12 h-12 flex items-center justify-center text-white">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
      <div className={cn(
        "absolute -z-10 inset-0 bg-gradient-to-br opacity-5 rounded-xl",
        gradientClasses[gradient]
      )} />
    </div>
  );
}
