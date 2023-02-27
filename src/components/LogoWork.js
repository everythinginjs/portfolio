/* eslint-disable @next/next/no-img-element */
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const IMAGES = [
  {
    src: "images/work/logo/logoA4zi.jpg",
    alt: "logoA4zi",
    id: "popup-logoA4zi",
    title: "logoA4zi",
    description: "this is a logoA4zi",
  },
  {
    src: "images/work/logo/logoAcademic.jpg",
    alt: "logoAcademic",
    id: "popup-logoAcademic",
    title: "logoAcademic",
    description: "this is a logoAcademic",
  },
  {
    src: "images/work/logo/logoDbrrane.jpg",
    alt: "logoDbrrane",
    id: "popup-logoDbrrane",
    title: "logoDbrrane",
    description: "this is a logoDbrrane",
  },
  {
    src: "images/work/logo/logoDmi.png",
    alt: "logoDmi",
    id: "popup-logoDmi",
    title: "logoDmi",
    description: "this is a logoDmi",
  },
  {
    src: "images/work/logo/logoGreen.jpg",
    alt: "logoGreen",
    id: "popup-logoGreen",
    title: "logoGreen",
    description: "this is a logoGreen",
  },
  {
    src: "images/work/logo/logoKakh.jpg",
    alt: "logoKakh",
    id: "popup-logoKakh",
    title: "logoKakh",
    description: "this is a logoKakh",
  },
  {
    src: "images/work/logo/logoRoti.jpg",
    alt: "logoRoti",
    id: "popup-logoRoti",
    title: "logoRoti",
    description: "this is a logoRoti",
  },
  {
    src: "images/work/logo/logoSayad.jpg",
    alt: "logoSayad",
    id: "popup-logoSayad",
    title: "logoSayad",
    description: "this is a logoSayad",
  },
  {
    src: "images/work/logo/logoShahd.jpg",
    alt: "logoShahd",
    id: "popup-logoShahd",
    title: "logoShahd",
    description: "this is a logoShahd",
  },
  {
    src: "images/work/logo/logoVocomed.jpg",
    alt: "logoVocomed",
    id: "popup-logoVocomed",
    title: "logoVocomed",
    description: "this is a logoVocomed",
  },
  {
    src: "images/work/logo/logoZehn.jpg",
    alt: "logoZehn",
    id: "popup-logoZehn",
    title: "logoZehn",
    description: "this is a logoZehn",
  },
];

const LogoWork = () => {
  return (
    <div className="box-items portfolio-items">
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry>
          {IMAGES.map((img) => {
            return (
              <div key={img.id} className="box-item f-art-1">
                <div className="image">
                  <a
                    href={`#${img.id}`}
                    className="has-popup-media hover-animated"
                  >
                    <img
                      src={img.src}
                      className="wp-post-image"
                      alt={img.alt}
                      loading="lazy"
                    />
                    <span className="info circle">
                      <span className="centrize full-width">
                        <span className="vertical-center">
                          <span className="icon fas fa-plus" />
                          <span className="desc">
                            <span className="category">{img.title}</span>
                            <span className="name">{img.description}</span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </a>
                </div>
                <div id={img.id} className="popup-box mfp-fade mfp-hide">
                  <div className="content">
                    <img
                      src={img.src}
                      className="wp-post-image"
                      alt={img.alt}
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};
export default LogoWork;
