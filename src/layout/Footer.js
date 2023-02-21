import CMS from "../../CMS.json";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="copy">
        <p>{CMS.footer.email}</p>
        <p>{CMS.footer.telephone}</p>
      </div>
      <div className="soc-box">
        <div className="follow-label">{CMS.footer.socials.title}</div>
        <div className="soc">
          <a target="_blank" rel="noreferrer" href="https://www.pinterest.com/">
            <span className="icon fab fa-pinterest" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.instagram.com/">
            <span className="icon fab fa-instagram" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://dribbble.com/">
            <span className="icon fab fa-dribbble" />
          </a>
        </div>
      </div>
      <div className="clear" />
    </footer>
  );
};
export default Footer;
