import CMS from "../../CMS.json";

export default function Logo() {
  return (
    <div className="logo hover-masks-logo">
      <a href="#">
        <span className="mask-lnk">
          {CMS.header.logo.firstName}{" "}
          <strong>{CMS.header.logo.lastName}</strong>
        </span>
        <span className="mask-lnk mask-lnk-hover">
          {CMS.header.logo.hover.firstWord}{" "}
          <strong>{CMS.header.logo.hover.secondWord}</strong>
        </span>
      </a>
    </div>
  );
}
