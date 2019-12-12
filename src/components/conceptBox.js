import React from 'react'
import { Link } from "gatsby"

export default function conceptBox( props ) {
    return (
      <section
        className={props.sectionWrapClass}
        data-aos={props.dataAos}
        data-aos-duration={props.dataAosDuration}
        data-aos-delay={props.dataAosDelay}
        itemProp={props.sectionItemProp}
        itemScope
        itemType={props.itemType}
      >
        <div className={props.upperWrapClass}>
          <img
            src={props.conceptBoxImg}
            alt={props.conceptBoxImgAlt}
            itemProp="image"
          />
          <h3 
            itemProp="name"
            className={props.titleClass}
          >
            {props.conceptBoxTitle}
          </h3>
        </div>
        <p itemProp={props.itemProp}> 
          {props.conceptBoxDescriptionPart1}
          {props.conceptBoxDescriptionLink === " " ? null :
            (
              <Link to={props.conceptBoxDescriptionLink}>{props.conceptBoxDescriptionLinkText}</Link>
            )
            }
          {props.conceptBoxDescriptionPart2}
        </p>
        {props.conceptBoxBtnText === " " ? null :
          (
            <Link
              to={props.conceptBoxLink}
              className="text-uppercase buttons btn-red"
              itemProp="url"
            >
              {props.conceptBoxBtnText}
            </Link>
          )
          }
      </section>
    )
}
