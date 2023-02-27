import CMS from "../../CMS.json";
import PosterWork from "./PosterWork";

export default function PosterSection() {
  return (
    <div className="section works" id={CMS.posterSection.title}>
      <div className="content">
        <div className="title">
          <div className="title_inner">{CMS.posterSection.title}</div>
        </div>
        <PosterWork />
        <div className="clear" />
      </div>
    </div>
  );
}
