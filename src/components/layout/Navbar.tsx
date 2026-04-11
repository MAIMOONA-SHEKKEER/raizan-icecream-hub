import Link from "next/link";
import { navLinks } from "@/data/navLinks";

const Navbar = () => {
  return (
    <nav className="flex items-center gap-6 lg:gap-8">
      {navLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className="text-sm font-medium text-zinc-700 transition hover:text-pink-600"
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
