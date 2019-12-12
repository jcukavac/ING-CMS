import React from "react"
import { injectIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Headline from "../components/headline"
import ImageComponent from "../components/imageComponent"
import SectionTitle from "../components/sectionTitle"
import Qbox from "../components/Qbox"
import SmallBoxWithCheckIcon from "../components/smallBoxWithCheckIcon"
import ConceptBox from "../components/conceptBox"
import CtaSection from "../components/cta"

import ImageHeader from "../images/cards/skinny-4.png"
import ImageMeta from "../images/og-images/og-software-prototyping.jpg"
import ImageConceptBox1 from "../images/icons/requirements.svg"
import ImageConceptBox2 from "../images/icons/wireframes.svg"
import ImageConceptBox3 from "../images/icons/mockups.svg"
import ImageConceptBox4 from "../images/icons/timer.svg"
import ImageConceptBox5 from "../images/icons/visual.svg"

import "../styles/pages/how-we-do-it/software-prototyping.scss"


const softwarePrototyping = ({ intl }) => {
    return (
        <Layout>
            <main>
            <SEO
                title={intl.formatMessage({ id: "how-we-do-it.software-prototyping.meta.title" })}
                description={intl.formatMessage({ id: "how-we-do-it.software-prototyping.meta.description" })}
                link={intl.formatMessage({ id: "how-we-do-it.software-prototyping.meta.link" })}
                image={ImageMeta}
            />

            <Headline
                wrapperClasses="proto-wrapper-headline ing-headline"
                innerWrapClasses="pl-md-0 col-md-6 col-12 align-self-center mt-md-0 mt-3 js-parallax-text"
                title={intl.formatMessage({ id: "how-we-do-it.software-prototyping.main-heading" })}
                description={intl.formatMessage({ id: "how-we-do-it.software-prototyping.heading" })}
                link={intl.formatMessage({ id: "how-we-do-it.software-prototyping.meta.link" })}
                imgWrapClasses="col-md-6 col-12 text-center  mb-md-0 mb-4"
                imgClasses="img-fluid js-parallax-image"
                img={ImageHeader}
                imgAlt={intl.formatMessage({ id: "how-we-do-it.software-prototyping.heading-img-alt" })}
            />
            <div className="d-none">
                <ImageComponent />
            </div>

            {/* Proto Knowledge */}
            <section className="position-relative proto-wrapper-knowledge blue-bg-gradient text-white">
                <div className="container">
                    <div className="row justify-content-md-between justify-content-center">
                        <SectionTitle
                            className="w-100 text-center text-white"
                            dataAos="fade-up"
                            dataAosDuration="1100"
                            title={intl.formatMessage({ id: "how-we-do-it.software-prototyping.proto-knowledge.title" })}
                        />
                        <p
                            className="w-100 text-center"
                            itemProp="text"
                            data-aos="fade-up"
                            data-aos-offset="50"
                            data-aos-duration="1100"
                            data-aos-delay="300"
                        >
                            {intl.formatMessage({ id: "how-we-do-it.software-prototyping.proto-knowledge.text" })}
                        </p>
                        <Qbox 
                            dataAosDelay="400"
                            ImageQuestionMarkAlt={intl.formatMessage({ id: "how-we-do-it.software-prototyping.proto-knowledge.icon-alt" })}
                            question={intl.formatMessage({ id: "how-we-do-it.software-prototyping.proto-knowledge.q-1" })}
                        />
                        <Qbox 
                            dataAosDelay="500"
                            ImageQuestionMarkAlt={intl.formatMessage({ id: "how-we-do-it.software-prototyping.proto-knowledge.icon-alt" })}
                            question={intl.formatMessage({ id: "how-we-do-it.software-prototyping.proto-knowledge.q-2" })}
                        />
                        <Qbox 
                            dataAosDelay="550"
                            ImageQuestionMarkAlt={intl.formatMessage({ id: "how-we-do-it.software-prototyping.proto-knowledge.icon-alt" })}
                            question={intl.formatMessage({ id: "how-we-do-it.software-prototyping.proto-knowledge.q-3" })}
                        />
                        <Qbox 
                            dataAosDelay="600"
                            ImageQuestionMarkAlt={intl.formatMessage({ id: "how-we-do-it.software-prototyping.proto-knowledge.icon-alt" })}
                            question={intl.formatMessage({ id: "how-we-do-it.software-prototyping.proto-knowledge.q-4" })}
                        />
                        <p
                            className="w-75 text-center"
                            itemProp="text"
                            data-aos="fade-up"
                            data-aos-duration="1200"
                            data-aos-delay="650"
                            data-aos-offset="50"
                        >
                            {intl.formatMessage({ id: "how-we-do-it.software-prototyping.proto-knowledge.text-2" })}
                        </p>
                    </div>
                </div>
            </section>

            {/* Proto Helps */}
            <section className="proto-wrapper-helps">
                <div className="container">
                    <div className="row align-items-center justify-content-lg-between justify-content-sm-around justify-content-center">
                        <SectionTitle
                            className="w-100 text-center"
                            dataAos="zoom-in"
                            dataAosDuration="1300"
                            title={intl.formatMessage({ id: "how-we-do-it.software-prototyping.proto-helps.title" })}
                        />
                        <SmallBoxWithCheckIcon 
                            dataAosDelay="400"
                            imgAlt={intl.formatMessage({ id: "how-we-do-it.software-prototyping.proto-helps.icon-alt" })}
                            text1={intl.formatMessage({ id: "how-we-do-it.software-prototyping.proto-helps.box-1-1" })}
                            text2={intl.formatMessage({ id: "how-we-do-it.software-prototyping.proto-helps.box-1-2" })}
                        />
                        <SmallBoxWithCheckIcon 
                            dataAosDelay="800"
                            imgAlt={intl.formatMessage({ id: "how-we-do-it.software-prototyping.proto-helps.icon-alt" })}
                            text1={intl.formatMessage({ id: "how-we-do-it.software-prototyping.proto-helps.box-2-1" })}
                            text2={intl.formatMessage({ id: "how-we-do-it.software-prototyping.proto-helps.box-2-2" })}
                        />
                        <SmallBoxWithCheckIcon 
                            dataAosDelay="1200"
                            imgAlt={intl.formatMessage({ id: "how-we-do-it.software-prototyping.proto-helps.icon-alt" })}
                            text1={intl.formatMessage({ id: "how-we-do-it.software-prototyping.proto-helps.box-3-1" })}
                            text2={intl.formatMessage({ id: "how-we-do-it.software-prototyping.proto-helps.box-3-2" })}
                        />
                    </div>
                </div>
            </section>

            {/* Proto Project */}
            <section className="proto-wrapper-project">
                <div className="container">
                    <div className="row align-items-center justify-content-md-between justify-content-sm-around justify-content-center">
                        <SectionTitle
                            className="w-100 text-center"
                            itemProp="text"
                            dataAos="zoom-in"
                            dataAosDuration="1100"
                            title={intl.formatMessage({ id: "how-we-do-it.software-prototyping.proto-project.title" })}
                        />
                        <p
                            className="w-100 text-center"
                            itemProp="text"
                            data-aos="zoom-in"
                            data-aos-duration="1100"
                            data-aos-delay="100"
                        >
                            {intl.formatMessage({ id: "how-we-do-it.software-prototyping.proto-project.text-1-1" })}
                            <br/>
                            {intl.formatMessage({ id: "how-we-do-it.software-prototyping.proto-project.text-1-2" })}
                        </p>

                        <ConceptBox
                            sectionWrapClass=""
                            dataAos="zoom-in"
                            dataAosDuration="1200"
                            dataAosDelay="300"
                            sectionItemProp=""
                            conceptBoxImg={ImageConceptBox1}
                            conceptBoxImgAlt={intl.formatMessage({ id: "how-we-do-it.software-prototyping.proto-project.box-1-icon-alt" })}
                            conceptBoxTitle={intl.formatMessage({ id: "how-we-do-it.software-prototyping.proto-project.box-1-title" })}
                            itemProp="text"
                            conceptBoxDescriptionPart1={intl.formatMessage({ id: "how-we-do-it.software-prototyping.proto-project.box-1-text" })}
                            conceptBoxDescriptionLink=" "
                            conceptBoxBtnText=" "
                        />
                        <ConceptBox
                            sectionWrapClass=""
                            dataAos="zoom-in"
                            dataAosDuration="1300"
                            dataAosDelay="500"
                            sectionItemProp=""
                            conceptBoxImg={ImageConceptBox2}
                            conceptBoxImgAlt={intl.formatMessage({ id: "how-we-do-it.software-prototyping.proto-project.box-2-icon-alt" })}
                            conceptBoxTitle={intl.formatMessage({ id: "how-we-do-it.software-prototyping.proto-project.box-2-title" })}
                            itemProp="text"
                            conceptBoxDescriptionPart1={intl.formatMessage({ id: "how-we-do-it.software-prototyping.proto-project.box-2-text" })}
                            conceptBoxDescriptionLink=" "
                            conceptBoxBtnText=" "
                        />
                        <ConceptBox
                            sectionWrapClass=""
                            dataAos="zoom-in"
                            dataAosDuration="1400"
                            dataAosDelay="700"
                            sectionItemProp=""
                            conceptBoxImg={ImageConceptBox3}
                            conceptBoxImgAlt={intl.formatMessage({ id: "how-we-do-it.software-prototyping.proto-project.box-3-icon-alt" })}
                            conceptBoxTitle={intl.formatMessage({ id: "how-we-do-it.software-prototyping.proto-project.box-3-title" })}
                            itemProp="text"
                            conceptBoxDescriptionPart1={intl.formatMessage({ id: "how-we-do-it.software-prototyping.proto-project.box-3-text" })}
                            conceptBoxDescriptionLink=" "
                            conceptBoxBtnText=" "
                        />
                        <ConceptBox
                            sectionWrapClass=""
                            dataAos="zoom-in"
                            dataAosDuration="1500"
                            dataAosDelay="800"
                            sectionItemProp=""
                            conceptBoxImg={ImageConceptBox4}
                            conceptBoxImgAlt={intl.formatMessage({ id: "how-we-do-it.software-prototyping.proto-project.box-4-icon-alt" })}
                            conceptBoxTitle={intl.formatMessage({ id: "how-we-do-it.software-prototyping.proto-project.box-4-title" })}
                            itemProp="text"
                            conceptBoxDescriptionPart1={intl.formatMessage({ id: "how-we-do-it.software-prototyping.proto-project.box-4-text-1" })}
                            conceptBoxDescriptionLink={intl.formatMessage({ id: "how-we-do-it.software-prototyping.proto-project.box-4-text-link" })}
                            conceptBoxDescriptionLinkText={intl.formatMessage({ id: "how-we-do-it.software-prototyping.proto-project.box-4-text-link-text" })}
                            conceptBoxDescriptionPart2={intl.formatMessage({ id: "how-we-do-it.software-prototyping.proto-project.box-4-text-2" })}
                            conceptBoxBtnText=" "
                        />
                        <ConceptBox
                            sectionWrapClass=""
                            dataAos="zoom-in"
                            dataAosDuration="1600"
                            dataAosDelay="900"
                            sectionItemProp=""
                            conceptBoxImg={ImageConceptBox5}
                            conceptBoxImgAlt={intl.formatMessage({ id: "how-we-do-it.software-prototyping.proto-project.box-5-icon-alt" })}
                            conceptBoxTitle={intl.formatMessage({ id: "how-we-do-it.software-prototyping.proto-project.box-5-title" })}
                            itemProp="text"
                            conceptBoxDescriptionPart1={intl.formatMessage({ id: "how-we-do-it.software-prototyping.proto-project.box-5-text-1" })}
                            conceptBoxDescriptionLink={intl.formatMessage({ id: "how-we-do-it.software-prototyping.proto-project.box-5-text-link" })}
                            conceptBoxDescriptionLinkText={intl.formatMessage({ id: "how-we-do-it.software-prototyping.proto-project.box-5-text-link-text" })}
                            conceptBoxDescriptionPart2={intl.formatMessage({ id: "how-we-do-it.software-prototyping.proto-project.box-5-text-2" })}
                            conceptBoxBtnText=" "
                        />
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
export default injectIntl(softwarePrototyping)