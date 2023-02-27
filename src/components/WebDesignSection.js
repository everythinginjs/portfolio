import CMS from "../../CMS.json";
import WebDesignWork from "./WebDesignWork";

export default function WebDesignSection() {
  return (
    <div className="section works" id={CMS.webDesign.title}>
      <div className="content">
        <div className="title">
          <div className="title_inner">{CMS.webDesign.title}</div>
        </div>
        <WebDesignWork />
        <div className="clear" />
      </div>
    </div>
  );
}
