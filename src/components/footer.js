import React from 'react'
import { injectIntl } from "gatsby-plugin-intl"

import OfficeBox from "../components/officeBox"
import FooterLinks from "../components/footerLinks"

import '../styles/components/footer.scss';

const footer = ({ intl }) => {
  return (
    <footer className="bg-whitening">
      <div className="container-fluid">
        <div className="row">
          <section
            id="office-locations"
            className="d-flex flex-row flex-wrap w-100 text-sm-left text-center"
          >
            <aside className="col-xl-7 col-sm-12 col-12 footer-aside-menu">
              <p className="h2 text-uppercase">
                {intl.formatMessage({
                  id: "footer.continent-eu.title",
                })}
              </p>
              <div className="d-flex flew-row flex-wrap europe-offices-wrapper">
                <div className="pl-sm-0 col-sm-4 col-12">
                  <OfficeBox
                    state={intl.formatMessage({
                      id: "footer.continent-eu.serbia.office",
                    })}
                    address="Tolstojeva 44"
                    postalCode="18000"
                    city="Nis"
                    country={intl.formatMessage({
                      id: "footer.continent-eu.serbia.country",
                    })}
                    phoneLink="tel:+381600777888"
                    phone="+381 60 0777 888"
                    mailLink={intl.formatMessage({
                      id: "footer.continent-eu.serbia.mailLink",
                    })}
                    mail={intl.formatMessage({
                      id: "footer.continent-eu.serbia.mail",
                    })}
                  />
                </div>
                <div className="pl-sm-0 col-sm-4 col-12">
                  <OfficeBox
                    state={intl.formatMessage({
                      id: "footer.continent-eu.austria.office",
                    })}
                    address="Jakob-Haringer-Straße 1"
                    postalCode="5020"
                    city="Salzburg"
                    country={intl.formatMessage({
                      id: "footer.continent-eu.austria.country",
                    })}
                    phoneLink="tel:+43650253783"
                    phone="+43 650 25 43 783"
                    mailLink={intl.formatMessage({
                      id: "footer.continent-eu.austria.mailLink",
                    })}
                    mail={intl.formatMessage({
                      id: "footer.continent-eu.austria.mail",
                    })}
                  />
                </div>
                <div className="pl-sm-0 col-sm-4 col-12">
                  <OfficeBox
                    state={intl.formatMessage({
                      id:
                        "footer.continent-eu.switzerland.office",
                    })}
                    address="Dammstrasse 16"
                    postalCode="6300"
                    city="Zug"
                    country={intl.formatMessage({
                      id:
                        "footer.continent-eu.switzerland.country",
                    })}
                    phoneLink="tel:+410762820432"
                    phone="+41 (0) 76 282 04 32"
                    mailLink={intl.formatMessage({
                      id:
                        "footer.continent-eu.switzerland.mailLink",
                    })}
                    mail={intl.formatMessage({
                      id: "footer.continent-eu.switzerland.mail",
                    })}
                  />
                </div>
              </div>
            </aside>

            <hr className="w-100 d-sm-none d-block" />

            <aside className="col-xl-3 col-lg-7 col-md-8 col-sm-7 col-12 footer-aside-menu">
              <p className="h2 text-uppercase">
                {intl.formatMessage({
                  id: "footer.continent-ua.title",
                })}
              </p>
              <div>
                <div>
                  <OfficeBox
                    state={intl.formatMessage({
                      id: "footer.continent-ua.office",
                    })}
                    address="174 Nassau Street Suite #207"
                    postalCode="08542"
                    city="Princeton, NJ "
                    country={intl.formatMessage({
                      id: "footer.continent-ua.country",
                    })}
                    phoneLink="tel:+16097510252"
                    phone="+1 609 751 0252"
                    mailLink={intl.formatMessage({
                      id: "footer.continent-ua.mailLink",
                    })}
                    mail={intl.formatMessage({
                      id: "footer.continent-ua.mail",
                    })}
                  />
                </div>
              </div>
            </aside>

            <hr className="w-100 d-sm-none d-block" />

            <aside className="col-xl-2 col-lg-5 col-md-4 col-sm-5 col-12 footer-aside-menu">
              <p className="h2 text-uppercase">
                {intl.formatMessage({
                  id: "footer.continent-af.title",
                })}
              </p>
              <div>
                <div>
                  <OfficeBox
                    state={intl.formatMessage({
                      id: "footer.continent-af.office",
                    })}
                    address="155 Williams Way, Msasa"
                    postalCode=""
                    city="Harare"
                    country={intl.formatMessage({
                      id: "footer.continent-af.country",
                    })}
                    phoneLink="tel:+2634446455"
                    phone="+263 4 446455"
                    mailLink={intl.formatMessage({
                      id: "footer.continent-af.mailLink",
                    })}
                    mail={intl.formatMessage({
                      id: "footer.continent-af.mail",
                    })}
                  />
                </div>
              </div>
            </aside>
          </section>

          <FooterLinks />
        </div>
      </div>
    </footer>
  )
}
export default injectIntl(footer)