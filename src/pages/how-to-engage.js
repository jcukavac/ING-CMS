import React from "react"
import { injectIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Headline from "../components/headline"
import ImageComponent from "../components/imageComponent"
import EngagementModel from "../components/engagementModel"
import SectionTitle from "../components/sectionTitle"

import ImageHeader from "../images/cards/skinny-18.png"
import ImageMeta from "../images/og-images/og-engagement-models.jpg"
import ImageIcon1 from "../images/icons/fp-icon.svg"
import ImageIcon2 from "../images/icons/time-icon.svg"
import ImageIcon3 from "../images/icons/dt-icon.svg"


import "../styles/pages/company/how-to-engage.scss"


const howToEngage = ({ intl }) => {
    return (
        <Layout>
            <main>
            <SEO
                title={intl.formatMessage({ id: "company.how-to-engage.meta.title" })}
                description={intl.formatMessage({ id: "company.how-to-engage.meta.description" })}
                link={intl.formatMessage({ id: "company.how-to-engage.meta.link" })}
                image={ImageMeta}
            />

            <Headline
                wrapperClasses="ing-headline"
                innerWrapClasses="pl-md-0 col-md-6 col-12 align-self-center mt-md-0 mt-3 js-parallax-text"
                title={intl.formatMessage({ id: "company.how-to-engage.main-heading" })}
                description={intl.formatMessage({ id: "company.how-to-engage.heading" })}
                link={intl.formatMessage({ id: "company.how-to-engage.meta.link" })}
                imgWrapClasses="col-md-6 col-12 text-center p-4"
                imgClasses="img-fluid js-parallax-image"
                img={ImageHeader}
                imgAlt={intl.formatMessage({ id: "company.how-to-engage.heading-img-alt" })}
            />
            <div className="d-none">
                <ImageComponent />
            </div>

            <section className="position-relative eng-models-get-started-wrapper">
                <div className="container-fluid">
                    <div className="row justify-content-center align-items-center blue-bg-gradient">
                        <SectionTitle
                            className="w-100 text-center text-white"
                            title={intl.formatMessage({
                                id: "company.how-to-engage.scope-people-time.title",
                            })}
                        />
                        <p className="text-center" itemProp="text">
                            {intl.formatMessage({ id: "company.how-to-engage.scope-people-time.text-1" })}
                            <br/>
                            {intl.formatMessage({ id: "company.how-to-engage.scope-people-time.text-2" })}
                        </p>
                    </div>
                </div>
            </section>

            <EngagementModel 
                sectionWrapClass="position-relative bg-color fixed-price-model-wrapper"
                img={ImageIcon1}
                imgAlt={intl.formatMessage({ id: "company.how-to-engage.fixed-model.icon-alt" })}
                title={intl.formatMessage({ id: "company.how-to-engage.fixed-model.title" })}
                benefitsQ1={intl.formatMessage({ id: "company.how-to-engage.q-1" })}
                checkAlt={intl.formatMessage({ id: "img-alt.check" })}
                check1={intl.formatMessage({ id: "company.how-to-engage.fixed-model.check1" })}
                check2={intl.formatMessage({ id: "company.how-to-engage.fixed-model.check2" })}
                check3={intl.formatMessage({ id: "company.how-to-engage.fixed-model.check3" })}
                check4={intl.formatMessage({ id: "company.how-to-engage.fixed-model.check4" })}
                benefitsAnd={intl.formatMessage({ id: "company.how-to-engage.and-text" })}
                check5={intl.formatMessage({ id: "company.how-to-engage.fixed-model.check5" })}
                check6={intl.formatMessage({ id: "company.how-to-engage.fixed-model.check6" })}
                check7={intl.formatMessage({ id: "company.how-to-engage.fixed-model.check7" })}
                benefitsQ2={intl.formatMessage({ id: "company.how-to-engage.q-2" })}
                text1={intl.formatMessage({ id: "company.how-to-engage.fixed-model.p-1" })}
                text2Part1={intl.formatMessage({ id: "company.how-to-engage.fixed-model.p-2-1" })}
                text2Link={intl.formatMessage({ id: "company.how-to-engage.fixed-model.p-2-link" })}
                text2LinkText={intl.formatMessage({ id: "company.how-to-engage.fixed-model.p-2-link-text" })}
                text2Part2={intl.formatMessage({ id: "company.how-to-engage.fixed-model.p-2-2" })}
                text3={intl.formatMessage({ id: "company.how-to-engage.fixed-model.p-3" })}
                text4={intl.formatMessage({ id: "company.how-to-engage.fixed-model.p-4" })}
                boxesTitle={intl.formatMessage({ id: "company.how-to-engage.boxes-title" })}
                blueBoxTextPart1={intl.formatMessage({ id: "company.how-to-engage.fixed-model.blue-boxes.p-1-1" })}
                blueBoxTextLink={intl.formatMessage({ id: "company.how-to-engage.fixed-model.blue-boxes.p-1-link" })}
                blueBoxTextLinkText={intl.formatMessage({ id: "company.how-to-engage.fixed-model.blue-boxes.p-1-link-text" })}
                blueBoxTextPart2={intl.formatMessage({ id: "company.how-to-engage.fixed-model.blue-boxes.p-1-2" })}
                dataAosDelay1=" "
                bbText1={intl.formatMessage({ id: "company.how-to-engage.fixed-model.blue-boxes.box1" })}
                dataAosDelay2="200"
                bbText2={intl.formatMessage({ id: "company.how-to-engage.fixed-model.blue-boxes.box2" })}
                dataAosDelay3="500"
                bbText3={intl.formatMessage({ id: "company.how-to-engage.fixed-model.blue-boxes.box3" })}
                dataAosDelay4="800"
                bbText4={intl.formatMessage({ id: "company.how-to-engage.fixed-model.blue-boxes.box4" })}
                dataAosDelay5="1100"
                bbText5={intl.formatMessage({ id: "company.how-to-engage.fixed-model.blue-boxes.box5" })}
            />
            <EngagementModel 
                sectionWrapClass="fixed-price-model-wrapper bg-color-fixed-model"
                img={ImageIcon2}
                imgAlt={intl.formatMessage({ id: "company.how-to-engage.time-model.icon-alt" })}
                title={intl.formatMessage({ id: "company.how-to-engage.time-model.title" })}
                benefitsQ1={intl.formatMessage({ id: "company.how-to-engage.q-1" })}
                checkAlt={intl.formatMessage({ id: "img-alt.check" })}
                check1={intl.formatMessage({ id: "company.how-to-engage.time-model.check1" })}
                check2={intl.formatMessage({ id: "company.how-to-engage.time-model.check2" })}
                check3={intl.formatMessage({ id: "company.how-to-engage.time-model.check3" })}
                check4={intl.formatMessage({ id: "company.how-to-engage.time-model.check4" })}
                benefitsAnd={intl.formatMessage({ id: "company.how-to-engage.and-text" })}
                check5={intl.formatMessage({ id: "company.how-to-engage.time-model.check5" })}
                check6={intl.formatMessage({ id: "company.how-to-engage.time-model.check6" })}
                check7=" "
                benefitsQ2={intl.formatMessage({ id: "company.how-to-engage.q-2" })}
                text1={intl.formatMessage({ id: "company.how-to-engage.time-model.p-1" })}
                text2Part1={intl.formatMessage({ id: "company.how-to-engage.time-model.p-2-1" })}
                text2Link={intl.formatMessage({ id: "company.how-to-engage.time-model.p-2-link" })}
                text2LinkText={intl.formatMessage({ id: "company.how-to-engage.time-model.p-2-link-text" })}
                text2Part2={intl.formatMessage({ id: "company.how-to-engage.time-model.p-2-2" })}
                text3={intl.formatMessage({ id: "company.how-to-engage.time-model.p-3" })}
                text4={intl.formatMessage({ id: "company.how-to-engage.time-model.p-4" })}
                boxesTitle={intl.formatMessage({ id: "company.how-to-engage.boxes-title" })}
                blueBoxTextPart1={intl.formatMessage({ id: "company.how-to-engage.time-model.blue-boxes.p-1-1" })}
                blueBoxTextLink={intl.formatMessage({ id: "company.how-to-engage.time-model.blue-boxes.p-1-link" })}
                blueBoxTextLinkText={intl.formatMessage({ id: "company.how-to-engage.time-model.blue-boxes.p-1-link-text" })}
                blueBoxTextPart2={intl.formatMessage({ id: "company.how-to-engage.time-model.blue-boxes.p-1-2" })}
                dataAosDelay1=" "
                bbText1={intl.formatMessage({ id: "company.how-to-engage.time-model.blue-boxes.box1" })}
                dataAosDelay2="200"
                bbText2={intl.formatMessage({ id: "company.how-to-engage.time-model.blue-boxes.box2" })}
                dataAosDelay3="500"
                bbText3={intl.formatMessage({ id: "company.how-to-engage.time-model.blue-boxes.box3" })}
                dataAosDelay4="800"
                bbText4={intl.formatMessage({ id: "company.how-to-engage.time-model.blue-boxes.box4" })}
                dataAosDelay5="1100"
                bbText5={intl.formatMessage({ id: "company.how-to-engage.time-model.blue-boxes.box5" })}
            />
            <EngagementModel 
                sectionWrapClass="fixed-price-model-wrapper"
                img={ImageIcon3}
                imgAlt={intl.formatMessage({ id: "company.how-to-engage.dedicated-model.icon-alt" })}
                title={intl.formatMessage({ id: "company.how-to-engage.dedicated-model.title" })}
                benefitsQ1={intl.formatMessage({ id: "company.how-to-engage.q-1" })}
                checkAlt={intl.formatMessage({ id: "img-alt.check" })}
                check1={intl.formatMessage({ id: "company.how-to-engage.dedicated-model.check1" })}
                check2={intl.formatMessage({ id: "company.how-to-engage.dedicated-model.check2" })}
                check3={intl.formatMessage({ id: "company.how-to-engage.dedicated-model.check3" })}
                check4={intl.formatMessage({ id: "company.how-to-engage.dedicated-model.check4" })}
                benefitsAnd={intl.formatMessage({ id: "company.how-to-engage.and-text" })}
                check5={intl.formatMessage({ id: "company.how-to-engage.dedicated-model.check5" })}
                check6={intl.formatMessage({ id: "company.how-to-engage.dedicated-model.check6" })}
                check7=" "
                benefitsQ2={intl.formatMessage({ id: "company.how-to-engage.q-2" })}
                text1={intl.formatMessage({ id: "company.how-to-engage.dedicated-model.p-1" })}
                text2Part1={intl.formatMessage({ id: "company.how-to-engage.dedicated-model.p-2-1" })}
                text2Link={intl.formatMessage({ id: "company.how-to-engage.dedicated-model.p-2-link" })}
                text2LinkText={intl.formatMessage({ id: "company.how-to-engage.dedicated-model.p-2-link-text" })}
                text2Part2={intl.formatMessage({ id: "company.how-to-engage.dedicated-model.p-2-2" })}
                text3={intl.formatMessage({ id: "company.how-to-engage.dedicated-model.p-3" })}
                text4={intl.formatMessage({ id: "company.how-to-engage.dedicated-model.p-4" })}
                boxesTitle={intl.formatMessage({ id: "company.how-to-engage.boxes-title" })}
                blueBoxTextPart1={intl.formatMessage({ id: "company.how-to-engage.dedicated-model.blue-boxes.p-1-1" })}
                blueBoxTextLink={intl.formatMessage({ id: "company.how-to-engage.dedicated-model.blue-boxes.p-1-link" })}
                blueBoxTextLinkText={intl.formatMessage({ id: "company.how-to-engage.dedicated-model.blue-boxes.p-1-link-text" })}
                blueBoxTextPart2={intl.formatMessage({ id: "company.how-to-engage.dedicated-model.blue-boxes.p-1-2" })}
                dataAosDelay1=" "
                bbText1={intl.formatMessage({ id: "company.how-to-engage.dedicated-model.blue-boxes.box1" })}
                dataAosDelay2="200"
                bbText2={intl.formatMessage({ id: "company.how-to-engage.dedicated-model.blue-boxes.box2" })}
                dataAosDelay3="500"
                bbText3={intl.formatMessage({ id: "company.how-to-engage.dedicated-model.blue-boxes.box3" })}
                dataAosDelay4="800"
                bbText4={intl.formatMessage({ id: "company.how-to-engage.dedicated-model.blue-boxes.box4" })}
                dataAosDelay5="1100"
                bbText5={intl.formatMessage({ id: "company.how-to-engage.dedicated-model.blue-boxes.box5" })}
            />
        </main>
        </Layout>
    )
}
export default injectIntl(howToEngage)