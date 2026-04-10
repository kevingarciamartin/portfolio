import ActionGroup from "../ActionGroup/ActionGroup";
import Clock from "../Clock/Clock";
import sharedStyles from "../Header.module.css";
import styles from "./DesktopHeader.module.css";

const DesktopHeader = () => {
  return (
    <ul className={`${styles.desktopHeader} ${sharedStyles.headerItem}`}>
      <li>
        <div className={styles.secondary}>Kevin Garcia Martin:</div>
        <div>Developer x Engineer</div>
      </li>
      <li>
        <div className={styles.secondary}>Location:</div>
        <div>
          Stockholm, Sweden
          <Clock />
        </div>
      </li>
      <li>
        <div className={styles.secondary}>Navigation:</div>
        <nav>
          <ActionGroup variant="link" />
        </nav>
      </li>
      <li>
        <div className={styles.secondary}>Theme:</div>
        <ActionGroup variant="button" />
      </li>
    </ul>
  );
};

export default DesktopHeader;
