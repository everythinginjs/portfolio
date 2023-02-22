import dynamic from "next/dynamic";
import CMS from "../../CMS.json";

const ItemIsotopeArtDynamic = dynamic(
  () => import("../components/ItemIsotopeArt"),
  {
    ssr: false,
  }
);

export default function Art() {
  return (
    <div className="section works" id={CMS.ArtSection.title}>
      <div className="content">
        <div className="title">
          <div className="title_inner">{CMS.ArtSection.title}</div>
        </div>
        <ItemIsotopeArtDynamic />
        <div className="clear" />
      </div>
    </div>
  );
}
