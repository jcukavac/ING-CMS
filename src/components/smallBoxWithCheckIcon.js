import React from "react"

import ImageCircleCheckmark from "../images/icons/circle-checkmark.svg"

export default function smallBoxWithCheckIcon(props) {
    return (
        <section 
            className="d-flex flex-md-row flex-column align-items-center justify-content-center"
            data-aos="fade-left"
            data-aos-duration="1300"
            data-aos-delay={props.dataAosDelay}
        >
            <img
                className="mb-md-0 mb-2"
                src={ImageCircleCheckmark}
                alt={props.imgAlt}
                itemProp="image"
            />
            <span itemProp="text">
                {props.text1}
                <br />
                {props.text2}
            </span>
        </section>
    )
}