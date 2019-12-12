import React from "react"
import { Link } from "gatsby"

import CheckedLine from "../components/checkedLine"
import SmallBoxNoIcon from "../components/smallBoxNoIcon"
import SectionTitle from "../components/sectionTitle"

export default function engagementModel(props) {
    return (    
        <section className={props.sectionWrapClass}>
            <div className="container">
                <div className="row">
                    <div
                        className="fixed-model-bracket-img-box mx-auto"
                        data-aos="fade-up"
                        data-aos-duration="1200"
                        data-aos-offset="0"
                    >
                        <img
                            src={props.img}
                            alt={props.imgAlt}
                            itemProp="image"
                        />
                    </div>
                    <SectionTitle
                        className="w-100 text-center text-uppercase"
                        dataAos="fade-up"
                        dataAosDuration="1200"
                        dataAosDelay="300"
                        dataAosOffset="0"
                        title={props.title}
                    />
                    

                    <div className="d-flex flex-wrap flex-row fixed-model-benefits-wrapper">
                        <div
                            className="col-md-5 col 12 benefits-desc-box"
                            data-aos="fade-up"
                            data-aos-duration="1200"
                            data-aos-delay="500"
                        >
                            <h3 itemProp="text">{props.benefitsQ1}</h3>
                            <CheckedLine
                                wrapClass="d-flex align-items-center"
                                className="d-flex align-items-center"
                                text={props.check1}
                                imageAlt={props.checkAlt}
                            />
                            <CheckedLine
                                wrapClass="d-flex align-items-center"
                                className="d-flex align-items-center"
                                text={props.check2}
                                imageAlt={props.checkAlt}
                            />
                            <CheckedLine
                                wrapClass="d-flex align-items-center"
                                className="d-flex align-items-center"
                                text={props.check3}
                                imageAlt={props.checkAlt}
                            />
                            <CheckedLine
                                wrapClass="d-flex align-items-center"
                                className="d-flex align-items-center"
                                text={props.check4}
                                imageAlt={props.checkAlt}
                            />

                            <p itemProp="text">{props.benefitsAnd}</p>

                            <CheckedLine
                                wrapClass="d-flex align-items-center"
                                className="d-flex align-items-center"
                                text={props.check5}
                                imageAlt={props.checkAlt}
                            />
                            <CheckedLine
                                wrapClass="d-flex align-items-center"
                                className="d-flex align-items-center"
                                text={props.check6}
                                imageAlt={props.checkAlt}
                            />
                            {props.check7 === " " ? null :
                                (
                                    <CheckedLine
                                        wrapClass="d-flex align-items-center"
                                        className="d-flex align-items-center"
                                        text={props.check7}
                                        imageAlt={props.checkAlt}
                                    />
                                )}
                        </div>
                        <div className="col-md-1 d-md-block d-none"></div>
                        <div
                            className="col-md-6 col-12 work-model-desc-box"
                            data-aos="fade-up"
                            data-aos-duration="1300"
                            data-aos-delay="600"
                        >
                            <h3 itemProp="text">{props.benefitsQ2}</h3>
                            <p itemProp="text">{props.text1}</p>
                            <p itemProp="text">
                                {props.text2Part1}
                                <Link to={props.text2Link}>{props.text2LinkText}</Link>
                                {props.text2Part2}
                            </p>
                            <p itemProp="text">{props.text3}</p>
                            <p itemProp="text">{props.text4}</p>
                        </div>
                    </div>

                    {/* Blue Boxes */}
                    <div className="d-flex flex-wrap flex-row justify-content-lg-between justify-content-md-around justify-content-center fixed-model-usage-wrapper">
                        <SectionTitle
                            className="w-100 text-center"
                            dataAos="zoom-in"
                            dataAosDuration="1000"
                            dataAosDelay="500"
                            title={props.boxesTitle}
                        />
                        <p className="w-75 text-center mx-auto" itemProp="text"
                            data-aos="zoom-in"
                            data-aos-duration="1000"
                            data-aos-delay="500">
                            {props.blueBoxTextPart1}
                            <Link to={props.blueBoxTextLink}>{props.blueBoxTextLinkText}</Link>
                            {props.blueBoxTextPart2}
                        </p>
                        <div className="bg-transparent w-100"></div>
                        <SmallBoxNoIcon 
                            dataAosDelay={props.dataAosDelay1}
                            number="1"
                            text={props.bbText1}
                        />
                        <SmallBoxNoIcon 
                            dataAosDelay={props.dataAosDelay2}
                            number="2"
                            text={props.bbText2}
                        />
                        <SmallBoxNoIcon 
                            dataAosDelay={props.dataAosDelay3}
                            number="3"
                            text={props.bbText3}
                        />
                        <SmallBoxNoIcon 
                            dataAosDelay={props.dataAosDelay4}
                            number="4"
                            text={props.bbText4}
                        />
                        <SmallBoxNoIcon 
                            dataAosDelay={props.dataAosDelay5}
                            number="5"
                            text={props.bbText5}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
