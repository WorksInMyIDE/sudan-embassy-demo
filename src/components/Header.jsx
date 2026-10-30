
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const linkStyle =
  "border-b-2 border-transparent py-3 text-sm font-medium text-gray-700 transition-colors duration-200 hover:border-red-700 hover:text-green-800";

const activeStyle =
  "border-red-700 font-semibold text-green-800";

const pageStyle = ({ isActive }) =>
  `${linkStyle} ${isActive ? activeStyle : ""}`;

const sections = [
  "consular",
  "visas",
  "relations",
  "notices",
  "contact",
];

// Flag
function Flag() {
  return (
    <div
      className="relative h-8 w-12 shrink-0 overflow-hidden border border-gray-200 sm:h-9 sm:w-14"
      dir="ltr"
    >
      <div className="h-1/3 bg-red-700" />
      <div className="h-1/3 bg-white" />
      <div className="h-1/3 bg-black" />

      <div
        className="absolute inset-y-0 left-0 w-1/2 bg-green-700"
        style={{
          clipPath: "polygon(0 0, 100% 50%, 0 100%)",
        }}
      />
    </div>
  );
}

// Brand
function Brand({ t }) {
  return (
    <Link
      to="/"
      className="flex min-w-0 items-center gap-3 sm:gap-4"
    >
      <Flag />

      <div className="min-w-0">
        <p className="truncate font-serif text-base font-semibold text-gray-900 sm:text-xl">
          {t.brand.name}
        </p>

        <p className="text-xs text-gray-500 sm:text-sm">
          {t.brand.city}
        </p>
      </div>
    </Link>
  );
}

// Animated hamburger
function Hamburger({ open }) {
  return (
    <span className="relative block h-5 w-6">
      <span
        className={`absolute left-0 top-0 h-[2px] w-6 bg-current transition-all duration-300 ease-in-out ${
          open ? "translate-y-[9px] rotate-45" : ""
        }`}
      />

      <span
        className={`absolute left-0 top-[9px] h-[2px] w-6 bg-current transition-all duration-200 ${
          open ? "scale-x-0 opacity-0" : ""
        }`}
      />

      <span
        className={`absolute bottom-0 left-0 h-[2px] w-6 bg-current transition-all duration-300 ease-in-out ${
          open ? "-translate-y-[9px] -rotate-45" : ""
        }`}
      />
    </span>
  );
}

export default function Header({ t, onToggle }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setMenuOpen(false);

  // Close menu after navigation
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, location.hash]);

  // Close menu with Escape
  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  return (
    <>
      {/* Announcement banner */}
      <div className="bg-yellow-100 px-4 py-2 text-center text-xs text-yellow-900 sm:text-sm">
        {t.banner}
      </div>

      {/* Flag color strip */}
      <div className="flex h-1.5 sm:h-2">
        <div className="flex-1 bg-red-700" />
        <div className="flex-1 bg-gray-100" />
        <div className="flex-1 bg-black" />
      </div>

      {/* Desktop brand header */}
      <header className="hidden bg-white xl:block">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-5 py-5">
          <Brand t={t} />

          <p
            dir="auto"
            className="ms-auto text-xl text-green-800"
          >
            {t.brand.alt}
          </p>
        </div>
      </header>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
        {/* Mobile header */}
        <div className="flex h-[72px] items-center justify-between gap-4 px-5 xl:hidden">
          <Brand t={t} />

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="flex h-11 w-11 shrink-0 items-center justify-center text-gray-800 transition-colors duration-200 hover:bg-gray-100 hover:text-green-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
          >
            <Hamburger open={menuOpen} />
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="mx-auto hidden max-w-7xl items-center justify-between gap-5 px-5 xl:flex">
          <div className="flex items-center gap-x-5">
            <NavLink to="/" end className={pageStyle}>
              {t.nav.home}
            </NavLink>

            <NavLink to="/embassy" className={pageStyle}>
              {t.nav.embassy}
            </NavLink>

            {sections.map((id) => (
              <Link
                key={id}
                to={`/#${id}`}
                className={linkStyle}
              >
                {t.nav[id]}
              </Link>
            ))}
          </div>

          <div className="flex shrink-0 items-center gap-3 py-2">
            <button
              type="button"
              onClick={onToggle}
              className="border border-gray-300 px-3 py-2 text-sm font-semibold text-gray-800 transition-colors hover:bg-gray-100"
            >
              {t.toggle}
            </button>

            <Link
              to="/#visas"
              className="bg-red-700 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-red-800"
            >
              {t.nav.apply}
            </Link>
          </div>
        </div>

        {/* Animated mobile dropdown */}
        <div
          id="mobile-navigation"
          aria-hidden={!menuOpen}
          className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out xl:hidden ${
            menuOpen
              ? "grid-rows-[1fr] opacity-100"
              : "pointer-events-none grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="min-h-0 overflow-hidden">
            <div className="max-h-[calc(100dvh-72px)] overflow-y-auto border-t border-gray-100 bg-white">
              <div className="flex flex-col px-5 py-3">
                {/* Main links */}
                <NavLink
                  to="/"
                  end
                  onClick={closeMenu}
                  tabIndex={menuOpen ? 0 : -1}
                  className={({ isActive }) =>
                    `border-b border-gray-100 px-2 py-3.5 text-sm transition-colors duration-200 ${
                      isActive
                        ? "font-semibold text-green-800"
                        : "font-medium text-gray-700 hover:text-green-800"
                    }`
                  }
                >
                  {t.nav.home}
                </NavLink>

                <NavLink
                  to="/embassy"
                  onClick={closeMenu}
                  tabIndex={menuOpen ? 0 : -1}
                  className={({ isActive }) =>
                    `border-b border-gray-100 px-2 py-3.5 text-sm transition-colors duration-200 ${
                      isActive
                        ? "font-semibold text-green-800"
                        : "font-medium text-gray-700 hover:text-green-800"
                    }`
                  }
                >
                  {t.nav.embassy}
                </NavLink>

                {sections.map((id) => (
                  <Link
                    key={id}
                    to={`/#${id}`}
                    onClick={closeMenu}
                    tabIndex={menuOpen ? 0 : -1}
                    className="border-b border-gray-100 px-2 py-3.5 text-sm font-medium text-gray-700 transition-colors duration-200 hover:translate-x-1 hover:text-green-800"
                  >
                    {t.nav[id]}
                  </Link>
                ))}

                {/* Mobile actions */}
                <div className="mt-5 flex flex-col gap-3 pb-5">
                  <button
                    type="button"
                    onClick={onToggle}
                    tabIndex={menuOpen ? 0 : -1}
                    className="w-full border border-gray-200 bg-gray-50 px-4 py-3 text-center text-sm font-semibold text-gray-800 transition-colors hover:bg-gray-100"
                  >
                    {t.toggle}
                  </button>

                  <Link
                    to="/#visas"
                    onClick={closeMenu}
                    tabIndex={menuOpen ? 0 : -1}
                    className="w-full bg-red-700 px-4 py-3 text-center text-sm font-semibold text-white transition-colors duration-200 hover:bg-red-800"
                  >
                    {t.nav.apply}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
