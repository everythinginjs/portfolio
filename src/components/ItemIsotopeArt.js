/* eslint-disable @next/next/no-img-element */
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const IMAGES = [
  {
    src: "images/art/art2.jpg",
    alt: "123",
    id: "popup-art2",
    title: "Banner",
    description: "this is a banner No1",
  },
  {
    src: "images/art/art3.jpg",
    alt: "123",
    id: "popup-art3",
    title: "Banner",
    description: "this is a banner No1",
  },
  {
    src: "images/art/art4.jpg",
    alt: "123",
    id: "popup-art4",
    title: "Banner",
    description: "this is a banner No1",
  },
  {
    src: "images/art/art5.jpg",
    alt: "123",
    id: "popup-art5",
    title: "Banner",
    description: "this is a banner No1",
  },
  {
    src: "images/art/art6.jpg",
    alt: "123",
    id: "popup-art6",
    title: "Banner",
    description: "this is a banner No1",
  },
  {
    src: "images/art/art7.jpg",
    alt: "123",
    id: "popup-art7",
    title: "Banner",
    description: "this is a banner No1",
  },
  {
    src: "images/art/art8.jpg",
    alt: "123",
    id: "popup-art8",
    title: "Banner",
    description: "this is a banner No1",
  },
  {
    src: "images/art/art9.jpg",
    alt: "123",
    id: "popup-art9",
    title: "Banner",
    description: "this is a banner No1",
  },
];

const ItemIsotopeArt = () => {
  return (
    <div className="box-items portfolio-items-art">
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
                    {/* thumbnail */}
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
                    {/* original */}
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
export default ItemIsotopeArt;
