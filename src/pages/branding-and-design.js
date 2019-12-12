import React from "react"
import { Link } from "gatsby"
import { injectIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ImageComponent from "../components/imageComponent"
import Headline from "../components/headline"
import SectionTitle from "../components/sectionTitle"
import CtaSection from "../components/cta"
import AppItemNoCheck from "../components/appItemNoCheck"
import CheckedLine from "../components/checkedLine"

import ImageHeader from "../images/cards/skinny-10.png"
import ImageMeta from "../images/og-images/og-branding-design.jpg"
import ImageAppItem1 from "../images/cards/skinny-11.png"
import ImageAppItem2 from "../images/cards/skinny-12.png"
import ImageAppItem3 from "../images/cards/skinny-13.png"


import "../styles/pages/how-we-do-it/branding-and-design.scss"


const brandingAndDesign = ({ intl }) => {
    return (
        <Layout>
            <main>
            <SEO 
                title={intl.formatMessage({ id: "how-we-do-it.branding-and-design.meta.title" })}
                description={intl.formatMessage({ id: "how-we-do-it.branding-and-design.meta.description" })}
                link={intl.formatMessage({ id: "how-we-do-it.branding-and-design.meta.link" })}
                image={ImageMeta}
            />
            <Headline
                wrapperClasses="d-flex flex-wrap align-items-center ing-headline"
                innerWrapClasses="pl-md-0 col-md-6 col-12 align-self-center mt-md-0 mt-3 js-parallax-text"
                title={intl.formatMessage({ id: "how-we-do-it.branding-and-design.main-heading" })}
                description={intl.formatMessage({ id: "how-we-do-it.branding-and-design.heading" })}
                link={intl.formatMessage({ id: "how-we-do-it.branding-and-design.meta.link" })}
                imgWrapClasses="col-md-6 col-12 text-center mb-md-0 mb-4"
                imgClasses="img-fluid js-parallax-image"
                img={ImageHeader}
                imgAlt={intl.formatMessage({ id: "how-we-do-it.branding-and-design.heading-img-alt" })}
            />
            <div className="d-none">
                <ImageComponent />
            </div>

            {/* Ing Brand */}
            <section className="position-relative brand-design-ing-text bg-whitening">
                <div className="container">
                    <div className="row text-center">

                        <SectionTitle className="w-100" title={intl.formatMessage({ id: "how-we-do-it.branding-and-design.ing-brand.title" })} />

                        <p className="w-100" itemProp="text">
                            {intl.formatMessage({ id: "how-we-do-it.branding-and-design.ing-brand.text-part1" })}
                            <br />
                            {intl.formatMessage({ id: "how-we-do-it.branding-and-design.ing-brand.text-part2" })}
                        </p>
                    </div>
                </div>
            </section>

            {/* Ing text */}
            <section className="position-relative blue-bg-gradient brand-design-ing-text">
                <div className="container">
                    <div className="row text-center">
                        <SectionTitle
                            className="w-100 text-white"
                            dataAos="fade-up"
                            dataAosDuration="1200"
                            title={intl.formatMessage({ id: "how-we-do-it.branding-and-design.ing.title" })}
                        />
                        <p
                            className="w-100 text-white"
                            itemProp="text"
                            data-aos="fade-up"
                            data-aos-duration="1200"
                            data-aos-delay="400"
                        >
                            {intl.formatMessage({ id: "how-we-do-it.branding-and-design.ing.text-part1" })}
                            <br />
                            {intl.formatMessage({ id: "how-we-do-it.branding-and-design.ing.text-part2" })}
                            <br />
                            {intl.formatMessage({ id: "how-we-do-it.branding-and-design.ing.text-part3" })}
                        </p>
                    </div>
                </div>
            </section>

            {/* Brand Design Description */}
            <section className="brand-design-desc-wrapper">
                <div className="container">
                    <div className="row justify-content-md-between justify-content-center">
                        <SectionTitle
                            className="w-100 text-center"
                            dataAos="fade-up"
                            dataAosDuration="1200"
                            title={intl.formatMessage({ id: "how-we-do-it.branding-and-design.brand-design.title" })}
                        />

                        <AppItemNoCheck
                            dataAosDuration="1200"
                            dataAosDelay="400"
                            img={ImageAppItem1}
                            imgAlt={intl.formatMessage({ id: "how-we-do-it.branding-and-design.brand-design.app-item-1-img-alt" })}
                            title={intl.formatMessage({ id: "how-we-do-it.branding-and-design.brand-design.app-item-1-title" })}
                            text1={intl.formatMessage({ id: "how-we-do-it.branding-and-design.brand-design.app-item-1-text-1" })}
                            text2={intl.formatMessage({ id: "how-we-do-it.branding-and-design.brand-design.app-item-1-text-2" })}
                            text3=" "
                        />
                        <AppItemNoCheck
                            dataAosDuration="1400"
                            dataAosDelay="500"
                            img={ImageAppItem2}
                            imgAlt={intl.formatMessage({ id: "how-we-do-it.branding-and-design.brand-design.app-item-2-img-alt" })}
                            title={intl.formatMessage({ id: "how-we-do-it.branding-and-design.brand-design.app-item-2-title" })}
                            text1={intl.formatMessage({ id: "how-we-do-it.branding-and-design.brand-design.app-item-2-text-1" })}
                            text2={intl.formatMessage({ id: "how-we-do-it.branding-and-design.brand-design.app-item-2-text-2" })}
                            text3={intl.formatMessage({ id: "how-we-do-it.branding-and-design.brand-design.app-item-2-text-3" })}
                        />
                        <AppItemNoCheck
                            dataAosDuration="1500"
                            dataAosDelay="800"
                            img={ImageAppItem3}
                            imgAlt={intl.formatMessage({ id: "how-we-do-it.branding-and-design.brand-design.app-item-3-img-alt" })}
                            title={intl.formatMessage({ id: "how-we-do-it.branding-and-design.brand-design.app-item-3-title" })}
                            text1={intl.formatMessage({ id: "how-we-do-it.branding-and-design.brand-design.app-item-3-text-1" })}
                            text2={intl.formatMessage({ id: "how-we-do-it.branding-and-design.brand-design.app-item-3-text-2" })}
                            text3={intl.formatMessage({ id: "how-we-do-it.branding-and-design.brand-design.app-item-3-text-3" })}
                        />
                    </div>
                </div>
            </section>

            {/* Get started */}
            <div className="container-fluid">
                <div className="row justify-content-center align-items-center bg-grey grey-get-started">
                    <h2
                        className="w-100 text-center"
                        itemProp="text"
                        data-aos="zoom-in"
                        data-aos-duration="1200"
                    >
                        {intl.formatMessage({ id: "how-we-do-it.branding-and-design.get-started.text-part1" })}
                        <br />
                        {intl.formatMessage({ id: "how-we-do-it.branding-and-design.get-started.text-part2" })}
                    </h2>

                    <div data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="100">
                        <Link to="/contact" className="text-uppercase buttons btn-red js-branding-get-started-now">
                            {intl.formatMessage({ id: "button.get-started" })}
                        </Link>
                    </div>

                </div>
            </div>

            {/* Brand Design Team */}
            <section className="brand-design-team-wrapper">
                <div className="container">
                    <div className="row">
                        <SectionTitle
                            className="w-100 text-center"
                            dataAos="fade-up"
                            dataAosDuration="1200"
                            title={intl.formatMessage({ id: "how-we-do-it.branding-and-design.brand-design-team.title" })}
                        />
                        <section
                            className="pl-md-0 col-md-6 col-12"
                            data-aos="fade-up"
                            data-aos-duration="1300"
                            data-aos-delay="600"
                        >
                            <h3>{intl.formatMessage({ id: "how-we-do-it.branding-and-design.brand-design-team.title-left" })}</h3>
                            <CheckedLine
                                wrapClass="d-flex align-items-center"
                                className="text-uppercase"
                                text={intl.formatMessage({ id: "how-we-do-it.branding-and-design.brand-design-team.check-left-1" })}
                                imageAlt={intl.formatMessage({ id: "img-alt.check" })}
                            />
                            <CheckedLine
                                wrapClass="d-flex align-items-center"
                                className="text-uppercase"
                                text={intl.formatMessage({ id: "how-we-do-it.branding-and-design.brand-design-team.check-left-2" })}
                                imageAlt={intl.formatMessage({ id: "img-alt.check" })}
                            />
                            <CheckedLine
                                wrapClass="d-flex align-items-center"
                                className="text-uppercase"
                                text={intl.formatMessage({ id: "how-we-do-it.branding-and-design.brand-design-team.check-left-3" })}
                                imageAlt={intl.formatMessage({ id: "img-alt.check" })}
                            />
                            <CheckedLine
                                wrapClass="d-flex align-items-center"
                                className="text-uppercase"
                                text={intl.formatMessage({ id: "how-we-do-it.branding-and-design.brand-design-team.check-left-4" })}
                                imageAlt={intl.formatMessage({ id: "img-alt.check" })}
                            />
                        </section>
                        <section
                            className="pl-md-0 col-md-6 col-12"
                            data-aos="fade-up"
                            data-aos-duration="1400"
                            data-aos-delay="800"
                        >
                            <h3>{intl.formatMessage({ id: "how-we-do-it.branding-and-design.brand-design-team.title-right" })}</h3>
                            <CheckedLine
                                wrapClass="d-flex align-items-center"
                                className="text-uppercase"
                                text={intl.formatMessage({ id: "how-we-do-it.branding-and-design.brand-design-team.check-right-1" })}
                                imageAlt={intl.formatMessage({ id: "img-alt.check" })}
                            />
                            <CheckedLine
                                wrapClass="d-flex align-items-center"
                                className="text-uppercase"
                                text={intl.formatMessage({ id: "how-we-do-it.branding-and-design.brand-design-team.check-right-2" })}
                                imageAlt={intl.formatMessage({ id: "img-alt.check" })}
                            />
                            <CheckedLine
                                wrapClass="d-flex align-items-center"
                                className="text-uppercase"
                                text={intl.formatMessage({ id: "how-we-do-it.branding-and-design.brand-design-team.check-right-3" })}
                                imageAlt={intl.formatMessage({ id: "img-alt.check" })}
                            />
                            <CheckedLine
                                wrapClass="d-flex align-items-center"
                                className="text-uppercase"
                                text={intl.formatMessage({ id: "how-we-do-it.branding-and-design.brand-design-team.check-right-4" })}
                                imageAlt={intl.formatMessage({ id: "img-alt.check" })}
                            />
                        </section>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <CtaSection
                text={intl.formatMessage({ id: "button.get-started" })}
            />
            </main>
        </Layout>
    )
}
export default injectIntl(brandingAndDesign)