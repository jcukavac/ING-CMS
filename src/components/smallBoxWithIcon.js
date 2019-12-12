import React from 'react'

export default function smallBoxWithIcon(props) {
    return (
        <section className="col-md-4 col-12 position-relative">
            <img
                className="position-absolute"
                src={props.img}
                alt={props.imgAlt}
                itemProp="image"
            />
            <div>
                <p itemProp="text">{props.title}</p>
                <p itemProp="text">{props.text}</p>
            </div>
        </section>
    )
}