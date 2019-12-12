import React from 'react'

import PartnersBox from "../components/partnersBox"

import ImagePartnerActivio from "../images/partners/activio.png"
import ImagePartnerAsi from "../images/partners/asi.png"
import ImagePartnerAsseco from "../images/partners/asseco.png"
import ImagePartnerAuvere from "../images/partners/auvere.png"
import ImagePartnerBp from "../images/partners/bp.png"
import ImagePartnerBrentonPoint from "../images/partners/brenton-point.png"
import ImagePartnerEft from "../images/partners/eft.png"
import ImagePartnerFamilipay from "../images/partners/familipay.png"
import ImagePartnerFindologic from "../images/partners/findologic.png"
import ImagePartnerGbi from "../images/partners/gbi.png"
import ImagePartnerHasToBe from "../images/partners/has-to-be.png"
import ImagePartnerIntorel from "../images/partners/intorel.png"
import ImagePartnerOrion from "../images/partners/orion.png"
import ImagePartnerPhilipMorris from "../images/partners/philip-morris.png"
import ImagePartnerProfitOptics from "../images/partners/profit-optics.png"
import ImagePartnerSaltcreek from "../images/partners/saltcreek.png"
import ImagePartnerSwissWide from "../images/partners/swiss-wide.png"
import ImagePartnerVistair from "../images/partners/vistair.png"

export default function partnersSection() {
    return (
      <>
        <PartnersBox
          link="case-studies.html#gbi-section"
          img={ImagePartnerGbi}
          imgAlt="GBI icon"
        />
        <PartnersBox
          link="case-studies.html#beyond-pulse-section"
          img={ImagePartnerBp}
          imgAlt="Beyond Pulse icon"
        />
        <PartnersBox
          link="case-studies.html#auvere-section"
          img={ImagePartnerAuvere}
          imgAlt="Auvere icon"
        />
        <PartnersBox
          link="case-studies.html#familipay-section"
          img={ImagePartnerFamilipay}
          imgAlt="FamiliPay icon"
        />
        <PartnersBox
          link="case-studies.html#has-to-be-section"
          img={ImagePartnerHasToBe}
          imgAlt="Has-to-Be icon"
        />
        <PartnersBox
          link="case-studies.html#profit-optics-section"
          img={ImagePartnerProfitOptics}
          imgAlt="Profil Optics icon"
        />

        <hr className="separator" />

        <PartnersBox
          link="http://www.eft-group.net/"
          img={ImagePartnerEft}
          imgAlt="EFT Group icon"
        />
        <PartnersBox
          link="https://www.activiofitness.com/"
          img={ImagePartnerActivio}
          imgAlt="Activio icon"
        />
        <PartnersBox
          link="https://www.vistair.com/"
          img={ImagePartnerVistair}
          imgAlt="Vistair icon"
        />
        <PartnersBox
          link="http://www.swisswide.ch/"
          img={ImagePartnerSwissWide}
          imgAlt="Swiss Wide icon"
        />
        <PartnersBox
          link="https://www.pmi.com/"
          img={ImagePartnerPhilipMorris}
          imgAlt="Philip Morris icon"
        />
        <PartnersBox
          link="https://www.findologic.com/en/"
          img={ImagePartnerFindologic}
          imgAlt="Findologic icon"
        />

        <hr className="separator" />

        <PartnersBox
          link="https://see.asseco.com/"
          img={ImagePartnerAsseco}
          imgAlt="Asseco icon"
        />
        <PartnersBox
          link="https://www.saltcreek.at/en/"
          img={ImagePartnerSaltcreek}
          imgAlt="Saltcreek icon"
        />
        <PartnersBox
          link="https://assetstrategies.com/"
          img={ImagePartnerAsi}
          imgAlt="Asseco icon"
        />
        <PartnersBox
          link="https://oriontelekom.rs/"
          img={ImagePartnerOrion}
          imgAlt="Orion Telekom icon"
        />
        <PartnersBox
          link="https://brentonpoint.com/"
          img={ImagePartnerBrentonPoint}
          imgAlt="Brenton Point icon"
        />
        <PartnersBox
          link="http://www.intorel.com/"
          img={ImagePartnerIntorel}
          imgAlt="Intorel icon"
        />
      </>
    )
}
