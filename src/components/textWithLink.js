import React from 'react'
import { Link } from 'gatsby'

export default function textWithLink(props) {
    return (
        <p
            data-aos={props.dataAos}
            data-aos-delay={props.dataAosDelay}
            data-aos-duration={props.dataAosDuration}
            itemProp="text"
        >
            {props.textPart1}
            <Link to={props.textLink}>{props.textLinkText}</Link>
            {props.textPart2}
        </p>
    )
}