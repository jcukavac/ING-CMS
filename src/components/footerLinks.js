import React, { useState, useEffect } from "react"
import { injectIntl, Link } from "gatsby-plugin-intl"

import Modal from 'react-bootstrap/Modal'

import GdprModal from "../components/gdprModal"

import ImageFacebook from "../images/social/facebook.svg"
import ImageLinkedIn from "../images/social/linkedin.svg"
import ImageInstagram from "../images/social/instagram.svg"
import ImageTwitter from "../images/social/twitter.svg"
import ImageClutch from "../images/social/clutch.svg"

const FooterLink = ({ intl }) => {
  useEffect(() => {
    document.querySelector(
      ".date-me"
    ).textContent = new Date().getFullYear()
  });

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <section
      id="footer-links"
      className="d-flex flex-wrap justify-content-lg-between justify-content-md-center justify-content-sm-between justify-content-center align-items-center w-100"
    >
      <span>
        © <span className="date-me"></span>,{" "}
        <span>Ingsoftware</span>,{" "}
        <span>
          <Link to="/privacy-policy"> {intl.formatMessage({ id: "footer.links.privacy" })} </Link>,{" "}
          <Link to="/cookie-policy"> {intl.formatMessage({ id: "footer.links.cookies" })} </Link>,{" "}
          <Link
            to="/"
            data-toggle="modal"
            data-target="#gdpr-modal"
            onClick={handleShow}
          >
            {intl.formatMessage({ id: "footer.links.gdpr" })} 
            {/* <FormattedMessage id="footer.links.gdpr" /> */}
          </Link>
        </span>
      </span>
      <Modal show={show} onHide={handleClose} dialogClassName="modal-dialog-centered modal-lg">
        <GdprModal />
      </Modal>

      <section id="social-media">
        <a
          href="https://www.facebook.com/ingsoftware/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={ImageFacebook} alt="Facebook link" />
        </a>

        <a
          href="https://www.linkedin.com/company/ing-software/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={ImageLinkedIn} alt="LinkedIn link" />
        </a>

        <a
          href="https://www.instagram.com/ingsoftware_/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={ImageInstagram} alt="Instagram link" />
        </a>

        <a
          href="https://twitter.com/ingsoftware_"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={ImageTwitter} alt="Twitter link" />
        </a>
        <a
          href="https://clutch.co/profile/ingsoftware"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={ImageClutch} alt="Clutch link" />
        </a>
      </section>
    </section>
  )
}

export default injectIntl(FooterLink)