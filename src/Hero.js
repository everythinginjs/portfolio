import TypingAnimation from "./components/TypingAnimation";
import CMS from "../CMS.json";

export default function Hero() {
  return (
    <div className="section started" id={CMS.header.menu.home.label}>
      <div
        className="video-bg jarallax"
        style={{ backgroundImage: `url(${CMS.heroSection.bg})` }}
      >
        <div className="video-bg-mask" />
        <div className="video-bg-texture" id="grained_container" />
      </div>
      <div className="centrize full-width">
        <div className="vertical-center">
          <div className="started-content">
            <h1 className="h-title">
              <div
                dangerouslySetInnerHTML={{
                  __html: CMS.heroSection.description,
                }}
              />
            </h1>
            <TypingAnimation extraClassName={"typed-subtitle"} />
            <span className="typed-subtitle" />
          </div>
        </div>
      </div>
      {/* mosue button */}
      <a href="#" className="mouse_btn" style={{ display: "none" }}>
        <span className="icon fas fa-chevron-down" />
      </a>
    </div>
  );
}
