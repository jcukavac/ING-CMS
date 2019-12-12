import React from "react"
import { injectIntl, Link } from "gatsby-plugin-intl"


import '../styles/components/navbar.scss';

const navbar = ({ intl }) => {
  const careersDropdown = intl.messages[`header.careers.name`]
  const blogLink = intl.messages[`header.blog`]
  let careers;
  let blog;

  if (careersDropdown !== " ") {
    careers = (
      <li className={`nav-item dropdown`}>
        <Link
          className={`nav-link dropdown-toggle`}
          to="/"
          id="navbar-dropdown-careers"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {intl.formatMessage({ id: "header.careers.name" })}
        </Link>
        <div
          className={`text-capitalize dropdown-menu`}
          aria-labelledby="navbar-dropdown-careers"
        >
          <Link
            className={`dropdown-item`}
            to="/careers"
          >
            {intl.formatMessage({ id: "header.careers.jobs" })}
          </Link>
          <Link
            className={`dropdown-item`}
            to="/internships"
          >
            {intl.formatMessage({ id: "header.careers.internships" })}
          </Link>
        </div>
      </li>
    )
  } 

  if (blogLink !== " ") {
    blog = (
      <li className={`nav-item`}>
        <Link
          className={`nav-link`}
          to="/"
          // to="blog.html"
        >
          {intl.formatMessage({ id: "header.blog" })}
        </Link>
      </li>
    )
  }
    return (
      <ul className={`navbar-nav text-uppercase text-lg-left text-center`}>
        {/* Company */}
        <li className={`nav-item dropdown`}>
          {/* className={`${style.navItem} ${style.dropdown}`}> */}
          <Link
            // className={`${style.navLink} ${style.dropdownToggle}`}
            className={`nav-link dropdown-toggle`}
            to="/"
            id="navbar-dropdown-company"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {intl.formatMessage({ id: "header.company.name" })}
          </Link>
          <div
            className={`text-capitalize dropdown-menu`}
            aria-labelledby="navbar-dropdown-company"
          >
            <Link className={`dropdown-item`} to="/company">
              {intl.formatMessage({ id: "header.company.about" })}
            </Link>
            <Link className={`dropdown-item text-uppercase`} to="/faq">
              {intl.formatMessage({ id: "header.company.faq" })}
            </Link>
            <Link
              className={`dropdown-item`}
              to="/our-expertise"
            >
              {intl.formatMessage({ id: "header.company.expertise" })}
            </Link>
            <Link
              className={`dropdown-item`}
              to="/how-to-engage"
            >
              {intl.formatMessage({ id: "header.company.engagement-models" })}
            </Link>
          </div>
        </li>
        {/* How We Do IT */}
        <li className={`nav-item dropdown`}>
          <Link
            className={`nav-link dropdown-toggle`}
            to="/"
            id="navbar-dropdown-doing"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {intl.formatMessage({ id: "header.how-we-do-it.name" })}
          </Link>
          <div
            className={`text-capitalize dropdown-menu`}
            aria-labelledby="navbar-dropdown-doing"
          >
            <Link
              className={`dropdown-item`}
              to="/software-prototyping"
            >
              {intl.formatMessage({
                id: "header.how-we-do-it.software-prototyping",
              })}
            </Link>
            <Link
              className={`dropdown-item`}
              to="/custom-software-development"
            >
              {intl.formatMessage({
                id: "header.how-we-do-it.custom-software-development",
              })}
            </Link>
            <Link
              className={`dropdown-item`}
              to="/branding-and-design"
            >
              {intl.formatMessage({
                id: "header.how-we-do-it.branding-and-design",
              })}
            </Link>
          </div>
        </li>
        {/* Case Studies */}
        <li className={`nav-item`}>
          <Link
            className={`nav-link`}
            to="/case-studies"
          >
            {intl.formatMessage({ id: "header.case-studies" })}
          </Link>
        </li>
        {/* Careers */}
        {careers}
        {/* Blog */}
        {blog}
        {/* Contact Us */}
        <li className={`nav-item`}>
          <Link
            className={`nav-link`}
            to="/contact"
          >
            {intl.formatMessage({ id: "header.contact" })}
          </Link>
        </li>
        {/* Tech Force for Startups */}
        <li className={`nav-item`}>
          <Link
            className={`text-uppercase d-sm-none d-block text-center buttons reverse-btn-red`}
            to="/tech-force-for-startups"
          >
            <span>{intl.formatMessage({ id: "header.startups" })}</span>
          </Link>
        </li>
      </ul>
    )
}

export default injectIntl(navbar)



