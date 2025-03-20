"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { HeaderItem } from "../../../../types/menu";
import { usePathname } from "next/navigation";

const HeaderLink: React.FC<{ item: HeaderItem; sticky: any }> = ({ item, sticky }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [activeMoreSubmenu, setActiveMoreSubmenu] = useState<number | null>(null);
  const path = usePathname();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const isLinkActive =
      path === item.href ||
      (item.submenu && item.submenu.some((subItem) => path === subItem.href));
    setIsActive(isLinkActive ?? false);
  }, [path, item.href, item.submenu]);

  const toggleSubmenu = () => {
    setSubmenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!event.target || !(event.target as HTMLElement).closest(".submenu")) {
        setSubmenuOpen(false);
        setActiveMoreSubmenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      toggleSubmenu();
    } else if (event.key === "Escape") {
      setSubmenuOpen(false);
      setActiveMoreSubmenu(null);
    }
  };

  return (
    <div
      className="relative submenu"
      onMouseEnter={() => setSubmenuOpen(true)}
      onMouseLeave={() => setSubmenuOpen(false)}
    >
      {item.submenu ? (
        <Link
          href={item.href}
          onClick={toggleSubmenu}
          onKeyDown={handleKeyDown}
          className={`text-lg flex items-center ${sticky ? 'hover:font-medium' : 'hover:text-black'} capitalize relative 
             ${sticky ? isActive
              ? "text-white after:absolute after:w-8 after:h-1 after:bg-[#c84736] after:rounded-full after:-bottom-1"
              : "text-[#ededed]"
              :
              isActive
                ? "text-black after:absolute after:w-8 after:h-1 after:bg-[#c84736] after:rounded-full after:-bottom-1"
                : "text-gray-500"}`}
          aria-haspopup="true"
          aria-expanded={submenuOpen}
        >
          {item.label}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            viewBox="0 0 24 24"
            className={`transition-transform ${submenuOpen ? "rotate-180" : ""}`}
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="m7 10l5 5l5-5"
            />
          </svg>
        </Link>
      ) : (
        <Link
          href={item.href}
          prefetch={true}
          className={`text-lg flex items-center ${sticky ? 'hover:font-medium' : 'hover:text-black'} capitalize relative 
        ${sticky ? isActive
              ? "text-white after:absolute after:w-8 after:h-1 after:bg-[#c84736] after:rounded-full after:-bottom-1"
              : "text-[#ededed]"
              :
              isActive
                ? "text-black after:absolute after:w-8 after:h-1 after:bg-[#c84736] after:rounded-full after:-bottom-1"
                : "text-gray-500"}`}
        >
          {item.label}
        </Link>
      )}

      {/* Submenu and Moresubmenu Logic */}
      {submenuOpen && item.submenu && (
        <div
          className="absolute left-0 w-60 bg-white dark:bg-darklight dark:text-white shadow-lg rounded-lg"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          {item.submenu.map((subItem, index) => {
            const isSubItemActive = path === subItem.href;
            return (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => setActiveMoreSubmenu(index)}
                onMouseLeave={() => setActiveMoreSubmenu(null)}
              >
                <Link
                  prefetch={true}
                  href={subItem.href}
                  className={`flex items-center justify-between px-4 py-2 ${
                    isSubItemActive
                      ? "bg-primary text-white"
                      : "text-black dark:text-white hover:bg-[#c84736] hover:text-white"
                  }`}
                >
                  {subItem.label}
                  {subItem.moresubmenu && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      className="ml-2"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="m9 6l6 6l-6 6"
                      />
                    </svg>
                  )}
                </Link>

                {activeMoreSubmenu === index && subItem.moresubmenu && (
                  <div
                    className="absolute left-full top-0 w-60 bg-white dark:bg-darklight dark:text-white shadow-lg rounded-lg"
                    data-aos="fade-up"
                    data-aos-duration="500"
                  >
                    {subItem.moresubmenu.map((moreItem, moreIndex) => (
                      <Link
                        key={moreIndex}
                        prefetch={true}
                        href={moreItem.href}
                        className="block px-4 py-2 text-black dark:text-white hover:bg-[#c84736] hover:text-white"
                      >
                        {moreItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default HeaderLink;
