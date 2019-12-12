import React from 'react'

export default function officeBox( props ) {
    return (
        <>
            <h4 className="text-uppercase">{props.state}</h4>
            <p>
                <span>{props.address}</span>,
                <br />
                <span>{props.postalCode} </span>
                <span>{props.city}</span>,
                <span> {props.country}</span>
                <br />
                T:
                <a className="no-click" href={props.phoneLink}>
                    {props.phone}
                </a>
                <br />
                <a href={props.mailLink}>
                    <span>{props.mail}</span>
                </a>
            </p>
        </>
    )
}
