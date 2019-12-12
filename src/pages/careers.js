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

import Tab from "react-bootstrap/Tab"
import Nav from "react-bootstrap/Nav"

import ImageHeader from "../images/cards/skinny-23.png"
import ImageMeta from "../images/og-images/og-careers.jpg"
import ImageConceptBox1 from "../images/icons/advisory.svg"
import ImageConceptBox2 from "../images/icons/hand.svg"
import ImageConceptBox3 from "../images/icons/knowledge.svg"
import ImageConceptBox4 from "../images/icons/cutting-edge.svg"
import ImageCareersJobs from "../images/careers-jobs.png"

import '../styles/pages/careers/jobs-intern.scss';

const careers = ({ intl }) => {
    return (
        <Layout>
            <main>
            <SEO
                title={intl.formatMessage({ id: "jobs.meta.title" })}
                description={intl.formatMessage({ id: "jobs.meta.description" })}
                link={intl.formatMessage({ id: "jobs.meta.link" })}
                image={ImageMeta}
            />
            <Headline
                wrapperClasses="ing-headline"
                innerWrapClasses="pl-md-0 col-md-6 col-12 align-self-center mt-md-0 mt-3 js-parallax-text"
                title={intl.formatMessage({ id: "jobs.main-heading" })}
                description={intl.formatMessage({ id: "jobs.heading" })}
                link={intl.formatMessage({ id: "jobs.meta.link" })}
                imgWrapClasses="col-md-6 col-12 text-center position-relative"
                imgClasses="img-fluid js-parallax-image"
                img={ImageHeader}
                imgAlt={intl.formatMessage({ id: "jobs.heading-img-alt" })}
            />
            <div className="d-none">
                <ImageComponent />
            </div>

            <section className="position-relative jobs-tabs bg-grey">
                <Tab.Container
                    defaultActiveKey="jobs-fe-tabs-content"
                    id="jobs-pills-tab"
                >
                    <div className="d-lg-block d-flex full-width sub-menu-wrapper bg-whitening">
                        <div className="position-absolute d-lg-none d-inline-block left-carousel-overlay"></div>
                        <div className="container">
                            <Nav
                                variant="pills"
                                className="nav nav-pills mx-lg-auto justify-content-md-center align-items-center flex-lg-wrap flex-nowrap sub-menu init-swiper"
                            >
                                <Nav.Item>
                                    <Nav.Link
                                        className="nav-link"
                                        id="jobs-nav-fe-tabs"
                                        eventKey="jobs-fe-tabs-content"
                                        aria-controls="jobs-fe-tabs-content"
                                        aria-selected="true"
                                    >
                                        Front-End
                                    </Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link
                                        className="nav-link"
                                        id="jobs-nav-csharp-tabs"
                                        eventKey="jobs-csharp-tabs-content"
                                        aria-controls="jobs-csharp-tabs-content"
                                        aria-selected="false"
                                    >
                                        .Net/C#
                                    </Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link
                                        className="nav-link"
                                        id="jobs-nav-java-tabs"
                                        eventKey="jobs-java-tabs-content"
                                        aria-controls="jobs-java-tabs-content"
                                        aria-selected="false"
                                    >
                                        Java
                                    </Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link
                                        className="nav-link"
                                        id="jobs-nav-unity-tabs"
                                        eventKey="jobs-unity-tabs-content"
                                        aria-controls="jobs-unity-tabs-content"
                                        aria-selected="false"
                                    >
                                        Unity 3D Game
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                        <div className="position-absolute d-lg-none d-inline-block right-carousel-overlay"></div>
                    </div>

                    {/* Tabs Content */}
                    <div className="container">
                        <div className="row">
                            <Tab.Content id="jobs-pills-tab-content">
                                <Tab.Pane
                                    eventKey="jobs-fe-tabs-content"
                                    id="jobs-fe-tabs-content"
                                    aria-labelledby="jobs-fe-tabs-tabs"
                                >
                                    <SectionTitle
                                        className="w-100"
                                        title={intl.formatMessage({ id: "jobs.fe.title" })}
                                    />
                                    <p itemProp="text">
                                        {intl.formatMessage({ id: "jobs.fe.text" })}
                                    </p>
                                    <section
                                        className="d-flex flex-wrap justify-content-md-between justify-content-center"
                                    >
                                        <section className="jobs-tab-item">
                                            <h3 className="w-100">{intl.formatMessage({ id: "jobs.title-left" })}</h3>
                                            <CheckedLine
                                                wrapClass="d-flex align-items-center"
                                                className="text-uppercase"
                                                text={intl.formatMessage({ id: "jobs.fe.check-left-1" })}
                                                imageAlt={intl.formatMessage({ id: "img-alt.check" })}
                                            />
                                            <CheckedLine
                                                wrapClass="d-flex align-items-center"
                                                className="text-uppercase"
                                                text={intl.formatMessage({ id: "jobs.fe.check-left-2" })}
                                                imageAlt={intl.formatMessage({ id: "img-alt.check" })}
                                            />
                                            <CheckedLine
                                                wrapClass="d-flex align-items-center"
                                                className="text-uppercase"
                                                text={intl.formatMessage({ id: "jobs.fe.check-left-3" })}
                                                imageAlt={intl.formatMessage({ id: "img-alt.check" })}
                                            />
                                            <CheckedLine
                                                wrapClass="d-flex align-items-center"
                                                className="text-uppercase"
                                                text={intl.formatMessage({ id: "jobs.fe.check-left-4" })}
                                                imageAlt={intl.formatMessage({ id: "img-alt.check" })}
                                            />
                                        </section>

                                        <section className="jobs-tab-item">
                                            <h3 className="w-100">{intl.formatMessage({ id: "jobs.title-right" })}</h3>
                                            <CheckedLine
                                                wrapClass="d-flex align-items-center"
                                                className="text-uppercase"
                                                text={intl.formatMessage({ id: "jobs.fe.check-right-1" })}
                                                imageAlt={intl.formatMessage({ id: "img-alt.check" })}
                                            />
                                            <CheckedLine
                                                wrapClass="d-flex align-items-center"
                                                className="text-uppercase"
                                                text={intl.formatMessage({ id: "jobs.fe.check-right-2" })}
                                                imageAlt={intl.formatMessage({ id: "img-alt.check" })}
                                            />
                                            <CheckedLine
                                                wrapClass="d-flex align-items-center"
                                                className="text-uppercase"
                                                text={intl.formatMessage({ id: "jobs.fe.check-right-3" })}
                                                imageAlt={intl.formatMessage({ id: "img-alt.check" })}
                                            />
                                            <CheckedLine
                                                wrapClass="d-flex align-items-center"
                                                className="text-uppercase"
                                                text={intl.formatMessage({ id: "jobs.fe.check-right-4" })}
                                                imageAlt={intl.formatMessage({ id: "img-alt.check" })}
                                            />
                                        </section>
                                    </section>
                                </Tab.Pane>

                                <Tab.Pane
                                    eventKey="jobs-csharp-tabs-content"
                                    id="jobs-csharp-tabs-content"
                                    aria-labelledby="jobs-nav-csharp-tabs"
                                >
                                    <SectionTitle
                                        className="w-100"
                                        title={intl.formatMessage({ id: "jobs.dotNet.title" })}
                                    />
                                    <p itemProp="text">
                                        {intl.formatMessage({ id: "jobs.dotNet.text" })}
                                    </p>
                                    <section
                                        className="d-flex flex-wrap justify-content-md-between justify-content-center"
                                    >
                                        <section className="jobs-tab-item">
                                            <h3 className="w-100">{intl.formatMessage({ id: "jobs.title-left" })}</h3>
                                            <CheckedLine
                                                wrapClass="d-flex align-items-center"
                                                className="text-uppercase"
                                                text={intl.formatMessage({ id: "jobs.dotNet.check-left-1" })}
                                                imageAlt={intl.formatMessage({ id: "img-alt.check" })}
                                            />
                                            <CheckedLine
                                                wrapClass="d-flex align-items-center"
                                                className="text-uppercase"
                                                text={intl.formatMessage({ id: "jobs.dotNet.check-left-2" })}
                                                imageAlt={intl.formatMessage({ id: "img-alt.check" })}
                                            />
                                            <CheckedLine
                                                wrapClass="d-flex align-items-center"
                                                className="text-uppercase"
                                                text={intl.formatMessage({ id: "jobs.dotNet.check-left-3" })}
                                                imageAlt={intl.formatMessage({ id: "img-alt.check" })}
                                            />
                                            <CheckedLine
                                                wrapClass="d-flex align-items-center"
                                                className="text-uppercase"
                                                text={intl.formatMessage({ id: "jobs.dotNet.check-left-4" })}
                                                imageAlt={intl.formatMessage({ id: "img-alt.check" })}
                                            />
                                        </section>

                                        <section className="jobs-tab-item">
                                            <h3 className="w-100">{intl.formatMessage({ id: "jobs.title-right" })}</h3>
                                            <CheckedLine
                                                wrapClass="d-flex align-items-center"
                                                className="text-uppercase"
                                                text={intl.formatMessage({ id: "jobs.dotNet.check-right-1" })}
                                                imageAlt={intl.formatMessage({ id: "img-alt.check" })}
                                            />
                                            <CheckedLine
                                                wrapClass="d-flex align-items-center"
                                                className="text-uppercase"
                                                text={intl.formatMessage({ id: "jobs.dotNet.check-right-2" })}
                                                imageAlt={intl.formatMessage({ id: "img-alt.check" })}
                                            />
                                            <CheckedLine
                                                wrapClass="d-flex align-items-center"
                                                className="text-uppercase"
                                                text={intl.formatMessage({ id: "jobs.dotNet.check-right-3" })}
                                                imageAlt={intl.formatMessage({ id: "img-alt.check" })}
                                            />
                                            <CheckedLine
                                                wrapClass="d-flex align-items-center"
                                                className="text-uppercase"
                                                text={intl.formatMessage({ id: "jobs.dotNet.check-right-4" })}
                                                imageAlt={intl.formatMessage({ id: "img-alt.check" })}
                                            />
                                        </section>
                                    </section>
                                </Tab.Pane>

                                <Tab.Pane
                                    eventKey="jobs-java-tabs-content"
                                    id="jobs-java-tabs-content"
                                    aria-labelledby="jobs-nav-java-tabs"
                                >
                                    <SectionTitle
                                        className="w-100"
                                        title={intl.formatMessage({ id: "jobs.java.title" })}
                                    />
                                    <p itemProp="text">
                                        {intl.formatMessage({ id: "jobs.java.text" })}
                                    </p>
                                    <section
                                        className="d-flex flex-wrap justify-content-md-between justify-content-center"
                                    >
                                        <section className="jobs-tab-item">
                                            <h3 className="w-100">{intl.formatMessage({ id: "jobs.title-left" })}</h3>
                                            <CheckedLine
                                                wrapClass="d-flex align-items-center"
                                                className="text-uppercase"
                                                text={intl.formatMessage({ id: "jobs.java.check-left-1" })}
                                                imageAlt={intl.formatMessage({ id: "img-alt.check" })}
                                            />
                                            <CheckedLine
                                                wrapClass="d-flex align-items-center"
                                                className="text-uppercase"
                                                text={intl.formatMessage({ id: "jobs.java.check-left-2" })}
                                                imageAlt={intl.formatMessage({ id: "img-alt.check" })}
                                            />
                                            <CheckedLine
                                                wrapClass="d-flex align-items-center"
                                                className="text-uppercase"
                                                text={intl.formatMessage({ id: "jobs.java.check-left-3" })}
                                                imageAlt={intl.formatMessage({ id: "img-alt.check" })}
                                            />
                                            <CheckedLine
                                                wrapClass="d-flex align-items-center"
                                                className="text-uppercase"
                                                text={intl.formatMessage({ id: "jobs.java.check-left-4" })}
                                                imageAlt={intl.formatMessage({ id: "img-alt.check" })}
                                            />
                                        </section>

                                        <section className="jobs-tab-item">
                                            <h3 className="w-100">{intl.formatMessage({ id: "jobs.title-right" })}</h3>
                                            <CheckedLine
                                                wrapClass="d-flex align-items-center"
                                                className="text-uppercase"
                                                text={intl.formatMessage({ id: "jobs.java.check-right-1" })}
                                                imageAlt={intl.formatMessage({ id: "img-alt.check" })}
                                            />
                                            <CheckedLine
                                                wrapClass="d-flex align-items-center"
                                                className="text-uppercase"
                                                text={intl.formatMessage({ id: "jobs.java.check-right-2" })}
                                                imageAlt={intl.formatMessage({ id: "img-alt.check" })}
                                            />
                                            <CheckedLine
                                                wrapClass="d-flex align-items-center"
                                                className="text-uppercase"
                                                text={intl.formatMessage({ id: "jobs.java.check-right-3" })}
                                                imageAlt={intl.formatMessage({ id: "img-alt.check" })}
                                            />
                                            <CheckedLine
                                                wrapClass="d-flex align-items-center"
                                                className="text-uppercase"
                                                text={intl.formatMessage({ id: "jobs.java.check-right-4" })}
                                                imageAlt={intl.formatMessage({ id: "img-alt.check" })}
                                            />
                                        </section>
                                    </section>
                                </Tab.Pane>

                                <Tab.Pane
                                    eventKey="jobs-unity-tabs-content"
                                    id="jobs-unity-tabs-content"
                                    aria-labelledby="jobs-nav-unity-tabs"
                                >
                                    <SectionTitle
                                        className="w-100"
                                        title={intl.formatMessage({ id: "jobs.unity.title" })}
                                    />
                                    <p itemProp="text">
                                        {intl.formatMessage({ id: "jobs.unity.text" })}
                                    </p>
                                    <section
                                        className="d-flex flex-wrap justify-content-md-between justify-content-center"
                                    >
                                        <section className="jobs-tab-item">
                                            <h3 className="w-100">{intl.formatMessage({ id: "jobs.title-left" })}</h3>
                                            <CheckedLine
                                                wrapClass="d-flex align-items-center"
                                                className="text-uppercase"
                                                text={intl.formatMessage({ id: "jobs.unity.check-left-1" })}
                                                imageAlt={intl.formatMessage({ id: "img-alt.check" })}
                                            />
                                            <CheckedLine
                                                wrapClass="d-flex align-items-center"
                                                className="text-uppercase"
                                                text={intl.formatMessage({ id: "jobs.unity.check-left-2" })}
                                                imageAlt={intl.formatMessage({ id: "img-alt.check" })}
                                            />
                                            <CheckedLine
                                                wrapClass="d-flex align-items-center"
                                                className="text-uppercase"
                                                text={intl.formatMessage({ id: "jobs.unity.check-left-3" })}
                                                imageAlt={intl.formatMessage({ id: "img-alt.check" })}
                                            />
                                            <CheckedLine
                                                wrapClass="d-flex align-items-center"
                                                className="text-uppercase"
                                                text={intl.formatMessage({ id: "jobs.unity.check-left-4" })}
                                                imageAlt={intl.formatMessage({ id: "img-alt.check" })}
                                            />
                                        </section>

                                        <section className="jobs-tab-item">
                                            <h3 className="w-100">{intl.formatMessage({ id: "jobs.title-right" })}</h3>
                                            <CheckedLine
                                                wrapClass="d-flex align-items-center"
                                                className="text-uppercase"
                                                text={intl.formatMessage({ id: "jobs.unity.check-right-1" })}
                                                imageAlt={intl.formatMessage({ id: "img-alt.check" })}
                                            />
                                            <CheckedLine
                                                wrapClass="d-flex align-items-center"
                                                className="text-uppercase"
                                                text={intl.formatMessage({ id: "jobs.unity.check-right-2" })}
                                                imageAlt={intl.formatMessage({ id: "img-alt.check" })}
                                            />
                                            <CheckedLine
                                                wrapClass="d-flex align-items-center"
                                                className="text-uppercase"
                                                text={intl.formatMessage({ id: "jobs.unity.check-right-3" })}
                                                imageAlt={intl.formatMessage({ id: "img-alt.check" })}
                                            />
                                            <CheckedLine
                                                wrapClass="d-flex align-items-center"
                                                className="text-uppercase"
                                                text={intl.formatMessage({ id: "jobs.unity.check-right-4" })}
                                                imageAlt={intl.formatMessage({ id: "img-alt.check" })}
                                            />
                                        </section>
                                    </section>
                                </Tab.Pane>
                            </Tab.Content>
                        </div>
                    </div>
                </Tab.Container>
            </section>

            {/* Benefits */}
            <section className="blue-box-wrapper text-white">
                <div className="container">
                    <div className="row justify-content-md-between justify-content-center">
                        <SectionTitle
                            className="w-100 text-center text-white"
                            dataAos="zoom-in"
                            dataAosDuration="1100"
                            dataAosOffset="0"
                            title={intl.formatMessage({ id: "jobs.benefits.title" })}
                        />
                        <ConceptBox
                            sectionWrapClass="blue-box-item"
                            dataAos="fade-left"
                            dataAosDuration="1200"
                            dataAosDelay="400"
                            conceptBoxImg={ImageConceptBox1}
                            conceptBoxImgAlt={intl.formatMessage({ id: "jobs.benefits.box1-img-alt" })}
                            titleClass="text-white"
                            conceptBoxTitle={intl.formatMessage({ id: "jobs.benefits.box1-title" })}
                            itemProp="text"
                            conceptBoxDescriptionPart1={intl.formatMessage({ id: "jobs.benefits.box1-text" })}
                            conceptBoxDescriptionLink=" "
                            conceptBoxLink=" "
                            conceptBoxBtnText=" "
                        />
                        <ConceptBox
                            sectionWrapClass="blue-box-item"
                            dataAos="fade-left"
                            dataAosDuration="1200"
                            dataAosDelay="700"
                            conceptBoxImg={ImageConceptBox2}
                            conceptBoxImgAlt={intl.formatMessage({ id: "jobs.benefits.box2-img-alt" })}
                            titleClass="text-white"
                            conceptBoxTitle={intl.formatMessage({ id: "jobs.benefits.box2-title" })}
                            itemProp="text"
                            conceptBoxDescriptionPart1={intl.formatMessage({ id: "jobs.benefits.box2-text" })}
                            conceptBoxDescriptionLink=" "
                            conceptBoxLink=" "
                            conceptBoxBtnText=" "
                        />
                        <ConceptBox
                            sectionWrapClass="blue-box-item"
                            dataAos="fade-left"
                            dataAosDuration="1200"
                            dataAosDelay="1000"
                            conceptBoxImg={ImageConceptBox3}
                            conceptBoxImgAlt={intl.formatMessage({ id: "jobs.benefits.box3-img-alt" })}
                            titleClass="text-white"
                            conceptBoxTitle={intl.formatMessage({ id: "jobs.benefits.box3-title" })}
                            itemProp="text"
                            conceptBoxDescriptionPart1={intl.formatMessage({ id: "jobs.benefits.box3-text" })}
                            conceptBoxDescriptionLink=" "
                            conceptBoxLink=" "
                            conceptBoxBtnText=" "
                        />
                        <ConceptBox
                            sectionWrapClass="blue-box-item"
                            dataAos="fade-left"
                            dataAosDuration="1200"
                            dataAosDelay="1300"
                            conceptBoxImg={ImageConceptBox4}
                            conceptBoxImgAlt={intl.formatMessage({ id: "jobs.benefits.box4-img-alt" })}
                            titleClass="text-white"
                            conceptBoxTitle={intl.formatMessage({ id: "jobs.benefits.box4-title" })}
                            itemProp="text"
                            conceptBoxDescriptionPart1={intl.formatMessage({ id: "jobs.benefits.box4-text" })}
                            conceptBoxDescriptionLink=" "
                            conceptBoxLink=" "
                            conceptBoxBtnText=" "
                        />
                    </div>
                </div>
            </section>

            {/* Jobs Description */}
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
                                title={intl.formatMessage({ id: "jobs.careers.title" })}
                            />
                            <p itemProp="text"> {intl.formatMessage({ id: "jobs.careers.text-1" })} </p>
                            <p itemProp="text"> {intl.formatMessage({ id: "jobs.careers.text-2" })} </p>
                        </section>
                        <section
                            className="mx-auto bg-color jobs-desc-item shadowing"
                            data-aos="zoom-in"
                            data-aos-duration="1100"
                            data-aos-delay="300"
                        >
                            <p itemProp="text"> {intl.formatMessage({ id: "jobs.careers.text-3" })} </p>
                        </section>

                        <section
                            className="mx-auto jobs-desc-item"
                            data-aos="zoom-in"
                            data-aos-duration="1100"
                            data-aos-delay="400"
                        >
                            <p itemProp="text"> {intl.formatMessage({ id: "jobs.careers.text-4" })} </p>
                        </section>

                        <section
                            className="mx-auto jobs-desc-item"
                            data-aos="zoom-in"
                            data-aos-duration="1100"
                            data-aos-delay="400"
                        >
                            <img
                                className="img-fluid"
                                src={ImageCareersJobs}
                                alt={intl.formatMessage({ id: "jobs.careers.img-alt" })}
                                itemProp="image"
                            />                            
                        </section>
                    </div>
                </div>
            </section>

            {/* Jobs Contact */}
            <section className="jobs-contact-wrapper bg-grey text-center">
                <div className="container-fluid">
                    <div className="row">
                        <section
                            className="col-md-8 mx-auto"
                            data-aos="fade-up"
                            data-aos-duration="1200"
                        >
                            <SectionTitle title={intl.formatMessage({ id: "jobs.contact.title" })} />
                            <p itemProp="text"> {intl.formatMessage({ id: "jobs.contact.text-1" })} </p>
                            <a
                                href="mailto:job@ingsoftware.com"
                                data-aos="zoom-in-up"
                                data-aos-easing="linear"
                            >
                                {intl.formatMessage({ id: "jobs.contact.mail" })}
                            </a>
                            <p itemProp="text"> {intl.formatMessage({ id: "jobs.contact.text-2" })} </p>
                        </section>
                    </div>
                </div>
            </section>

            <CtaSection text={intl.formatMessage({ id: "button.get-started" })} />
            </main>
        </Layout>
    )
}
export default injectIntl(careers)