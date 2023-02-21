import Image from "next/image";
import CMS from "../../CMS.json";

const About = () => {
  return (
    <div className="section about" id={CMS.header.menu.about.label}>
      {/* title */}
      <div className="title">
        <div className="title_inner">{CMS.aboutSection.title}</div>
      </div>
      <div className="content content-box">
        {/* image */}
        <div className="image">
          <Image
            src={CMS.aboutSection.image}
            alt={CMS.aboutSection.alt}
            width={200}
            height={200}
          />
        </div>
        {/* desc */}
        <div className="desc">
          <p>{CMS.aboutSection.description}</p>
          <div className="info-list">
            <ul>
              <li>
                <div
                  dangerouslySetInnerHTML={{
                    __html: CMS.aboutSection.cells.one,
                  }}
                />
              </li>
              <li>
                <div
                  dangerouslySetInnerHTML={{
                    __html: CMS.aboutSection.cells.two,
                  }}
                />
              </li>
              <li>
                <div
                  dangerouslySetInnerHTML={{
                    __html: CMS.aboutSection.cells.three,
                  }}
                />
              </li>
              <li>
                <div
                  dangerouslySetInnerHTML={{
                    __html: CMS.aboutSection.cells.four,
                  }}
                />
              </li>
              <li>
                <div
                  dangerouslySetInnerHTML={{
                    __html: CMS.aboutSection.cells.five,
                  }}
                />
              </li>
              <li>
                <div
                  dangerouslySetInnerHTML={{
                    __html: CMS.aboutSection.cells.six,
                  }}
                />
              </li>
            </ul>
          </div>
          <div className="bts">
            <a
              href={CMS.aboutSection.downloadBtn.url}
              className="btn hover-animated"
            >
              <span className="circle" />
              <span className="lnk">{CMS.aboutSection.downloadBtn.label}</span>
            </a>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default About;
