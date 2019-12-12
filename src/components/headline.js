import React from 'react'

export default function headline( props ) {
    return (
      <section className={props.wrapperClasses}>
        <div className="container">
          <div className="row">
            <section className={props.innerWrapClasses}>
              <h1 itemProp="name headline">{props.title}</h1>
              <p itemProp="description">{props.description}</p>
              <link href={props.link} itemProp="url" />
            </section>

            <section className={props.imgWrapClasses}>
              <img
                className={props.imgClasses}
                src={props.img}
                alt={props.imgAlt}
                itemProp="image"
              />
            </section>
          </div>
        </div>
      </section>
    )
}
