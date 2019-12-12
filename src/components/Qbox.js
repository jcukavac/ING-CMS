import React from "react"

import ImageQuestionMark from "../images/icons/question-mark.svg"

export default function Qbox(props) {
    return (
        <section
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay={props.dataAosDelay}
        >
            <img
                src={ImageQuestionMark}
                alt={props.ImageQuestionMarkAlt}
                itemProp="image"
            />
            <span
                className="text-uppercase"
                itemProp="text"
            >
                {props.question}
            </span>
        </section>
    )
}
