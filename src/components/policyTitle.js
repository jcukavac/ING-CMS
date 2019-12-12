import React from 'react'

export default function policyTitle(props) {
    return (
        <h3 className={props.className} itemProp="text">
            {props.title}
            <a id={props.id} className="position-absolute" href="/"> </a>
        </h3>
    )
}