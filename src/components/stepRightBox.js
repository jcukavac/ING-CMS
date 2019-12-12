import React from 'react'

export default function stepRightBox(props) {
    return (
        <section className={props.wrapClassName}>
            <div className="row">
                <section
                    className={props.wrapTextClassName}
                    data-aos="fade-right"
                    data-aos-duration="1200"
                    data-aos-delay={props.textDataAosDelay}
                >
                    <div className="position-absolute rounded-circle pulsate-circle"></div>
                    <span className="d-flex justify-content-center align-items-center rounded-circle pulsate-number text-white position-relative">
                        <span>{props.stepNumber}</span>
                    </span>
                    <h3 className="text-uppercase" itemProp="text"> {props.title} </h3>
                    <p className="pr-55" itemProp="text"> {props.text} </p>
                </section>
                <section className={props.wrapImgClassName}>
                    <img
                        className="img-fluid"
                        src={props.stepBoxImg}
                        alt={props.stepBoxImgAlt}
                        itemProp="image"
                        data-aos="zoom-in-left"
                        data-aos-duration="1200"
                        data-aos-delay={props.imgDataAosDelay}
                    />
                </section>
            </div>
        </section>
    )
}
