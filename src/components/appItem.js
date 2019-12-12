import React from "react"

import CheckedLine from "../components/checkedLine"

export default function appItem(props) {
    return (
        <div
            className="ing-app-item"
            data-aos="fade-up"
            data-aos-offset="0"
            data-aos-duration={props.dataAosDuration}
            data-aos-delay={props.dataAosDelay}
        >
            <img
                className="img-fluid"
                src={props.img}
                alt={props.imgAlt}
                itemProp="image"
            />
            <h3 className="text-uppercase text-md-left text-center" itemProp="text">
                {props.title}
            </h3>
            <p className="text-md-left text-center" itemProp="text">
                {props.text}
            </p>

            <CheckedLine
                wrapClass="d-md-flex align-items-center d-sm-block d-flex"
                className=""
                text={props.check1}
                imageAlt={props.checkAlt}
            />
            <CheckedLine
                wrapClass="d-md-flex align-items-md-center"
                className=""
                text={props.check2}
                imageAlt={props.checkAlt}
            />
            <CheckedLine
                wrapClass="d-md-flex align-items-center d-sm-block d-flex"
                className=""
                text={props.check3}
                imageAlt={props.checkAlt}
            />
        </div>
    )
}