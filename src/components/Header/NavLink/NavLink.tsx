"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../Header.module.css";
import { useHeader } from "../HeaderContext";

interface NavLinkProps {
  href: string;
  label: string;
}

const NavLink = ({ href, label }: NavLinkProps) => {
  const pathname = usePathname();
  const { closeMenu } = useHeader();

  const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={isActive ? styles.active : ""}
      onClick={closeMenu}
    >
      <span>
        <span aria-hidden="true"></span>
        <span>{label}</span>
      </span>
    </Link>
  );
};

export default NavLink;
