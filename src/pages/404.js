import React from "react"
import { injectIntl, Link } from "gatsby-plugin-intl"
import Helmet from "react-helmet"

import Layout from "../components/layout"
import SEO from "../components/seo"

import ImageLogo from "../images/logo.svg"
import Image404 from "../images/404-image.png"

const NotFoundPage = ({ intl }) => (
  <Layout>
    <main className="home-bg-image thank-you-wrapper">
      <Helmet
        bodyAttributes={{
          class: "p-0",
        }}
      />
      <SEO title="404: Not found" />
      <div className="container">
        <div className="w-100 d-flex justify-content-center">
          <Link to="/" className="mt-4">
            <img className="ing-logo" src={ImageLogo} alt="Ingsoftware Logo" />
          </Link>
        </div>

        <div className="row d-flex justify-content-center align-items-center flex-column">
          <section className="d-flex justify-content-center align-items-center flex-column h-100">
            <img
              src={Image404}
              alt={intl.formatMessage({ id: "error.img-alt" })}
              className="img-fluid"
            />
            <h1>{intl.formatMessage({ id: "error.title" })}</h1>
            <p>{intl.formatMessage({ id: "error.text" })}</p>
            <Link to="/" className="text-uppercase buttons btn-red">
              {intl.formatMessage({ id: "error.link" })}
            </Link>
          </section>
        </div>
      </div>
    </main>
  </Layout>
)

export default injectIntl(NotFoundPage)
