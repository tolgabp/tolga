import React from "react";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  //{ name: "About", href: "#about" },
];

export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm sticky top-0 z-50">
      <div className="text-2xl font-extrabold tracking-tight text-accent dark:text-accent-light select-none">
        <span className="mr-2">&#9673;</span> Dev Portfolio
      </div>
      <div className="flex gap-6">
        {NAV_LINKS.map(link => (
          <a
            key={link.name}
            href={link.href}
            className="hover:text-accent dark:hover:text-accent-light font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded px-2 py-1 hover:underline hover:underline-offset-8 hover:decoration-secondary dark:hover:decoration-secondary-light"
          >
            {link.name}
          </a>
        ))}
      </div>
      <button
        aria-label="Toggle dark mode"
        className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-accent/10 dark:hover:bg-accent-dark/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-colors"
        onClick={() => setDarkMode(dm => !dm)}
      >
        {darkMode ? "🌙" : "☀️"}
      </button>
    </nav>
  );
} 