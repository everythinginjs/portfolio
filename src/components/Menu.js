import CMS from "../../CMS.json";

export default function Menu() {
  return (
    <div className="top-menu hover-masks">
      <div className="top-menu-nav">
        <div className="menu-topmenu-container">
          <ul className="menu">
            <li className="menu-item current-menu-item">
              <a href={CMS.header.menu.home.url}>
                {CMS.header.menu.home.label}
              </a>
            </li>
            <li className="menu-item">
              <a href={CMS.header.menu.about.url}>
                {CMS.header.menu.about.label}
              </a>
            </li>
            <li className="menu-item">
              <a href={CMS.header.menu.resume.url}>
                {CMS.header.menu.resume.label}
              </a>
            </li>
            <li className="menu-item">
              <a href={CMS.header.menu.work.url}>
                {CMS.header.menu.work.label}
              </a>
            </li>
            <li className="menu-item">
              <a href={CMS.header.menu.art.url}>{CMS.header.menu.art.label}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
