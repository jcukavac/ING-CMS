import React, { useState } from 'react'
import { injectIntl } from "gatsby-plugin-intl"

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'


const GdprModal = ({ intl }) => {
    const [setShow] = useState(false);

    const handleClose = () => setShow(false);

    return (  
        <>
        <Modal.Header closeButton>
            <Modal.Title id="gdpr-modal-title">{intl.formatMessage({ id: "cookie-preferences.title" })}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>
                {intl.formatMessage({ id: "cookie-preferences.text-1" })}
                <br />
                <br />
                {intl.formatMessage({ id: "cookie-preferences.text-2" })}
                <strong id="delete-cookies">{intl.formatMessage({ id: "cookie-preferences.text-2-bold" })}</strong>
            </p>
            <Accordion defaultActiveKey="0" id="accordion-cookie">
                {/* Strictly necessary cookies */}
                <Card>
                    <Card.Header className="d-flex align-items-center" id="acc-necessary-cookie">
                        <p className="mb-0">
                            <Accordion.Toggle as={Button} variant="link" eventKey="0" className="text" data-target="#collaps-one" aria-controls="collaps-one">
                                {intl.formatMessage({ id: "cookie-preferences.section-1-title" })}
                            </Accordion.Toggle>
                        </p>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0" id="collapse-one" aria-labelledby="acc-necessary-cookie" data-parent="#accordion-cookie">
                        <Card.Body>
                            {intl.formatMessage({ id: "cookie-preferences.section-1-text" })}
                            <br />
                            <br />
                            <strong>{intl.formatMessage({ id: "cookie-preferences.section-1-text-bold" })}</strong>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

                {/* Functionality cookies */}
                <Card>
                    <Card.Header className="d-flex align-items-center" id="acc-functions-cookie">
                        <p className="mb-0">
                            <Accordion.Toggle as={Button} variant="link" eventKey="1" className="text" data-target="#collaps-two" aria-controls="collaps-two">
                                {intl.formatMessage({ id: "cookie-preferences.section-2-title" })}
                            </Accordion.Toggle>
                        </p>
                        <label className="ml-auto switch" htmlFor="checkbox-function-cookies">
                            <input type="checkbox" id="checkbox-function-cookies" className="d-none checkbox-consent" />
                            <div className="slider round"></div>
                        </label>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1" id="collapse-two" aria-labelledby="acc-functions-cookie" data-parent="#accordion-cookie">
                        <Card.Body> {intl.formatMessage({ id: "cookie-preferences.section-2-text" })} </Card.Body>
                    </Accordion.Collapse>
                </Card>

                {/* Tracking and performance cookies */}
                <Card>
                    <Card.Header className="d-flex align-items-center" id="acc-performance-cookie">
                        <p className="mb-0">
                            <Accordion.Toggle as={Button} variant="link" eventKey="2" className="text" data-target="#collaps-three" aria-controls="collaps-three">
                                {intl.formatMessage({ id: "cookie-preferences.section-3-title" })}
                            </Accordion.Toggle>
                        </p>
                        <label className="ml-auto switch" htmlFor="checkbox-perf-cookies">
                            <input type="checkbox" id="checkbox-perf-cookies" className="d-none checkbox-consent" />
                            <div className="slider round"></div>
                        </label>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2" id="collapse-three" aria-labelledby="acc-performance-cookie" data-parent="#accordion-cookie">
                        <Card.Body> {intl.formatMessage({ id: "cookie-preferences.section-3-text" })} </Card.Body>
                    </Accordion.Collapse>
                </Card>

                {/* Targeting and advertising cookies */}
                <Card>
                    <Card.Header className="d-flex align-items-center" id="acc-advertise-cookie">
                        <p className="mb-0">
                            <Accordion.Toggle as={Button} variant="link" eventKey="3" className="text collapsed" aria-expanded="false" data-target="#collaps-four" aria-controls="collaps-four">
                                {intl.formatMessage({ id: "cookie-preferences.section-4-title" })}
                            </Accordion.Toggle>
                        </p>
                        <label className="ml-auto switch" htmlFor="checkbox-target-cookies">
                            <input type="checkbox" id="checkbox-target-cookies" className="d-none checkbox-consent" />
                            <div className="slider round"></div>
                        </label>
                    </Card.Header>
                    <Accordion.Collapse eventKey="3" id="collapse-four" className="collapse" aria-labelledby="acc-advertise-cookie" data-parent="#accordion-cookie">
                        <Card.Body> {intl.formatMessage({ id: "cookie-preferences.section-4-text" })} </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="" className="text-uppercase" id="js-agree-with-pref" onClick={handleClose}>
                {intl.formatMessage({ id: "button.save-preferences" })}
            </Button>
        </Modal.Footer>
        </>
    )
}

export default injectIntl(GdprModal)