import CMS from "../../CMS.json";

const Resume = () => {
  return (
    <>
      <div className="section resume" id={CMS.resumeSection.title}>
        <div className="title">
          <div className="title_inner">{CMS.resumeSection.title}</div>
        </div>
        <div className="content">
          <div className="cols">
            <div className="col col-md">
              <div className="title">
                <div className="title_inner">
                  {CMS.resumeSection.experience.title}
                </div>
              </div>
              <div className="resume-items">
                <div className="resume-item content-box active">
                  <div className="date">
                    {CMS.resumeSection.experience.sections.one.name}
                  </div>
                  <div className="name">
                    {CMS.resumeSection.experience.sections.one.name}
                  </div>
                  <div className="text">
                    {CMS.resumeSection.experience.sections.one.text}
                  </div>
                </div>
                <div className="resume-item content-box">
                  <div className="date">
                    {CMS.resumeSection.experience.sections.two.name}
                  </div>
                  <div className="name">
                    {CMS.resumeSection.experience.sections.two.name}
                  </div>
                  <div className="text">
                    {CMS.resumeSection.experience.sections.two.text}
                  </div>
                </div>
                <div className="resume-item content-box">
                  <div className="date">
                    {CMS.resumeSection.experience.sections.three.name}
                  </div>
                  <div className="name">
                    {CMS.resumeSection.experience.sections.three.name}
                  </div>
                  <div className="text">
                    {CMS.resumeSection.experience.sections.three.text}
                  </div>
                </div>
              </div>
            </div>
            <div className="col col-md">
              <div className="title">
                <div className="title_inner">
                  {CMS.resumeSection.education.title}
                </div>
              </div>
              <div className="resume-items">
                <div className="resume-item content-box">
                  <div className="date">
                    {CMS.resumeSection.education.sections.one.date}
                  </div>
                  <div className="name">
                    {CMS.resumeSection.education.sections.one.name}
                  </div>
                  <div className="text">
                    {CMS.resumeSection.education.sections.one.text}
                  </div>
                </div>
                <div className="resume-item content-box">
                  <div className="date">
                    {CMS.resumeSection.education.sections.two.date}
                  </div>
                  <div className="name">
                    {CMS.resumeSection.education.sections.two.name}
                  </div>
                  <div className="text">
                    {CMS.resumeSection.education.sections.two.text}
                  </div>
                </div>
                <div className="resume-item content-box">
                  <div className="date">
                    {CMS.resumeSection.education.sections.one.date}
                  </div>
                  <div className="name">
                    {CMS.resumeSection.education.sections.one.name}
                  </div>
                  <div className="text">
                    {CMS.resumeSection.education.sections.one.text}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="cols">
          <div className="title">
            <div className="title_inner">
              {CMS.resumeSection.language.title}
            </div>
          </div>
          <div className="skills percent content-box">
            <ul>
              <li>
                <div className="name">
                  {CMS.resumeSection.language.one.label}
                </div>
                <div className="progress">
                  <div
                    className="percentage"
                    style={{
                      width: `${CMS.resumeSection.language.one.percentage}`,
                    }}
                  >
                    <span className="percent">
                      {CMS.resumeSection.language.one.percentage}
                    </span>
                  </div>
                </div>
              </li>
              <li>
                <div className="name">
                  {CMS.resumeSection.language.two.label}
                </div>
                <div className="progress">
                  <div
                    className="percentage"
                    style={{
                      width: `${CMS.resumeSection.language.two.percentage}`,
                    }}
                  >
                    <span className="percent">
                      {CMS.resumeSection.language.two.percentage}
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="cols">
          <div className="title">
            <div className="title_inner">{CMS.resumeSection.skills.title}</div>
          </div>
          <div className="skills percent content-box">
            <ul>
              <li>
                <div className="name">{CMS.resumeSection.skills.one.label}</div>
                <div className="progress ">
                  <div
                    className="percentage"
                    style={{
                      width: `${CMS.resumeSection.skills.one.percentage}`,
                    }}
                  >
                    <span className="percent">
                      {CMS.resumeSection.skills.one.percentage}
                    </span>
                  </div>
                </div>
              </li>
              <li>
                <div className="name">{CMS.resumeSection.skills.two.label}</div>
                <div className="progress ">
                  <div
                    className="percentage"
                    style={{
                      width: `${CMS.resumeSection.skills.two.percentage}`,
                    }}
                  >
                    <span className="percent">
                      {CMS.resumeSection.skills.two.percentage}
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Resume;
