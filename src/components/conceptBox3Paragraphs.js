import React from 'react'

export default function conceptBox3Paragraphs(props) {
    return (
        <section
            className="tech-force-optimum-item"
            data-aos="fade-up"
            data-aos-duration="1100"
            data-aos-delay={props.dataAosDelay}
        >
            <img
                src={props.conceptBox3ParagraphsImg}
                alt={props.conceptBox3ParagraphsImgAlt}
                itemProp="image"
            />
            <span
                itemProp="text"
                className="h3 text-uppercase"
            >
                {props.conceptBox3ParagraphsTitle}
            </span>
            <p itemProp="text"> {props.conceptBox3Description1} </p>
            <p itemProp="text"> {props.conceptBox3Description2} </p>
            {props.conceptBox3Description3 === " " ? null : <p itemProp="text"> {props.conceptBox3Description3} </p>}
        </section>
    )
}
