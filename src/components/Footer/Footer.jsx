import React from "react";
import styles from "./Footer.module.css";
import { CiInstagram } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__brand}>
        <img src="images/icons/footer-logo.png" />
      </div>
      <div className={styles.footer__links}>
        <div className={styles.footer__links__main}>
          <ul>
            <li>About</li>
            <li>Contact Us</li>
            <li>bvsbutchery.com</li>
          </ul>
        </div>
        <div className="flex flex-col md:flex-row">
          <FaXTwitter className={styles.footer__icons} />
          <CiInstagram className={styles.footer__icons} />
          <FaLinkedin className={styles.footer__icons} />
        </div>
      </div>
      <div></div>
      <div className={styles.copyright__container}>
        <h3 className={styles.footer__copyright}>&copy; BVS 2024</h3>
      </div>
    </div>
  );
};

export default Footer;
