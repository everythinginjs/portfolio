/* eslint-disable @next/next/no-img-element */
import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";
import { parallax } from "../utils";

const FILTERS = [
  {
    eventId: "box-item",
    text: "All",
  },
  {
    eventId: "f-catalogue",
    text: "Catalogue",
  },
  {
    eventId: "f-stationary",
    text: "Stationary",
  },
  {
    eventId: "f-logo",
    text: "Logo",
  },
  {
    eventId: "f-webBanner",
    text: "WebBanner",
  },
  {
    eventId: "f-poster",
    text: "Poster",
  },
];

const IMAGES = [
  {
    src: "images/work/logo/logoA4zi.jpg",
    alt: "123",
    id: "popup-logoA4zi",
    title: "Logo",
    description: "this is a log No1",
    filter: "f-logo",
  },
  {
    src: "images/work/logo/logoAcademic.jpg",
    alt: "123",
    id: "popup-logoAcademic",
    title: "Logo",
    description: "this is a log No1",
    filter: "f-logo",
  },
  {
    src: "images/work/Catalogue/catCarvisol1.jpg",
    alt: "123",
    id: "popup-catCarvisol1",
    title: "LocatCarvisol1go",
    description: "this is a log No1",
    filter: "f-catalogue",
  },
];

const ItemIsotopeWork = () => {
  // Isotope
  const isotope = useRef();

  const [filterKey, setFilterKey] = useState("box-item");

  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".portfolio-items", {
        itemSelector: ".box-item",
        percentPosition: true,
        // masonry: {
        //   columnWidth: ".box-item",
        // },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    });
  }, []);

  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "glitch-effect" : "");

  useEffect(() => {
    const circle = document.querySelectorAll(".circle");
    circle.forEach((e) => {
      e.addEventListener("mouseenter", (m) => {
        if (!e.getElementsByClassName("ink")[0]) {
          const span = document.createElement("span");
          span.classList.add("ink");
          e.appendChild(span);
          span.classList.add("ink-animate");
        }
      });
      e.addEventListener("mouseleave", (m) => {
        const span = document.querySelector(".ink");
        if (span) {
          span.classList.remove("ink-animate");
        }
      });
    });
  }, []);

  return (
    <>
      {/* portfolio filter */}
      <div className="filter-menu content-box">
        <div className="filters">
          {FILTERS.map((filter) => {
            return (
              <div key={filter.eventId} className="btn-group">
                <label
                  data-text={filter.text}
                  className={`c-pointer ${activeBtn(filter.eventId)}`}
                  onClick={handleFilterKeyChange(filter.eventId)}
                >
                  <input
                    type="radio"
                    name="fl_radio"
                    defaultValue={`.${filter.eventId}`}
                  />
                  {filter.text}
                </label>
              </div>
            );
          })}
        </div>
      </div>
      {/* portfolio items */}
      <div className="box-items portfolio-items">
        {/* logos */}
        {IMAGES.map((img) => {
          return (
            <div
              key={img.id}
              className={`box-item box-items-art ${img.filter}`}
            >
              <div className="image">
                <a
                  href={`#${img.id}`}
                  className="has-popup-media hover-animated"
                >
                  {/* thumbnail */}
                  <img
                    src={img.src}
                    className="wp-post-image"
                    alt="A4zi Logo"
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
              <div id="popup-logoA4zi" className="popup-box mfp-fade mfp-hide">
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
      </div>
    </>
  );
};
export default ItemIsotopeWork;
