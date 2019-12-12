import React from "react"
import { injectIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Headline from "../components/headline"
import SectionTitle from "../components/sectionTitle"
import TextWithLink from "../components/textWithLink"
import ImageComponent from "../components/imageComponent"
import LogosDesign from "../components/logosDesign"
import LogosFE from "../components/logosFe"
import LogosBE from "../components/logosBe"
import LogosDataStorage from "../components/logosDataStorage"
import LogosInfrastructure from "../components/logosInfrastructure"

import ImageHeader from "../images/cards/skinny-19.png"
import ImageMeta from "../images/og-images/og-our-expertise.jpg"

import "../styles/pages/company/our-expertise.scss"


const ourExpertise = ({ intl }) => {
  return (
    <Layout>
      <main>
      <SEO
        title={intl.formatMessage({ id: "company.our-expertise.meta.title" })}
        description={intl.formatMessage({ id: "company.our-expertise.meta.description" })}
        link={intl.formatMessage({ id: "company.our-expertise.meta.link" })}
        image={ImageMeta}
      />

      <Headline
        wrapperClasses="d-flex flex-wrap justify-content-center align-items-center text-sm-left text-center ing-headline"
        innerWrapClasses="pl-md-0 col-md-6 col-12 align-self-center mt-md-0 mt-3 js-parallax-text"
        title={intl.formatMessage({ id: "company.our-expertise.main-heading" })}
        description={intl.formatMessage({ id: "company.our-expertise.heading" })}
        link={intl.formatMessage({ id: "company.our-expertise.meta.link" })}
        imgWrapClasses="col-md-6 col-12 text-center mb-md-0 mb-4"
        imgClasses="img-fluid js-parallax-image"
        img={ImageHeader}
        imgAlt={intl.formatMessage({ id: "company.our-expertise.heading-img-alt" })}
      />
      <div className="d-none">
        <ImageComponent />
      </div>

      <section className="position-relative page-navigation-wrapper">
        <div className="container">
          <div className="row">

            {/* UI/UX Section */}
            <section className="position-relative text-center expertise-item">
              <section className="position-absolute full-width bg-grey"></section>
              <SectionTitle
                className="w-100 text-uppercase"
                dataAos="fade-up"
                dataAosDuration="1000"
                title={intl.formatMessage({ id: "company.our-expertise.ui-ux-design.title" })}
              />
              <TextWithLink
                dataAos="fade-up"
                dataAosDelay="300"
                dataAosDuration="1100"
                textPart1={intl.formatMessage({ id: "company.our-expertise.ui-ux-design.p-1-1" })}
                textLink={intl.formatMessage({ id: "company.our-expertise.ui-ux-design.p-1-link" })}
                textLinkText={intl.formatMessage({ id: "company.our-expertise.ui-ux-design.p-1-link-text" })}
                textPart2={intl.formatMessage({ id: "company.our-expertise.ui-ux-design.p-1-2" })}
              />
              <TextWithLink
                dataAos="fade-up"
                dataAosDelay="400"
                dataAosDuration="1200"
                textPart1={intl.formatMessage({ id: "company.our-expertise.ui-ux-design.p-2-1" })}
                textLink={intl.formatMessage({ id: "company.our-expertise.ui-ux-design.p-2-link" })}
                textLinkText={intl.formatMessage({ id: "company.our-expertise.ui-ux-design.p-2-link-text" })}
                textPart2={intl.formatMessage({ id: "company.our-expertise.ui-ux-design.p-2-2" })}
              />
              <LogosDesign />
            </section>

            {/* Front-End Section */}
            <section className="position-relative d-flex flex-wrap align-items-center text-md-left text-center expertise-item">
              <section className="position-absolute full-width bg-whitening"></section>
              <section
                className="p-0 col-md-5 col-12"
                data-aos="fade-right"
                data-aos-offset="150"
                data-aos-duration="1200"
              >
                <SectionTitle
                  className="position-relative"
                  dataAos=""
                  dataAosDuration=""
                  title={intl.formatMessage({ id: "company.our-expertise.fe-technologies.title" })}
                />
                <TextWithLink
                  dataAos=""
                  dataAosDelay=""
                  dataAosDuration=""
                  textPart1={intl.formatMessage({ id: "company.our-expertise.fe-technologies.p-1-1" })}
                  textLink=""
                  textLinkText=""
                  textPart2=""
                />
                <TextWithLink
                  dataAos=""
                  dataAosDelay=""
                  dataAosDuration=""
                  textPart1={intl.formatMessage({ id: "company.our-expertise.fe-technologies.p-2-1" })}
                  textLink={intl.formatMessage({ id: "company.our-expertise.fe-technologies.p-2-link" })}
                  textLinkText={intl.formatMessage({ id: "company.our-expertise.fe-technologies.p-2-link-text" })}
                  textPart2={intl.formatMessage({ id: "company.our-expertise.fe-technologies.p-2-2" })}
                />
              </section>
              <div className="col-md-1 d-md-block d-none"></div>
              <LogosFE />
            </section>

            {/* Back-End Section */}
            <section className="position-relative text-center expertise-item">
              <section className="position-absolute full-width bg-grey"></section>
              <SectionTitle
                className="w-100"
                dataAos="fade-up"
                dataAosDuration="1000"
                title={intl.formatMessage({ id: "company.our-expertise.be-technologies.title" })}
              />
              <TextWithLink
                dataAos="fade-up"
                dataAosDelay="300"
                dataAosDuration="1100"
                textPart1={intl.formatMessage({ id: "company.our-expertise.be-technologies.p-1-1" })}
                textLink={intl.formatMessage({ id: "company.our-expertise.be-technologies.p-1-link" })}
                textLinkText={intl.formatMessage({ id: "company.our-expertise.be-technologies.p-1-link-text" })}
                textPart2={intl.formatMessage({ id: "company.our-expertise.be-technologies.p-1-2" })}
              />
              <TextWithLink
                dataAos="fade-up"
                dataAosDelay="400"
                dataAosDuration="1200"
                textPart1={intl.formatMessage({ id: "company.our-expertise.be-technologies.p-2-1" })}
                textLink=""
                textLinkText=""
                textPart2=""
              />
              <LogosBE />
            </section>

            {/* Data Storage Section */}
            <section className="position-relative d-flex flex-wrap align-items-center expertise-item">
              <section className="position-absolute full-width bg-whitening"></section>
              <LogosDataStorage />

              <div className="col-md-1 d-lg-block d-none"></div>
              <section
                className="p-0 text-sm-left text-center col-md-5 col-12 ordering-tablet"
                data-aos="fade-up"
                data-aos-offset="150"
                data-aos-duration="1400"
              >
                <SectionTitle
                  className="position-relative"
                  dataAos=""
                  dataAosDuration=""
                  title={intl.formatMessage({ id: "company.our-expertise.data-storage.title" })}
                />
                <TextWithLink
                  dataAos=""
                  dataAosDelay=""
                  dataAosDuration=""
                  textPart1={intl.formatMessage({ id: "company.our-expertise.data-storage.p-1-1" })}
                  textLink=""
                  textLinkText=""
                  textPart2=""
                />
                <TextWithLink
                  dataAos=""
                  dataAosDelay=""
                  dataAosDuration=""
                  textPart1={intl.formatMessage({ id: "company.our-expertise.data-storage.p-2-1" })}
                  textLink={intl.formatMessage({ id: "company.our-expertise.data-storage.p-2-link" })}
                  textLinkText={intl.formatMessage({ id: "company.our-expertise.data-storage.p-2-link-text" })}
                  textPart2={intl.formatMessage({ id: "company.our-expertise.data-storage.p-2-2" })}
                />
              </section>
            </section>

            {/* Infrastructure */}
            <section className="position-relative text-center expertise-item">
              <section className="position-absolute full-width bg-grey"></section>
              <SectionTitle
                className="w-100"
                dataAos="fade-up"
                dataAosDuration="1000"
                title={intl.formatMessage({ id: "company.our-expertise.infrastructure.title" })}
              />
              <TextWithLink
                dataAos="fade-up"
                dataAosDelay="300"
                dataAosDuration="1100"
                textPart1={intl.formatMessage({ id: "company.our-expertise.infrastructure.p-1-1" })}
                textLink=""
                textLinkText=""
                textPart2=""
              />
              <TextWithLink
                dataAos="fade-up"
                dataAosDelay="400"
                dataAosDuration="1200"
                textPart1={intl.formatMessage({ id: "company.our-expertise.infrastructure.p-2-1" })}
                textLink=""
                textLinkText=""
                textPart2=""
              />
              <LogosInfrastructure />
            </section>
          </div>
        </div>
      </section>
      </main>
    </Layout>
  )
}
export default injectIntl(ourExpertise)
