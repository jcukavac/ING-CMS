import React from 'react'
import { Link } from "gatsby"

export default function cta( props ) {
    return (
        <div className="container-fluid">
            <div className="row justify-content-center align-items-center bg-img-call-to-action">

                <div 
                 data-aos="zoom-in"
                 data-aos-duration="600">
                    <Link 
                        to="/" 
                        // to="contact.html" 
                        className="text-uppercase buttons btn-red">
                        {props.text}
                    </Link>
                </div>

            </div>
        </div>
    )
}
