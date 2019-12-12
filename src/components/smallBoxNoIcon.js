import React from 'react'

export default function smallBoxNoIcon(props) {
    return (
        <div
            className="fixed-model-blue-box fixed-model-usage-item"
            data-aos="fade-left"
            data-aos-duration="1200"
            data-aos-delay={props.dataAosDelay}
        >
            <p>{props.number}</p>
            <p className="text-uppercase" itemProp="text">
                {props.text}
            </p>
        </div>
    )
}
