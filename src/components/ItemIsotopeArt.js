/* eslint-disable @next/next/no-img-element */
import Isotope from "isotope-layout";
import { Fragment, useEffect, useRef, useState } from "react";

const ItemIsotopeArt = () => {
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
          {/* all */}
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
          {/* arts */}
          <div className="btn-group">
            <label
              className={`c-pointer ${activeBtn("f-arts")}`}
              onClick={handleFilterKeyChange("f-arts")}
              data-text="Arts"
            >
              <input type="radio" name="fl_radio" defaultValue=".f-arts" />
              Atrs
            </label>
          </div>
        </div>
      </div>
      {/* portfolio items */}
      <div className="box-items portfolio-items">
        {/*art2*/}
        <div className="box-item f-art">
          <div className="image">
            <a href="#popup-art2" className="has-popup-media hover-animated">
              {/* thumbnail */}
              <img
                src="images/art/art2.jpg"
                className="wp-post-image"
                alt="art2"
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
          <div id="popup-art2" className="popup-box mfp-fade mfp-hide">
            <div className="content">
              {/* original */}
              <img
                src="images/art/art2.jpg"
                className="wp-post-image"
                alt="art2"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        {/*art3*/}
        <div className="box-item f-art">
          <div className="image">
            <a href="#popup-art3" className="has-popup-media hover-animated">
              {/* thumbnail */}
              <img
                src="images/art/art3.jpg"
                className="wp-post-image"
                alt="art3"
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
          <div id="popup-art3" className="popup-box mfp-fade mfp-hide">
            <div className="content">
              {/* original */}
              <img
                src="images/art/art3.jpg"
                className="wp-post-image"
                alt="art3"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        {/*art4*/}
        <div className="box-item f-art">
          <div className="image">
            <a href="#popup-art4" className="has-popup-media hover-animated">
              {/* thumbnail */}
              <img
                src="images/art/art4.jpg"
                className="wp-post-image"
                alt="art4"
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
          <div id="popup-art4" className="popup-box mfp-fade mfp-hide">
            <div className="content">
              {/* original */}
              <img
                src="images/art/art4.jpg"
                className="wp-post-image"
                alt="art4"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        {/*art5*/}
        <div className="box-item f-art">
          <div className="image">
            <a href="#popup-art5" className="has-popup-media hover-animated">
              {/* thumbnail */}
              <img
                src="images/art/art5.jpg"
                className="wp-post-image"
                alt="art5"
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
          <div id="popup-art5" className="popup-box mfp-fade mfp-hide">
            <div className="content">
              {/* original */}
              <img
                src="images/art/art5.jpg"
                className="wp-post-image"
                alt="art5"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        {/*art6*/}
        <div className="box-item f-art">
          <div className="image">
            <a href="#popup-art6" className="has-popup-media hover-animated">
              {/* thumbnail */}
              <img
                src="images/art/art6.jpg"
                className="wp-post-image"
                alt="art6"
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
          <div id="popup-art6" className="popup-box mfp-fade mfp-hide">
            <div className="content">
              {/* original */}
              <img
                src="images/art/art6.jpg"
                className="wp-post-image"
                alt="art6"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        {/*art7*/}
        <div className="box-item f-art">
          <div className="image">
            <a href="#popup-art7" className="has-popup-media hover-animated">
              {/* thumbnail */}
              <img
                src="images/art/art7.jpg"
                className="wp-post-image"
                alt="art7"
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
          <div id="popup-art7" className="popup-box mfp-fade mfp-hide">
            <div className="content">
              {/* original */}
              <img
                src="images/art/art7.jpg"
                className="wp-post-image"
                alt="art7"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        {/*art8*/}
        <div className="box-item f-art">
          <div className="image">
            <a href="#popup-art8" className="has-popup-media hover-animated">
              {/* thumbnail */}
              <img
                src="images/art/art8.jpg"
                className="wp-post-image"
                alt="art8"
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
          <div id="popup-art8" className="popup-box mfp-fade mfp-hide">
            <div className="content">
              {/* original */}
              <img
                src="images/art/art8.jpg"
                className="wp-post-image"
                alt="art8"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        {/*art9*/}
        <div className="box-item f-art">
          <div className="image">
            <a href="#popup-art9" className="has-popup-media hover-animated">
              {/* thumbnail */}
              <img
                src="images/art/art9.jpg"
                className="wp-post-image"
                alt="art9"
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
          <div id="popup-art9" className="popup-box mfp-fade mfp-hide">
            <div className="content">
              {/* original */}
              <img
                src="images/art/art9.jpg"
                className="wp-post-image"
                alt="art9"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        {/*art10*/}
        <div className="box-item f-art">
          <div className="image">
            <a href="#popup-art10" className="has-popup-media hover-animated">
              {/* thumbnail */}
              <img
                src="images/art/art10.jpg"
                className="wp-post-image"
                alt="art10"
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
          <div id="popup-art10" className="popup-box mfp-fade mfp-hide">
            <div className="content">
              {/* original */}
              <img
                src="images/art/art10.jpg"
                className="wp-post-image"
                alt="art10"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        {/*art11*/}
        <div className="box-item f-art">
          <div className="image">
            <a href="#popup-art11" className="has-popup-media hover-animated">
              {/* thumbnail */}
              <img
                src="images/art/art11.jpg"
                className="wp-post-image"
                alt="art11"
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
          <div id="popup-art11" className="popup-box mfp-fade mfp-hide">
            <div className="content">
              {/* original */}
              <img
                src="images/art/art11.jpg"
                className="wp-post-image"
                alt="art11"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        {/*art13*/}
        <div className="box-item f-art">
          <div className="image">
            <a href="#popup-art13" className="has-popup-media hover-animated">
              {/* thumbnail */}
              <img
                src="images/art/art13.jpg"
                className="wp-post-image"
                alt="art13"
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
          <div id="popup-art13" className="popup-box mfp-fade mfp-hide">
            <div className="content">
              {/* original */}
              <img
                src="images/art/art13.jpg"
                className="wp-post-image"
                alt="art13"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        {/*art14*/}
        <div className="box-item f-art">
          <div className="image">
            <a href="#popup-art14" className="has-popup-media hover-animated">
              {/* thumbnail */}
              <img
                src="images/art/art14.jpg"
                className="wp-post-image"
                alt="art14"
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
          <div id="popup-art14" className="popup-box mfp-fade mfp-hide">
            <div className="content">
              {/* original */}
              <img
                src="images/art/art14.jpg"
                className="wp-post-image"
                alt="art14"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default ItemIsotopeArt;
