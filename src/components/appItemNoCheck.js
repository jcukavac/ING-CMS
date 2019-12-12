import React from "react"

export default function appItemNoCheck(props) {
    return (    
        <div
            className="d-flex flex-row flex-column text-md-left text-center brand-design-item"
            data-aos="fade-up"
            data-aos-offset="150"
            data-aos-duration={props.dataAosDuration}
            data-aos-delay={props.dataAosDelay}
        >
            <img
                src={props.img}
                alt={props.imgAlt}
                itemProp="image"
            />
            <h3 className="text-uppercase" itemProp="text">
                {props.title}
            </h3>
            <p itemProp="text">
                {props.text1}
            </p>
            <p itemProp="text">
                {props.text2}
            </p>
            {props.text3 === "" ? null :
                (
                    <p itemProp="text">
                        {props.text3}
                    </p>
                )
            }
        </div>
    )
}