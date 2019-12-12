import React from "react"
import LogoWithCaption from "./logoWithCaption"

import LogoAdobePhotoshop from "../images/icons/adobe-ps-icon.svg"
import LogoAdobeAfterEffects from "../images/icons/adobe-ae-icon.svg"
import LogoAdobeIllustrator from "../images/icons/adobe-ai-icon.svg"
import LogoInvision from "../images/icons/invision-logo.svg"
import LogoBalsamiq from "../images/icons/balsamiq-logo.svg"

export default function logosDesign() {
    return (
        <div
            className="d-flex flex-wrap justify-content-md-center justify-content-around align-items-end text-center"
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="1200"
        >
            <LogoWithCaption 
                className="mx-lg-4 mx-md-2 ms-sm-3 mx-2"
                dataAos=""
                dataAosDelay=""
                dataAosDuration=""
                img={LogoAdobePhotoshop}
                imgAlt="Adobe Photoshop"
                caption="Adobe Photoshop"
            />
            <LogoWithCaption
                className="mx-lg-4 mx-md-2 ms-sm-3 mx-2"
                dataAos=""
                dataAosDelay=""
                dataAosDuration=""
                img={LogoAdobeAfterEffects}
                imgAlt="Adobe After Effects"
                caption="Adobe After Effects"
            />
            <LogoWithCaption
                className="mx-lg-4 mx-md-2 ms-sm-3 mx-2"
                dataAos=""
                dataAosDelay=""
                dataAosDuration=""
                img={LogoAdobeIllustrator}
                imgAlt="Adobe Illustrator"
                caption="Adobe Illustrator"
            />
            <LogoWithCaption
                className="mx-lg-4 mx-md-2 ms-sm-3 mx-2"
                dataAos=""
                dataAosDelay=""
                dataAosDuration=""
                img={LogoInvision}
                imgAlt="Invision"
                caption="Invision"
            />
            <LogoWithCaption
                className="mx-lg-4 mx-md-2 ms-sm-3 mx-2"
                dataAos=""
                dataAosDelay=""
                dataAosDuration=""
                img={LogoBalsamiq}
                imgAlt="Balsamiq"
                caption="Balsamiq"
            />
        </div>
    )
}
