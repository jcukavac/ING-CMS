import React from 'react'
import { injectIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Headline from "../components/headlineCompany"
import SectionTitle from "../components/sectionTitle"
import CheckedLine from "../components/checkedLine"
import SmallBoxWithIcon from "../components/smallBoxWithIcon"
import NumberedBox from "../components/numberedBox"
import CtaSection from "../components/cta"
import ImageComponent from "../components/imageComponent"

import ImageOffice from "../images/office.png"
import ImageMeta from "../images/og-images/og-about-us.jpg"
import ImageCitationMisko from "../images/person/misko.png"
import ImageTransformation from "../images/icons/transformation.svg"
import ImagePartnership from "../images/icons/partnership.svg"
import ImageFullcycle from "../images/icons/fullcycle.svg"

// import '../styles/responsive/_desktop-laptop.scss';
import '../styles/pages/company/about.scss';

const company = ({ intl }) => { 
    return (
      <Layout>
        <main>
        <SEO
          title={intl.formatMessage({ id: "company.about-us.meta.title" })}
          description={intl.formatMessage({ id: "company.about-us.meta.description" })}
          link={intl.formatMessage({ id: "company.about-us.meta.link" })}
          image={ImageMeta}
        />

        <div className="container">
          <div className="row">
            <Headline
              wrapperClasses="d-flex flex-wrap flew-row align-items-center headline-wrapper ing-headline about-us-headline"
              innerWrapClasses="pl-0 col-xl-5 col-lg-10 col-md-8 col-12 about-ing-headline js-parallax-text"
              title={intl.formatMessage({
                id: "company.about-us.main-heading",
              })}
              description={intl.formatMessage({
                id: "company.about-us.heading",
              })}
              link={intl.formatMessage({ id: "company.about-us.meta.link" })}
              imgWrapClasses="col-xl-7 col-12 p-0 ing-world-map js-parallax-image"
              imgClasses="position-relative"
              img={ImageOffice}
              imgAlt="Ing office"
            />
            <div className="d-none">
              <ImageComponent />
            </div>
            <section className="d-flex flex-wrap flex-row position-relative bg-color about-ing-wrapper">
              <SectionTitle
                className="w-100"
                dataAos="fade-up"
                dataAosDuration="1000"
                title={intl.formatMessage({
                  id: "company.about-us.who-are-we.title",
                })}
              />
              <section
                className="p-0 col-md-5 col-12"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <p itemProp="text">
                  {" "}
                  {intl.formatMessage({
                    id: "company.about-us.who-are-we.text-part1",
                  })}{" "}
                </p>
                <p itemProp="text">
                  {" "}
                  {intl.formatMessage({
                    id: "company.about-us.who-are-we.text-part2",
                  })}{" "}
                </p>
                <p itemProp="text">
                  {" "}
                  {intl.formatMessage({
                    id: "company.about-us.who-are-we.text-part3",
                  })}{" "}
                </p>
              </section>

              <div className="col-md-1"></div>

              <section
                className="p-0 col-md-6 col-12"
                data-aos="fade-up"
                data-aos-duration="1100"
                data-aos-delay="400"
              >
                <CheckedLine
                  wrapClass="d-flex align-items-center"
                  className="text-uppercase"
                  text={intl.formatMessage({
                    id: "company.about-us.who-are-we.check1",
                  })}
                  imageAlt={intl.formatMessage({
                    id: "img-alt.check",
                  })}
                />
                <CheckedLine
                  wrapClass="d-flex align-items-center"
                  className="text-uppercase"
                  text={intl.formatMessage({
                    id: "company.about-us.who-are-we.check2",
                  })}
                  imageAlt={intl.formatMessage({
                    id: "img-alt.check",
                  })}
                />
                <CheckedLine
                  wrapClass="d-flex align-items-center"
                  className="text-uppercase"
                  text={intl.formatMessage({
                    id: "company.about-us.who-are-we.check3",
                  })}
                  imageAlt={intl.formatMessage({
                    id: "img-alt.check",
                  })}
                />
                <CheckedLine
                  wrapClass="d-flex align-items-center"
                  className="text-uppercase"
                  text={intl.formatMessage({
                    id: "company.about-us.who-are-we.check4",
                  })}
                  imageAlt={intl.formatMessage({
                    id: "img-alt.check",
                  })}
                />
                <CheckedLine
                  wrapClass="d-flex align-items-center"
                  className="text-uppercase"
                  text={intl.formatMessage({
                    id: "company.about-us.who-are-we.check5",
                  })}
                  imageAlt={intl.formatMessage({
                    id: "img-alt.check",
                  })}
                />
              </section>

              <section
                className="col-12 text-center"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="500"
              >
                <blockquote>
                  {" "}
                  "
                  {intl.formatMessage({
                    id: "company.about-us.citation",
                  })}
                  "{" "}
                </blockquote>
                <img src={ImageCitationMisko} alt="Miroljub" />
                <p className="text-uppercase"> Miroljub Bošković, CBO </p>
              </section>
            </section>
          </div>
        </div>

        {/* We Choose */}
        <section className="bg-we-chose blue-bg-gradient">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <SectionTitle
                className="text-white"
                dataAos="fade-up"
                dataAosDuration="1100"
                title={intl.formatMessage({
                  id: "company.about-us.we-chose.title",
                })}
              />
              <section
                className="col-12 d-flex flex-row justify-content-md-between justify-content-around flex-wrap we-chose-boxes"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                <SmallBoxWithIcon
                  img={ImageTransformation}
                  imgAlt={intl.formatMessage({
                    id: "company.about-us.we-chose.box1.img-alt",
                  })}
                  title={intl.formatMessage({
                    id: "company.about-us.we-chose.box1.title",
                  })}
                  text={intl.formatMessage({
                    id: "company.about-us.we-chose.box1.text",
                  })}
                />
                <SmallBoxWithIcon
                  img={ImagePartnership}
                  imgAlt={intl.formatMessage({
                    id: "company.about-us.we-chose.box2.img-alt",
                  })}
                  title={intl.formatMessage({
                    id: "company.about-us.we-chose.box2.title",
                  })}
                  text={intl.formatMessage({
                    id: "company.about-us.we-chose.box2.text",
                  })}
                />
                <SmallBoxWithIcon
                  img={ImageFullcycle}
                  imgAlt={intl.formatMessage({
                    id: "company.about-us.we-chose.box3.img-alt",
                  })}
                  title={intl.formatMessage({
                    id: "company.about-us.we-chose.box3.title",
                  })}
                  text={intl.formatMessage({
                    id: "company.about-us.we-chose.box3.text",
                  })}
                />
              </section>
            </div>
          </div>
        </section>

        {/* Ing Mission */}
        <section className="bg-whitening">
          <div className="container">
            <div className="row">
              <section className="d-flex flex-wrap flex-row ing-mission-wrapper position-relative">
                <section
                  className="col-md-6 col-12"
                  data-aos="fade-right"
                  data-aos-duration="1200"
                >
                  <SectionTitle
                    title={intl.formatMessage({
                      id: "company.about-us.mission-vision.mission-title",
                    })}
                  />
                  <p>
                    {intl.formatMessage({
                      id: "company.about-us.mission-vision.mission-text",
                    })}
                  </p>
                </section>
                <section
                  className="col-md-6 col-12"
                  data-aos="fade-right"
                  data-aos-duration="1200"
                >
                  <SectionTitle
                    title={intl.formatMessage({
                      id: "company.about-us.mission-vision.vision-title",
                    })}
                  />
                  <p>
                    {intl.formatMessage({
                      id: "company.about-us.mission-vision.vision-text",
                    })}
                  </p>
                </section>
              </section>
            </div>
          </div>
        </section>

        {/* Ing Team */}
        <section className="ing-team-wrapper">
          <div className="container">
            <div className="row text-center justify-content-md-between justify-content-around">
              <SectionTitle
                className="w-100"
                dataAos="zoom-in"
                dataAosDuration="500"
                title={intl.formatMessage({
                  id: "company.about-us.talent.title",
                })}
              />
              <NumberedBox
                wrapClassName="position-relative ing-team-desc-box"
                dataAosDuration="1200"
                dataAosDelay="500"
                boxNumber="1"
                text={intl.formatMessage({
                  id: "company.about-us.talent.text-1",
                })}
              />
              <NumberedBox
                wrapClassName="position-relative ing-team-desc-box"
                dataAosDuration="1400"
                dataAosDelay="1000"
                boxNumber="2"
                text={intl.formatMessage({
                  id: "company.about-us.talent.text-2",
                })}
              />
              <NumberedBox
                wrapClassName="position-relative ing-team-desc-box"
                dataAosDuration="1500"
                dataAosDelay="1500"
                boxNumber="3"
                text={intl.formatMessage({
                  id: "company.about-us.talent.text-3",
                })}
              />
            </div>
          </div>
        </section>
        <CtaSection text={intl.formatMessage({ id: "button.get-started" })} />
        </main>
      </Layout>
    )
}
export default injectIntl(company)