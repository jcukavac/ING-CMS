import React from 'react'

export default function partnersBox( props ) {
    return (
        <figure
            className="col-auto"
            itemProp="image"
            itemScope
            itemType="https://schema.org/ImageObject"
        >
            <a
                href={props.link}
                itemProp="contentUrl"
            >
                <div className="position-absolute w-100 h-100"></div>
                <img
                    className="img-fluid"
                    src={props.img}
                    alt={props.imgAlt}
                    itemProp="image"
                />
            </a>
        </figure>
    )
}
