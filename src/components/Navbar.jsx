
import { useState } from "react";
import {
  Menu,
  X,
  Moon,
  Sun,
} from "lucide-react";

import { useTheme } from "../context/ThemeContext";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Journey", href: "#experience",},
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 pt-4">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-5 py-3 shadow-2xl backdrop-blur-xl">
        
        <a
          href="#home"
          className="text-xl font-bold tracking-wide"
        >
          <span className="text-white">SEHAR</span>
          <span className="text-violet-500">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-gray-300 transition hover:text-violet-400"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
            <button
                onClick={toggleTheme}
                className="rounded-xl border border-white/10 p-2 text-gray-300 transition hover:border-violet-500/50 hover:text-violet-400">
                    {theme === "dark" ? (
                    <Sun size={18} />
                    ) : (
                    <Moon size={18} />
                    )}
            </button>

          <button
            onClick={() => setOpen(!open)}
            className="rounded-xl border border-white/10 p-2 md:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="absolute left-4 right-4 top-16 rounded-2xl border border-white/10 bg-black/90 p-4 backdrop-blur-xl md:hidden">
            <div className="flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 text-gray-300 transition hover:bg-violet-500/10 hover:text-violet-400"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
