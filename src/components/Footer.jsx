import '../styles/Footer.css';

const Footer = () => {
  return (
    <section className="footer-section">
      <footer className="top">
        <div className="links">
          {footerItems.map((item, index) => (
            <div className="links-column" key={index}>
              <h2>{item.title}</h2>
              {item.links.map((link, linkIndex) => (
                <a key={linkIndex}>{link}</a>
              ))}
            </div>
          ))}
        </div>
      </footer>
      <footer className="bottom">
        <p className="copyright">{footerItems[3].title}</p>
        <div className="legal">
          {footerItems[3].links.map((link, linkIndex) => (
            <a key={linkIndex}>{link}</a>
          ))}
        </div>
      </footer>
    </section>
  );
};

export default Footer;

const footerItems = [
  { title: "Useful links", links: ["Home", "About"] },
  { title: "Resources", links: ["Contact me"] },
  { title: "Social Media", links: ["Follow us on social media to find out the latest updates on our progress."] },
  { title: `© ${new Date().getFullYear()} All rights reserved`, links: ["License", "Terms", "Privacy"] }
]