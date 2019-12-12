import React from 'react'
import { Link } from "gatsby"

export default function conceptBox3Links(props) {
    return (
        <section
            className="blue-box-item"
            data-aos="fade-left"
            data-aos-duration="1200"
            data-aos-delay={props.dataAosDelay}
        >
            <img
                src={props.conceptBox3LinksImg}
                alt={props.conceptBox3LinksImgAlt}
                itemProp="image"
            />
            <h3
                itemProp="name"
                className="text-white"
            >
                {props.conceptBox3LinksTitle}
            </h3>
            <p itemProp="text">
                {props.conceptBox3LinksDescriptionPart1}
                {props.conceptBox3LinksDescriptionLink1 === " " ? null :
                    (
                        <Link to={props.conceptBox3LinksDescriptionLink1}>{props.conceptBox3LinksDescriptionLink1Text}</Link>
                    )
                }
                {props.conceptBox3LinksDescriptionPart2 === " " ? null : props.conceptBox3LinksDescriptionPart2}
                {props.conceptBox3LinksDescriptionLink2 === " " ? null :
                    (
                        <Link to={props.conceptBox3LinksDescriptionLink2}>{props.conceptBox3LinksDescriptionLink2Text}</Link>
                    )
                }
                {props.conceptBox3LinksDescriptionPart3 === " " ? null : props.conceptBox3LinksDescriptionPart3}
                {props.conceptBox3LinksDescriptionLink3 === " " ? null :
                    (
                        <Link to={props.conceptBox3LinksDescriptionLink3}>{props.conceptBox3LinksDescriptionLink3Text}</Link>
                    )
                }
                {props.conceptBox3LinksDescriptionPart4 === " " ? null : props.conceptBox3LinksDescriptionPart4}
            </p>
            <p itemProp="text">
                {props.conceptBox3LinksDescription2Part1 === " " ? null : props.conceptBox3LinksDescription2Part1}
                {props.conceptBox3LinksDescription2Link === " " ? null :
                    (
                        <Link to={props.conceptBox3LinksDescription2Link}>{props.conceptBox3LinksDescription2LinkText}</Link>
                    )
                }
                {props.conceptBox3LinksDescription2Part2 === " " ? null : props.conceptBox3LinksDescription2Part2}
            </p>
        </section>
    )
}
