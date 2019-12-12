import React from 'react'

export default function cardBox( props ) {
    return (
      <section className="card-box shadowing">
        <h2 itemProp="text">{props.title}</h2>
        <p itemProp="text">{props.textPart1}</p>
        <br />
        <p itemProp="text">{props.textPart2}</p>
      </section>
    )
}
