import type { DropdownMenuProps, MenuItem } from "@/type/Menu";
import { useState } from "react";


const DropdownMenu = ({ menuTitle = "Apps", menusList = [] }: DropdownMenuProps) => {
  const [appsDropdownOpen, setAppsDropdownOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="ecom-header__link flex items-center gap-1 hover:text-blue-600 transition-colors"
        onClick={() => setAppsDropdownOpen(!appsDropdownOpen)}
        aria-expanded={appsDropdownOpen}
        aria-haspopup="true"
      >
        {menuTitle}
        <svg
          className={`w-4 h-4 transition-transform ${appsDropdownOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {appsDropdownOpen && (
        <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
          <div className="py-2">
            {menusList &&
              menusList.map(({name, link}: MenuItem, index: number) => (
                <a
                  key={index}
                  href={link}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors"
                >
                  {name}
                </a>
              ))}
            {/* <a
              href="/posts"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors"
            >
              Posts App
            </a>
            <a
              href="/counter"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors"
            >
              Counter App
            </a>
            <a
              href="/movies"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors"
            >
              Movies App
            </a> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
