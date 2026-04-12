import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

const Button = ({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition";

  const variants = {
    primary: "bg-pink-600 text-white hover:bg-pink-700",
    secondary:
      "border border-zinc-300 text-zinc-800 hover:border-pink-300 hover:text-pink-600",
  };

  return (
    <Link
      href={href}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
};

export default Button;
