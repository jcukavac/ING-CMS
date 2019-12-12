import React from "react"

import ImageStar from "../images/icons/star.svg"

export default function caseStudyTestimonial(props) {
    return (
        <section
            className="position-relative clients-item"
            itemProp="exampleOfWork"
            itemScope
            itemType="https://schema.org/CreativeWork">
            <meta itemProp="name headline" content={props.content}/>
            <a className="position-absolute" id={props.id} href="/"> </a>
            <section className="position-absolute full-width bg-whitening"></section>

            <div className="full-width blue-bg-gradient clients-image-box">
                <img
                    src={props.logo}
                    className="d-block"
                    alt={props.logoAlt}
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                    data-aos-offset="0"
                    itemProp="image"
                />
                <p
                    className="text-center"
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                    data-aos-offset="0"
                    data-aos-delay="200"
                    itemProp="description"
                >
                    <strong><em>{props.companyName}</em></strong> {props.aboutCompany}</p>
            </div>

            <div className="d-flex flex-wrap clients-info-box">
                <section
                    className="p-0 col-md-5 col-12"
                    data-aos="fade-up"
                    data-aos-duration="1100"
                    data-aos-delay="300"
                >
                    <h3 className="position-relative" itemProp="text">
                        {props.problemTitle}
                    </h3>
                    <p itemProp="text">{props.problemText1}</p>
                    {props.problemText2 === " " ? null : ( <p itemProp="text">{props.problemText2}</p> )}
                </section>
                <div className="col-md-1 d-md-block d-none"></div>
                <section
                    className="col-md-6 col-12"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                >
                    <h3 className="position-relative" itemProp="text">
                        {props.solutionTitle}
                    </h3>
                    <p itemProp="text"><strong>{props.solutionText1}</strong></p>
                    {props.solutionText2 === " " ? null : (<p itemProp="text">{props.solutionText2}</p>)}
                </section>
            </div>

            <hr className="position-relative expertise-separator" />

            {/* Clients Tech Used */}
            <div
                className="position-relative text-center clients-tech-used-box"
                data-aos="fade-up"
                data-aos-duration="1300"
                data-aos-delay="500"
                data-aos-offset="50"
            >
                <h3 itemProp="text">{props.tech}</h3>
                <p itemProp="text">
                    <span>{props.tech1}</span>
                    <span>{props.tech2}</span>
                    <span>{props.tech3}</span>
                    <span>{props.tech4}</span>
                    <span>{props.tech5}</span>
                    <span>{props.tech6}</span>
                    {props.tech7 === "" ? null : (<span>{props.tech7}</span>)}
                    {props.tech8 === "" ? null : (<span>{props.tech8}</span>)}
                    {props.tech9 === "" ? null : (<span>{props.tech9}</span>)}
                    {props.tech10 === "" ? null : (<span>{props.tech10}</span>)}
                    {props.tech11 === "" ? null : (<span>{props.tech11}</span>)}
                    {props.tech12 === "" ? null : (<span>{props.tech12}</span>)}
                    {props.tech13 === "" ? null : (<span>{props.tech13}</span>)}
                </p>
            </div>

            <hr className="position-relative expertise-separator" />

            {/* Ingsoftware Team */}
            <div className="position-relative text-center team-used-box">
                <h3 className="w-100"
                    data-aos="zoom-in"
                    data-aos-delay="550"
                    data-aos-duration="1300"
                    data-aos-offset="0"
                    itemProp="text"
                >
                    {props.teamTitle}
                </h3>
                <section className="w-75 mx-auto px-md-0 px-3">
                    <div className={props.rosterWrapperClass}>
                        <div className="p-0 col-sm-6 d-flex justify-content-center align-items-center flex-md-row flex-column">
                            <img
                                className="mb-md-0 mb-3"
                                src={ImageStar}
                                alt={props.starImgAlt}
                                data-aos="fade-right"
                                data-aos-duration="1300"
                                data-aos-offset="0"
                                data-aos-delay="600"
                            />
                                <span
                                    itemProp="text"
                                    data-aos="zoom-in"
                                    data-aos-duration="1300"
                                    data-aos-offset="0"
                                    data-aos-delay="700"
                                >
                                {props.devNumber}{props.dev}
                                </span>
                        </div>
                        {props.designer === " " ? null :
                            (
                                <div className="p-0 col-sm-6 d-flex justify-content-center align-items-center flex-md-row flex-column">
                                    <img
                                        className="mb-md-0 mb-3"
                                        src={ImageStar}
                                        alt={props.starImgAlt}
                                        data-aos="fade-right"
                                        data-aos-duration="1300"
                                        data-aos-offset="0"
                                        data-aos-delay="800"
                                    />
                                    <span
                                        itemProp="text"
                                        data-aos="zoom-in"
                                        data-aos-duration="1300"
                                        data-aos-offset="0"
                                        data-aos-delay="900"
                                    >
                                        {props.designerNumber}{props.designer}
                                    </span>
                                </div>
                            )}
                    </div>
                </section>
            </div>
            {props.quote === " " ? null :
                (
            <hr className="position-relative expertise-separator" />
                )}
            {/* Clients Testimonial */}
            {props.quote === " " ? null :
                (
            <section
                className="position-relative text-center client-testimonial"
                itemProp="citation"
                itemScope
                itemType="https://schema.org/CreativeWork"
            >
                <blockquote
                    itemProp="text"
                    data-aos="fade-left"
                    data-aos-duration="1500"
                    data-aos-offset="0"
                    data-aos-delay="1000"
                >
                    <em>‘’{props.quote}<strong>{props.quoteBold}</strong>’’</em>
                </blockquote>
                <img
                    src={props.personImg}
                    alt={props.personImgAlt}
                    data-aos="fade-right"
                    data-aos-duration="1500"
                    data-aos-delay="300"
                    data-aos-offset="0"
                />
                <p
                    itemProp="author"
                    itemScope
                    itemType="https://schema.org/Person"
                    data-aos="fade-right"
                    data-aos-duration="1500"
                    data-aos-delay="300"
                    data-aos-offset="0"
                >
                    <strong>
                        <span itemProp="givenName">{props.personName} </span>
                        <span itemProp="familyName">{props.personFamilyName},</span>
                        <link
                            itemProp="sameAs"
                            href={props.personLink}
                        />
                    </strong>
                </p>
                <p
                    data-aos="fade-right"
                    data-aos-duration="1500"
                    data-aos-delay="300"
                    data-aos-offset="0"
                >
                    {props.personPosition} @ {props.personCompany}
                </p>
            </section>
                )}
        </section>
    )
}