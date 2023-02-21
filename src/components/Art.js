import dynamic from "next/dynamic";
import CMS from "../../CMS.json";

const ItemIsotope = dynamic(() => import("../components/ItemIsotope"), {
  ssr: false,
});

export default function Art() {
  return (
    <div className="section works" id={CMS.ArtSection.title}>
      <div className="content">
        <div className="title">
          <div className="title_inner">{CMS.ArtSection.title}</div>
        </div>
        <ItemIsotope />
        <div className="clear" />
      </div>
    </div>
  );
}
