import React from 'react'
import { injectIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Headline from "../components/headlineCompany"
import SectionTitle from "../components/sectionTitle"
import ImageComponent from "../components/imageComponent"
import CtaSection from "../components/cta"

import ImageHeader from "../images/cards/skinny-21.png"
import ImageStar from  "../images/icons/filled-star.svg"
import ImageMeta from "../images/og-images/og-contact-us.jpg"

import DropdownButton from "react-bootstrap/DropdownButton"
import Dropdown from "react-bootstrap/Dropdown"


import '../styles/pages/contact.scss';

const contact = ({ intl }) => {
    return ( 
        <Layout>
            <main>
            <SEO
                title={intl.formatMessage({ id: "contact.meta.title" })}
                description={intl.formatMessage({ id: "contact.meta.description" })}
                link={intl.formatMessage({ id: "contact.meta.link" })}
                image={ImageMeta}
            />

            <div className="container">
                <div className="row">
                    <Headline
                        wrapperClasses="d-flex flex-wrap align-items-center ing-headline"
                        innerWrapClasses="pl-md-0 col-md-6 col-12 align-self-center mt-md-0 mt-3 js-parallax-text"
                        title={intl.formatMessage({ id: "contact.main-heading" })}
                        description={intl.formatMessage({ id: "contact.heading" })}
                        link="https://www.ingsoftware.com/contact"
                        imgWrapClasses="col-md-6 col-12 text-center mb-md-0 mb-4"
                        imgClasses="img-fluid js-parallax-image"
                        img={ImageHeader}
                        imgAlt={intl.formatMessage({ id: "contact.heading-img-alt" })}
                    />
                </div>
            </div>
            <div className="d-none">
                <ImageComponent />
            </div>

            <section className="position-relative bg-whitening">
                <div className="container">
                    <div className="row contact-us-wrapper flex-wrap">
                        <SectionTitle className="w-100" title={intl.formatMessage({ id: "contact.form.title" })} />

                        <form
                            className="d-flex justify-content-between flex-wrap w-100 contact-us-form"
                            method="post"
                            name="contact-form"
                            autoComplete="off"
                            action="https://formingo.jdev.ingsoftware.tech/api/formsubmissions/920e8236-518f-44e6-aa37-9494d41943bb/forms/contact-form"
                        >
                            {/* Hidden input fields for Formingo api */}
                            <input type="hidden" name="errorRedirectUrl" value="https://www.ingsoftware.com/404" />
                            <input type="hidden" name="successRedirectUrl" value="https://www.ingsoftware.com/thank-you" />
                            <input type="hidden" id="type" name="activitytype" value="Website Form" />
                            <input type="hidden" id="source" name="source" value="Contact Form" />

                            <div className="pl-0 pr-md-3 pr-0 col-lg-4 col-md-5 col-12 flex-column flex-wrap">

                                <div className="position-relative form-group">
                                    <label className="text-uppercase position-relative" htmlFor="input-name-form">
                                        {intl.formatMessage({ id: "contact.form.field-name" })}
                                    </label>
                                    <input
                                        name="name"
                                        type="text"
                                        className="form-control"
                                        id="input-name-form"
                                        placeholder={intl.formatMessage({ id: "contact.form.placeholder-name" })}
                                        autoComplete="off"
                                        aria-describedby="name-help"
                                    />
                                    <img className="position-absolute mandatory-icon" src={ImageStar}
                                        alt={intl.formatMessage({ id: "img-alt.star" })}
                                    />
                                    <small id="name-help" className="form-text position-absolute red validate-msg m-0 display-none">
                                        {intl.formatMessage({ id: "contact.form.validation-name" })}
                                    </small>
                                </div>

                                <div className="position-relative form-group">
                                    <label className="text-uppercase position-relative" htmlFor="input-email-form">
                                        {intl.formatMessage({ id: "contact.form.field-email" })}
                                    </label>
                                    <input
                                        name="email"
                                        type="email"
                                        className="form-control"
                                        id="input-email-form"
                                        placeholder={intl.formatMessage({ id: "contact.form.placeholder-email" })}
                                        aria-describedby="email-help"
                                        autoComplete="off"
                                    />
                                    <img className="position-absolute mandatory-icon" src={ImageStar}
                                        alt={intl.formatMessage({ id: "img-alt.star" })}
                                    />
                                    <small id="email-help" className="form-text position-absolute red validate-msg m-0 display-none">
                                        {intl.formatMessage({ id: "contact.form.validation-email" })}
                                    </small>
                                </div>

                                <div className="position-relative form-group" >
                                    <label className="text-uppercase position-relative" htmlFor="input-company-form">
                                        {intl.formatMessage({ id: "contact.form.field-company" })}
                                    </label>
                                    <input
                                        name="company"
                                        type="text"
                                        className="form-control"
                                        id="input-company-form"
                                        placeholder={intl.formatMessage({ id: "contact.form.placeholder-company" })}
                                        autoComplete="off"
                                        aria-describedby="company-help"
                                    />
                                    <img className="position-absolute mandatory-icon" src={ImageStar}
                                        alt={intl.formatMessage({ id: "img-alt.star" })}
                                    />
                                    <small id="company-help" className="form-text position-absolute red validate-msg m-0 display-none">
                                        {intl.formatMessage({ id: "contact.form.validation-company" })}
                                    </small>
                                </div>

                                <div className="mb-0 form-group align-self-end">
                                    <div className="dropdown">
                                        <input id="select-field-inquiry" name="question" type="text" hidden />
                                        <DropdownButton 
                                            variant="d-flex justify-content-between align-items-center w-100"
                                            id="select-inquiry" 
                                            title={intl.formatMessage({ id: "contact.form.dropdown" })}
                                        >
                                            <small id="dropdown-help" className="form-text position-absolute red validate-msg m-0 display-none">
                                                {intl.formatMessage({ id: "contact.form.validation-dropdown" })}
                                            </small>
                                            <Dropdown.Item as="button">{intl.formatMessage({ id: "contact.form.dropdown-option1" })}</Dropdown.Item>
                                            <Dropdown.Item as="button">{intl.formatMessage({ id: "contact.form.dropdown-option2" })}</Dropdown.Item>
                                            <Dropdown.Item as="button">{intl.formatMessage({ id: "contact.form.dropdown-option3" })}</Dropdown.Item>
                                            <Dropdown.Item as="button">{intl.formatMessage({ id: "contact.form.dropdown-option4" })}</Dropdown.Item>
                                            <Dropdown.Item as="button">{intl.formatMessage({ id: "contact.form.dropdown-option5" })}</Dropdown.Item>
                                            <Dropdown.Item as="button">{intl.formatMessage({ id: "contact.form.dropdown-option6" })}</Dropdown.Item>
                                        </DropdownButton>
                                    </div>
                                </div>
                            </div>

                            <div className="pr-0 pl-md-3 pl-0 col-lg-8 col-md-7 col-12 flex-column flex-wrap">
                                <div className="position-relative form-group">
                                    <label className="text-uppercase position-relative" htmlFor="input-msg-form">
                                        {intl.formatMessage({ id: "contact.form.field-message" })}
                                    </label>
                                    <textarea
                                        name="message"
                                        className="form-control"
                                        id="input-msg-form"
                                        rows="18"
                                        placeholder={intl.formatMessage({ id: "contact.form.placeholder-message" })}
                                        autoComplete="off"
                                        aria-describedby="msg-help"
                                    ></textarea>
                                    <img className="position-absolute mandatory-icon" src={ImageStar}
                                        alt={intl.formatMessage({ id: "img-alt.star" })}
                                    />
                                    <small
                                        id="msg-help"
                                        className="form-text position-absolute red validate-msg m-0 display-none"
                                    >
                                        {intl.formatMessage({ id: "contact.form.validation-message" })}
                                    </small>
                                </div>

                                <div className="d-flex align-items-center flex-sm-row flex-column mt-3">
                                    <div>
                                        <img className="position-relative" src={ImageStar}
                                            alt={intl.formatMessage({ id: "img-alt.star" })}
                                        />
                                        <span className="ml-2">{intl.formatMessage({ id: "contact.form.mandatory" })}</span>
                                    </div>
                                    <button className="text-uppercase buttons btn btn-red ml-sm-auto mt-sm-0 mt-2" type="submit">
                                        {intl.formatMessage({ id: "button.send" })}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* Contact Phones */}
            <section className="call-us-wrapper">
                <div className="container">
                    <div className="row justify-content-lg-between justify-content-md-around justify-content-center">
                        <section
                            className="contact-us-item"
                            data-aos="fade-left"
                            data-aos-duration="1000"
                            data-aos-delay="200"
                            data-aos-offset="0"
                        >
                            <p> {intl.formatMessage({ id: "footer.continent-eu.title" })} / {intl.formatMessage({ id: "footer.continent-eu.serbia.country" })} </p>
                            <p> <a className="red no-click" href="tel:+381600777888"> +381 60 0777 888 </a> </p>
                        </section>

                        <section
                            className="contact-us-item"
                            data-aos="fade-left"
                            data-aos-duration="1000"
                            data-aos-delay="400"
                            data-aos-offset="0"
                        >
                            <p> {intl.formatMessage({ id: "footer.continent-eu.title" })} / {intl.formatMessage({ id: "footer.continent-eu.austria.country" })} </p>
                            <p> <a className="red no-click" href="tel:+436502543783"> +43 650 25 43 783 </a> </p>
                        </section>

                        <section
                            className="contact-us-item"
                            data-aos="fade-left"
                            data-aos-duration="1000"
                            data-aos-delay="600"
                            data-aos-offset="0"
                        >
                            <p> {intl.formatMessage({ id: "footer.continent-eu.title" })} / {intl.formatMessage({ id: "footer.continent-eu.switzerland.country" })} </p>
                            <p> <a className="red no-click" href="tel:+410762820432"> +41 (0) 76 282 04 32 </a> </p>
                        </section>

                        <section
                            className="contact-us-item"
                            data-aos="fade-left"
                            data-aos-duration="1000"
                            data-aos-delay="800"
                            data-aos-offset="0"
                        >
                            <p> {intl.formatMessage({ id: "footer.continent-ua.country" })} / {intl.formatMessage({ id: "footer.continent-ua.state" })} </p>
                            <p> <a className="red no-click" href="tel:+16097510252"> +1 609 751 0252 </a> </p>
                        </section>

                        <section
                            className="contact-us-item"
                            data-aos="fade-left"
                            data-aos-duration="1000"
                            data-aos-delay="1000"
                            data-aos-offset="0"
                        >
                            <p> {intl.formatMessage({ id: "footer.continent-af.title" })} / {intl.formatMessage({ id: "footer.continent-af.country" })} </p>
                            <p> <a className="red no-click" href="tel:+2634446455"> +263 4 446455 </a> </p>
                        </section>
                    </div>
                </div>
            </section>

            <CtaSection text={intl.formatMessage({ id: "button.get-started" })} />
            </main>
        </Layout>
    )
}
export default injectIntl(contact)