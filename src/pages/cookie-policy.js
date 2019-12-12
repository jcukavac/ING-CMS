import React, { useState } from "react"
import { injectIntl, Link } from "gatsby-plugin-intl"
import { navigate } from '@reach/router'

import Modal from 'react-bootstrap/Modal'

import Layout from "../components/layout"
import SEO from "../components/seo"
import PolicyTitle from "../components/policyTitle"
import GdprModal from "../components/gdprModal"

import ImageMeta from "../images/og-images/og-cookie-policy.jpg"

import "../styles/pages/privacy-cookies.scss"


const CookiePolicy = ({ intl }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Layout>
            <main className="policy-wrapper bg-whitening">
                <SEO
                    title={intl.formatMessage({ id: "cookie-policy.meta.title" })}
                    description={intl.formatMessage({ id: "cookie-policy.meta.description" })}
                    link={intl.formatMessage({ id: "cookie-policy.meta.link" })}
                    image={ImageMeta}
                />
                <div className="container">
                    <div className="row">
                        <h1 className="w-100 text-uppercase text-center pb-5" itemProp="name headline">
                            {intl.formatMessage({ id: "cookie-policy.title" })}
                        </h1>

                        <ol className="nav-tabs-scroll js-back-to-top">
                            <li>
                                <a onClick={() => { navigate('#who-we-are-section') }} href="#who-we-are-section">
                                    {intl.formatMessage({ id: "cookie-policy.section-title1" })}
                                </a>
                            </li>
                            <li>
                                <a onClick={() => { navigate('#what-are-cookies') }} href="#what-are-cookies">
                                    {intl.formatMessage({ id: "cookie-policy.section-title2" })}
                                </a>
                            </li>
                            <li>
                                <a onClick={() => { navigate('#cookies-usage-section') }} href="#cookies-usage-section">
                                    {intl.formatMessage({ id: "cookie-policy.section-title3" })}
                                </a>
                            </li>
                            <li>
                                <a onClick={() => { navigate('#cookies-longevity-section') }} href="#cookies-longevity-section">
                                    {intl.formatMessage({ id: "cookie-policy.section-title4" })}
                                </a>
                            </li>
                            <li>
                                <a onClick={() => { navigate('#cookies-consent-section') }} href="#cookies-consent-section">
                                    {intl.formatMessage({ id: "cookie-policy.section-title5" })}
                                </a>
                            </li>
                        </ol>

                        {/* Who we are section */}
                        <section className="policy-items">
                            <PolicyTitle
                                title={intl.formatMessage({ id: "cookie-policy.section-1.title" })}
                                id="who-we-are-section"
                            />
                            <p itemProp="text">
                                {intl.formatMessage({ id: "cookie-policy.section-1.text-1-part1" })}
                                <a className="no-click" href={intl.formatMessage({ id: "cookie-policy.section-1.text-1-link" })}>{intl.formatMessage({ id: "cookie-policy.section-1.text-1-link-text" })}</a>
                                {intl.formatMessage({ id: "cookie-policy.section-1.text-1-part2" })}
                                <a className="no-click" href={intl.formatMessage({ id: "cookie-policy.section-1.text-1-link2" })}>{intl.formatMessage({ id: "cookie-policy.section-1.text-1-link2-text" })}</a>
                                {intl.formatMessage({ id: "cookie-policy.section-1.text-1-part3" })}
                            </p>
                        </section>

                        {/* What are coookies section */}
                        <section className="policy-items">
                            <PolicyTitle
                                title={intl.formatMessage({ id: "cookie-policy.section-2.title" })}
                                id="what-are-cookies"
                            />
                            <p itemProp="text"> {intl.formatMessage({ id: "cookie-policy.section-2.text-1" })} </p>
                        </section>

                        {/* Cookies usage section */}
                        <section className="policy-items">
                            <PolicyTitle
                                title={intl.formatMessage({ id: "cookie-policy.section-3.title" })}
                                id="cookies-usage-section"
                            />
                            <p itemProp="text"> {intl.formatMessage({ id: "cookie-policy.section-3.text-1" })} </p>
                            <p itemProp="text">
                                {intl.formatMessage({ id: "cookie-policy.section-3.text-2-part1" })}
                                <strong>{intl.formatMessage({ id: "cookie-policy.section-3.text-2-bold" })}</strong>
                                {intl.formatMessage({ id: "cookie-policy.section-3.text-2-part2" })}
                            </p>
                            <p itemProp="text">
                                {intl.formatMessage({ id: "cookie-policy.section-3.text-3-part1" })}
                                <strong>{intl.formatMessage({ id: "cookie-policy.section-3.text-3-bold" })}</strong>
                                {intl.formatMessage({ id: "cookie-policy.section-3.text-3-part2" })}
                            </p>
                            <p itemProp="text">
                                {intl.formatMessage({ id: "cookie-policy.section-3.text-4-part1" })}
                                <strong>{intl.formatMessage({ id: "cookie-policy.section-3.text-4-bold" })}</strong>
                                {intl.formatMessage({ id: "cookie-policy.section-3.text-4-part2" })}
                                <strong>{intl.formatMessage({ id: "cookie-policy.section-3.text-4-bold2" })}</strong>
                            </p>
                            <p itemProp="text">
                                {intl.formatMessage({ id: "cookie-policy.section-3.text-5-part1" })}
                                <strong>{intl.formatMessage({ id: "cookie-policy.section-3.text-5-bold" })}</strong>
                                {intl.formatMessage({ id: "cookie-policy.section-3.text-5-part2" })}
                                <strong>{intl.formatMessage({ id: "cookie-policy.section-3.text-5-bold2" })}</strong>
                            </p>
                        </section>

                        {/* Cookies longevity section */}
                        <section className="policy-items">
                            <PolicyTitle
                                title={intl.formatMessage({ id: "cookie-policy.section-4.title" })}
                                id="cookies-longevity-section"
                            />
                            <p itemProp="text">
                                {intl.formatMessage({ id: "cookie-policy.section-4.text" })}
                                <strong>{intl.formatMessage({ id: "cookie-policy.section-4.text-bold" })}</strong>
                            </p>
                        </section>

                        {/* Cookies consent and preference */}
                        <section className="policy-items">
                            <PolicyTitle
                                title={intl.formatMessage({ id: "cookie-policy.section-5.title" })}
                                id="cookies-consent-section"
                            />
                            <p itemProp="text"> {intl.formatMessage({ id: "cookie-policy.section-5.text-1" })} </p>
                            <Link to="/" data-toggle="modal" data-target="#gdpr-modal" onClick={handleShow}>
                                {intl.formatMessage({ id: "cookie-policy.section-5.text-2-link-text" })} 
                            </Link>

                            <br/>
                            <br/>
                            <p itemProp="text">
                                {intl.formatMessage({ id: "cookie-policy.section-5.text-3" })}
                                <strong>{intl.formatMessage({ id: "cookie-policy.section-5.text-3-bold" })}</strong>
                            </p>
                            <ul>
                                <li>
                                    <span>Chrome: </span>
                                    <a href="https://support.google.com/chrome/answer/95647?hl=en" target="_blank" rel="noopener noreferrer"> Link </a>
                                </li>
                                <li>
                                    <span>Explorer: </span>
                                    <a href="https://support.microsoft.com/en-us/products/windows?os=windows-10" target="_blank" rel="noopener noreferrer"> Link </a>
                                </li>
                                <li>
                                    <span>Safari: </span>
                                    <a href="https://support.apple.com/en-gb/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer"> Link </a>
                                </li>
                                <li>
                                    <span>Firefox: </span>
                                    <a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" target="_blank" rel="noopener noreferrer"> Link </a>
                                </li>
                                <li>
                                    <span>Opera: </span>
                                    <a href="http://www.opera.com/help/tutorials/security/cookies/" target="_blank" rel="noopener noreferrer"> Link </a>
                                </li>
                            </ul>
                        </section>
                        <Modal show={show} onHide={handleClose} dialogClassName="modal-dialog-centered modal-lg">
                            <GdprModal />
                        </Modal>
                    </div>
                </div>
            </main>
        </Layout>
    )
}
export default injectIntl(CookiePolicy)