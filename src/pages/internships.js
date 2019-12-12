import React from 'react'
import { injectIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Headline from "../components/headline"
import CtaSection from "../components/cta"
import ImageComponent from "../components/imageComponent"
import SectionTitle from "../components/sectionTitle"
import CheckedLine from "../components/checkedLine"
import ConceptBox from "../components/conceptBox"

import ImageHeader from "../images/cards/skinny-27.png"
import ImageMeta from "../images/og-images/og-internships.jpg"
import ImageConceptBox1 from "../images/icons/knowledge.svg"
import ImageConceptBox2 from "../images/icons/code-icon.svg"
import ImageConceptBox3 from "../images/icons/puzzle-icon.svg"
import ImageConceptBox4 from "../images/icons/advisory.svg"
import ImageCareersInternship from "../images/careers-internship.png"

import '../styles/pages/careers/jobs-intern.scss';

const internships = ({ intl }) => {
    return (
        <Layout>
            <main>
            <SEO
                title={intl.formatMessage({ id: "internships.meta.title" })}
                description={intl.formatMessage({ id: "internships.meta.description" })}
                link={intl.formatMessage({ id: "internships.meta.link" })}
                image={ImageMeta}
            />

            <Headline
                wrapperClasses="ing-headline"
                innerWrapClasses="pl-md-0 col-md-6 col-12 align-self-center mt-md-0 mt-3 js-parallax-text"
                title={intl.formatMessage({ id: "internships.main-heading" })}
                description={intl.formatMessage({ id: "internships.heading" })}
                link={intl.formatMessage({ id: "internships.meta.link" })}
                imgWrapClasses="col-md-6 col-12 text-center position-relative"
                imgClasses="img-fluid js-parallax-image"
                img={ImageHeader}
                imgAlt={intl.formatMessage({ id: "internships.heading-img-alt" })}
            />
            <div className="d-none">
                <ImageComponent />
            </div>

            {/* Internship */}
            <section className="position-relative internship-box bg-grey">
                <div className="container">
                    <div className="row">
                        <SectionTitle
                            className="w-100 text-center"
                            dataAos="zoom-in"
                            dataAosDuration="1100"
                            dataAosOffset="0"
                            title={intl.formatMessage({ id: "internships.internship.title" })}
                        />
                        <p
                            className="w-100 text-center"
                            data-aos="fade-up"
                            data-aos-duration="1300"
                        >
                            {intl.formatMessage({ id: "internships.internship.text" })}
                        </p>

                        <section
                            className="pl-0 col-md-6 col-12"
                            data-aos="fade-up"
                            data-aos-duration="1300"
                            data-aos-delay="600"
                        >
                            <CheckedLine
                                wrapClass="d-flex align-items-center"
                                className="text-uppercase"
                                text={intl.formatMessage({ id: "internships.internship.check-left-1" })}
                                imageAlt={intl.formatMessage({ id: "img-alt.check" })}
                            />
                            <CheckedLine
                                wrapClass="d-flex align-items-center"
                                className="text-uppercase"
                                text={intl.formatMessage({ id: "internships.internship.check-left-2" })}
                                imageAlt={intl.formatMessage({ id: "img-alt.check" })}
                            />
                            <CheckedLine
                                wrapClass="d-flex align-items-center"
                                className="text-uppercase"
                                text={intl.formatMessage({ id: "internships.internship.check-left-3" })}
                                imageAlt={intl.formatMessage({ id: "img-alt.check" })}
                            />
                            <CheckedLine
                                wrapClass="d-flex align-items-center"
                                className="text-uppercase"
                                text={intl.formatMessage({ id: "internships.internship.check-left-4" })}
                                imageAlt={intl.formatMessage({ id: "img-alt.check" })}
                            />
                        </section>

                        <section
                            className="pl-0 col-md-6 col-12"
                            data-aos="fade-up"
                            data-aos-duration="1400"
                            data-aos-delay="800"
                        >
                            <CheckedLine
                                wrapClass="d-flex align-items-center"
                                className="text-uppercase"
                                text={intl.formatMessage({ id: "internships.internship.check-right-1" })}
                                imageAlt={intl.formatMessage({ id: "img-alt.check" })}
                            />
                            <CheckedLine
                                wrapClass="d-flex align-items-center"
                                className="text-uppercase"
                                text={intl.formatMessage({ id: "internships.internship.check-right-2" })}
                                imageAlt={intl.formatMessage({ id: "img-alt.check" })}
                            />
                            <CheckedLine
                                wrapClass="d-flex align-items-center"
                                className="text-uppercase"
                                text={intl.formatMessage({ id: "internships.internship.check-right-3" })}
                                imageAlt={intl.formatMessage({ id: "img-alt.check" })}
                            />
                            <CheckedLine
                                wrapClass="d-flex align-items-center"
                                className="text-uppercase"
                                text={intl.formatMessage({ id: "internships.internship.check-right-4" })}
                                imageAlt={intl.formatMessage({ id: "img-alt.check" })}
                            />
                        </section>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="position-relative blue-box-wrapper text-white">
                <div className="container">
                    <div className="row justify-content-md-between justify-content-center">
                        <SectionTitle
                            className="w-100 text-center text-white"
                            dataAos="zoom-in"
                            dataAosDuration="1100"
                            dataAosOffset="0"
                            title={intl.formatMessage({ id: "internships.benefits.title" })}
                        />
                        <ConceptBox
                            sectionWrapClass="blue-box-item"
                            dataAos="fade-left"
                            dataAosDuration="1200"
                            dataAosDelay="400"
                            conceptBoxImg={ImageConceptBox1}
                            conceptBoxImgAlt={intl.formatMessage({ id: "internships.benefits.box1-img-alt" })}
                            titleClass="text-white"
                            conceptBoxTitle={intl.formatMessage({ id: "internships.benefits.box1-title" })}
                            itemProp="text"
                            conceptBoxDescriptionPart1={intl.formatMessage({ id: "internships.benefits.box1-text" })}
                            conceptBoxBtnText=" "
                        />
                        <ConceptBox
                            sectionWrapClass="blue-box-item"
                            dataAos="fade-left"
                            dataAosDuration="1200"
                            dataAosDelay="700"
                            conceptBoxImg={ImageConceptBox2}
                            conceptBoxImgAlt={intl.formatMessage({ id: "internships.benefits.box2-img-alt" })}
                            titleClass="text-white"
                            conceptBoxTitle={intl.formatMessage({ id: "internships.benefits.box2-title" })}
                            itemProp="text"
                            conceptBoxDescriptionPart1={intl.formatMessage({ id: "internships.benefits.box2-text" })}
                            conceptBoxBtnText=" "
                        />
                        <ConceptBox
                            sectionWrapClass="blue-box-item"
                            dataAos="fade-left"
                            dataAosDuration="1200"
                            dataAosDelay="1000"
                            conceptBoxImg={ImageConceptBox3}
                            conceptBoxImgAlt={intl.formatMessage({ id: "internships.benefits.box3-img-alt" })}
                            titleClass="text-white"
                            conceptBoxTitle={intl.formatMessage({ id: "internships.benefits.box3-title" })}
                            itemProp="text"
                            conceptBoxDescriptionPart1={intl.formatMessage({ id: "internships.benefits.box3-text" })}
                            conceptBoxBtnText=" "
                        />
                        <ConceptBox
                            sectionWrapClass="blue-box-item"
                            dataAos="fade-left"
                            dataAosDuration="1200"
                            dataAosDelay="1300"
                            conceptBoxImg={ImageConceptBox4}
                            conceptBoxImgAlt={intl.formatMessage({ id: "internships.benefits.box4-img-alt" })}
                            titleClass="text-white"
                            conceptBoxTitle={intl.formatMessage({ id: "internships.benefits.box4-title" })}
                            itemProp="text"
                            conceptBoxDescriptionPart1={intl.formatMessage({ id: "internships.benefits.box4-text" })}
                            conceptBoxBtnText=" "
                        />
                    </div>
                </div>
            </section>

            {/* Intern Description */}
            <section className="jobs-desc-wrapper">
                <div className="container">
                    <div className="row text-center">
                        <section
                            className="mx-auto jobs-desc-item"
                            data-aos="zoom-in"
                            data-aos-duration="1100"
                        >
                            <SectionTitle
                                className="w-100"
                                title={intl.formatMessage({ id: "internships.intern.title" })}
                            />
                            <p itemProp="text"> {intl.formatMessage({ id: "internships.intern.text-1" })} </p>
                            <p itemProp="text"> {intl.formatMessage({ id: "internships.intern.text-2" })} </p>
                        </section>

                        <section
                            className="mx-auto bg-color jobs-desc-item shadowing"
                            data-aos="zoom-in"
                            data-aos-duration="1100"
                            data-aos-delay="300"
                        >
                            <p itemProp="text"> {intl.formatMessage({ id: "internships.intern.text-3" })} </p>
                        </section>

                        <section
                            className="mx-auto jobs-desc-item"
                            data-aos="zoom-in"
                            data-aos-duration="1100"
                            data-aos-delay="400"
                        >
                            <p itemProp="text"> {intl.formatMessage({ id: "internships.intern.text-4" })} </p>
                        </section>

                        <section
                            className="mx-auto jobs-desc-item"
                            data-aos="zoom-in"
                            data-aos-duration="1100"
                            data-aos-delay="400"
                        >
                            <img
                                className="img-fluid"
                                src={ImageCareersInternship}
                                alt={intl.formatMessage({ id: "internships.intern.img-alt" })}
                                itemProp="image"
                            />  
                        </section>
                    </div>
                </div>
            </section>

            {/* Intern Contact */}
            <section className="jobs-contact-wrapper bg-grey text-center">
                <div className="container-fluid">
                    <div className="row">
                        <section
                            className="col-md-8 mx-auto"
                            data-aos="fade-up"
                            data-aos-duration="1200"
                        >
                            <SectionTitle title={intl.formatMessage({ id: "internships.contact.title" })} />
                            <p itemProp="text"> {intl.formatMessage({ id: "internships.contact.text-1" })} </p>
                            <a
                                href="mailto:internship@ingsoftware.com"
                                data-aos="zoom-in-up"
                                data-aos-easing="linear"
                            >
                                {intl.formatMessage({ id: "internships.contact.mail" })}
                            </a>
                            <p itemProp="text"> {intl.formatMessage({ id: "internships.contact.text-2" })} </p>
                        </section>
                    </div>
                </div>
            </section>

            <CtaSection text={intl.formatMessage({ id: "button.get-started" })} />
            </main>
        </Layout>
    )
}
export default injectIntl(internships)