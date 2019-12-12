import React from "react"
import LogoWithCaption from "./logoWithCaption"

import LogoAws from "../images/icons/aws-logo.svg"
import LogoAzure from "../images/icons/azure-logo.svg"
import LogoGoogleCloud from "../images/icons/google-cloud-logo.svg"

export default function logosInfrastructure() {
    return (
        <div className="d-flex flex-wrap justify-content-center align-items-center text-center"
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="1200">
            <LogoWithCaption
                className="mx-md-3 mx-sm-2 mx-4"
                dataAos=""
                dataAosDelay=""
                dataAosDuration=""
                img={LogoAws}
                imgAlt="Aws"
                caption="Aws"
            />
            <LogoWithCaption
                className="mx-md-3 mx-sm-2 mx-4"
                dataAos=""
                dataAosDelay=""
                dataAosDuration=""
                img={LogoAzure}
                imgAlt="Azure"
                caption="Azure"
            />
            <LogoWithCaption
                className="mx-md-3 mx-sm-2 mx-4"
                dataAos=""
                dataAosDelay=""
                dataAosDuration=""
                img={LogoGoogleCloud}
                imgAlt="Google Cloud"
                caption="Google Cloud"
            />
        </div>
    )
}
