import React from "react"
import { injectIntl, Link } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Headline from "../components/headline"
import ImageComponent from "../components/imageComponent"
import SectionTitle from "../components/sectionTitle"
import ConceptBox3Links from "../components/conceptBox3Links"
import CtaSection from "../components/cta"
import StepLeftBox from "../components/stepLeftBox"
import StepRightBox from "../components/stepRightBox"
import ConceptBox3Paragraphs from "../components/conceptBox3Paragraphs"

import ImageHeader from "../images/cards/skinny-14.png"
import ImageMeta from "../images/og-images/og-software-prototyping.jpg"
import ImageConceptBox3Links1 from "../images/icons/mvp.svg"
import ImageConceptBox3Links2 from "../images/icons/cycle.svg"
import ImageConceptBox3Links3 from "../images/icons/advisory.svg"
import ImageConceptBox3Links4 from "../images/icons/migration.svg"
import ImageStepBox1 from "../images/cards/skinny-15.png"
import ImageStepBox2 from "../images/cards/skinny-17.png"
import ImageStepBox3 from "../images/cards/skinny-25.png"
import ImageLeftLine from "../images/left-line.png"
import ImageShortLeftLine from "../images/short-left-line.png"
import ImageStepBox4 from "../images/cards/skinny-16.png"
import ImageStepBox5 from "../images/cards/skinny-24.png"
import ImageStepBox6 from "../images/cards/skinny-26.png"
import ImageRightLine from "../images/right-line.png"
import ImageCircleCheckmark from "../images/icons/circle-checkmark.svg"

import "../styles/pages/tech-force.scss"


const softwarePrototyping = ({ intl }) => {
    return (
        <Layout>
            <main>
                <SEO
                    title={intl.formatMessage({ id: "startups.meta.title" })}
                    description={intl.formatMessage({ id: "startups.meta.description" })}
                    link={intl.formatMessage({ id: "startups.meta.link" })}
                    image={ImageMeta}
                />

                <Headline
                    wrapperClasses="tech-force-headline-wrapper ing-headline"
                    innerWrapClasses="pl-md-0 col-md-6 col-12 align-self-center mt-md-0 mt-3 js-parallax-text"
                    title={intl.formatMessage({ id: "startups.main-heading" })}
                    description={intl.formatMessage({ id: "startups.heading" })}
                    link={intl.formatMessage({ id: "startups.meta.link" })}
                    imgWrapClasses="col-md-6 col-12 text-center mb-md-0 mb-4"
                    imgClasses="img-fluid js-parallax-image"
                    img={ImageHeader}
                    imgAlt={intl.formatMessage({ id: "startups.heading-img-alt" })}
                />
                <div className="d-none">
                    <ImageComponent />
                </div>

                {/* Tech Force Desc */}
                <section className="position-relative tech-force-desc-text-wrapper">
                    <div className="container">
                        <div className="row justify-content-sm-between">
                            <section
                                className="d-flex flex-row flex-wrap tech-force-desc-text-item"
                                data-aos="zoom-in"
                                data-aos-duration="1000"
                                data-aos-offset="0"
                            >
                                <SectionTitle title={intl.formatMessage({ id: "startups.desc.left-title" })} />
                                <p itemProp="text"> {intl.formatMessage({ id: "startups.desc.left-text-1" })} </p>
                                <p itemProp="text"> {intl.formatMessage({ id: "startups.desc.left-text-2" })} </p>
                            </section>
                            <section
                                className="d-flex flex-row flex-wrap tech-force-desc-text-item"
                                data-aos="zoom-in"
                                data-aos-duration="1000"
                                data-aos-offset="0"
                                data-aos-delay="300"
                            >
                                <SectionTitle title={intl.formatMessage({ id: "startups.desc.right-title" })} />
                                <p itemProp="text"> {intl.formatMessage({ id: "startups.desc.right-text-1" })} </p>
                                <p itemProp="text"> 
                                    {intl.formatMessage({ id: "startups.desc.right-text-2-part1" })}
                                    <Link to={intl.formatMessage({ id: "startups.desc.right-text-2-link" })}> 
                                        {intl.formatMessage({ id: "startups.desc.right-text-2-link-text" })} 
                                    </Link>                                    
                                    {intl.formatMessage({ id: "startups.desc.right-text-2-part2" })}
                                </p>
                            </section>
                        </div>
                    </div>
                </section>

                {/* Tech Force Forwarding */}
                <section className="position-relative blue-box-wrapper text-white">
                    <div className="container">
                        <div className="row justify-content-md-between justify-content-center">
                            <SectionTitle
                                className="w-100 text-center text-white"
                                itemProp="text"
                                dataAos="zoom-in"
                                dataAosDuration="1100"
                                title={intl.formatMessage({ id: "startups.force-forwarding.title" })}
                            />
                            <ConceptBox3Links
                                dataAosDelay="400"
                                conceptBox3LinksImg={ImageConceptBox3Links1}
                                conceptBox3LinksImgAlt={intl.formatMessage({ id: "startups.force-forwarding.force-step1.img-alt" })}
                                conceptBox3LinksTitle={intl.formatMessage({ id: "startups.force-forwarding.force-step1.title" })}
                                conceptBox3LinksDescriptionPart1={intl.formatMessage({ id: "startups.force-forwarding.force-step1.text-1-part1" })}
                                conceptBox3LinksDescriptionLink1=" "
                                conceptBox3LinksDescriptionPart2=" "
                                conceptBox3LinksDescriptionLink2=" "
                                conceptBox3LinksDescriptionPart3=" "
                                conceptBox3LinksDescriptionLink3=" "
                                conceptBox3LinksDescriptionPart4=" "
                                conceptBox3LinksDescription2Part1={intl.formatMessage({ id: "startups.force-forwarding.force-step1.text-2-part1" })}
                                conceptBox3LinksDescription2Link=" "
                                conceptBox3LinksDescription2Part2=" "
                            />
                            <ConceptBox3Links
                                dataAosDelay="700"
                                conceptBox3LinksImg={ImageConceptBox3Links2}
                                conceptBox3LinksImgAlt={intl.formatMessage({ id: "startups.force-forwarding.force-step2.img-alt" })}
                                conceptBox3LinksTitle={intl.formatMessage({ id: "startups.force-forwarding.force-step2.title" })}
                                conceptBox3LinksDescriptionPart1={intl.formatMessage({ id: "startups.force-forwarding.force-step2.text-1-part1" })}
                                conceptBox3LinksDescriptionLink1={intl.formatMessage({ id: "startups.force-forwarding.force-step2.text-1-link1" })}
                                conceptBox3LinksDescriptionLink1Text={intl.formatMessage({ id: "startups.force-forwarding.force-step2.text-1-link1-text" })}
                                conceptBox3LinksDescriptionPart2={intl.formatMessage({ id: "startups.force-forwarding.force-step2.text-1-part2" })}
                                conceptBox3LinksDescriptionLink2={intl.formatMessage({ id: "startups.force-forwarding.force-step2.text-1-link2" })}
                                conceptBox3LinksDescriptionLink2Text={intl.formatMessage({ id: "startups.force-forwarding.force-step2.text-1-link2-text" })}
                                conceptBox3LinksDescriptionPart3={intl.formatMessage({ id: "startups.force-forwarding.force-step2.text-1-part3" })}
                                conceptBox3LinksDescriptionLink3={intl.formatMessage({ id: "startups.force-forwarding.force-step2.text-1-link3" })}
                                conceptBox3LinksDescriptionLink3Text={intl.formatMessage({ id: "startups.force-forwarding.force-step2.text-1-link3-text" })}
                                conceptBox3LinksDescriptionPart4={intl.formatMessage({ id: "startups.force-forwarding.force-step2.text-1-part4" })}
                                conceptBox3LinksDescription2Part1={intl.formatMessage({ id: "startups.force-forwarding.force-step2.text-2-part1" })}
                                conceptBox3LinksDescription2Link=" "
                                conceptBox3LinksDescription2Part2=" "
                            />
                            <ConceptBox3Links
                                dataAosDelay="800"
                                conceptBox3LinksImg={ImageConceptBox3Links3}
                                conceptBox3LinksImgAlt={intl.formatMessage({ id: "startups.force-forwarding.force-step3.img-alt" })}
                                conceptBox3LinksTitle={intl.formatMessage({ id: "startups.force-forwarding.force-step3.title" })}
                                conceptBox3LinksDescriptionPart1={intl.formatMessage({ id: "startups.force-forwarding.force-step3.text-1-part1" })}
                                conceptBox3LinksDescriptionLink1=" "
                                conceptBox3LinksDescriptionPart2=" "
                                conceptBox3LinksDescriptionLink2=" "
                                conceptBox3LinksDescriptionPart3=" "
                                conceptBox3LinksDescriptionLink3=" "
                                conceptBox3LinksDescriptionPart4=" "
                                conceptBox3LinksDescription2Part1={intl.formatMessage({ id: "startups.force-forwarding.force-step3.text-2-part1" })}
                                conceptBox3LinksDescription2Link={intl.formatMessage({ id: "startups.force-forwarding.force-step3.text-2-link" })}
                                conceptBox3LinksDescription2LinkText={intl.formatMessage({ id: "startups.force-forwarding.force-step3.text-2-link-text" })}
                                conceptBox3LinksDescription2Part2={intl.formatMessage({ id: "startups.force-forwarding.force-step3.text-2-part2" })}
                            />
                            <ConceptBox3Links
                                dataAosDelay="900"
                                conceptBox3LinksImg={ImageConceptBox3Links4}
                                conceptBox3LinksImgAlt={intl.formatMessage({ id: "startups.force-forwarding.force-step4.img-alt" })}
                                conceptBox3LinksTitle={intl.formatMessage({ id: "startups.force-forwarding.force-step4.title" })}
                                conceptBox3LinksDescriptionPart1={intl.formatMessage({ id: "startups.force-forwarding.force-step4.text-1-part1" })}
                                conceptBox3LinksDescriptionLink1=" "
                                conceptBox3LinksDescriptionPart2=" "
                                conceptBox3LinksDescriptionLink2=" "
                                conceptBox3LinksDescriptionPart3=" "
                                conceptBox3LinksDescriptionLink3=" "
                                conceptBox3LinksDescriptionPart4=" "
                                conceptBox3LinksDescription2Part1=" "
                                conceptBox3LinksDescription2Link=" "
                                conceptBox3LinksDescription2Part2=" "
                            />
                        </div>
                    </div>
                </section>

                {/* Tech Force Steps */}
                <section className="tech-force-steps pb-100">
                    <div className="container">
                        <SectionTitle
                            className="text-center w-100 pt-100 pb-100 border-left-steps"
                            itemProp="text"
                            title={intl.formatMessage({ id: "startups.force-steps.title" })}
                        />
                        <div className="row">
                            <StepLeftBox
                                wrapClassName="px-md-3 p-sm-0 px-3 col-12 steps-desc-box border-left-steps pt-100"
                                stepBoxImg={ImageStepBox1}
                                stepBoxImgAlt={intl.formatMessage({ id: "index.get-started.step1.img-alt" })}
                                imgDataAosDelay=""
                                textDataAosDelay=""
                                stepNumber="1"
                                title={intl.formatMessage({ id: "index.get-started.step1.title" })}
                                text={intl.formatMessage({ id: "index.get-started.step1.text" })}
                            />

                            <img
                                className="d-xl-block d-none w-100"
                                src={ImageLeftLine}
                                alt="left dashed line"
                            />

                            <StepRightBox
                                wrapClassName="px-md-3 p-sm-0 px-3 col-12 steps-desc-box border-right-steps"
                                wrapTextClassName="px-md-3 p-sm-0 px-3 col-md-6 col-12 align-self-center"
                                textDataAosDelay="200"
                                stepNumber="2"
                                title={intl.formatMessage({ id: "index.get-started.step2.title" })}
                                text={intl.formatMessage({ id: "index.get-started.step2.text" })}
                                wrapImgClassName="px-md-3 p-sm-0 px-3 col-md-6 col-12 text-center"
                                stepBoxImg={ImageStepBox4}
                                stepBoxImgAlt={intl.formatMessage({ id: "index.get-started.step2.img-alt" })}
                                imgDataAosDelay="200"
                            />

                            <img
                                className="d-xl-block d-none w-100"
                                src={ImageRightLine}
                                alt="right dashed line"
                            />

                            <StepLeftBox
                                wrapClassName="px-md-3 p-sm-0 px-3 col-12 steps-desc-box border-left-steps"
                                stepBoxImg={ImageStepBox2}
                                stepBoxImgAlt={intl.formatMessage({ id: "index.get-started.step3.img-alt" })}
                                imgDataAosDelay="250"
                                textDataAosDelay="250"
                                stepNumber="3"
                                title={intl.formatMessage({ id: "index.get-started.step3.title" })}
                                text={intl.formatMessage({ id: "index.get-started.step3.text" })}
                            />

                            <img
                                className="d-xl-block d-none w-100"
                                src={ImageLeftLine}
                                alt="left dashed line"
                            />

                            <StepRightBox
                                wrapClassName="px-md-3 p-sm-0 px-3 col-12 steps-desc-box border-right-steps"
                                wrapTextClassName="px-md-3 p-sm-0 px-3 col-md-6 col-12 align-self-center"
                                textDataAosDelay="300"
                                stepNumber="4"
                                title={intl.formatMessage({ id: "index.get-started.step4.title" })}
                                text={intl.formatMessage({ id: "index.get-started.step4.text" })}
                                wrapImgClassName="px-md-3 p-sm-0 px-3 col-md-6 col-12 text-center"
                                stepBoxImg={ImageStepBox5}
                                stepBoxImgAlt={intl.formatMessage({ id: "index.get-started.step4.img-alt" })}
                                imgDataAosDelay="300"
                            />

                            <img
                                className="d-xl-block d-none w-100"
                                src={ImageRightLine}
                                alt="right dashed line"
                            />

                            <StepLeftBox
                                wrapClassName="px-md-3 p-sm-0 px-3 col-12 steps-desc-box border-left-steps"
                                stepBoxImg={ImageStepBox3}
                                stepBoxImgAlt={intl.formatMessage({ id: "index.get-started.step5.img-alt" })}
                                imgDataAosDelay="350"
                                textDataAosDelay="350"
                                stepNumber="5"
                                title={intl.formatMessage({ id: "index.get-started.step5.title" })}
                                text={intl.formatMessage({ id: "index.get-started.step5.text" })}
                            />

                            <img
                                className="d-xl-block d-none w-50"
                                src={ImageShortLeftLine}
                                alt="left dashed line"
                            />

                            <StepRightBox
                                wrapClassName="px-md-3 p-sm-0 px-3 col-12 steps-desc-box"
                                wrapTextClassName="px-md-3 p-sm-0 px-3 col-md-6 col-12 align-self-center pb-150"
                                textDataAosDelay="400"
                                stepNumber="6"
                                title={intl.formatMessage({ id: "index.get-started.step6.title" })}
                                text={intl.formatMessage({ id: "index.get-started.step6.text" })}
                                wrapImgClassName="px-md-3 p-sm-0 px-3 col-md-6 col-12 text-center border-left-steps pb-150"
                                stepBoxImg={ImageStepBox6}
                                stepBoxImgAlt={intl.formatMessage({ id: "index.get-started.step6.img-alt" })}
                                imgDataAosDelay="400"
                            />

                            <Link to="/contact" className="position-relative text-uppercase buttons btn-red mx-auto">
                                {intl.formatMessage({ id: "button.get-started"})}
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Tech Force Optimization */}
                <section className="tech-force-optimization-wrapper">
                    <div className="container">
                        <div className="row justify-content-md-between justify-content-center">
                            <SectionTitle
                                className="w-100 text-center"
                                itemProp="text"
                                dataAos="fade-up"
                                dataAosDuration="1000"
                                title={intl.formatMessage({ id: "startups.force-optimization.title" })}
                            />
                            <ConceptBox3Paragraphs
                                dataAosDelay=""
                                conceptBox3ParagraphsImg={ImageCircleCheckmark}
                                conceptBox3ParagraphsImgAlt={intl.formatMessage({ id: "img-alt.circle-check" })}
                                conceptBox3ParagraphsTitle={intl.formatMessage({ id: "startups.force-optimization.box1-title" })}
                                conceptBox3Description1={intl.formatMessage({ id: "startups.force-optimization.box1-text1" })}
                                conceptBox3Description2={intl.formatMessage({ id: "startups.force-optimization.box1-text2" })}
                                conceptBox3Description3=" "
                            />
                            <ConceptBox3Paragraphs
                                dataAosDelay="200"
                                conceptBox3ParagraphsImg={ImageCircleCheckmark}
                                conceptBox3ParagraphsImgAlt={intl.formatMessage({ id: "img-alt.circle-check" })}
                                conceptBox3ParagraphsTitle={intl.formatMessage({ id: "startups.force-optimization.box2-title" })}
                                conceptBox3Description1={intl.formatMessage({ id: "startups.force-optimization.box2-text1" })}
                                conceptBox3Description2={intl.formatMessage({ id: "startups.force-optimization.box2-text2" })}
                                conceptBox3Description3=" "
                            />
                            <ConceptBox3Paragraphs
                                dataAosDelay=""
                                conceptBox3ParagraphsImg={ImageCircleCheckmark}
                                conceptBox3ParagraphsImgAlt={intl.formatMessage({ id: "img-alt.circle-check" })}
                                conceptBox3ParagraphsTitle={intl.formatMessage({ id: "startups.force-optimization.box3-title" })}
                                conceptBox3Description1={intl.formatMessage({ id: "startups.force-optimization.box3-text1" })}
                                conceptBox3Description2={intl.formatMessage({ id: "startups.force-optimization.box3-text2" })}
                                conceptBox3Description3={intl.formatMessage({ id: "startups.force-optimization.box3-text3" })}
                            />
                            <ConceptBox3Paragraphs
                                dataAosDelay="200"
                                conceptBox3ParagraphsImg={ImageCircleCheckmark}
                                conceptBox3ParagraphsImgAlt={intl.formatMessage({ id: "img-alt.circle-check" })}
                                conceptBox3ParagraphsTitle={intl.formatMessage({ id: "startups.force-optimization.box4-title" })}
                                conceptBox3Description1={intl.formatMessage({ id: "startups.force-optimization.box4-text1" })}
                                conceptBox3Description2={intl.formatMessage({ id: "startups.force-optimization.box4-text2" })}
                                conceptBox3Description3=" "
                            />
                            <ConceptBox3Paragraphs
                                dataAosDelay=""
                                conceptBox3ParagraphsImg={ImageCircleCheckmark}
                                conceptBox3ParagraphsImgAlt={intl.formatMessage({ id: "img-alt.circle-check" })}
                                conceptBox3ParagraphsTitle={intl.formatMessage({ id: "startups.force-optimization.box5-title" })}
                                conceptBox3Description1={intl.formatMessage({ id: "startups.force-optimization.box5-text1" })}
                                conceptBox3Description2={intl.formatMessage({ id: "startups.force-optimization.box5-text2" })}
                                conceptBox3Description3=" "
                            />
                            <ConceptBox3Paragraphs
                                dataAosDelay="200"
                                conceptBox3ParagraphsImg={ImageCircleCheckmark}
                                conceptBox3ParagraphsImgAlt={intl.formatMessage({ id: "img-alt.circle-check" })}
                                conceptBox3ParagraphsTitle={intl.formatMessage({ id: "startups.force-optimization.box6-title" })}
                                conceptBox3Description1={intl.formatMessage({ id: "startups.force-optimization.box6-text1" })}
                                conceptBox3Description2={intl.formatMessage({ id: "startups.force-optimization.box6-text2" })}
                                conceptBox3Description3=" "
                            />
                            <ConceptBox3Paragraphs
                                dataAosDelay=""
                                conceptBox3ParagraphsImg={ImageCircleCheckmark}
                                conceptBox3ParagraphsImgAlt={intl.formatMessage({ id: "img-alt.circle-check" })}
                                conceptBox3ParagraphsTitle={intl.formatMessage({ id: "startups.force-optimization.box7-title" })}
                                conceptBox3Description1={intl.formatMessage({ id: "startups.force-optimization.box7-text1" })}
                                conceptBox3Description2={intl.formatMessage({ id: "startups.force-optimization.box7-text2" })}
                                conceptBox3Description3=" "
                            />
                            <ConceptBox3Paragraphs
                                dataAosDelay="200"
                                conceptBox3ParagraphsImg={ImageCircleCheckmark}
                                conceptBox3ParagraphsImgAlt={intl.formatMessage({ id: "img-alt.circle-check" })}
                                conceptBox3ParagraphsTitle={intl.formatMessage({ id: "startups.force-optimization.box8-title" })}
                                conceptBox3Description1={intl.formatMessage({ id: "startups.force-optimization.box8-text1" })}
                                conceptBox3Description2={intl.formatMessage({ id: "startups.force-optimization.box8-text2" })}
                                conceptBox3Description3={intl.formatMessage({ id: "startups.force-optimization.box8-text3" })}
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