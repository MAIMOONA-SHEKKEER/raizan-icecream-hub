import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

const Button = ({ href, children, variant = "primary" }: ButtonProps) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition";

  const variants = {
    primary: "bg-pink-600 text-white hover:bg-pink-700",
    secondary:
      "border border-zinc-300 text-zinc-800 hover:border-pink-300 hover:text-pink-600",
  };

  return (
    <Link href={href} className={`${baseStyles} ${variants[variant]}`}>
      {children}
    </Link>
  );
};

export default Button;
