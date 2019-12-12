import React from 'react'

export default function numberedBox(props) {
    return (
        <section
            className={props.wrapClassName}
            data-aos="fade-left"
            data-aos-duration={props.dataAosDuration}
            data-aos-delay={props.dataAosDelay}
        >
            <div className="d-flex align-items-center justify-content-center rounded-circle position-relative text-white">
                <div className="position-absolute rounded-circle pulsate-circle"></div>
                <span>{props.boxNumber}</span>
            </div>
            <p itemProp="text"> {props.text} </p>
        </section>
    )
}
