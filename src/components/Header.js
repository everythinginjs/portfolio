import Logo from "./Logo";
import Menu from "./Menu";

export default function Header() {
  return (
    <header className="header">
      <div className="head-top">
        <a href="#" className="menu-btn">
          <span />
        </a>
        <Logo />
        <Menu />
      </div>
    </header>
  );
}
