import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./Footer.scss";
import mountain from "../../assets/icons/mountainIcon.png";

function Footer() {
  return (
    <section className="footer">
      <div className="footer__wrapper">
        <div className="footer__nav">
          <div className="footer__nav--title">
            <Link smooth to="/#what">
              <h4 className="footer__nav--title--link">What</h4>
            </Link>
            <Link smooth to="/#concerns">
              <h4 className="footer__nav--title--link">Concerns</h4>
            </Link>
            <Link smooth to="/#who">
              <h4 className="footer__nav--title--link">Who</h4>
            </Link>
            <Link smooth to="/#actions">
              <h4 className="footer__nav--title--link">Actions</h4>
            </Link>
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
