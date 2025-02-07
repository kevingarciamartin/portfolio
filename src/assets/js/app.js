import "../styles/reset.css";
import "../styles/fonts.css";
import "../styles/style.css";
import { darkmode } from "./utils/darkmode";
import { clock } from "./utils/clock";
import { pages } from "./utils/pages";
import { handleNavigation, renderPage } from "./utils/navigation";
import { toggleMobileMenu } from "./utils/mobileMenu";
import { home } from "./pages/home/home";

export function app() {
  pages.setPages();
  pages.renderPage(home, "nav-home");
}
