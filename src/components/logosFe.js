import React from "react"
import LogoWithCaption from "./logoWithCaption"

import LogoHTML from "../images/icons/html-logo.svg"
import LogoCSS from "../images/icons/css-logo.svg"
import LogoKnockout from "../images/icons/knockout-logo.svg"
import LogoAngular from "../images/icons/angular-logo.svg"
import LogoReact from "../images/icons/react-logo.svg"
import LogoSwift from "../images/icons/swift-logo.svg"
import LogoObjC from "../images/icons/obj-c-logo.svg"
import LogoJava from "../images/icons/mobile-java-logo.svg"
import LogoXamarin from "../images/icons/xamarin-logo.svg"


export default function logosFe() {
    return (
        <section
            className="col-md-6 col-12 text-center"
            data-aos="fade-left"
            data-aos-delay="150"
            data-aos-duration="1200"
        >
            <hr className="expertise-separator" />
            <div
                className="d-flex flex-wrap justify-content-xl-between justify-content-around align-items-end"
            >
                <h4 className="w-100 text-uppercase text-left">web:</h4>
                <LogoWithCaption
                    className="mx-xl-0 mx-lg-2 mx-md-0 mx-3"
                    dataAos=""
                    dataAosDelay=""
                    dataAosDuration=""
                    img={LogoHTML}
                    imgAlt="html5"
                    caption="HTML5"
                />
                <LogoWithCaption
                    className="mx-xl-0 mx-lg-2 mx-md-0 mx-3"
                    dataAos=""
                    dataAosDelay=""
                    dataAosDuration=""
                    img={LogoCSS}
                    imgAlt="CSS3"
                    caption="CSS3"
                />
                <LogoWithCaption
                    className="mx-xl-0 mx-lg-2 mx-md-0 mx-3"
                    dataAos=""
                    dataAosDelay=""
                    dataAosDuration=""
                    img={LogoKnockout}
                    imgAlt="Knockout"
                    caption="Knockout"
                />
                <LogoWithCaption
                    className="mx-xl-0 mx-lg-2 mx-md-0 mx-3"
                    dataAos=""
                    dataAosDelay=""
                    dataAosDuration=""
                    img={LogoAngular}
                    imgAlt="Angular"
                    caption="Angular"
                />
                <LogoWithCaption
                    className="mx-xl-0 mx-lg-2 mx-md-0 mx-3"
                    dataAos=""
                    dataAosDelay=""
                    dataAosDuration=""
                    img={LogoReact}
                    imgAlt="React"
                    caption="React"
                />
            </div>
            <hr className="expertise-separator" />
            <div
                className="d-flex flex-wrap justify-content-xl-between justify-content-around align-items-end text-center"
            >
                <h4 className="w-100 text-uppercase text-left">android/ios:</h4>
                <LogoWithCaption
                    className="mx-xl-0 mx-lg-2 mx-md-0 mx-3"
                    dataAos=""
                    dataAosDelay=""
                    dataAosDuration=""
                    img={LogoSwift}
                    imgAlt="Swift"
                    caption="Swift"
                />
                <LogoWithCaption
                    className="mx-xl-0 mx-lg-2 mx-md-0 mx-3"
                    dataAos=""
                    dataAosDelay=""
                    dataAosDuration=""
                    img={LogoReact}
                    imgAlt="React Native"
                    caption="React Native"
                />
                <LogoWithCaption
                    className="mx-xl-0 mx-lg-2 mx-md-0 mx-3"
                    dataAos=""
                    dataAosDelay=""
                    dataAosDuration=""
                    img={LogoObjC}
                    imgAlt="Objective-C"
                    caption="Objective-C"
                />
                <LogoWithCaption
                    className="mx-xl-0 mx-lg-2 mx-md-0 mx-3"
                    dataAos=""
                    dataAosDelay=""
                    dataAosDuration=""
                    img={LogoJava}
                    imgAlt="Java"
                    caption="Java"
                />
                <LogoWithCaption
                    className="mx-xl-0 mx-lg-2 mx-md-0 mx-3"
                    dataAos=""
                    dataAosDelay=""
                    dataAosDuration=""
                    img={LogoXamarin}
                    imgAlt="Xamarin"
                    caption="Xamarin"
                />
            </div>
            <hr className="expertise-separator" />
        </section>
    )
}
