import React from 'react'

import IconClutch from "../images/icons/clutch-icon.png"

export default function testimonialItem( props ) {
    return (
        <section
            className="text-sm-left text-center"
            itemProp="citation"
            itemScope
            itemType="https://schema.org/CreativeWork"
        >

            {props.ratingValue === "" ? null :
                (<a
                    href="https://clutch.co/profile/ingsoftware"
                    className="d-flex align-items-center bg-color clutch-rating"
                    target="_blank"
                    rel="noopener noreferrer"
                    itemProp="reviewRating"
                    itemScope
                    itemType="http://schema.org/Rating"
                    >
                        <meta itemProp="worstRating" content="1" />
                        <meta itemProp="bestRating" content="5" />
                        <span className="d-block w-100"><strong><span itemProp="ratingValue">{props.ratingValue}</span></strong> Rating on</span>
                        <img src={IconClutch} alt="Clutch icon" />
                </a>)
            }
    
            <blockquote itemProp="text">
                {props.blockquote}
            </blockquote>
            <div
                className="client-info"
                itemProp="author"
                itemScope
                itemType="https://schema.org/Person"
            >
                <img
                    src={props.testimonialImg}
                    alt={props.testimonialImgAlt}
                    itemProp="image"
                />
                <div>
                    <span className="d-block w-100 client-name">
                        <span itemProp="givenName">{props.givenName} </span>
                        <span itemProp="familyName">{props.familyName}</span>
                    </span>
                    <link
                        itemProp="sameAs"
                        href={props.link}
                    />
                    <span
                        className="d-block w-100 client-firm"
                        itemProp="jobTitle"
                    >{props.jobTitle} @ {props.firmName}
                    </span>
                </div>
            </div>
        </section>
    )
}
