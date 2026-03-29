"use client";

import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";
import { useState, useEffect } from "react";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className={styles.header}
      data-mobile-menu-open={mobileMenuOpen}
    >
      {/* Mobile Header */}
      <ul>
        <li>
          <Link href="/" id="mobile-logo" onClick={() => setMobileMenuOpen(false)}>
            Kevin García
          </Link>
        </li>
        <li>
          <button
            id="menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div>{mobileMenuOpen ? "Close" : "Menu"}</div>
          </button>
        </li>
      </ul>

      {/* Desktop & Expanded Mobile Header */}
      <ul>
        <li>
          <div>Location</div>
          <div>Stockholm, SE</div>
        </li>
        <li>
          <div>Local Time</div>
          <Clock />
        </li>
        <li>
          <nav>
            <ul>
              <li>
                <Link
                  href="/"
                  className={pathname === "/" ? styles.active : ""}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div aria-hidden="true"></div>
                  <div>Home</div>
                </Link>
              </li>
              <li>
                <Link
                  href="/work"
                  className={pathname === "/work" ? styles.active : ""}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div aria-hidden="true"></div>
                  <div>Work</div>
                </Link>
              </li>
            </ul>
          </nav>
        </li>
        <li>
          <div className={styles["theme-buttons"]}>
            <button>Light</button>
            <button>Dark</button>
          </div>
        </li>
      </ul>
    </header>
  );
}

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="clock">
      {time.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "Europe/Stockholm",
      })}
    </div>
  );
}
