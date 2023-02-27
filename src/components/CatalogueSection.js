import CMS from "../../CMS.json";
import CatalogueWork from "./CatalogueWork";

export default function CatalogueSection() {
  return (
    <div className="section works" id={CMS.catalogueSection.title}>
      <div className="content">
        <div className="title">
          <div className="title_inner">{CMS.catalogueSection.title}</div>
        </div>
        <CatalogueWork />
        <div className="clear" />
      </div>
    </div>
  );
}
