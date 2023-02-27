/* eslint-disable @next/next/no-img-element */
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const IMAGES = [
  {
    src: "images/work/catalogue/catCar.jpg",
    alt: "catCar",
    id: "popup-catCar",
    title: "catCar",
    description: "this is a CatCar",
  },
  {
    src: "images/work/catalogue/catCarvisol.jpg",
    alt: "catCarvisol",
    id: "popup-catCarvisol",
    title: "catCarvisol",
    description: "this is a catCarvisol",
  },
  {
    src: "images/work/catalogue/catCarvisol1.jpg",
    alt: "catCarvisol1",
    id: "popup-catCarvisol1",
    title: "catCarvisol1",
    description: "this is a catCarvisol1",
  },
  {
    src: "images/work/catalogue/catCarvisol2.jpg",
    alt: "catCarvisol2",
    id: "popup-catCarvisol2",
    title: "catCarvisol2",
    description: "this is a catCarvisol2",
  },
  {
    src: "images/work/catalogue/catExais.jpg",
    alt: "catExais",
    id: "popup-catExais",
    title: "catExais",
    description: "this is a catExais",
  },
  {
    src: "images/work/catalogue/catRoti.jpg",
    alt: "catRoti",
    id: "popup-catRoti",
    title: "catRoti",
    description: "this is a catRoti",
  },
  {
    src: "images/work/catalogue/catShahd.jpg",
    alt: "catShahd",
    id: "popup-catShahd",
    title: "catShahd",
    description: "this is a catShahd",
  },
  {
    src: "images/work/catalogue/catTs2.jpg",
    alt: "catTs2",
    id: "popup-catTs2",
    title: "catTs2",
    description: "this is a catTs2",
  },
];

const CatalogueWork = () => {
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
export default CatalogueWork;
