import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./Footer.scss";
import mountain from "../../assets/icons/mountainIcon.png";

function Footer() {
  return (
    <section className="footer bg-stone-200">
      <div className="footer__wrapper bg-stone-200">
        <div className="footer__nav">
          <div className="footer__nav--title flex flex-col md:flex-row">
            {/* <Link smooth to="/#what">
              <h4 className="footer__nav--title--link">What</h4>
            </Link> */}
            <Link smooth to="https://saverecordridge.blogspot.com">
              <h4 className="footer__nav--title--link">Blog</h4>
            </Link>

            <Link smooth to="https://form.jotform.com/231375084434051">
              <h4 className="footer__nav--title--link">Petition</h4>
            </Link>

            <a href="mailto:SaveRecordRidge@gmail.com">Contact</a>
          </div>
        </div>
        <div className="footer__team">
          <h3 className="footer__nav--title--link">Save Record Ridge</h3>
          <Link smooth to="" target={"_blank"}>
            <div className="footer__team--mem">
              <img
                className="footer__team--mem--img"
                src={mountain}
                alt={"mountain"}
              />
            </div>
          </Link>
        </div>
      </div>
      <div className="footer__copyright">©️ Save Record Ridge 2023</div>
    </section>
  );
}

export default Footer;
