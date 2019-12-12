import React from "react"
// import { Link } from "gatsby"
import { injectIntl } from "gatsby-plugin-intl"
import { navigate } from '@reach/router'

import Layout from "../components/layout"
import SEO from "../components/seo"
import ImageComponent from "../components/imageComponent"
import Headline from "../components/headline"
import CaseStudyTestimonial from "../components/caseStudyTestimonial"
import SectionTitle from "../components/sectionTitle"
import TestimonialBox from "../components/testimonialBox"
import CtaSection from "../components/cta"

import ImageHeader from "../images/cards/skinny-22.png"
import ImageMeta from "../images/og-images/og-case-studies.jpg"

import ImageNavGbi from "../images/partners/gbi-logo-small.png"
import ImageNavBp from "../images/partners/bp-logo-small.png"
import ImageNavAuvere from "../images/partners/auvere-logo-small.png"
import ImageNavFamiliPay from "../images/partners/familipay-logo-small.png"
import ImageNavHasToBe from "../images/partners/has-to-be-logo-small.png"
import ImageNavProfitOptics from "../images/partners/profit-optics-logo-small.png"

import ImageGbi from "../images/partners/gbi-white.png"
import ImageBp from "../images/partners/bp-white.png"
import ImageAuvere from "../images/partners/auvere-white.png"
import ImageFamiliPay from "../images/partners/familipay-white.png"
import ImageHasToBe from "../images/partners/has-to-be-white.png"
import ImageProfitOptics from "../images/partners/profit-optics-white.png"

import ImagePeter from "../images/person/peter.png"
import ImageGarin from "../images/person/garin-torent.png"
import ImageGina from "../images/person/gina-love.png"
import ImageMilos from "../images/person/milos.png"
import ImageTony from "../images/person/tony-pericle.png"

import ImageEft from "../images/partners/eft-carousel.png"
import ImageActivio from "../images/partners/activio-carousel.png"
import ImageVistair from "../images/partners/vistair-carousel.png"
import ImageSwissWide from "../images/partners/swiss-wide-carousel.png"
import ImageFindologic from "../images/partners/findologic-carousel.png"
import ImageAsseco from "../images/partners/asseco-carousel.png"
import ImageSaltcreek from "../images/partners/saltcreek-carousel.png"
import ImageAsi from "../images/partners/asi-carousel.png"
import ImageOrion from "../images/partners/orion-carousel.png"
import ImageBrentonPoint from "../images/partners/brenton-point-carousel.png"
import ImageIntorel from "../images/partners/intorel-carousel.png"
import ImageBanksurance from "../images/partners/banksurance-carousel.png"
import ImagePeryton from "../images/partners/peryton-carousel.png"
import ImageNutra from "../images/partners/nutra-carousel.png"
import ImageWebelinx from "../images/partners/webelinx-carousel.png"
import ImageAttoverticale from "../images/partners/attoverticale-carousel.png"
import ImageFarma from "../images/partners/farma-carousel.png"
import ImageMonicom from "../images/partners/monicom-carousel.png"
import ImageSeavus from "../images/partners/seavus-carousel.png"
import ImageMihajlovic from "../images/partners/mihajlovic-carousel.png"
import ImageShareTv from "../images/partners/share-tv-carousel.png"
import ImageIteoSpin from "../images/partners/iteo-spin-carousel.png"

import "../styles/pages/case-studies.scss"


const caseStudies = ({ intl }) => {
    return (
        <Layout>
            <main>
            <SEO
                title={intl.formatMessage({ id: "case-studies.meta.title" })}
                description={intl.formatMessage({ id: "case-studies.meta.description" })}
                link={intl.formatMessage({ id: "case-studies.meta.link" })}
                image={ImageMeta}
            />

            <Headline
                wrapperClasses="text-sm-left text-center d-flex flex-wrap align-items-center ing-headline"
                innerWrapClasses="pl-md-0 col-md-6 col-12 align-self-center mt-md-0 mt-3 js-parallax-text"
                title={intl.formatMessage({ id: "case-studies.main-heading" })}
                description={intl.formatMessage({ id: "case-studies.heading" })}
                link={intl.formatMessage({ id: "case-studies.meta.link" })}
                imgWrapClasses="position-relative col-md-6 col-12 text-center"
                imgClasses="img-fluid js-parallax-image"
                img={ImageHeader}
                imgAlt={intl.formatMessage({ id: "case-studies.heading-img-alt" })}
            />
            <div className="d-none">
                <ImageComponent />
            </div>


            <section className="position-relative clients-navigation-wrapper">
                {/* Nav Tabs */}
                <div className="d-lg-block d-flex full-width sub-menu-wrapper sub-menu-sticky">
                    <div className="position-absolute d-lg-none d-inline-block left-carousel-overlay"></div>

                    <div className="container">
                        <div className="row flex-lg-wrap mx-lg-auto justify-content-lg-between align-items-lg-center text-lg-center flex-nowrap nav-tabs-scroll init-swiper js-back-to-top">
                            <a onClick={() => { navigate('#gbi-section') }} href="#gbi-section">
                                <img src={ImageNavGbi} alt="GBI icon" />
                            </a>
                            <a onClick={() => { navigate('#beyond-pulse-section') }} href="#beyond-pulse-section">
                                <img src={ImageNavBp} alt="Beyond Pulse icon" />
                            </a>
                            <a onClick={() => { navigate('#auvere-section') }} href="#auvere-section">
                                <img src={ImageNavAuvere} alt="Auvere icon" />
                            </a>
                            <a onClick={() => { navigate('#familipay-section') }} href="#familipay-section">
                                <img src={ImageNavFamiliPay} alt="FamiliPay icon" />
                            </a>
                            <a onClick={() => { navigate('#has-to-be-section') }} href="#has-to-be-section">
                                <img src={ImageNavHasToBe} alt="Has to Be icon" />
                            </a>
                            <a onClick={() => { navigate('#profit-optics-section') }} href="#profit-optics-section">
                                <img src={ImageNavProfitOptics} alt="Profit Optics icon" />
                            </a>
                            <a onClick={() => { navigate('#clients-more-section') }} href="#clients-more-section">
                                {intl.formatMessage({ id: "case-studies.nav-link-more" })}
                            </a>
                        </div>
                    </div>
                    <div className="position-absolute d-lg-none d-inline-block right-carousel-overlay"></div>
                </div>

                <div className="container">
                    <div className="row">
                        <CaseStudyTestimonial 
                            content="Gold Bullion International"
                            id="gbi-section"
                            logo={ImageGbi}
                            logoAlt="GBI logo"
                            companyName={intl.formatMessage({ id: "case-studies.gbi.text-bold" })}
                            aboutCompany={intl.formatMessage({ id: "case-studies.gbi.text" })}
                            problemTitle={intl.formatMessage({ id: "case-studies.gbi.problem-title" })}
                            problemText1={intl.formatMessage({ id: "case-studies.gbi.problem-text-part1" })}
                            problemText2={intl.formatMessage({ id: "case-studies.gbi.problem-text-part2" })}
                            solutionTitle={intl.formatMessage({ id: "case-studies.solution-title" })}
                            solutionText1={intl.formatMessage({ id: "case-studies.gbi.solution-text-part1" })}
                            solutionText2={intl.formatMessage({ id: "case-studies.gbi.solution-text-part2" })}
                            tech={intl.formatMessage({ id: "case-studies.technology-title" })}
                            tech1="C#"
                            tech2="ASP"
                            tech3=".NET MVC Framework"
                            tech4="C# WCF"
                            tech5="ASP.NET Web APIs"
                            tech6="Quartz .NET"
                            tech7="MS Azure Service Bus"
                            tech8="Bootstrap"
                            tech9="Sass"
                            tech10="T-SQL"
                            tech11="Windows Server"
                            tech12="MS IIS"
                            tech13="MS SQL Server"
                            teamTitle={intl.formatMessage({ id: "case-studies.team-title" })}
                            rosterWrapperClass="d-flex align-items-md-center align-items-baseline team-roster-wrapper"
                            starImgAlt={intl.formatMessage({ id: "img-alt.star" })}
                            devNumber="5 - 20 "
                            dev={intl.formatMessage({ id: "case-studies.dev" })}
                            designerNumber="2 "
                            designer={intl.formatMessage({ id: "case-studies.designers" })}
                            quote={intl.formatMessage({ id: "case-studies.gbi.quote" })}
                            quoteBold={intl.formatMessage({ id: "case-studies.gbi.quote-bold" })}
                            personImg={ImagePeter}
                            personImgAlt="GBI CTO"
                            personName="Peter"
                            personFamilyName="Custer"
                            personLink="https://www.linkedin.com/in/peter-custer-97552531/"
                            personPosition="CTO"
                            personCompany="Gold Bullion International"
                        />
                        <CaseStudyTestimonial 
                            content="Beyond Pulse"
                            id="beyond-pulse-section"
                            logo={ImageBp}
                            logoAlt="Beyond Pulse logo"
                            companyName={intl.formatMessage({ id: "case-studies.beyond-pulse.text-bold" })}
                            aboutCompany={intl.formatMessage({ id: "case-studies.beyond-pulse.text" })}
                            problemTitle={intl.formatMessage({ id: "case-studies.beyond-pulse.problem-title" })}
                            problemText1={intl.formatMessage({ id: "case-studies.beyond-pulse.problem-text-part1" })}
                            problemText2={intl.formatMessage({ id: "case-studies.beyond-pulse.problem-text-part2" })}
                            solutionTitle={intl.formatMessage({ id: "case-studies.solution-title" })}
                            solutionText1={intl.formatMessage({ id: "case-studies.beyond-pulse.solution-text-part1" })}
                            solutionText2={intl.formatMessage({ id: "case-studies.beyond-pulse.solution-text-part2" })}
                            tech={intl.formatMessage({ id: "case-studies.technology-title" })}
                            tech1="Java"
                            tech2="Spring Boot"
                            tech3="Postgre SQL"
                            tech4="Timescale DB"
                            tech5="Docker"
                            tech6="AWS"
                            tech7="Javascript"
                            tech8="Vue.js"
                            tech9="Android (Java)"
                            tech10="iOS ( Swift )"
                            tech11="Rx"
                            tech12="Realm"
                            teamTitle={intl.formatMessage({ id: "case-studies.team-title" })}
                            rosterWrapperClass="d-flex align-items-md-center align-items-baseline team-roster-wrapper"
                            starImgAlt={intl.formatMessage({ id: "img-alt.star" })}
                            devNumber="8 "
                            dev={intl.formatMessage({ id: "case-studies.dev" })}
                            designerNumber="2 "
                            designer={intl.formatMessage({ id: "case-studies.designers" })}
                            quote={intl.formatMessage({ id: "case-studies.beyond-pulse.quote" })}
                            quoteBold={intl.formatMessage({ id: "case-studies.beyond-pulse.quote-bold" })}
                            personImg={ImageGarin}
                            personImgAlt="Beyond Pulse CEO"
                            personName="Garin"
                            personFamilyName="Toren"
                            personLink="https://www.linkedin.com/in/garintoren/"
                            personPosition="CEO"
                            personCompany="Beyond Pulse"
                        />
                        <CaseStudyTestimonial
                            content="Auvere"
                            id="auvere-section"
                            logo={ImageAuvere}
                            logoAlt="Auvere logo"
                            companyName={intl.formatMessage({ id: "case-studies.auvere.text-bold" })}
                            aboutCompany={intl.formatMessage({ id: "case-studies.auvere.text" })}
                            problemTitle={intl.formatMessage({ id: "case-studies.auvere.problem-title" })}
                            problemText1={intl.formatMessage({ id: "case-studies.auvere.problem-text-part1" })}
                            problemText2={intl.formatMessage({ id: "case-studies.auvere.problem-text-part2" })}
                            solutionTitle={intl.formatMessage({ id: "case-studies.solution-title" })}
                            solutionText1={intl.formatMessage({ id: "case-studies.auvere.solution-text-part1" })}
                            solutionText2={intl.formatMessage({ id: "case-studies.auvere.solution-text-part2" })}
                            tech={intl.formatMessage({ id: "case-studies.technology-title" })}
                            tech1="HTML5"
                            tech2="CSS3"
                            tech3="Javascript"
                            tech4="jQuery"
                            tech5="Stencil"
                            tech6="BigCommerce"
                            tech7=""
                            tech8=""
                            tech9=""
                            tech10=""
                            tech11=""
                            tech12=""
                            teamTitle={intl.formatMessage({ id: "case-studies.team-title" })}
                            rosterWrapperClass="d-flex align-items-md-center align-items-baseline team-roster-wrapper"
                            starImgAlt={intl.formatMessage({ id: "img-alt.star" })}
                            devNumber="2 "
                            dev={intl.formatMessage({ id: "case-studies.dev" })}
                            designerNumber="2 "
                            designer={intl.formatMessage({ id: "case-studies.designers" })}
                            quote={intl.formatMessage({ id: "case-studies.auvere.quote" })}
                            quoteBold={intl.formatMessage({ id: "case-studies.auvere.quote-bold" })}
                            personImg={ImageGina}
                            personImgAlt="Peryton CEO"
                            personName="Gina"
                            personFamilyName="Love"
                            personLink="https://www.linkedin.com/in/gina-love-48788011a/"
                            personPosition="CEO"
                            personCompany="Auvere"
                        />
                        <CaseStudyTestimonial
                            content="Familipay"
                            id="familipay-section"
                            logo={ImageFamiliPay}
                            logoAlt="FamiliPay logo"
                            companyName={intl.formatMessage({ id: "case-studies.familipay.text-bold" })}
                            aboutCompany={intl.formatMessage({ id: "case-studies.familipay.text" })}
                            problemTitle={intl.formatMessage({ id: "case-studies.familipay.problem-title" })}
                            problemText1={intl.formatMessage({ id: "case-studies.familipay.problem-text-part1" })}
                            problemText2={intl.formatMessage({ id: "case-studies.familipay.problem-text-part2" })}
                            solutionTitle={intl.formatMessage({ id: "case-studies.solution-title" })}
                            solutionText1={intl.formatMessage({ id: "case-studies.familipay.solution-text-part1" })}
                            solutionText2={intl.formatMessage({ id: "case-studies.familipay.solution-text-part2" })}
                            tech={intl.formatMessage({ id: "case-studies.technology-title" })}
                            tech1="Vue.js"
                            tech2="Java"
                            tech3="Spring"
                            tech4="PostgreSQL"
                            tech5="Docker"
                            tech6="K8"
                            tech7="AWS"
                            tech8=""
                            tech9=""
                            tech10=""
                            tech11=""
                            tech12=""
                            teamTitle={intl.formatMessage({ id: "case-studies.team-title" })}
                            rosterWrapperClass="d-flex align-items-md-center align-items-baseline team-roster-wrapper"
                            starImgAlt={intl.formatMessage({ id: "img-alt.star" })}
                            devNumber="6 "
                            dev={intl.formatMessage({ id: "case-studies.dev" })}
                            designerNumber="1 "
                            designer={intl.formatMessage({ id: "case-studies.designer" })}
                            quote={intl.formatMessage({ id: "case-studies.familipay.quote" })}
                            quoteBold={intl.formatMessage({ id: "case-studies.familipay.quote-bold" })}
                            personImg={ImageMilos}
                            personImgAlt="Product Lead FamiliPay"
                            personName="Miloš"
                            personFamilyName="Kostić"
                            personLink="https://www.linkedin.com/in/miloskostic1/"
                            personPosition="Product Owner"
                            personCompany="FamiliPay"
                        />
                        <CaseStudyTestimonial
                            content="Has-to-Be"
                            id="has-to-be-section"
                            logo={ImageHasToBe}
                            logoAlt="Has-to-Be logo"
                            companyName={intl.formatMessage({ id: "case-studies.be-energised.text-bold" })}
                            aboutCompany={intl.formatMessage({ id: "case-studies.be-energised.text" })}
                            problemTitle={intl.formatMessage({ id: "case-studies.be-energised.problem-title" })}
                            problemText1={intl.formatMessage({ id: "case-studies.be-energised.problem-text-part1" })}
                            problemText2={intl.formatMessage({ id: "case-studies.be-energised.problem-text-part2" })}
                            solutionTitle={intl.formatMessage({ id: "case-studies.solution-title" })}
                            solutionText1={intl.formatMessage({ id: "case-studies.be-energised.solution-text-part1" })}
                            solutionText2={intl.formatMessage({ id: "case-studies.be-energised.solution-text-part2" })}
                            tech={intl.formatMessage({ id: "case-studies.technology-title" })}
                            tech1="PHP"
                            tech2="Ionic"
                            tech3="Python"
                            tech4="Angular JS"
                            tech5="Wordpress"
                            tech6="Propel"
                            tech7="Fab"
                            tech8="Docker"
                            tech9="Docker Compose"
                            tech10="MySQL"
                            tech11="CodeIgniter"
                            tech12="PHP Unit"
                            tech13="Selenium"
                            teamTitle={intl.formatMessage({ id: "case-studies.team-title" })}
                            rosterWrapperClass="d-flex align-items-center justify-content-center team-roster-wrapper"
                            starImgAlt={intl.formatMessage({ id: "img-alt.star" })}
                            devNumber="2 "
                            dev={intl.formatMessage({ id: "case-studies.dev" })}
                            designer=" "
                            quote=" "
                        />
                        <CaseStudyTestimonial
                            content="Profit Optics"
                            id="profit-optics-section"
                            logo={ImageProfitOptics}
                            logoAlt="Profit Optics logo"
                            companyName={intl.formatMessage({ id: "case-studies.profit-optics.text-bold" })}
                            aboutCompany={intl.formatMessage({ id: "case-studies.profit-optics.text" })}
                            problemTitle={intl.formatMessage({ id: "case-studies.profit-optics.problem-title" })}
                            problemText1={intl.formatMessage({ id: "case-studies.profit-optics.problem-text-part1" })}
                            problemText2={intl.formatMessage({ id: "case-studies.profit-optics.problem-text-part2" })}
                            solutionTitle={intl.formatMessage({ id: "case-studies.solution-title" })}
                            solutionText1={intl.formatMessage({ id: "case-studies.profit-optics.solution-text-part1" })}
                            solutionText2={intl.formatMessage({ id: "case-studies.profit-optics.solution-text-part2" })}
                            tech={intl.formatMessage({ id: "case-studies.technology-title" })}
                            tech1="C#"
                            tech2="ASP.NET MVC Framework"
                            tech3="ASP.NET Web APIs"
                            tech4="Quarz .NET"
                            tech5="nopCommerce"
                            tech6="Kendo UI"
                            tech7="AngularJS"
                            tech8="Redis"
                            tech9="T-SQL"
                            tech10="Windows Server"
                            tech11="MS IIS"
                            tech12="MS SQL Server"
                            teamTitle={intl.formatMessage({ id: "case-studies.team-title" })}
                            rosterWrapperClass="d-flex align-items-md-center align-items-baseline team-roster-wrapper"
                            starImgAlt={intl.formatMessage({ id: "img-alt.star" })}
                            devNumber="7 "
                            dev={intl.formatMessage({ id: "case-studies.dev" })}
                            designerNumber="1 "
                            designer={intl.formatMessage({ id: "case-studies.designer" })}
                            quote={intl.formatMessage({ id: "case-studies.profit-optics.quote" })}
                            quoteBold={intl.formatMessage({ id: "case-studies.profit-optics.quote-bold" })}
                            personImg={ImageTony}
                            personImgAlt="ProfitOptics CEO"
                            personName="Tony"
                            personFamilyName="Pericle"
                            personLink="https://www.linkedin.com/in/tony-pericle-0931862/"
                            personPosition="CEO"
                            personCompany="Profit Optics"
                        />
                    </div>
                </div>

                {/* More Clients Section */}
                <section className="blue-bg-gradient more-content-wrapper">
                    <div className="container">
                        <div className="row">
                            <a className="position-absolute" id="clients-more-section" href="/"> </a>
                            <SectionTitle
                                className="w-100 text-white text-center"
                                dataAos="fade-up"
                                dataAosDuration="1500"
                                title={intl.formatMessage({ id: "case-studies.more.title" })}
                            />

                            <section className="d-flex flex-wrap justify-content-between case-studies-more-content">
                                <TestimonialBox 
                                    dataAosDelay=""
                                    content="EFT Group"
                                    link="http://www.eft-group.net/"
                                    img={ImageEft}
                                    imgAlt="EFT logo"
                                    description={intl.formatMessage({ id: "case-studies.more.eft" })}
                                />
                                <TestimonialBox 
                                    dataAosDelay="200"
                                    content="Activio"
                                    link="https://www.activiofitness.com/"
                                    img={ImageActivio}
                                    imgAlt="Activio logo"
                                    description={intl.formatMessage({ id: "case-studies.more.activio" })}
                                />
                                <TestimonialBox 
                                    dataAosDelay="300"
                                    content="Vistair"
                                    link="https://www.vistair.com/"
                                    img={ImageVistair}
                                    imgAlt="Vistair logo"
                                    description={intl.formatMessage({ id: "case-studies.more.vistair" })}
                                />
                                <TestimonialBox 
                                    dataAosDelay=""
                                    content="SwissWide"
                                    link="http://www.swisswide.ch/"
                                    img={ImageSwissWide}
                                    imgAlt="SwissWide logo"
                                    description={intl.formatMessage({ id: "case-studies.more.swissWide" })}
                                />
                                <TestimonialBox 
                                    dataAosDelay="200"
                                    content="Findologic"
                                    link="https://www.findologic.com/"
                                    img={ImageFindologic}
                                    imgAlt="Findologic logo"
                                    description={intl.formatMessage({ id: "case-studies.more.findologic" })}
                                />
                                <TestimonialBox 
                                    dataAosDelay="200"
                                    content="Asseco SEE Group"
                                    link="https://see.asseco.com/"
                                    img={ImageAsseco}
                                    imgAlt="Asseco logo"
                                    description={intl.formatMessage({ id: "case-studies.more.asseco" })}
                                />
                                <TestimonialBox 
                                    dataAosDelay=""
                                    content="Saltcreek"
                                    link="https://saltcreek.at/"
                                    img={ImageSaltcreek}
                                    imgAlt="Saltcreek logo"
                                    description={intl.formatMessage({ id: "case-studies.more.saltcreek" })}
                                />
                                <TestimonialBox 
                                    dataAosDelay="200"
                                    content="Asset Strategies International"
                                    link="https://assetstrategies.com/"
                                    img={ImageAsi}
                                    imgAlt="Asset Strategies International logo"
                                    description={intl.formatMessage({ id: "case-studies.more.asi" })}
                                />
                                <TestimonialBox 
                                    dataAosDelay="300"
                                    content="Orion Telekom"
                                    link="https://assetstrategies.com/"
                                    img={ImageOrion}
                                    imgAlt="Orion Telekom logo"
                                    description={intl.formatMessage({ id: "case-studies.more.orion" })}
                                />
                                <TestimonialBox 
                                    dataAosDelay=""
                                    content="Brenton Point Wealth Advisors"
                                    link="https://brentonpoint.com/"
                                    img={ImageBrentonPoint}
                                    imgAlt="Brenton Point Wealth Advisors logo"
                                    description={intl.formatMessage({ id: "case-studies.more.brenton-point" })}
                                />
                                <TestimonialBox 
                                    dataAosDelay="200"
                                    content="Intorel"
                                    link="http://www.intorel.com/"
                                    img={ImageIntorel}
                                    imgAlt="Intorel logo"
                                    description={intl.formatMessage({ id: "case-studies.more.intorel" })}
                                />
                                <TestimonialBox 
                                    dataAosDelay="300"
                                    content="Banksurance"
                                    link=""
                                    img={ImageBanksurance}
                                    imgAlt="Banksurance logo"
                                    description={intl.formatMessage({ id: "case-studies.more.banksurance" })}
                                />
                                <TestimonialBox 
                                    dataAosDelay="300"
                                    content="Peryton"
                                    link="https://peryton.com/"
                                    img={ImagePeryton}
                                    imgAlt="Peryton logo"
                                    description={intl.formatMessage({ id: "case-studies.more.peryton" })}
                                />
                                <TestimonialBox 
                                    dataAosDelay="200"
                                    content="Nutracosmetic"
                                    link="https://nutracosmetic-shop.de"
                                    img={ImageNutra}
                                    imgAlt="Nutracosmetic logo"
                                    description={intl.formatMessage({ id: "case-studies.more.nutraCosmetic" })}
                                />
                                <TestimonialBox 
                                    dataAosDelay="300"
                                    content="Webelinx"
                                    link="https://www.webelinx.com/"
                                    img={ImageWebelinx}
                                    imgAlt="Webelinx logo"
                                    description={intl.formatMessage({ id: "case-studies.more.webelinx" })}
                                />
                                <TestimonialBox 
                                    dataAosDelay=""
                                    content="Atto Verticale"
                                    link="https://attoverticale.com/en/"
                                    img={ImageAttoverticale}
                                    imgAlt="Atto Verticale logo"
                                    description={intl.formatMessage({ id: "case-studies.more.atto-verticale" })}
                                />
                                <TestimonialBox 
                                    dataAosDelay=""
                                    content="Farm@"
                                    link="/"
                                    img={ImageFarma}
                                    imgAlt="Farm@ logo"
                                    description={intl.formatMessage({ id: "case-studies.more.farma" })}
                                />
                                <TestimonialBox 
                                    dataAosDelay="300"
                                    content="Monicom"
                                    link="https://monicom.rs/en/"
                                    img={ImageMonicom}
                                    imgAlt="Monicom d.o.o. logo"
                                    description={intl.formatMessage({ id: "case-studies.more.monicom" })}
                                />
                                <TestimonialBox 
                                    dataAosDelay=""
                                    content="Seavus"
                                    link="https://seavus.com/"
                                    img={ImageSeavus}
                                    imgAlt="Seavus logo"
                                    description={intl.formatMessage({ id: "case-studies.more.seavus" })}
                                />
                                <TestimonialBox 
                                    dataAosDelay="200"
                                    content="Mihajlovic Soft"
                                    link="http://www.mihajlovicsoft.rs/"
                                    img={ImageMihajlovic}
                                    imgAlt="Mihajlovic Soft logo"
                                    description={intl.formatMessage({ id: "case-studies.more.mihajlovic-soft" })}
                                />
                                <TestimonialBox 
                                    dataAosDelay="300"
                                    content="ShareTV"
                                    link="https://sharetv.com/"
                                    img={ImageShareTv}
                                    imgAlt="ShareTV logo"
                                    description={intl.formatMessage({ id: "case-studies.more.shareTV" })}
                                />
                                <TestimonialBox 
                                    dataAosDelay=""
                                    content="Iteo Spin"
                                    link="/"
                                    img={ImageIteoSpin}
                                    imgAlt="Iteo Spin doo logo"
                                    description={intl.formatMessage({ id: "case-studies.more.iteo-spin" })}
                                />
                            </section>
                        </div>
                    </div>
                </section>
            </section>


            {/* Call to Action Section */}
            <CtaSection
                text={intl.formatMessage({ id: "button.get-started" })}
            />
            </main>
        </Layout>
    )
}
export default injectIntl(caseStudies)