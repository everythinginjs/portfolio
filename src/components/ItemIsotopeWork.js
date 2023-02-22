/* eslint-disable @next/next/no-img-element */
import Isotope from "isotope-layout";
import { Fragment, useEffect, useRef, useState } from "react";

const ItemIsotopeWork = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("box-item");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".portfolio-items", {
        itemSelector: ".box-item",
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".box-item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
    //     return () => isotope.current.destroy();
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
        console.log(
          m.pageY,
          e.offsetParent.offsetParent.offsetParent.offsetParent.offsetLeft,
          e.offsetTop
        );
        if (!e.getElementsByClassName("ink")[0]) {
          const span = document.createElement("span");
          span.classList.add("ink");
          e.appendChild(span);
          span.classList.add("ink-animate");
          // span.style.height = `${e.clientHeight}px`;
          // span.style.width = `${e.clientWidth}px`;
          // span.style.top = `${m.pageY - e.offsetTop - e.clientHeight / 2}px`;
          // span.style.left = `${m.pageX - e.offsetLeft - e.clientWidth / 2}px`;
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
    <Fragment>
      {/* portfolio filter */}
      <div className="filter-menu content-box">
        <div className="filters">
          <div className="btn-group">
            <label
              data-text="All"
              className={`c-pointer ${activeBtn("box-item")}`}
              onClick={handleFilterKeyChange("box-item")}
            >
              <input type="radio" name="fl_radio" defaultValue=".box-item" />
              All
            </label>
          </div>
          <div className="btn-group">
            <label
              className={`c-pointer ${activeBtn("f-video")}`}
              onClick={handleFilterKeyChange("f-video")}
              data-text="Video"
            >
              <input type="radio" name="fl_radio" defaultValue=".f-video" />
              Flayer
            </label>
          </div>
          <div className="btn-group">
            <label
              className={`c-pointer ${activeBtn("f-music")}`}
              onClick={handleFilterKeyChange("f-music")}
              data-text="Music"
            >
              <input type="radio" name="fl_radio" defaultValue=".f-music" />
              Catalogue
            </label>
          </div>
          <div className="btn-group">
            <label
              className={`c-pointer ${activeBtn("f-links")}`}
              onClick={handleFilterKeyChange("f-links")}
              data-text="Links"
            >
              <input type="radio" name="fl_radio" defaultValue=".f-links" />
              Stationary
            </label>
          </div>
          <div className="btn-group">
            <label
              className={`c-pointer ${activeBtn("f-image")}`}
              onClick={handleFilterKeyChange("f-image")}
              data-text="Image"
            >
              <input type="radio" name="fl_radio" defaultValue=".f-image" />
              Web Design
            </label>
          </div>
          <div className="btn-group">
            <label
              className={`c-pointer ${activeBtn("f-logo")}`}
              onClick={handleFilterKeyChange("f-logo")}
              data-text="Gallery"
            >
              <input type="radio" name="fl_radio" defaultValue=".f-logo" />
              Logo
            </label>
          </div>
          <div className="btn-group">
            <label
              className={`c-pointer ${activeBtn("f-banner")}`}
              onClick={handleFilterKeyChange("f-banner")}
              data-text="Content"
            >
              <input type="radio" name="fl_radio" defaultValue=".f-banner" />
              Banner
            </label>
          </div>
        </div>
      </div>
      {/* portfolio items */}
      <div className="box-items portfolio-items">
        {/* banners */}
        <div className="box-item f-banner">
          <div className="image">
            <a href="#popup-1" className="has-popup-media hover-animated">
              {/* thumbnail */}
              <img
                src="images/banner.png"
                className="wp-post-image"
                alt="123"
                loading="lazy"
              />
              <span className="info circle">
                <span className="centrize full-width">
                  <span className="vertical-center">
                    <span className="icon fas fa-plus" />
                    <span className="desc">
                      <span className="category">Banner</span>
                      <span className="name">this is a banner No1</span>
                    </span>
                  </span>
                </span>
              </span>
            </a>
          </div>
          <div id="popup-1" className="popup-box mfp-fade mfp-hide">
            <div className="content">
              {/* original */}
              <img
                src="images/banner.png"
                className="wp-post-image"
                alt="123"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="box-item f-banner">
          <div className="image">
            <a href="#popup-2" className="has-popup-media hover-animated">
              {/* thumbnail */}
              <img
                src="images/banner-2.png"
                className="wp-post-image"
                alt="123"
                loading="lazy"
              />
              <span className="info circle">
                <span className="centrize full-width">
                  <span className="vertical-center">
                    <span className="icon fas fa-plus" />
                    <span className="desc">
                      <span className="category">Banner 2</span>
                      <span className="name">this is a banner No2</span>
                    </span>
                  </span>
                </span>
              </span>
            </a>
          </div>
          <div id="popup-2" className="popup-box mfp-fade mfp-hide">
            <div className="content">
              {/* original */}
              <img
                src="images/banner-2.png"
                className="wp-post-image"
                alt="123"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="box-item f-banner">
          <div className="image">
            <a href="#popup-3" className="has-popup-media hover-animated">
              {/* thumbnail */}
              <img
                src="images/banner-2.png"
                className="wp-post-image"
                alt="123"
                loading="lazy"
              />
              <span className="info circle">
                <span className="centrize full-width">
                  <span className="vertical-center">
                    <span className="icon fas fa-plus" />
                    <span className="desc">
                      <span className="category">Banner 2</span>
                      <span className="name">this is a banner No2</span>
                    </span>
                  </span>
                </span>
              </span>
            </a>
          </div>
          <div id="popup-3" className="popup-box mfp-fade mfp-hide">
            <div className="content">
              {/* original */}
              <img
                src="images/banner-2.png"
                className="wp-post-image"
                alt="123"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* logo */}
        <div className="box-item f-logo">
          <div className="image">
            <a href="#popup-4" className="has-popup-media hover-animated">
              {/* thumbnail */}
              <img
                src="images/logo.png"
                className="wp-post-image"
                alt="123"
                loading="lazy"
              />
              <span className="info circle">
                <span className="centrize full-width">
                  <span className="vertical-center">
                    <span className="icon fas fa-plus" />
                    <span className="desc">
                      <span className="category">Logo</span>
                      <span className="name">this is a banner No1</span>
                    </span>
                  </span>
                </span>
              </span>
            </a>
          </div>
          <div id="popup-4" className="popup-box mfp-fade mfp-hide">
            <div className="content">
              {/* original */}
              <img
                src="images/logo.png"
                className="wp-post-image"
                alt="123"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default ItemIsotopeWork;
