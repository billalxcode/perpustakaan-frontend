import Link from "next/link";
import { CgHomeAlt } from "react-icons/cg";
import { FaBookBookmark, FaBookmark } from "react-icons/fa6";
import NavProfile from "./profile";

export const navMenuLinks = [
  { name: "Home", href: "/", icon: CgHomeAlt, active: true },
  { name: "Books", href: "/books", icon: FaBookBookmark, active: false },
  { name: "Bookmark", href: "/categories", icon: FaBookmark, active: false },
];

export default function NavMenu() {
  const activeLink = "bg-primary text-primary-foreground";
  return (
    <div className="flex flex-row gap-4 items-center">
      <ul className="flex flex-row gap-2">
        {navMenuLinks.map((link, index) => (
          <li key={index} className={`${link.active ? activeLink : 'text-foreground'} flex flex-row justify-center p-2 px-3 rounded-full items-center text-sm`}>
            <Link
              href={link.href}
              className="flex flex-row gap-2 items-center font-[600]"
            >
              <link.icon />
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      <NavProfile />
    </div>
  );
}
