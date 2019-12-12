import React from 'react'

export default function citationBox( props ) {
    return (
        <section
            className={props.className}
            data-aos="fade-up"
            data-aos-duration={props.dataAosDuration}
            data-aos-delay={props.dataAosDelay}
            itemProp="exampleOfWork"
            itemScope
            itemType="https://schema.org/CreativeWork"
        >
            <div className="position-absolute overlay-bg-citation-box"></div>

            <div className="text-image-wrapper-quote">
                <img
                    src={props.imgSrc}
                    alt={props.imgAlt}
                    itemProp="image"
                />
                <h3
                    className="text-uppercase"
                    itemProp="headline"
                >
                    {props.title}
                  </h3>
                <p itemProp="description">
                    {props.description}
                </p>
            </div>

            <hr className="separator" />

            <div
                className="d-flex flex-sm-row flex-column flex-wrap align-items-center persons-wrapper-quote"
                itemProp="citation"
                itemScope
                itemType="https://schema.org/CreativeWork"
            >
                <img
                    className="order-sm-0 order-2"
                    src={props.personImgSrc}
                    alt={props.personImgAlt}
                    itemProp="image"
                    id={props.personImgId}
                />
                <blockquote
                    className="order-sm-0 order-1 text-sm-left text-center"
                    itemProp="text"
                >
                    {props.blockquote}
                </blockquote>
                <h5
                    className="mt-sm-0 mt-2 order-sm-0 order-3 ml-0 ml-sm-auto text-sm-left text-center text-uppercase"
                    itemProp="author"
                    itemScope
                    itemType="https://schema.org/Person"
                    itemRef={props.personNameRef}
                >
                    <span itemProp="givenName">{props.givenName} </span>
                    <span itemProp="familyName">{props.familyName}</span>,
                    <br />
                    <span itemProp="jobTitle">{props.jobTitle}</span>
                    <link
                        href={props.link}
                        itemProp="sameAs"
                    />
                </h5>
            </div>
        </section>
    )
}
