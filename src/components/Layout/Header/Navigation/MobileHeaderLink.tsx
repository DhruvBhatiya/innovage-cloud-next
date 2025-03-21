import { useState } from "react";
import Link from "next/link";
import { HeaderItem } from "../../../../types/menu";

interface MobileHeaderLinkProps {
  item: HeaderItem;
  closeDrawer: () => void;
}

const MobileHeaderLink: React.FC<MobileHeaderLinkProps> = ({ item, closeDrawer }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent default link behavior for toggling submenu
    setSubmenuOpen(!submenuOpen);
  };

  const handleLinkClick = () => {
    setSubmenuOpen(false); // Close submenu when clicking a link
    closeDrawer();         // Also close the drawer
  };

  return (
    <div className="relative w-full">
      <Link
        href={item.href}
        onClick={item.submenu ? handleToggle : handleLinkClick}
        className="flex items-center justify-between w-full py-2 text-muted focus:outline-none"
      >
        {item.label}
        {item.submenu && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            viewBox="0 0 24 24"
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
        )}
      </Link>

      {submenuOpen && item.submenu && (
        <div className="bg-white p-2 w-full">
          {item.submenu.map((subItem, index) => (
            <Link
              key={index}
              href={subItem.href}
              className="block py-2 text-gray-500 hover:bg-gray-200"
              onClick={handleLinkClick} // Ensure submenu closes here
            >
              {subItem.label}
            </Link>
          ))}
        </div>
      )}
    
    </div>
  );
};

export default MobileHeaderLink;
