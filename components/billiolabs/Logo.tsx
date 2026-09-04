type LogoProps = {
  className?: string;
};

export default function Logo({ className = '' }: LogoProps) {
  return (
    <span className={`font-bold tracking-tight text-white lowercase ${className}`}>
      billiolabs
    </span>
  );
}
