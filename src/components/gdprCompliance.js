import React, { useState } from 'react'
import { injectIntl, Link } from "gatsby-plugin-intl"

import Modal from 'react-bootstrap/Modal'

import GdprModal from "../components/gdprModal"

import "../styles/components/gdpr-box.scss"

const GdprCompliance = ({ intl }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <section className="w-100 position-fixed text-white d-flex justify-content-between flex-wrap align-items-center gdpr-wrapper">
        <p>
          {intl.formatMessage({ id: "gdpr-compliance.text-part1" })} <Link to="/cookie-policy" >
            <strong>{intl.formatMessage({ id: "gdpr-compliance.cookies" })}.</strong>
          </Link> {intl.formatMessage({ id: "gdpr-compliance.text-part2" })} <em>{intl.formatMessage({ id: "gdpr-compliance.agree" })} </em>
          {intl.formatMessage({ id: "gdpr-compliance.text-part3" })} <em>{intl.formatMessage({ id: "gdpr-compliance.preferences" })} </em> {intl.formatMessage({ id: "gdpr-compliance.text-part4" })}
        </p>

        <div className="d-flex align-items-center justify-content-lg-end justify-content-start">
          <Link
            to="/"
            className="text-uppercase col-auto"
            data-toggle="modal"
            data-target="#gdpr-modal"
            onClick={handleShow}
          >
            {intl.formatMessage({ id: "button.change-preferences" })}
          </Link>

          <button id="gdpr-consent-all" className="text-uppercase col-auto">
            <span>{intl.formatMessage({ id: "button.agree" })}</span>
          </button>
        </div>
      </section>

      <Modal show={show} onHide={handleClose} dialogClassName="modal-dialog-centered modal-lg">
        <GdprModal />
      </Modal>
    </>
  )
}

export default injectIntl(GdprCompliance)