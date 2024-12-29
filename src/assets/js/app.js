import "../styles/reset.css";
import "../styles/fonts.css";
import "../styles/style.css";
import { darkmode } from "./modules/darkmode";
import { clock } from "./modules/clock";
import { handleNavigation, renderPage } from "./modules/navigation";
import { toggleMobileMenu } from "./modules/mobileMenu";
import { home } from "./pages/home/home";

export function app() {
  renderPage(home);
}
