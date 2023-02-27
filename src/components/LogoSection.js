import CMS from "../../CMS.json";
import LogoWork from "./LogoWork";

export default function LogoSection() {
  return (
    <div className="section works" id={CMS.logoSection.title}>
      <div className="content">
        <div className="title">
          <div className="title_inner">{CMS.logoSection.title}</div>
        </div>
        <LogoWork />
        <div className="clear" />
      </div>
    </div>
  );
}
