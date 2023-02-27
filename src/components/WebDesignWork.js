/* eslint-disable @next/next/no-img-element */
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const IMAGES = [
  {
    src: "images/work/webDesign/site1.jpg",
    alt: "poster1",
    id: "popup-poster1",
    title: "poster1",
    description: "this is a poster1",
  },
  {
    src: "images/work/webDesign/site2.jpg",
    alt: "poster1",
    id: "popup-poster1",
    title: "poster1",
    description: "this is a poster1",
  },
];

const WebDesignWork = () => {
  return (
    <div className="box-items portfolio-items">
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 2 }}>
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
export default WebDesignWork;
