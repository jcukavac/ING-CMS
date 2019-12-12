import React from 'react'

export default function sectionTitle( props ) {
    return (
        <h2
            className={props.className}
            data-aos={props.dataAos}
            data-aos-duration={props.dataAosDuration}
            data-aos-delay={props.dataAosDelay}
            data-aos-offset={props.dataAosOffset}
            itemProp="text"
        >
            {props.title}
        </h2>
    )
}