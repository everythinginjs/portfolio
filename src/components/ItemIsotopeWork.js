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
          {/* catalogue */}
          <div className="btn-group">
            <label
              className={`c-pointer ${activeBtn("f-catalogue")}`}
              onClick={handleFilterKeyChange("f-catalogue")}
              data-text="Catalogue"
            >
              <input type="radio" name="fl_radio" defaultValue=".f-catalogue" />
              Catalogue
            </label>
          </div>
          {/* stationary */}
          <div className="btn-group">
            <label
              className={`c-pointer ${activeBtn("f-stationary")}`}
              onClick={handleFilterKeyChange("f-stationary")}
              data-text="Stationary"
            >
              <input
                type="radio"
                name="fl_radio"
                defaultValue=".f-stationary"
              />
              Stationary
            </label>
          </div>
          {/* logo */}
          <div className="btn-group">
            <label
              className={`c-pointer ${activeBtn("f-logo")}`}
              onClick={handleFilterKeyChange("f-logo")}
              data-text="Logo"
            >
              <input type="radio" name="fl_radio" defaultValue=".f-logo" />
              Logo
            </label>
          </div>
          {/* Web site Banner */}
          <div className="btn-group">
            <label
              className={`c-pointer ${activeBtn("f-webBanner")}`}
              onClick={handleFilterKeyChange("f-webBanner")}
              data-text="WebBanner"
            >
              <input type="radio" name="fl_radio" defaultValue=".f-webBanner" />
              Website Banner
            </label>
          </div>
          {/* poster */}
          <div className="btn-group">
            <label
              className={`c-pointer ${activeBtn("f-poster")}`}
              onClick={handleFilterKeyChange("f-poster")}
              data-text="Poster"
            >
              <input type="radio" name="fl_radio" defaultValue=".f-poster" />
              Poster
            </label>
          </div>
        </div>
      </div>
      {/* portfolio items */}
      <div className="box-items portfolio-items">
        {/* logos */}
        {/*logoA4zi*/}
        <div className="box-item f-logo">
          <div className="image">
            <a
              href="#popup-logoA4zi"
              className="has-popup-media hover-animated"
            >
              {/* thumbnail */}
              <img
                src="images/work/logo/logoA4zi.jpg"
                className="wp-post-image"
                alt="A4zi Logo"
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
          <div id="popup-logoA4zi" className="popup-box mfp-fade mfp-hide">
            <div className="content">
              {/* original */}
              <img
                src="images/work/logo/logoA4zi.jpg"
                className="wp-post-image"
                alt="A4zi Logo"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        {/*logoAcademic*/}
        <div className="box-item f-logo">
          <div className="image">
            <a
              href="#popup-logoAcademic"
              className="has-popup-media hover-animated"
            >
              {/* thumbnail */}
              <img
                src="images/work/logo/logoAcademic.jpg"
                className="wp-post-image"
                alt="logo Academic"
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
          <div id="popup-logoAcademic" className="popup-box mfp-fade mfp-hide">
            <div className="content">
              {/* original */}
              <img
                src="images/work/logo/logoAcademic.jpg"
                className="wp-post-image"
                alt="logo Academic"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        {/* logo Dbrrane */}
        <div className="box-item f-logo">
          <div className="image">
            <a
              href="#popup-logoDbrrane"
              className="has-popup-media hover-animated"
            >
              {/* thumbnail */}
              <img
                src="images/work/logo/logoDbrrane.jpg"
                className="wp-post-image"
                alt="logoDbrrane"
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
          <div id="popup-logoDbrrane" className="popup-box mfp-fade mfp-hide">
            <div className="content">
              {/* original */}
              <img
                src="images/work/logo/logoDbrrane.jpg"
                className="wp-post-image"
                alt="logoDbrrane"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        {/* logo Dmi */}
        <div className="box-item f-logo">
          <div className="image">
            <a href="#popup-logoDmi" className="has-popup-media hover-animated">
              {/* thumbnail */}
              <img
                src="images/work/logo/logoDmi.png"
                className="wp-post-image"
                alt="logoDmi"
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
          <div id="popup-logoDmi" className="popup-box mfp-fade mfp-hide">
            <div className="content">
              {/* original */}
              <img
                src="images/work/logo/logoDmi.png"
                className="wp-post-image"
                alt="logoDmi"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        {/* logo Green */}
        <div className="box-item f-logo">
          <div className="image">
            <a
              href="#popup-logoGreen"
              className="has-popup-media hover-animated"
            >
              {/* thumbnail */}
              <img
                src="images/work/logo/logoGreen.jpg"
                className="wp-post-image"
                alt="logoGreen"
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
          <div id="popup-logoGreen" className="popup-box mfp-fade mfp-hide">
            <div className="content">
              {/* original */}
              <img
                src="images/work/logo/logoGreen.jpg"
                className="wp-post-image"
                alt="logoGreen"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        {/* logo Kakh */}
        <div className="box-item f-logo">
          <div className="image">
            <a
              href="#popup-logokakh"
              className="has-popup-media hover-animated"
            >
              {/* thumbnail */}
              <img
                src="images/work/logo/logokakh.jpg"
                className="wp-post-image"
                alt="logokakh"
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
          <div id="popup-logokakh" className="popup-box mfp-fade mfp-hide">
            <div className="content">
              {/* original */}
              <img
                src="images/work/logo/logokakh.jpg"
                className="wp-post-image"
                alt="logokakh"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        {/* logo Roti */}
        <div className="box-item f-logo">
          <div className="image">
            <a
              href="#popup-logoRoti"
              className="has-popup-media hover-animated"
            >
              {/* thumbnail */}
              <img
                src="images/work/logo/logoRoti.jpg"
                className="wp-post-image"
                alt="logoRoti"
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
          <div id="popup-logoRoti" className="popup-box mfp-fade mfp-hide">
            <div className="content">
              {/* original */}
              <img
                src="images/work/logo/logoRoti.jpg"
                className="wp-post-image"
                alt="logoRoti"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        {/* logo sayad */}
        <div className="box-item f-logo">
          <div className="image">
            <a
              href="#popup-logosayad"
              className="has-popup-media hover-animated"
            >
              {/* thumbnail */}
              <img
                src="images/work/logo/logosayad.jpg"
                className="wp-post-image"
                alt="logosayad"
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
          <div id="popup-logosayad" className="popup-box mfp-fade mfp-hide">
            <div className="content">
              {/* original */}
              <img
                src="images/work/logo/logosayad.jpg"
                className="wp-post-image"
                alt="logosayad"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        {/* logo Shahd */}
        <div className="box-item f-logo">
          <div className="image">
            <a
              href="#popup-logoShahd"
              className="has-popup-media hover-animated"
            >
              {/* thumbnail */}
              <img
                src="images/work/logo/logoShahd.jpg"
                className="wp-post-image"
                alt="logoShahd"
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
          <div id="popup-logoShahd" className="popup-box mfp-fade mfp-hide">
            <div className="content">
              {/* original */}
              <img
                src="images/work/logo/logoShahd.jpg"
                className="wp-post-image"
                alt="logoShahd"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        {/* logo Vocomed */}
        <div className="box-item f-logo">
          <div className="image">
            <a
              href="#popup-logoVocomed"
              className="has-popup-media hover-animated"
            >
              {/* thumbnail */}
              <img
                src="images/work/logo/logoVocomed.jpg"
                className="wp-post-image"
                alt="logoVocomed"
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
          <div id="popup-logoVocomed" className="popup-box mfp-fade mfp-hide">
            <div className="content">
              {/* original */}
              <img
                src="images/work/logo/logoVocomed.jpg"
                className="wp-post-image"
                alt="logoVocomed"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        {/* logo Zehn */}
        <div className="box-item f-logo">
          <div className="image">
            <a
              href="#popup-logoZehn"
              className="has-popup-media hover-animated"
            >
              {/* thumbnail */}
              <img
                src="images/work/logo/logoZehn.jpg"
                className="wp-post-image"
                alt="logoZehn"
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
          <div id="popup-logoZehn" className="popup-box mfp-fade mfp-hide">
            <div className="content">
              {/* original */}
              <img
                src="images/work/logo/logoZehn.jpg"
                className="wp-post-image"
                alt="logoZehn"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        {/* Catalogue */}
        {/* catCar */}
        <div className="box-item f-catalogue">
          <div className="image">
            <a href="#popup-catCar" className="has-popup-media hover-animated">
              {/* thumbnail */}
              <img
                src="images/work/catalogue/catCar.jpg"
                className="wp-post-image"
                alt="catCar"
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
          <div id="popup-catCar" className="popup-box mfp-fade mfp-hide">
            <div className="content">
              {/* original */}
              <img
                src="images/work/catalogue/catCar.jpg"
                className="wp-post-image"
                alt="catCar"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        {/* catCarvisol */}
        <div className="box-item f-catalogue">
          <div className="image">
            <a
              href="#popup-catCarvisol"
              className="has-popup-media hover-animated"
            >
              {/* thumbnail */}
              <img
                src="images/work/catalogue/catCarvisol.jpg"
                className="wp-post-image"
                alt="catCarvisol"
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
          <div id="popup-catCarvisol" className="popup-box mfp-fade mfp-hide">
            <div className="content">
              {/* original */}
              <img
                src="images/work/catalogue/catCarvisol.jpg"
                className="wp-post-image"
                alt="catCarvisol"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        {/* catCarvisol1 */}
        <div className="box-item f-catalogue">
          <div className="image">
            <a
              href="#popup-catCarvisol1"
              className="has-popup-media hover-animated"
            >
              {/* thumbnail */}
              <img
                src="images/work/catalogue/catCarvisol1.jpg"
                className="wp-post-image"
                alt="catCarvisol1"
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
          <div id="popup-catCarvisol1" className="popup-box mfp-fade mfp-hide">
            <div className="content">
              {/* original */}
              <img
                src="images/work/catalogue/catCarvisol1.jpg"
                className="wp-post-image"
                alt="catCarvisol1"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        {/* catCarvisol2 */}
        <div className="box-item f-catalogue">
          <div className="image">
            <a
              href="#popup-catCarvisol2"
              className="has-popup-media hover-animated"
            >
              {/* thumbnail */}
              <img
                src="images/work/catalogue/catCarvisol2.jpg"
                className="wp-post-image"
                alt="catCarvisol2"
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
          <div id="popup-catCarvisol2" className="popup-box mfp-fade mfp-hide">
            <div className="content">
              {/* original */}
              <img
                src="images/work/catalogue/catCarvisol2.jpg"
                className="wp-post-image"
                alt="catCarvisol2"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        {/* catExais */}
        <div className="box-item f-catalogue">
          <div className="image">
            <a
              href="#popup-catExais"
              className="has-popup-media hover-animated"
            >
              {/* thumbnail */}
              <img
                src="images/work/catalogue/catExais.jpg"
                className="wp-post-image"
                alt="catExais"
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
          <div id="popup-catExais" className="popup-box mfp-fade mfp-hide">
            <div className="content">
              {/* original */}
              <img
                src="images/work/catalogue/catExais.jpg"
                className="wp-post-image"
                alt="catExais"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        {/* catRoti */}
        <div className="box-item f-catalogue">
          <div className="image">
            <a href="#popup-catRoti" className="has-popup-media hover-animated">
              {/* thumbnail */}
              <img
                src="images/work/catalogue/catRoti.jpg"
                className="wp-post-image"
                alt="catRoti"
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
          <div id="popup-catRoti" className="popup-box mfp-fade mfp-hide">
            <div className="content">
              {/* original */}
              <img
                src="images/work/catalogue/catRoti.jpg"
                className="wp-post-image"
                alt="catRoti"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        {/* catShahd */}
        <div className="box-item f-catalogue">
          <div className="image">
            <a
              href="#popup-catShahd"
              className="has-popup-media hover-animated"
            >
              {/* thumbnail */}
              <img
                src="images/work/catalogue/catShahd.jpg"
                className="wp-post-image"
                alt="catShahd"
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
          <div id="popup-catShahd" className="popup-box mfp-fade mfp-hide">
            <div className="content">
              {/* original */}
              <img
                src="images/work/catalogue/catShahd.jpg"
                className="wp-post-image"
                alt="catShahd"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        {/* catTs2 */}
        <div className="box-item f-catalogue">
          <div className="image">
            <a href="#popup-catTs2" className="has-popup-media hover-animated">
              {/* thumbnail */}
              <img
                src="images/work/catalogue/catTs2.jpg"
                className="wp-post-image"
                alt="catTs2"
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
          <div id="popup-catTs2" className="popup-box mfp-fade mfp-hide">
            <div className="content">
              {/* original */}
              <img
                src="images/work/catalogue/catTs2.jpg"
                className="wp-post-image"
                alt="catTs2"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        {/* poster */}
        {/*poater1*/}
        <div className="box-item f-poster">
          <div className="image">
            <a href="#popup-poster1" className="has-popup-media hover-animated">
              {/* thumbnail */}
              <img
                src="images/work/Poster/poster1.jpg"
                className="wp-post-image"
                alt="poster1"
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
          <div id="popup-poster1" className="popup-box mfp-fade mfp-hide">
            <div className="content">
              {/* original */}
              <img
                src="images/work/Poster/poster1.jpg"
                className="wp-post-image"
                alt="poster1"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        {/*poster2*/}
        <div className="box-item f-poster">
          <div className="image">
            <a href="#popup-poster2" className="has-popup-media hover-animated">
              {/* thumbnail */}
              <img
                src="images/work/Poster/poster2.jpg"
                className="wp-post-image"
                alt="poster2"
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
          <div id="popup-poster2" className="popup-box mfp-fade mfp-hide">
            <div className="content">
              {/* original */}
              <img
                src="images/work/Poster/poster2.jpg"
                className="wp-post-image"
                alt="poster2"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        {/* stationary */}
        {/*stationaryDmi*/}
        <div className="box-item f-stationary">
          <div className="image">
            <a
              href="#popup-stationaryDmi"
              className="has-popup-media hover-animated"
            >
              {/* thumbnail */}
              <img
                src="images/work/stationary/stationaryDmi.jpg"
                className="wp-post-image"
                alt="stationaryDmi"
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
          <div id="popup-stationaryDmi" className="popup-box mfp-fade mfp-hide">
            <div className="content">
              {/* original */}
              <img
                src="images/work/stationary/stationaryDmi.jpg"
                className="wp-post-image"
                alt="stationaryDmi"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        {/* webBanner */}
        {/*site2*/}
        <div className="box-item f-webBanner">
          <div className="image">
            <a href="#popup-site2" className="has-popup-media hover-animated">
              {/* thumbnail */}
              <img
                src="images/work/webBanner/site2.jpg"
                className="wp-post-image"
                alt="site2"
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
          <div id="popup-site2" className="popup-box mfp-fade mfp-hide">
            <div className="content">
              {/* original */}
              <img
                src="images/work/webBanner/site2.jpg"
                className="wp-post-image"
                alt="site2"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        {/*site1*/}
        <div className="box-item f-webBanner">
          <div className="image">
            <a href="#popup-site1" className="has-popup-media hover-animated">
              {/* thumbnail */}
              <img
                src="images/work/webBanner/site1.jpg"
                className="wp-post-image"
                alt="site1"
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
          <div id="popup-site1" className="popup-box mfp-fade mfp-hide">
            <div className="content">
              {/* original */}
              <img
                src="images/work/webBanner/site1.jpg"
                className="wp-post-image"
                alt="site1"
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
