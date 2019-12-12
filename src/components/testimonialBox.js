import React from 'react'

export default function testimonialBox(props) {
    return (
        <section
            className="case-studies-carousel-item"
            itemProp="exampleOfWork"
            itemScope
            itemType="https://schema.org/CreativeWork"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-offset="50"
            data-aos-delay={props.dataAosDelay}
        >
            <meta content={props.content} itemProp="name headline" />
            <a
                href={props.link}
                itemProp="url"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src={props.img} alt={props.imgAlt} itemProp="image" />
            </a>
            <p itemProp="description"> {props.description} </p>
        </section>
    )
}
