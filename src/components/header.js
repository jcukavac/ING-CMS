import React, { Component } from "react"
import { injectIntl, Link, FormattedMessage } from "gatsby-plugin-intl"
import Navbar from "./navbar"

import logo from "../images/logo.svg"


class Header extends Component {
         render() {
           return (
             <header>
               <div className={`container`}>
                 <div className={`row same-width`}>
                   {/* Overlay full-width background */}
                   <div className={`header-bg-color full-width`}></div>

                   <nav
                     // className={`navbar navbar-expand-lg same-width w-100 position-fixed`}
                     className={`navbar navbar-expand-lg same-width w-100`}
                   >
                     {/* Logo */}
                     <Link className={`navbar-brand mr-auto mr-lg-0`} to="/">
                       <img
                         className={`ing-logo`}
                         src={logo}
                         alt="Ingsoftware logo"
                       />
                     </Link>

                     {/* Hamburger btn */}
                     <button
                       className={`navbar-toggler ordering-tablet`}
                       type="button"
                       data-toggle="collapse"
                       data-target="#navbar-menu"
                       aria-controls="navbar-menu"
                       aria-expanded="false"
                       aria-label="Toggle navigation"
                     >
                       <span className={`hamburger-menu`}>
                         <span></span>
                         <span></span>
                         <span></span>
                       </span>
                     </button>

                     {/* Collapsing menu */}
                     <div
                       className={`collapse navbar-collapse justify-content-md-end`}
                       id="navbar-menu"
                     >
                       {/* Navbar goes here */}
                       <Navbar />
                     </div>

                     {/* Tech Force for Startups */}
                     <Link
                       to="/tech-force-for-startups"
                       className={`text-uppercase d-sm-block d-none buttons reverse-btn-red`}
                     >
                       <span>
                         <FormattedMessage id="header.startups" />
                       </span>
                     </Link>
                   </nav>
                 </div>
               </div>
             </header>
           )
         }
       }

export default injectIntl(Header);
