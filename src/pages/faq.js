import React from 'react'
import { injectIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Headline from "../components/headline"
import QAbox from "../components/QAbox"
import CtaSection from "../components/cta"
import ImageComponent from "../components/imageComponent"

import Tab from "react-bootstrap/Tab"
import Nav from "react-bootstrap/Nav"

import ImageHeader from "../images/cards/skinny-5.png"
import ImageMeta from "../images/og-images/og-faq.jpg"

import '../styles/pages/company/faq.scss';

const company = ({ intl }) => {
    return (
      <Layout>
        <main>
        <SEO
          title={intl.formatMessage({ id: "company.faq.meta.title" })}
          description={intl.formatMessage({ id: "company.faq.meta.description" })}
          link={intl.formatMessage({ id: "company.faq.meta.link" })}
          image={ImageMeta}
        />

        <Headline
          wrapperClasses="faq-wrapper-headline ing-headline"
          innerWrapClasses="pl-md-0 col-md-6 col-12 align-self-center js-parallax-text"
          title={intl.formatMessage({ id: "company.faq.main-heading" })}
          description={intl.formatMessage({ id: "company.faq.heading" })}
          link={intl.formatMessage({ id: "company.faq.meta.link" })}
          imgWrapClasses="col-md-6 col-12 text-center"
          imgClasses="img-fluid js-parallax-image"
          img={ImageHeader}
          imgAlt="Tablet"
        />
        <div className="d-none">
          <ImageComponent />
        </div>

        <section className="position-relative faq-tabs">
          <Tab.Container
            defaultActiveKey="faq-general-tabs-content"
            id="faq-pills-tab"
          >
            <div className="d-lg-block d-flex full-width sub-menu-wrapper bg-whitening">
              <div className="position-absolute d-lg-none d-inline-block left-carousel-overlay"></div>
              <div className="container">
                <Nav
                  variant="pills"
                  className="nav nav-pills justify-content-md-center align-items-center flex-lg-wrap flex-nowrap sub-menu init-swiper"
                >
                  <Nav.Item>
                    <Nav.Link
                      className="nav-link"
                      id="faq-nav-general-tabs"
                      eventKey="faq-general-tabs-content"
                      aria-controls="faq-general-tabs-content"
                      aria-selected="true"
                    >
                      {intl.formatMessage({
                        id: "company.faq.general.title",
                      })}
                    </Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link
                      className="nav-link"
                      id="faq-nav-pricing-tabs"
                      eventKey="faq-pricing-tabs-content"
                      aria-controls="faq-pricing-tabs-content"
                      aria-selected="false"
                    >
                      {intl.formatMessage({
                        id: "company.faq.pricing.title",
                      })}
                    </Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link
                      className="nav-link"
                      id="faq-nav-projects-tabs"
                      eventKey="faq-projects-tabs-content"
                      aria-controls="faq-projects-tabs-content"
                      aria-selected="false"
                    >
                      {intl.formatMessage({
                        id: "company.faq.projects.title",
                      })}
                    </Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link
                      className="nav-link"
                      id="faq-nav-expertise-tabs"
                      eventKey="faq-expertise-tabs-content"
                      aria-controls="faq-expertise-tabs-content"
                      aria-selected="false"
                    >
                      {intl.formatMessage({
                        id: "company.faq.expertise.title",
                      })}
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
              <div className="position-absolute d-lg-none d-inline-block right-carousel-overlay"></div>
            </div>

            {/* Tabs Content */}
            <div className="container">
              <div className="row">
                <Tab.Content id="pills-tab-content">
                  <Tab.Pane
                    eventKey="faq-general-tabs-content"
                    id="faq-general-tabs-content"
                    aria-labelledby="faq-nav-general-tabs"
                  >
                    <QAbox
                      questionLetter={intl.formatMessage({
                        id: "company.faq.question-letter",
                      })}
                      question={intl.formatMessage({
                        id: "company.faq.general.q-1",
                      })}
                      answerLetter={intl.formatMessage({
                        id: "company.faq.answer-letter",
                      })}
                      answerPart1={intl.formatMessage({
                        id: "company.faq.general.a-1-1",
                      })}
                      answerLink={intl.formatMessage({
                        id: "company.faq.general.a-1-link",
                      })}
                      answerLinkText={intl.formatMessage({
                        id: "company.faq.general.a-1-link-text",
                      })}
                      answerPart2={intl.formatMessage({
                        id: "company.faq.general.a-1-2",
                      })}
                    />
                    <QAbox
                      questionLetter={intl.formatMessage({
                        id: "company.faq.question-letter",
                      })}
                      question={intl.formatMessage({
                        id: "company.faq.general.q-2",
                      })}
                      answerLetter={intl.formatMessage({
                        id: "company.faq.answer-letter",
                      })}
                      answerPart1={intl.formatMessage({
                        id: "company.faq.general.a-2-1",
                      })}
                      answerLink={intl.formatMessage({
                        id: "company.faq.general.a-2-link",
                      })}
                      answerLinkText={intl.formatMessage({
                        id: "company.faq.general.a-2-link-text",
                      })}
                      answerPart2={intl.formatMessage({
                        id: "company.faq.general.a-2-2",
                      })}
                    />
                    <QAbox
                      questionLetter={intl.formatMessage({
                        id: "company.faq.question-letter",
                      })}
                      question={intl.formatMessage({
                        id: "company.faq.general.q-3",
                      })}
                      answerLetter={intl.formatMessage({
                        id: "company.faq.answer-letter",
                      })}
                      answerPart1={intl.formatMessage({
                        id: "company.faq.general.a-3-1",
                      })}
                      answerLink={intl.formatMessage({
                        id: "company.faq.general.a-3-link",
                      })}
                      answerLinkText={intl.formatMessage({
                        id: "company.faq.general.a-3-link-text",
                      })}
                      answerPart2={intl.formatMessage({
                        id: "company.faq.general.a-3-2",
                      })}
                    />
                    <QAbox
                      questionLetter={intl.formatMessage({
                        id: "company.faq.question-letter",
                      })}
                      question={intl.formatMessage({
                        id: "company.faq.general.q-4",
                      })}
                      answerLetter={intl.formatMessage({
                        id: "company.faq.answer-letter",
                      })}
                      answerPart1={intl.formatMessage({
                        id: "company.faq.general.a-4-1",
                      })}
                      answerLink={intl.formatMessage({
                        id: "company.faq.general.a-4-link",
                      })}
                      answerLinkText={intl.formatMessage({
                        id: "company.faq.general.a-4-link-text",
                      })}
                      answerPart2={intl.formatMessage({
                        id: "company.faq.general.a-4-2",
                      })}
                    />
                  </Tab.Pane>

                  <Tab.Pane
                    eventKey="faq-pricing-tabs-content"
                    className="tab-pane"
                    id="faq-pricing-tabs-content"
                    aria-labelledby="faq-nav-pricing-tabs"
                  >
                    <QAbox
                      questionLetter={intl.formatMessage({
                        id: "company.faq.question-letter",
                      })}
                      question={intl.formatMessage({
                        id: "company.faq.pricing.q-1",
                      })}
                      answerLetter={intl.formatMessage({
                        id: "company.faq.answer-letter",
                      })}
                      answerPart1={intl.formatMessage({
                        id: "company.faq.pricing.a-1-1",
                      })}
                      answerLink={intl.formatMessage({
                        id: "company.faq.pricing.a-1-link",
                      })}
                      answerLinkText={intl.formatMessage({
                        id: "company.faq.pricing.a-1-link-text",
                      })}
                      answerPart2={intl.formatMessage({
                        id: "company.faq.pricing.a-1-2",
                      })}
                    />
                    <QAbox
                      questionLetter={intl.formatMessage({
                        id: "company.faq.question-letter",
                      })}
                      question={intl.formatMessage({
                        id: "company.faq.pricing.q-2",
                      })}
                      answerLetter={intl.formatMessage({
                        id: "company.faq.answer-letter",
                      })}
                      answerPart1={intl.formatMessage({
                        id: "company.faq.pricing.a-2-1",
                      })}
                      answerLink={intl.formatMessage({
                        id: "company.faq.pricing.a-2-link",
                      })}
                      answerLinkText={intl.formatMessage({
                        id: "company.faq.pricing.a-2-link-text",
                      })}
                      answerPart2={intl.formatMessage({
                        id: "company.faq.pricing.a-2-2",
                      })}
                    />
                    <QAbox
                      questionLetter={intl.formatMessage({
                        id: "company.faq.question-letter",
                      })}
                      question={intl.formatMessage({
                        id: "company.faq.pricing.q-3",
                      })}
                      answerLetter={intl.formatMessage({
                        id: "company.faq.answer-letter",
                      })}
                      answerPart1={intl.formatMessage({
                        id: "company.faq.pricing.a-3-1",
                      })}
                      answerLink={intl.formatMessage({
                        id: "company.faq.pricing.a-3-link",
                      })}
                      answerLinkText={intl.formatMessage({
                        id: "company.faq.pricing.a-3-link-text",
                      })}
                      answerPart2={intl.formatMessage({
                        id: "company.faq.pricing.a-3-2",
                      })}
                    />
                    <QAbox
                      questionLetter={intl.formatMessage({
                        id: "company.faq.question-letter",
                      })}
                      question={intl.formatMessage({
                        id: "company.faq.pricing.q-4",
                      })}
                      answerLetter={intl.formatMessage({
                        id: "company.faq.answer-letter",
                      })}
                      answerPart1={intl.formatMessage({
                        id: "company.faq.pricing.a-4-1",
                      })}
                      answerLink={intl.formatMessage({
                        id: "company.faq.pricing.a-4-link",
                      })}
                      answerLinkText={intl.formatMessage({
                        id: "company.faq.pricing.a-4-link-text",
                      })}
                      answerPart2={intl.formatMessage({
                        id: "company.faq.pricing.a-4-2",
                      })}
                    />
                  </Tab.Pane>

                  <Tab.Pane
                    className="tab-pane"
                    id="faq-projects-tabs-content"
                    eventKey="faq-projects-tabs-content"
                    aria-labelledby="faq-nav-projects-tabs"
                  >
                    <QAbox
                      questionLetter={intl.formatMessage({
                        id: "company.faq.question-letter",
                      })}
                      question={intl.formatMessage({
                        id: "company.faq.projects.q-1",
                      })}
                      answerLetter={intl.formatMessage({
                        id: "company.faq.answer-letter",
                      })}
                      answerPart1={intl.formatMessage({
                        id: "company.faq.projects.a-1-1",
                      })}
                      answerLink={intl.formatMessage({
                        id: "company.faq.projects.a-1-link",
                      })}
                      answerLinkText={intl.formatMessage({
                        id: "company.faq.projects.a-1-link-text",
                      })}
                      answerPart2={intl.formatMessage({
                        id: "company.faq.projects.a-1-2",
                      })}
                    />
                    <QAbox
                      questionLetter={intl.formatMessage({
                        id: "company.faq.question-letter",
                      })}
                      question={intl.formatMessage({
                        id: "company.faq.projects.q-2",
                      })}
                      answerLetter={intl.formatMessage({
                        id: "company.faq.answer-letter",
                      })}
                      answerPart1={intl.formatMessage({
                        id: "company.faq.projects.a-2-1",
                      })}
                      answerLink={intl.formatMessage({
                        id: "company.faq.projects.a-2-link",
                      })}
                      answerLinkText={intl.formatMessage({
                        id: "company.faq.projects.a-2-link-text",
                      })}
                      answerPart2={intl.formatMessage({
                        id: "company.faq.projects.a-2-2",
                      })}
                    />
                    <QAbox
                      questionLetter={intl.formatMessage({
                        id: "company.faq.question-letter",
                      })}
                      question={intl.formatMessage({
                        id: "company.faq.projects.q-3",
                      })}
                      answerLetter={intl.formatMessage({
                        id: "company.faq.answer-letter",
                      })}
                      answerPart1={intl.formatMessage({
                        id: "company.faq.projects.a-3-1",
                      })}
                      answerLink={intl.formatMessage({
                        id: "company.faq.projects.a-3-link",
                      })}
                      answerLinkText={intl.formatMessage({
                        id: "company.faq.projects.a-3-link-text",
                      })}
                      answerPart2={intl.formatMessage({
                        id: "company.faq.projects.a-3-2",
                      })}
                    />
                    <QAbox
                      questionLetter={intl.formatMessage({
                        id: "company.faq.question-letter",
                      })}
                      question={intl.formatMessage({
                        id: "company.faq.projects.q-4",
                      })}
                      answerLetter={intl.formatMessage({
                        id: "company.faq.answer-letter",
                      })}
                      answerPart1={intl.formatMessage({
                        id: "company.faq.projects.a-4-1",
                      })}
                      answerLink={intl.formatMessage({
                        id: "company.faq.projects.a-4-link",
                      })}
                      answerLinkText={intl.formatMessage({
                        id: "company.faq.projects.a-4-link-text",
                      })}
                      answerPart2={intl.formatMessage({
                        id: "company.faq.projects.a-4-2",
                      })}
                    />
                  </Tab.Pane>

                  <Tab.Pane
                    className="tab-pane"
                    id="faq-expertise-tabs-content"
                    eventKey="faq-expertise-tabs-content"
                    aria-labelledby="faq-nav-expertise-tabs"
                  >
                    <QAbox
                      questionLetter={intl.formatMessage({
                        id: "company.faq.question-letter",
                      })}
                      question={intl.formatMessage({
                        id: "company.faq.expertise.q-1",
                      })}
                      answerLetter={intl.formatMessage({
                        id: "company.faq.answer-letter",
                      })}
                      answerPart1={intl.formatMessage({
                        id: "company.faq.expertise.a-1-1",
                      })}
                      answerLink={intl.formatMessage({
                        id: "company.faq.expertise.a-1-link",
                      })}
                      answerLinkText={intl.formatMessage({
                        id: "company.faq.expertise.a-1-link-text",
                      })}
                      answerPart2={intl.formatMessage({
                        id: "company.faq.expertise.a-1-2",
                      })}
                    />
                    <QAbox
                      questionLetter={intl.formatMessage({
                        id: "company.faq.question-letter",
                      })}
                      question={intl.formatMessage({
                        id: "company.faq.expertise.q-2",
                      })}
                      answerLetter={intl.formatMessage({
                        id: "company.faq.answer-letter",
                      })}
                      answerPart1={intl.formatMessage({
                        id: "company.faq.expertise.a-2-1",
                      })}
                      answerLink={intl.formatMessage({
                        id: "company.faq.expertise.a-2-link",
                      })}
                      answerLinkText={intl.formatMessage({
                        id: "company.faq.expertise.a-2-link-text",
                      })}
                      answerPart2={intl.formatMessage({
                        id: "company.faq.expertise.a-2-2",
                      })}
                    />
                    <QAbox
                      questionLetter={intl.formatMessage({
                        id: "company.faq.question-letter",
                      })}
                      question={intl.formatMessage({
                        id: "company.faq.expertise.q-3",
                      })}
                      answerLetter={intl.formatMessage({
                        id: "company.faq.answer-letter",
                      })}
                      answerPart1={intl.formatMessage({
                        id: "company.faq.expertise.a-3-1",
                      })}
                      answerLink={intl.formatMessage({
                        id: "company.faq.expertise.a-3-link",
                      })}
                      answerLinkText={intl.formatMessage({
                        id: "company.faq.expertise.a-3-link-text",
                      })}
                      answerPart2={intl.formatMessage({
                        id: "company.faq.expertise.a-3-2",
                      })}
                    />
                    <QAbox
                      questionLetter={intl.formatMessage({
                        id: "company.faq.question-letter",
                      })}
                      question={intl.formatMessage({
                        id: "company.faq.expertise.q-4",
                      })}
                      answerLetter={intl.formatMessage({
                        id: "company.faq.answer-letter",
                      })}
                      answerPart1={intl.formatMessage({
                        id: "company.faq.expertise.a-4-1",
                      })}
                      answerLink={intl.formatMessage({
                        id: "company.faq.expertise.a-4-link",
                      })}
                      answerLinkText={intl.formatMessage({
                        id: "company.faq.expertise.a-4-link-text",
                      })}
                      answerPart2={intl.formatMessage({
                        id: "company.faq.expertise.a-4-2",
                      })}
                    />
                    <QAbox
                      questionLetter={intl.formatMessage({
                        id: "company.faq.question-letter",
                      })}
                      question={intl.formatMessage({
                        id: "company.faq.expertise.q-5",
                      })}
                      answerLetter={intl.formatMessage({
                        id: "company.faq.answer-letter",
                      })}
                      answerPart1={intl.formatMessage({
                        id: "company.faq.expertise.a-5-1",
                      })}
                      answerLink={intl.formatMessage({
                        id: "company.faq.expertise.a-5-link",
                      })}
                      answerLinkText={intl.formatMessage({
                        id: "company.faq.expertise.a-5-link-text",
                      })}
                      answerPart2={intl.formatMessage({
                        id: "company.faq.expertise.a-5-2",
                      })}
                    />
                  </Tab.Pane>
                </Tab.Content>
              </div>
            </div>
          </Tab.Container>
        </section>

        <CtaSection text={intl.formatMessage({ id: "button.get-started" })} />
        </main>
      </Layout>
    )
}
export default injectIntl(company)