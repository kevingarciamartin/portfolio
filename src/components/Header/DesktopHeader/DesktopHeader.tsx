import Clock from "../Clock/Clock";
import styles from "../Header.module.css";
import NavLink from "../NavLink/NavLink";
import ThemeButton from "../ThemeButton/ThemeButton";

const DesktopHeader = () => {
  return (
    <ul className={styles.desktopHeader}>
      <li>
        <div>Kevin Garcia Martin:</div>
        <div>Developer x Engineer</div>
      </li>
      <li>
        <div>Location:</div>
        <div>
          Stockholm, Sweden
          <Clock />
        </div>
      </li>
      <li>
        <div>Navigation:</div>
        <nav>
          <ul>
            <li>
              <NavLink href="/" label="Home" />
            </li>
            <li>
              <NavLink href="/work" label="Work" />
            </li>
          </ul>
        </nav>
      </li>
      <li>
        <div>Theme:</div>
        <div className={styles["theme-buttons"]}>
          <ThemeButton value="light" />
          <ThemeButton value="dark" />
        </div>
      </li>
    </ul>
  );
};

export default DesktopHeader;
