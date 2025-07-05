import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/data", label: "Dados" },
];

export function AppHeader() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg border-b py-4">
      <section className="mx-auto max-w-screen-lg w-full px-4 flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <img src="/eco-recitec.png" alt="Eco Recitec" className="h-12" />
          <span className="text-xl font-bold text-cyan-700 hidden sm:inline">Eco Recitec</span>
        </div>

        <button
          className="sm:hidden flex items-center px-3 py-2 border rounded text-cyan-700 border-cyan-700"
          onClick={() => setMenuOpen(open => !open)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        <nav className="hidden sm:block">
          <ul className="flex items-center space-x-6">
            {navLinks.map(({ to, label }) => {
              const isActive = location.pathname === to;
              return (
                <li key={to}>
                  <Link
                    to={to}
                    className={`${
                      isActive
                        ? "text-cyan-600 border-b-2 border-cyan-600"
                        : "text-gray-800 hover:text-cyan-500"
                    } transition-colors duration-200 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-cyan-400 px-3 py-1`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </section>

      {menuOpen && (
        <nav className="sm:hidden bg-white border-t shadow-md">
          <ul className="flex flex-col px-4 py-2 space-y-2">
            {navLinks.map(({ to, label }) => {
              const isActive = location.pathname === to;
              return (
                <li key={to}>
                  <Link
                    to={to}
                    className={`block ${
                      isActive
                        ? "text-cyan-600 border-l-4 border-cyan-600 bg-cyan-50"
                        : "text-gray-800 hover:text-cyan-500"
                    } transition-colors duration-200 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-cyan-400 px-3 py-2`}
                    aria-current={isActive ? "page" : undefined}
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
