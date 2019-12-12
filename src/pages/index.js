import React from "react"
import { injectIntl, Link } from "gatsby-plugin-intl"
import Helmet from "react-helmet"

import Layout from "../components/layout"
import SEO from "../components/seo"

import ImageOffice from "../images/office.png"
import ImageMeta from "../images/og-images/og-home.jpg"
import ImageClutch from "../images/awards/1.png"
import ImageDesignrush from "../images/awards/2.png"
import ImageCitationBox1 from "../images/cards/skinny-1.png"
import ImageCitationBox2 from "../images/cards/skinny-2.png"
import ImageCitationBox3 from "../images/cards/skinny-3.png"
import ImageCitationMima from "../images/person/mima.png"
import ImageCitationMisko from "../images/person/misko.png"
import ImageCitationNenad from "../images/person/nenad.png"
import ImageConceptBox1 from "../images/icons/glyph-1.svg"
import ImageConceptBox2 from "../images/icons/glyph-2.svg"
import ImageConceptBox3 from "../images/icons/glyph-3.svg"
import ImageConceptBox4 from "../images/icons/glyph-4.svg"
import ImageStepBox1 from "../images/cards/skinny-15.png"
import ImageStepBox2 from "../images/cards/skinny-17.png"
import ImageStepBox3 from "../images/cards/skinny-25.png"
import ImageLeftLine from "../images/left-line.png"
import ImageShortLeftLine from "../images/short-left-line.png"
import ImageStepBox4 from "../images/cards/skinny-16.png"
import ImageStepBox5 from "../images/cards/skinny-24.png"
import ImageStepBox6 from "../images/cards/skinny-26.png"
import ImageRightLine from "../images/right-line.png"

import CardBox from "../components/cardBox"
import SectionTitle from "../components/sectionTitle"
import CitationBox from "../components/citationBox"
import TestimonialCarousel from "../components/testimonialCarousel"
import ConceptBox from "../components/conceptBox"
import StepLeftBox from "../components/stepLeftBox"
import StepRightBox from "../components/stepRightBox"
import PartnersSection from "../components/partnersSection"
import CtaSection from "../components/cta"
import ImageComponent from "../components/imageComponent"

import '../styles/pages/reset.scss';
import '../styles/pages/general.scss';
import '../styles/pages/index/_intro-short.scss';
import '../styles/pages/index/_citations-section.scss';
import '../styles/pages/index/_testimonial-section.scss';
import '../styles/pages/index/_concept-section.scss';
import '../styles/pages/index/_steps-section.scss';
import '../styles/pages/index/_partners-section.scss';


const IndexPage = ({ intl }) => {
  return (
    <Layout>
      <main>
      <Helmet
        bodyAttributes={{
          class: "home-bg-image",
        }}
      />
      <SEO
        title={intl.formatMessage({ id: "meta.title" })}
        description={intl.formatMessage({ id: "meta.description" })}
        link={intl.formatMessage({ id: "meta.link" })}
        image={ImageMeta}
      />

      <div className="container">
        <div className="row">
          <section
            id="intro"
            className="d-flex flex-row flex-wrap"
          >
            <div
              className="col-lg-6 col-md-5 col-12 main-desc-text-wrapper p-0"
              itemProp="name headline"
            >
              <h1 className="main-heading">
                <span className="red">
                  {intl.formatMessage({
                    id: "index.intro.main-heading-part1",
                  })}
                </span>
                <br />
                {intl.formatMessage({
                  id: "index.intro.main-heading-part2",
                })}
                <br />
                {intl.formatMessage({
                  id: "index.intro.main-heading-part3",
                })}
                <span className="red">.</span>
              </h1>
              <link
                href="https://www.ingsoftware.com/"
                itemProp="url"
              />
              <h4 className="text-uppercase">
                {intl.formatMessage({
                  id: "index.intro.heading",
                })}
              </h4>
              <Link
                  to="/contact"
                  className="text-uppercase buttons btn-red"
              >
                {intl.formatMessage({ id: "button.connect" })}
              </Link>
            </div>
            <div className="col-lg-6 col-md-7 col-12 p-0 mt-md-0 mt-3 align-self-xl-auto align-self-center">
              <ImageComponent />
              <img
                src={ImageOffice}
                alt={intl.formatMessage({
                  id: "index.intro.img-alt",
                })}
                itemProp="image"
                data-aos="fade-left"
                data-aos-duration="1200"
              />
            </div>
            <aside className="d-flex flew-row awards-intro-wrapper">
              <figure
                itemProp="image"
                itemScope
                itemType="https://schema.org/ImageObject"
                className="col-auto p-0"
              >
                <a
                  href="https://clutch.co/profile/ingsoftware"
                  itemProp="contentUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="position-absolute w-100 h-100"></div>
                  <img
                    src={ImageClutch}
                    alt="Clutch"
                    itemProp="image"
                  />
                </a>
              </figure>
              <figure
                itemProp="image"
                itemScope
                itemType="https://schema.org/ImageObject"
                className="col-auto p-0"
              >
                <a
                  href="https://www.designrush.com/agency/profile/ingsoftware"
                  itemProp="contentUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="position-absolute w-100 h-100"></div>
                  <img
                    src={ImageDesignrush}
                    alt="Designrush"
                    itemProp="image"
                  />
                </a>
              </figure>
            </aside>
          </section>

          <div
            id="short"
            className="d-flex flew-row justify-content-between flex-wrap"
          >
            <CardBox
              title={intl.formatMessage({
                id: "index.card-box.box1.title",
              })}
              textPart1={intl.formatMessage({
                id: "index.card-box.box1.text1",
              })}
              textPart2={intl.formatMessage({
                id: "index.card-box.box1.text2",
              })}
            />
            <CardBox
              title={intl.formatMessage({
                id: "index.card-box.box2.title",
              })}
              textPart1={intl.formatMessage({
                id: "index.card-box.box2.text1",
              })}
              textPart2={intl.formatMessage({
                id: "index.card-box.box2.text2",
              })}
            />
          </div>

          {/* Citations - ING Management */}
          <section id="citations-section">
            <SectionTitle
              className="text-center"
              dataAos="fade-up"
              dataAosDuration="1100"
              title={intl.formatMessage({
                id: "index.citations.section-title",
              })}
            />
            <div className="d-flex flex-row justify-content-md-between justify-content-center flex-wrap">
              <CitationBox
                className="d-flex align-items-center flex-column text-center position-relative card-box shadowing"
                dataAosDuration="1200"
                dataAosDelay="500"
                imgSrc={ImageCitationBox1}
                imgAlt="Enterprise software solutions"
                title={intl.formatMessage({
                  id: "index.citations.box1.title",
                })}
                description={intl.formatMessage({
                  id: "index.citations.box1.text",
                })}
                personImgSrc={ImageCitationMima}
                personImgAlt="Milan's photo"
                personImgId="milan-photo"
                blockquote={intl.formatMessage({
                  id: "index.citations.box1.citation",
                })}
                personNameRef="milan-photo"
                givenName="Milan"
                familyName="Stamenković"
                jobTitle="COO"
                link="https://www.linkedin.com/in/milan-stamenkovic-1421308/"
              />

              <CitationBox
                className="d-flex align-items-center flex-column justify-content-between text-center position-relative card-box shadowing"
                dataAosDuration="1300"
                dataAosDelay="600"
                imgSrc={ImageCitationBox2}
                imgAlt="Startup technology partners"
                title={intl.formatMessage({
                  id: "index.citations.box2.title",
                })}
                description={intl.formatMessage({
                  id: "index.citations.box2.text",
                })}
                personImgSrc={ImageCitationNenad}
                personImgAlt="Nenad's photo"
                personImgId="nenad-photo"
                blockquote={intl.formatMessage({
                  id: "index.citations.box2.citation",
                })}
                personNameRef="nenad-photo"
                givenName="Nenad"
                familyName="Ilijić"
                jobTitle="CEO"
                link="https://www.linkedin.com/in/nenad-ilijic-92281523/"
              />

              <CitationBox
                className="d-flex align-items-center flex-column justify-content-around text-center position-relative card-box shadowing"
                dataAosDuration="1400"
                dataAosDelay="700"
                imgSrc={ImageCitationBox3}
                imgAlt="MSME software solutions"
                title={intl.formatMessage({
                  id: "index.citations.box3.title",
                })}
                description={intl.formatMessage({
                  id: "index.citations.box3.text",
                })}
                personImgSrc={ImageCitationMisko}
                personImgAlt="Miroljub's photo"
                personImgId="miroljub-photo"
                blockquote={intl.formatMessage({
                  id: "index.citations.box3.citation",
                })}
                personNameRef="miroljub-photo"
                givenName="Miroljub"
                familyName="Bošković"
                jobTitle="CBO"
                link="https://www.linkedin.com/in/miroljubboskovic/"
              />
            </div>
          </section>
        </div>
      </div>

      {/* Testimonial Carousel */}
      <div className="container-fluid bg-whitening">
        <div className="row">
          <section
            id="client-citations"
            className="w-100"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <span
              itemProp="aggregateRating"
              itemScope
              itemType="http://schema.org/AggregateRating"
            >
              <meta itemProp="ratingValue" content="4.8" />
              <meta itemProp="reviewCount" content="3" />
            </span>

            <SectionTitle
              className="text-center"
              title={intl.formatMessage({
                id: "index.client-citations.section-title",
              })}
            />

            <TestimonialCarousel />
          </section>
        </div>
      </div>

      {/* Concept Section */}
      <section id="concept-section">
        <div className="container">
          <div className="row">
            <SectionTitle
              className="text-center w-100"
              dataAos="fade-up"
              dataAosDuration="1200"
              title={intl.formatMessage({
                id: "index.concept.title",
              })}
            />

            <p
              className="text-center w-100"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="100"
              itemProp="text"
            >
              {intl.formatMessage({
                id: "index.concept.text-part1",
              })}
              <br />
              {intl.formatMessage({
                id: "index.concept.text-part2",
              })}
            </p>

            <section className="d-flex flex-row flex-wrap justify-content-between text-md-left text-center">
              <ConceptBox
                sectionWrapClass="text-sm-left text-center concept-item-wrapper"
                dataAos="fade-up"
                dataAosDuration="1200"
                dataAosDelay="300"
                sectionItemProp="offers"
                conceptBoxImg={ImageConceptBox1}
                conceptBoxImgAlt="Software prototyping icon"
                conceptBoxTitle={intl.formatMessage({
                  id: "index.concept.item1.title",
                })}
                itemProp="description"
                conceptBoxDescriptionPart1={intl.formatMessage({
                  id: "index.concept.item1.text",
                })}
                conceptBoxDescriptionLink=" "
                conceptBoxLink="/software-prototyping"
                conceptBoxBtnText={intl.formatMessage({
                  id: "button.find-more",
                })}
              />
              <ConceptBox
                sectionWrapClass="text-sm-left text-center concept-item-wrapper"
                dataAos="fade-up"
                dataAosDuration="1250"
                dataAosDelay="350"
                sectionItemProp="offers"
                conceptBoxImg={ImageConceptBox2}
                conceptBoxImgAlt="Software development icon"
                conceptBoxTitle={intl.formatMessage({
                  id: "index.concept.item2.title",
                })}
                itemProp="description"
                conceptBoxDescriptionPart1={intl.formatMessage({
                  id: "index.concept.item2.text",
                })}
                conceptBoxDescriptionLink=" "
                conceptBoxLink="/custom-software-development"
                conceptBoxBtnText={intl.formatMessage({
                  id: "button.find-more",
                })}
              />
              <ConceptBox
                sectionWrapClass="text-sm-left text-center concept-item-wrapper"
                dataAos="fade-up"
                dataAosDuration="1300"
                dataAosDelay="400"
                sectionItemProp="offers"
                conceptBoxImg={ImageConceptBox3}
                conceptBoxImgAlt="Branding and design icon"
                conceptBoxTitle={intl.formatMessage({
                  id: "index.concept.item3.title",
                })}
                itemProp="description"
                conceptBoxDescriptionPart1={intl.formatMessage({
                  id: "index.concept.item3.text",
                })}
                conceptBoxDescriptionLink=" "
                conceptBoxLink="/branding-and-design"
                conceptBoxBtnText={intl.formatMessage({
                  id: "button.find-more",
                })}
              />
              <ConceptBox
                sectionWrapClass="text-sm-left text-center concept-item-wrapper"
                dataAos="fade-up"
                dataAosDuration="1350"
                dataAosDelay="450"
                sectionItemProp="offers"
                conceptBoxImg={ImageConceptBox4}
                conceptBoxImgAlt="Tech force icon"
                conceptBoxTitle={intl.formatMessage({
                  id: "index.concept.item4.title",
                })}
                itemProp="description"
                conceptBoxDescriptionPart1={intl.formatMessage({
                  id: "index.concept.item4.text",
                })}
                conceptBoxDescriptionLink=" "
                conceptBoxLink="/tech-force-for-startups"
                conceptBoxBtnText={intl.formatMessage({
                  id: "button.find-more",
                })}
              />
            </section>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="row">
          <section id="get-started">
            <div className="container">
              <div className="row">
                {/* Steps Section */}
                <StepLeftBox
                  wrapClassName="px-md-3 p-sm-0 px-3 col-12 steps-desc-box border-left-steps pt-100"
                  stepBoxImg={ImageStepBox1}
                  stepBoxImgAlt={intl.formatMessage({
                    id: "index.get-started.step1.img-alt",
                  })}
                  imgDataAosDelay=""
                  textDataAosDelay=""
                  stepNumber="1"
                  title={intl.formatMessage({
                    id: "index.get-started.step1.title",
                  })}
                  text={intl.formatMessage({
                    id: "index.get-started.step1.text",
                  })}
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
                  title={intl.formatMessage({
                    id: "index.get-started.step2.title",
                  })}
                  text={intl.formatMessage({
                    id: "index.get-started.step2.text",
                  })}
                  wrapImgClassName="px-md-3 p-sm-0 px-3 col-md-6 col-12 text-center"
                  stepBoxImg={ImageStepBox4}
                  stepBoxImgAlt={intl.formatMessage({
                    id: "index.get-started.step2.img-alt",
                  })}
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
                  stepBoxImgAlt={intl.formatMessage({
                    id: "index.get-started.step3.img-alt",
                  })}
                  imgDataAosDelay="250"
                  textDataAosDelay="250"
                  stepNumber="3"
                  title={intl.formatMessage({
                    id: "index.get-started.step3.title",
                  })}
                  text={intl.formatMessage({
                    id: "index.get-started.step3.text",
                  })}
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
                  title={intl.formatMessage({
                    id: "index.get-started.step4.title",
                  })}
                  text={intl.formatMessage({
                    id: "index.get-started.step4.text",
                  })}
                  wrapImgClassName="px-md-3 p-sm-0 px-3 col-md-6 col-12 text-center"
                  stepBoxImg={ImageStepBox5}
                  stepBoxImgAlt={intl.formatMessage({
                    id: "index.get-started.step4.img-alt",
                  })}
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
                  stepBoxImgAlt={intl.formatMessage({
                    id: "index.get-started.step5.img-alt",
                  })}
                  imgDataAosDelay="350"
                  textDataAosDelay="350"
                  stepNumber="5"
                  title={intl.formatMessage({
                    id: "index.get-started.step5.title",
                  })}
                  text={intl.formatMessage({
                    id: "index.get-started.step5.text",
                  })}
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
                  title={intl.formatMessage({
                    id: "index.get-started.step6.title",
                  })}
                  text={intl.formatMessage({
                    id: "index.get-started.step6.text",
                  })}
                  wrapImgClassName="px-md-3 p-sm-0 px-3 col-md-6 col-12 text-center border-left-steps pb-150"
                  stepBoxImg={ImageStepBox6}
                  stepBoxImgAlt={intl.formatMessage({
                    id: "index.get-started.step6.img-alt",
                  })}
                  imgDataAosDelay="400"
                />

                <Link
                  to="/contact"
                  className="position-relative text-uppercase buttons btn-red mx-auto"
                >
                  {intl.formatMessage({
                    id: "button.get-started",
                  })}
                </Link>
              </div>
            </div>
          </section>

          {/* Partners Section */}
          <section id="partnerships">
            <SectionTitle
              className="text-center"
              dataAos="fade-up"
              dataAosDuration="1000"
              title={intl.formatMessage({
                id: "index.partnerships.title",
              })}
            />

            <section
              className="d-flex flex-row flex-wrap align-items-center justify-content-lg-between justify-content-around"
              itemProp="exampleOfWork"
              itemScope
              itemType="https://schema.org/CreativeWork"
              data-aos="fade-up"
              data-aos-duration="1100"
              data-aos-delay="350"
            >
              <PartnersSection />
            </section>
          </section>
        </div>
      </div>

      {/* Call to Action Section */}
      <CtaSection
        text={intl.formatMessage({ id: "button.get-started" })}
      />
      </main>
    </Layout>
  )
}

export default injectIntl(IndexPage)