import React from "react"
import { Link } from "gatsby"
import { injectIntl } from "gatsby-plugin-intl"

import AppItem from "../components/appItem"
import SEO from "../components/seo"
import CtaSection from "../components/cta"
import Headline from "../components/headline"
import ImageComponent from "../components/imageComponent"
import Layout from "../components/layout"
import ConceptBox from "../components/conceptBox"

import ImageHeader from "../images/cards/skinny-6.png"
import ImageMeta from "../images/og-images/og-software-development.jpg"
import ImageAppItem1 from "../images/cards/skinny-7.png"
import ImageAppItem3 from "../images/cards/skinny-8.png"
import ImageAppItem2 from "../images/cards/skinny-9.png"
import ImageCircleCheckmark from "../images/icons/circle-checkmark.svg"
import ImageTech1 from "../images/icons/glyph-1.svg"
import ImageTech2 from "../images/icons/mobile.svg"
import ImageTech3 from "../images/icons/back-end.svg"
import ImageTech4 from "../images/icons/storage.svg"
import ImageTech5 from "../images/icons/infrastructure.svg"

import "../styles/pages/how-we-do-it/software-development.scss"


const softwareDevelopment = ({ intl }) => {
    return (
        <Layout>
            <main>
            <SEO
                title={intl.formatMessage({ id: "how-we-do-it.software-development.meta.title" })}
                description={intl.formatMessage({ id: "how-we-do-it.software-development.meta.description" })}
                link={intl.formatMessage({ id: "how-we-do-it.software-development.meta.link" })}
                image={ImageMeta}
            />

            <Headline
                wrapperClasses="d-flex flex-wrap align-items-center dev-wrapper-headline ing-headline"
                innerWrapClasses="pl-md-0 col-md-6 col-12 align-self-center mt-md-0 mt-3 js-parallax-text"
                title={intl.formatMessage({ id: "how-we-do-it.software-development.main-heading" })}
                description={intl.formatMessage({ id: "how-we-do-it.software-development.heading" })}
                link={intl.formatMessage({ id: "how-we-do-it.software-development.meta.link" })}
                imgWrapClasses="col-md-6 col-12 text-center position-relative"
                imgClasses="img-fluid js-parallax-image"
                img={ImageHeader}
                imgAlt={intl.formatMessage({ id: "how-we-do-it.software-development.heading-img-alt" })}
            />
            <div className="d-none">
                <ImageComponent />
            </div>

            <section className="position-relative blue-bg-gradient dev-ing-text">
                <div className="container">
                    <div className="row text-center">
                        <p className="w-100" itemProp="text">
                            {intl.formatMessage({ id: "how-we-do-it.software-development.ing-text-part1" })}
                            <br />
                            {intl.formatMessage({ id: "how-we-do-it.software-development.ing-text-part2" })}
                            <br />
                            {intl.formatMessage({ id: "how-we-do-it.software-development.ing-text-part3" })}
                        </p>
                    </div>
                </div>
            </section>

            {/* Ing Expertise */}
            <section className="position-relative bg-color ing-app-expertise">
                <div className="container">
                    <div className="row justify-content-lg-between justify-content-md-around justify-content-center">
                        <AppItem
                            dataAosDuration="1200"
                            dataAosDelay=""
                            img={ImageAppItem1}
                            imgAlt={intl.formatMessage({ id: "how-we-do-it.software-development.ing-expertise.app-item-1-img-alt" })}
                            title={intl.formatMessage({ id: "how-we-do-it.software-development.ing-expertise.app-item-1-title" })}
                            text={intl.formatMessage({ id: "how-we-do-it.software-development.ing-expertise.app-item-1-text" })}
                            checkAlt={intl.formatMessage({ id: "img-alt.check" })}
                            check1={intl.formatMessage({ id: "how-we-do-it.software-development.ing-expertise.app-item-1-check1" })}
                            check2={intl.formatMessage({ id: "how-we-do-it.software-development.ing-expertise.app-item-1-check2" })}
                            check3={intl.formatMessage({ id: "how-we-do-it.software-development.ing-expertise.app-item-1-check3" })}
                        />
                        <AppItem
                            dataAosDuration="1400"
                            dataAosDelay="500"
                            img={ImageAppItem2}
                            imgAlt={intl.formatMessage({ id: "how-we-do-it.software-development.ing-expertise.app-item-2-img-alt" })}
                            title={intl.formatMessage({ id: "how-we-do-it.software-development.ing-expertise.app-item-2-title" })}
                            text={intl.formatMessage({ id: "how-we-do-it.software-development.ing-expertise.app-item-2-text" })}
                            checkAlt={intl.formatMessage({ id: "img-alt.check" })}
                            check1={intl.formatMessage({ id: "how-we-do-it.software-development.ing-expertise.app-item-2-check1" })}
                            check2={intl.formatMessage({ id: "how-we-do-it.software-development.ing-expertise.app-item-2-check2" })}
                            check3={intl.formatMessage({ id: "how-we-do-it.software-development.ing-expertise.app-item-2-check3" })}
                        />
                        <AppItem
                            dataAosDuration="1500"
                            dataAosDelay="800"
                            img={ImageAppItem3}
                            imgAlt={intl.formatMessage({ id: "how-we-do-it.software-development.ing-expertise.app-item-3-img-alt" })}
                            title={intl.formatMessage({ id: "how-we-do-it.software-development.ing-expertise.app-item-3-title" })}
                            text={intl.formatMessage({ id: "how-we-do-it.software-development.ing-expertise.app-item-3-text" })}
                            checkAlt={intl.formatMessage({ id: "img-alt.check" })}
                            check1={intl.formatMessage({ id: "how-we-do-it.software-development.ing-expertise.app-item-3-check1" })}
                            check2={intl.formatMessage({ id: "how-we-do-it.software-development.ing-expertise.app-item-3-check2" })}
                            check3={intl.formatMessage({ id: "how-we-do-it.software-development.ing-expertise.app-item-3-check3" })}
                        />
                    </div>
                </div>
            </section>

            {/* Get Started */}
            <div className="container-fluid">
                <div className="row justify-content-center align-items-center bg-grey grey-get-started">
                    <h2
                        className="w-100 text-center"
                        itemProp="text"
                        data-aos="zoom-in"
                        data-aos-duration="1200"
                    >
                        {intl.formatMessage({ id: "how-we-do-it.software-development.get-started.text-q" })}
                        <br />
                        {intl.formatMessage({ id: "how-we-do-it.software-development.get-started.text-a" })}
                    </h2>
                    <div data-aos="zoom-in" data-aos-duration="1200" className="pb-md-0 pb-4">
                        <Link to="/contact" className="text-uppercase buttons btn-red js-dev-get-started-now">
                            {intl.formatMessage({ id: "button.get-started" })}
                        </Link>
                    </div>
                </div>
            </div>

            {/* Software Growth */}
            <section className="software-growth-wrapper">
                <div className="container">
                    <div className="row justify-content-md-between justify-content-center">
                        <div
                            className="text-center"
                            data-aos="fade-up"
                            data-aos-duration="1200"
                        >
                            <h2 itemProp="text">{intl.formatMessage({ id: "how-we-do-it.software-development.software-growth.title" })}</h2>
                            <p className="w-75 mx-auto" itemProp="text">
                                {intl.formatMessage({ id: "how-we-do-it.software-development.software-growth.text" })}
                            </p>
                        </div>

                        <ConceptBox
                            sectionWrapClass="d-flex flex-row flex-wrap software-growth-item"
                            dataAos="fade-up"
                            dataAosDuration="1300"
                            dataAosDelay="500"
                            sectionItemProp=""
                            upperWrapClass="d-flex"
                            conceptBoxImg={ImageCircleCheckmark}
                            conceptBoxImgAlt={intl.formatMessage({ id: "img-alt.circle-check" })}
                            titleClass="text-uppercase"
                            conceptBoxTitle={intl.formatMessage({ id: "how-we-do-it.software-development.software-growth.box-1-title" })}
                            itemProp="text"
                            conceptBoxDescriptionPart1={intl.formatMessage({ id: "how-we-do-it.software-development.software-growth.box-1-text-1" })}
                            conceptBoxDescriptionLink={intl.formatMessage({ id: "how-we-do-it.software-development.software-growth.box-1-text-link" })}
                            conceptBoxDescriptionLinkText={intl.formatMessage({ id: "how-we-do-it.software-development.software-growth.box-1-text-link-text" })}
                            conceptBoxDescriptionPart2={intl.formatMessage({ id: "how-we-do-it.software-development.software-growth.box-1-text-2" })}
                            conceptBoxBtnText=" "
                        />
                        <ConceptBox
                            sectionWrapClass="d-flex flex-row flex-wrap software-growth-item"
                            dataAos="fade-up"
                            dataAosDuration="1400"
                            dataAosDelay="700"
                            sectionItemProp=""
                            upperWrapClass="d-flex"
                            conceptBoxImg={ImageCircleCheckmark}
                            conceptBoxImgAlt={intl.formatMessage({ id: "img-alt.circle-check" })}
                            titleClass="text-uppercase"
                            conceptBoxTitle={intl.formatMessage({ id: "how-we-do-it.software-development.software-growth.box-3-title" })}
                            itemProp="text"
                            conceptBoxDescriptionPart1={intl.formatMessage({ id: "how-we-do-it.software-development.software-growth.box-3-text-1" })}
                            conceptBoxDescriptionLink={intl.formatMessage({ id: "how-we-do-it.software-development.software-growth.box-3-text-link" })}
                            conceptBoxDescriptionLinkText={intl.formatMessage({ id: "how-we-do-it.software-development.software-growth.box-3-text-link-text" })}
                            conceptBoxDescriptionPart2={intl.formatMessage({ id: "how-we-do-it.software-development.software-growth.box-3-text-2" })}
                            conceptBoxBtnText=" "
                        />
                        <ConceptBox
                            sectionWrapClass="d-flex flex-row flex-wrap align-self-baseline software-growth-item"
                            dataAos="fade-up"
                            dataAosDuration="1300"
                            dataAosDelay="600"
                            sectionItemProp=""
                            upperWrapClass="d-flex"
                            conceptBoxImg={ImageCircleCheckmark}
                            conceptBoxImgAlt={intl.formatMessage({ id: "img-alt.circle-check" })}
                            titleClass="text-uppercase"
                            conceptBoxTitle={intl.formatMessage({ id: "how-we-do-it.software-development.software-growth.box-2-title" })}
                            itemProp="text"
                            conceptBoxDescriptionPart1={intl.formatMessage({ id: "how-we-do-it.software-development.software-growth.box-2-text-1" })}
                            conceptBoxDescriptionLink={intl.formatMessage({ id: "how-we-do-it.software-development.software-growth.box-2-text-link" })}
                            conceptBoxDescriptionLinkText={intl.formatMessage({ id: "how-we-do-it.software-development.software-growth.box-2-text-link-text" })}
                            conceptBoxDescriptionPart2={intl.formatMessage({ id: "how-we-do-it.software-development.software-growth.box-2-text-2" })}
                            conceptBoxBtnText=" "
                        />
                        <ConceptBox
                            sectionWrapClass="d-flex flex-row flex-wrap software-growth-item"
                            dataAos="fade-up"
                            dataAosDuration="1400"
                            dataAosDelay="800"
                            sectionItemProp=""
                            upperWrapClass="d-flex"
                            conceptBoxImg={ImageCircleCheckmark}
                            conceptBoxImgAlt={intl.formatMessage({ id: "img-alt.circle-check" })}
                            titleClass="text-uppercase"
                            conceptBoxTitle={intl.formatMessage({ id: "how-we-do-it.software-development.software-growth.box-4-title" })}
                            itemProp="text"
                            conceptBoxDescriptionPart1={intl.formatMessage({ id: "how-we-do-it.software-development.software-growth.box-4-text-1" })}
                            conceptBoxDescriptionLink={intl.formatMessage({ id: "how-we-do-it.software-development.software-growth.box-4-text-link" })}
                            conceptBoxDescriptionLinkText={intl.formatMessage({ id: "how-we-do-it.software-development.software-growth.box-4-text-link-text" })}
                            conceptBoxDescriptionPart2={intl.formatMessage({ id: "how-we-do-it.software-development.software-growth.box-4-text-2" })}
                            conceptBoxBtnText=" "
                        />
                    </div>
                </div>
            </section>

            <section className="blue-get-started-wrapper">
                <div className="container-fluid">
                    <div className="row justify-content-center align-items-center">
                        <h2
                            className="w-100 text-center text-white"
                            itemProp="text"
                            data-aos="zoom-in"
                            data-aos-duration="1200"
                        >
                            {intl.formatMessage({ id: "how-we-do-it.software-development.get-started-2.text-part1" })}
                            <br />
                            {intl.formatMessage({ id: "how-we-do-it.software-development.get-started-2.text-part2" })}
                        </h2>

                        <div
                            data-aos="zoom-in"
                            data-aos-duration="1200"
                            className="pb-md-0 pb-4"
                        >
                            <Link to="/contact" className="text-uppercase buttons btn-red">
                                {intl.formatMessage({ id: "button.get-started" })}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Ing Tech */}
            <section className="ing-tech-wrapper bg-color">
                <div className="container">
                    <div className="row justify-content-md-between justify-content-center">
                        <h2
                            className="w-100 text-center"
                            itemProp="text"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            {intl.formatMessage({ id: "how-we-do-it.software-development.ing-tech.title-part1" })}
                            <br />
                            {intl.formatMessage({ id: "how-we-do-it.software-development.ing-tech.title-part2" })}
                        </h2>

                        {/* Front End */}
                        <div
                            className="d-flex flex-row flex-wrap ing-tech-item"
                            data-aos="fade-up"
                            data-aos-duration="1100"
                            data-aos-delay="400"
                        >
                            <div>
                                <img src={ImageTech1} alt={intl.formatMessage({ id: "how-we-do-it.software-development.ing-tech.item-1-icon-alt" })} itemProp="image" />
                            </div>
                            <h3 className="w-100 text-uppercase position-relative" itemProp="text">
                                {intl.formatMessage({ id: "how-we-do-it.software-development.ing-tech.item-1-title" })}
                            </h3>
                            <p className="position-relative" itemProp="text">
                                <span className="text-uppercase">html5 </span>
                                <span className="rounded-circle">&#183;</span>
                                <span className="text-uppercase"> css3 </span>
                                <span className="rounded-circle">&#183;</span>
                                <span className="text-uppercase"> es6 </span>
                                <span className="rounded-circle">&#183;</span>
                                <span className="text-uppercase"> sass </span>
                                <span className="rounded-circle">&#183;</span>
                                <span> Bootstrap </span>
                                <span className="rounded-circle">&#183;</span>
                                <span> TypeScript </span>
                                <span className="rounded-circle">&#183;</span>
                                <span> Angular<span className="text-uppercase">js </span></span>
                                <span className="rounded-circle">&#183;</span>
                                <span> Angular </span>
                                <span className="rounded-circle">&#183;</span>
                                <span> React </span>
                                <span className="rounded-circle">&#183;</span>
                                <span> Vue.js </span>
                            </p>
                        </div>

                        {/* Mobile Front End */}
                        <div
                            className="d-flex flex-row flex-wrap ing-tech-item"
                            data-aos="fade-up"
                            data-aos-duration="1100"
                            data-aos-delay="500"
                        >
                            <div>
                                <img src={ImageTech2} alt={intl.formatMessage({ id: "how-we-do-it.software-development.ing-tech.item-2-icon-alt" })} itemProp="image" />
                            </div>
                            <h3 className="w-100 text-uppercase position-relative" itemProp="text">
                                {intl.formatMessage({ id: "how-we-do-it.software-development.ing-tech.item-2-title" })}
                            </h3>
                            <p className="position-relative" itemProp="text">
                                <span>Swift </span>
                                <span className="rounded-circle">&#183;</span>
                                <span> Objective-<span className="text-uppercase">c </span></span>
                                <span className="rounded-circle">&#183;</span>
                                <span> Java </span>
                                <span className="rounded-circle">&#183;</span>
                                <span> Xamarin </span>
                                <span className="rounded-circle">&#183;</span>
                                <span> React Native </span>
                            </p>
                        </div>

                        {/* Back End */}
                        <div
                            className="d-flex flex-row flex-wrap ing-tech-item"
                            data-aos="fade-up"
                            data-aos-duration="1200"
                            data-aos-delay="600"
                        >
                            <div>
                                <img src={ImageTech3} alt={intl.formatMessage({ id: "how-we-do-it.software-development.ing-tech.item-3-icon-alt" })} itemProp="image" />
                            </div>
                            <h3 className="w-100 text-uppercase position-relative" itemProp="text">
                                {intl.formatMessage({ id: "how-we-do-it.software-development.ing-tech.item-3-title" })}
                            </h3>
                            <p className="position-relative" itemProp="text">
                                <span>.Net </span>
                                <span className="rounded-circle">&#183;</span>
                                <span> Java </span>
                                <span className="rounded-circle">&#183;</span>
                                <span className="text-uppercase"> php </span>
                                <span className="rounded-circle">&#183;</span>
                                <span> Node.js </span>
                            </p>
                        </div>

                        {/* Data Storage */}
                        <div
                            className="d-flex flex-row flex-wrap ing-tech-item"
                            data-aos="fade-up"
                            data-aos-duration="1200"
                            data-aos-delay="700"
                        >
                            <div>
                                <img src={ImageTech4} alt={intl.formatMessage({ id: "how-we-do-it.software-development.ing-tech.item-4-icon-alt" })} itemProp="image" />
                            </div>
                            <h3 className="w-100 text-uppercase position-relative" itemProp="text">
                                {intl.formatMessage({ id: "how-we-do-it.software-development.ing-tech.item-4-title" })}
                            </h3>
                            <p className="position-relative" itemProp="text">
                                <span className="text-uppercase">ms sql </span>
                                <span className="rounded-circle">&#183;</span>
                                <span> My <span className="text-uppercase">sql </span></span>
                                <span className="rounded-circle">&#183;</span>
                                <span> Postgre <span className="text-uppercase">sql </span></span>
                                <span className="rounded-circle">&#183;</span>
                                <span> Elasticsearch </span>
                                <span className="rounded-circle">&#183;</span>
                                <span> Redis </span>
                                <span className="rounded-circle">&#183;</span>
                                <span> Kafka </span>
                                <span className="rounded-circle">&#183;</span>
                                <span> Oracle <span className="text-uppercase">js </span></span>
                                <span className="rounded-circle">&#183;</span>
                                <span> Mongo <span className="text-uppercase">db</span></span>
                            </p>
                        </div>

                        {/* Infrastructure */}
                        <div
                            className="d-flex flex-row flex-wrap ing-tech-item"
                            data-aos="fade-up"
                            data-aos-duration="1300"
                            data-aos-delay="800"
                        >
                            <div>
                                <img src={ImageTech5} alt={intl.formatMessage({ id: "how-we-do-it.software-development.ing-tech.item-5-icon-alt" })} itemProp="image" />
                            </div>
                            <h3 className="w-100 text-uppercase position-relative" itemProp="text">
                                {intl.formatMessage({ id: "how-we-do-it.software-development.ing-tech.item-5-title" })}
                            </h3>
                            <p className="position-relative" itemProp="text">
                                <span>Amazon Web Services </span>
                                <span className="rounded-circle">&#183;</span>
                                <span> Azure </span>
                                <span className="rounded-circle">&#183;</span>
                                <span> Google Cloud Platform</span>
                            </p>
                        </div>
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
export default injectIntl(softwareDevelopment)