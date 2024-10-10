interface BadgeProps {
  name: string;
}

export const Badge = ({ name }: BadgeProps) => {
  return (
    <span className="inline-flex items-center ~leading-5/7 rounded-full bg-brand-green px-3.5 py-0.5 text-sm font-bold text-dark-blue">
      {name}
    </span>
  );
};
