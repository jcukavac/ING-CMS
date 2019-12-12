import React from "react"
import LogoWithCaption from "./logoWithCaption"


import LogoJava from "../images/icons/mobile-java-logo.svg"
import LogoNet from "../images/icons/net-logo.svg"
import LogoPhp from "../images/icons/php-logo.svg"
import LogoNode from "../images/icons/node-logo.svg"


export default function logosBe() {
    return (
        <div className="d-flex flex-wrap justify-content-md-center justify-content-around align-items-end text-center">
            <LogoWithCaption
                className="mx-md-3 mx-sm-0 mx-4"
                dataAos="fade-up"
                dataAosDelay="500"
                dataAosDuration="1200"
                img={LogoNet}
                imgAlt=".net"
                caption=".net"
            />
            <LogoWithCaption
                className="mx-md-3 mx-sm-0 mx-4"
                dataAos="fade-up"
                dataAosDelay="650"
                dataAosDuration="1200"
                img={LogoJava}
                imgAlt="Java"
                caption="java"
            />
            <LogoWithCaption
                className="mx-md-3 mx-sm-0 mx-4"
                dataAos="fade-up"
                dataAosDelay="800"
                dataAosDuration="1200"
                img={LogoPhp}
                imgAlt="PHP"
                caption="php"
            />
            <LogoWithCaption
                className="mx-md-3 mx-sm-0 mx-4"
                dataAos="fade-up"
                dataAosDelay="950"
                dataAosDuration="1200"
                img={LogoNode}
                imgAlt="Node JS"
                caption="Node JS"
            />
        </div>
    )
}
