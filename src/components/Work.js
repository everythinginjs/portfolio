import dynamic from "next/dynamic";
import CMS from "../../CMS.json";

const ItemIsotope = dynamic(() => import("../components/ItemIsotope"), {
  ssr: false,
});

export default function Work() {
  return (
    <div className="section works" id={CMS.WorkSection.title}>
      <div className="content">
        <div className="title">
          <div className="title_inner">{CMS.WorkSection.title}</div>
        </div>
        <ItemIsotope />
        <div className="clear" />
      </div>
    </div>
  );
}
