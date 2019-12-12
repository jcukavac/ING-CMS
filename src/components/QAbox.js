import React from 'react'
import { Link } from 'gatsby'

export default function QAbox(props) {
    return (
        <section className="bg-color faq-tabs-item">
            <div className="d-flex faq-question">
                <span className="rounded-circle position-relative blue-circle">
                    <span className="position-absolute text-uppercase text-white">
                        {props.questionLetter}
                    </span>
                </span>
                <h3 className="ml-auto mb-0" itemProp="text">
                    {props.question}
                </h3>
            </div>
            <div className="d-flex faq-answer">
                <span className="rounded-circle position-relative red-circle">
                    <span className="position-absolute text-uppercase text-white">
                        {props.answerLetter}
                    </span>
                </span>
                <p className="ml-auto" itemProp="text">
                    {props.answerPart1}
                    <Link to={props.answerLink}>{props.answerLinkText}</Link>                    
                    {props.answerPart2}
                </p>
            </div>
        </section>
    )
}
