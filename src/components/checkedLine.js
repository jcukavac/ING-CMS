import React from 'react'

import ImageCheckmark from "../images/icons/checkmark.svg"

export default function checkedLine(props) {
    return (
        <div className={props.wrapClass}>
            <img
                src={ImageCheckmark}
                alt={props.imageAlt}
                itemProp="image"
            />
            <span className={props.className} itemProp="text">
                {props.text}
            </span>
        </div>
    )
}
