import CMS from "../../CMS.json";
import ArtGallery from "./ArtGallery";

export default function ArtSection() {
  return (
    <div className="section works" id={CMS.artSection.title}>
      <div className="content">
        <div className="title">
          <div className="title_inner">{CMS.artSection.title}</div>
        </div>
        <ArtGallery />
        <div className="clear" />
      </div>
    </div>
  );
}
