import React from 'react'

export default function logoWithCaption(props) {
    return (
        <figure
            itemProp="image"
            itemScope
            itemType="https://schema.org/ImageObject"
            className={props.className}
            data-aos={props.dataAos}
            data-aos-delay={props.dataAosDelay}
            data-aos-duration={props.dataAosDuration}
        >
            <img
                itemProp="contentUrl"
                src={props.img}
                alt={props.imgAlt}
            />
            <figcaption itemProp="caption" className="text-uppercase">
                {props.caption}
            </figcaption>
        </figure>
    )
}