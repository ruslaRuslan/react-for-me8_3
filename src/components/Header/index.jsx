import NavLinkByRuslan from "../NavLinkByRuslan";
import "./index.css";
function Header() {
  return (
    <nav className="homeAboutContact">
      <NavLinkByRuslan title="home" to="/" />
      <NavLinkByRuslan title="about" to="/about" />
      <NavLinkByRuslan title="contact" to="/contact" />
      <NavLinkByRuslan title="github" to="/github" />
    </nav>
  );
}
export default Header;
