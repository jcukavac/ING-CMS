import React from "react"
import { injectIntl, Link } from "gatsby-plugin-intl"
import { navigate } from '@reach/router'

import Layout from "../components/layout"
import SEO from "../components/seo"
import PolicyTitle from "../components/policyTitle"

import ImageMeta from "../images/og-images/og-privacy-policy.jpg"

import "../styles/pages/privacy-cookies.scss"


const privacyPolicy = ({ intl }) => {
    return (
        <Layout>
            <main className="policy-wrapper bg-whitening">
                <SEO
                    title={intl.formatMessage({ id: "privacy-policy.meta.title" })}
                    description={intl.formatMessage({ id: "privacy-policy.meta.description" })}
                    link={intl.formatMessage({ id: "privacy-policy.meta.link" })}
                    image={ImageMeta}
                />
                <div className="container">
                    <div className="row">
                        <h1 className="w-100 text-uppercase text-center pb-5" itemProp="name headline">
                            {intl.formatMessage({ id: "privacy-policy.title" })}
                        </h1>
                        <p itemProp="description">
                            {intl.formatMessage({ id: "privacy-policy.text-part1" })}
                            <br/>
                            {intl.formatMessage({ id: "privacy-policy.text-part2" })}
                        </p>

                        <ol className="nav-tabs-scroll pl-5 js-back-to-top">
                            <li>
                                <a onClick={() => { navigate('#introducing-section') }}  href="#introducing-section">
                                    {intl.formatMessage({ id: "privacy-policy.section-title1" })};
                                </a>
                            </li>
                            <li>
                                <a onClick={() => { navigate('#types-of-cookies') }} href="#types-of-cookies">
                                    {intl.formatMessage({ id: "privacy-policy.section-title2" })};
                                </a>
                            </li>
                            <li>
                                <a onClick={() => { navigate('#cookies-collection-section') }} href="#cookies-collection-section">
                                    {intl.formatMessage({ id: "privacy-policy.section-title3" })};
                                </a>
                            </li>
                            <li>
                                <a onClick={() => { navigate('#cookies-usage-section') }} href="#cookies-usage-section">
                                    {intl.formatMessage({ id: "privacy-policy.section-title4" })};
                                </a>                                
                            </li>
                            <li>
                                <a onClick={() => { navigate('#cookies-policy-section') }} href="#cookies-policy-section">
                                    {intl.formatMessage({ id: "privacy-policy.section-title5" })};
                                </a>   
                            </li>
                            <li>
                                <a onClick={() => { navigate('#disclosure-personal-data-section') }} href="#disclosure-personal-data-section">
                                    {intl.formatMessage({ id: "privacy-policy.section-title6" })};
                                </a>   
                            </li>
                            <li>
                                <a onClick={() => { navigate('#international-transfer-section') }} href="#international-transfer-section">
                                    {intl.formatMessage({ id: "privacy-policy.section-title7" })};
                                </a>
                            </li>
                            <li>
                                <a onClick={() => { navigate('#legal-rights-section') }} href="#legal-rights-section">
                                    {intl.formatMessage({ id: "privacy-policy.section-title8" })};
                                </a>
                            </li>
                            <li>
                                <a onClick={() => { navigate('#data-security-section') }} href="#data-security-section">
                                    {intl.formatMessage({ id: "privacy-policy.section-title9" })};
                                </a>
                            </li>
                            <li>
                                <a onClick={() => { navigate('#data-retention-section') }} href="#data-retention-section">
                                    {intl.formatMessage({ id: "privacy-policy.section-title10" })};
                                </a>
                            </li>
                        </ol>
                        <p className="w-100 download-link-para" itemProp="text">
                            {intl.formatMessage({ id: "privacy-policy.text-2-part1" })}
                            <Link to={intl.formatMessage({ id: "privacy-policy.text-2-link" })} target="_blank">
                                {intl.formatMessage({ id: "privacy-policy.text-2-link-text" })}
                            </Link>
                            {intl.formatMessage({ id: "privacy-policy.text-2-part2" })}
                        </p>

                        {/* Introducing Section */}
                        <section className="policy-items">
                            <PolicyTitle 
                                className="text-center"
                                title={intl.formatMessage({ id: "privacy-policy.section-1.title" })}
                                id="introducing-section"
                            />
                            <p itemProp="text">
                                {intl.formatMessage({ id: "privacy-policy.section-1.text-1-part1" })}
                                <a className="no-click" href={intl.formatMessage({ id: "privacy-policy.section-1.text-1-link" })}>{intl.formatMessage({ id: "privacy-policy.section-1.text-1-link-text" })}</a>
                                {intl.formatMessage({ id: "privacy-policy.section-1.text-1-part2" })}
                                <a className="no-click" href={intl.formatMessage({ id: "privacy-policy.section-1.text-1-link2" })}>{intl.formatMessage({ id: "privacy-policy.section-1.text-1-link2-text" })}</a>
                                {intl.formatMessage({ id: "privacy-policy.section-1.text-1-part3" })}
                            </p>
                            <p itemProp="text"> {intl.formatMessage({ id: "privacy-policy.section-1.text-2" })} </p>
                            <p itemProp="text"> {intl.formatMessage({ id: "privacy-policy.section-1.text-3" })} </p>
                            <p itemProp="text"> {intl.formatMessage({ id: "privacy-policy.section-1.text-4" })} </p>
                            <p itemProp="text"> {intl.formatMessage({ id: "privacy-policy.section-1.text-5" })} </p>
                            <p itemProp="text">
                                {intl.formatMessage({ id: "privacy-policy.section-1.text-6-part1" })}
                                <a className="no-click" href={intl.formatMessage({ id: "privacy-policy.section-1.text-6-link" })}>{intl.formatMessage({ id: "privacy-policy.section-1.text-6-link-text" })}</a>
                                {intl.formatMessage({ id: "privacy-policy.section-1.text-6-part2" })}
                            </p>
                        </section>

                        {/* Types of Cookies */}
                        <section className="policy-items">
                            <PolicyTitle
                                className="text-center"
                                title={intl.formatMessage({ id: "privacy-policy.section-2.title" })}
                                id="types-of-cookies"
                            />
                            <ul>
                                <li itemProp="text">
                                    <strong>{intl.formatMessage({ id: "privacy-policy.section-2.point-1-bold" })}</strong>
                                    {intl.formatMessage({ id: "privacy-policy.section-2.point-1-text" })}
                                </li>
                                <li itemProp="text">
                                    <strong>{intl.formatMessage({ id: "privacy-policy.section-2.point-2-bold" })}</strong>
                                    {intl.formatMessage({ id: "privacy-policy.section-2.point-2-text" })}
                                </li>
                                <li itemProp="text">
                                    <strong>{intl.formatMessage({ id: "privacy-policy.section-2.point-3-bold" })}</strong>
                                    {intl.formatMessage({ id: "privacy-policy.section-2.point-3-text" })}
                                </li>
                                <li itemProp="text">
                                    <strong>{intl.formatMessage({ id: "privacy-policy.section-2.point-4-bold" })}</strong>
                                    {intl.formatMessage({ id: "privacy-policy.section-2.point-4-text" })}
                                </li>
                                <li itemProp="text">
                                    <strong>{intl.formatMessage({ id: "privacy-policy.section-2.point-5-bold" })}</strong>
                                    {intl.formatMessage({ id: "privacy-policy.section-2.point-5-text" })}
                                </li>
                            </ul>
                            <p itemProp="text">
                                {intl.formatMessage({ id: "privacy-policy.section-2.text-part1" })}
                                <strong>{intl.formatMessage({ id: "privacy-policy.section-2.text-bold" })}</strong>
                                {intl.formatMessage({ id: "privacy-policy.section-2.text-part2" })}
                            </p>
                        </section>

                        {/* Cookies collection section */}
                        <section className="policy-items">
                            <PolicyTitle
                                className="text-center"
                                title={intl.formatMessage({ id: "privacy-policy.section-3.title" })}
                                id="cookies-collection-section"
                            />
                            <p itemProp="text"> {intl.formatMessage({ id: "privacy-policy.section-3.text-1" })} </p>
                            <p itemProp="text">
                                {intl.formatMessage({ id: "privacy-policy.section-3.text-2-part1" })}
                                <strong>{intl.formatMessage({ id: "privacy-policy.section-3.text-2-bold" })}</strong>
                                {intl.formatMessage({ id: "privacy-policy.section-3.text-2-part2" })}
                            </p>
                            <p itemProp="text">
                                {intl.formatMessage({ id: "privacy-policy.section-3.text-3-part1" })}
                                <strong>{intl.formatMessage({ id: "privacy-policy.section-3.text-3-bold" })}</strong>
                                {intl.formatMessage({ id: "privacy-policy.section-3.text-3-part2" })}
                                <br/>
                                {intl.formatMessage({ id: "privacy-policy.section-3.text-3-part3" })}
                                <em>{intl.formatMessage({ id: "privacy-policy.section-3.text-3-em" })}</em>
                                {intl.formatMessage({ id: "privacy-policy.section-3.text-3-part4" })}
                            </p>
                        </section>

                        {/* Personal data usage section */}
                        <section className="policy-items">
                            <PolicyTitle
                                className="text-center"
                                title={intl.formatMessage({ id: "privacy-policy.section-4.title" })}
                                id="cookies-usage-section"
                            />
                            <p itemProp="text"> {intl.formatMessage({ id: "privacy-policy.section-4.text-1" })} </p>
                            <p itemProp="text"> {intl.formatMessage({ id: "privacy-policy.section-4.text-2" })} </p>
                            <p itemProp="text"> {intl.formatMessage({ id: "privacy-policy.section-4.text-3" })} </p>
                            <div className="table-responsive-lg">
                                <table className="table">
                                    <thead>
                                        <th> {intl.formatMessage({ id: "privacy-policy.section-4.th-1" })} </th>
                                        <th> {intl.formatMessage({ id: "privacy-policy.section-4.th-2" })} </th>
                                        <th> {intl.formatMessage({ id: "privacy-policy.section-4.th-3" })} </th>
                                        <th> {intl.formatMessage({ id: "privacy-policy.section-4.th-4" })} </th>
                                        <th> {intl.formatMessage({ id: "privacy-policy.section-4.th-5" })} </th>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="align-middle"> {intl.formatMessage({ id: "privacy-policy.section-4.row1-1" })} </td>
                                            <td className="align-middle"> 
                                                {intl.formatMessage({ id: "privacy-policy.section-4.row1-2-a" })}
                                                <br/>
                                                {intl.formatMessage({ id: "privacy-policy.section-4.row1-2-b" })}
                                            </td>
                                            <td className="align-middle"> {intl.formatMessage({ id: "privacy-policy.section-4.row1-3" })} </td>
                                            <td className="align-middle"> {intl.formatMessage({ id: "privacy-policy.section-4.row1-4" })} </td>
                                            <td className="align-middle"> {intl.formatMessage({ id: "privacy-policy.section-4.row1-5" })} </td>
                                        </tr>
                                        <tr>
                                            <td className="align-middle"> {intl.formatMessage({ id: "privacy-policy.section-4.row2-1" })} </td>
                                            <td className="align-middle"> 
                                                {intl.formatMessage({ id: "privacy-policy.section-4.row2-2-a" })}
                                                <br/>
                                                {intl.formatMessage({ id: "privacy-policy.section-4.row2-2-b" })}
                                                <br/>
                                                {intl.formatMessage({ id: "privacy-policy.section-4.row2-2-c" })}
                                            </td>
                                            <td className="align-middle"> {intl.formatMessage({ id: "privacy-policy.section-4.row2-3" })} </td>
                                            <td className="align-middle"> {intl.formatMessage({ id: "privacy-policy.section-4.row2-4" })} </td>
                                            <td className="align-middle"> {intl.formatMessage({ id: "privacy-policy.section-4.row2-5" })} </td>
                                        </tr>
                                        <tr>
                                            <td className="align-middle"> {intl.formatMessage({ id: "privacy-policy.section-4.row3-1" })} </td>
                                            <td className="align-middle"> 
                                                {intl.formatMessage({ id: "privacy-policy.section-4.row3-2-a" })}
                                                <br/>
                                                {intl.formatMessage({ id: "privacy-policy.section-4.row3-2-b" })}
                                                <br/>
                                                {intl.formatMessage({ id: "privacy-policy.section-4.row3-2-c" })}
                                                <br/>
                                                {intl.formatMessage({ id: "privacy-policy.section-4.row3-2-d" })}
                                                <br/>
                                                {intl.formatMessage({ id: "privacy-policy.section-4.row3-2-e" })}
                                                <br/>
                                                {intl.formatMessage({ id: "privacy-policy.section-4.row3-2-f" })}
                                            </td>
                                            <td className="align-middle"> {intl.formatMessage({ id: "privacy-policy.section-4.row3-3" })} </td>
                                            <td className="align-middle"> {intl.formatMessage({ id: "privacy-policy.section-4.row3-4" })} </td>
                                            <td className="align-middle"> {intl.formatMessage({ id: "privacy-policy.section-4.row3-5" })} </td>
                                        </tr>
                                        <tr>
                                            <td className="align-middle"> {intl.formatMessage({ id: "privacy-policy.section-4.row4-1" })} </td>
                                            <td className="align-middle">
                                                {intl.formatMessage({ id: "privacy-policy.section-4.row4-2-a" })}
                                                <br />
                                                {intl.formatMessage({ id: "privacy-policy.section-4.row4-2-b" })}
                                            </td>
                                            <td className="align-middle"> {intl.formatMessage({ id: "privacy-policy.section-4.row4-3" })} </td>
                                            <td className="align-middle"> {intl.formatMessage({ id: "privacy-policy.section-4.row4-4" })} </td>
                                            <td className="align-middle"> {intl.formatMessage({ id: "privacy-policy.section-4.row4-5" })} </td>
                                        </tr>
                                        <tr>
                                            <td className="align-middle"> {intl.formatMessage({ id: "privacy-policy.section-4.row5-1" })} </td>
                                            <td className="align-middle">
                                                {intl.formatMessage({ id: "privacy-policy.section-4.row5-2-a" })}
                                                <br />
                                                {intl.formatMessage({ id: "privacy-policy.section-4.row5-2-b" })}
                                                <br />
                                                {intl.formatMessage({ id: "privacy-policy.section-4.row5-2-c" })}
                                                <br />
                                                {intl.formatMessage({ id: "privacy-policy.section-4.row5-2-d" })}
                                                <br />
                                                {intl.formatMessage({ id: "privacy-policy.section-4.row5-2-e" })}
                                            </td>
                                            <td className="align-middle"> {intl.formatMessage({ id: "privacy-policy.section-4.row5-3" })} </td>
                                            <td className="align-middle"> {intl.formatMessage({ id: "privacy-policy.section-4.row5-4" })} </td>
                                            <td className="align-middle"> {intl.formatMessage({ id: "privacy-policy.section-4.row5-5" })} </td>
                                        </tr>                           
                                    </tbody>
                                </table>
                            </div>
                            <p itemProp="text"> {intl.formatMessage({ id: "privacy-policy.section-4.text-4" })} </p>
                        </section>

                        {/* Cookies Policy */}
                        <section className="w-100 policy-items">
                            <PolicyTitle
                                className="text-center"
                                title={intl.formatMessage({ id: "privacy-policy.section-5.title" })}
                                id="cookies-policy-section"
                            />
                            <p itemProp="text">
                                {intl.formatMessage({ id: "privacy-policy.section-5.text-part1" })}
                                <a href={intl.formatMessage({ id: "privacy-policy.section-5.text-link" })}><em>{intl.formatMessage({ id: "privacy-policy.section-5.text-link-text" })}</em></a>
                                {intl.formatMessage({ id: "privacy-policy.section-5.text-part2" })}
                            </p>
                        </section>

                        {/* Disclosures of personal data section */}
                        <section className="policy-items">
                            <PolicyTitle
                                className="text-center"
                                title={intl.formatMessage({ id: "privacy-policy.section-6.title" })}
                                id="disclosure-personal-data-section"
                            />
                            <p itemProp="text"> {intl.formatMessage({ id: "privacy-policy.section-6.text-1" })} </p>
                            <p itemProp="text"> {intl.formatMessage({ id: "privacy-policy.section-6.text-2" })} </p>
                        </section>

                        {/* International Transfers section */}
                        <section className="policy-items">
                            <PolicyTitle
                                className="text-center"
                                title={intl.formatMessage({ id: "privacy-policy.section-7.title" })}
                                id="international-transfer-section"
                            />
                            <p itemProp="text">
                                {intl.formatMessage({ id: "privacy-policy.section-7.text-1-part1" })}
                                <strong>{intl.formatMessage({ id: "privacy-policy.section-7.text-1-bold" })}</strong>
                                {intl.formatMessage({ id: "privacy-policy.section-7.text-1-part2" })}
                            </p>
                            <ul>
                                <span itemProp="text"> {intl.formatMessage({ id: "privacy-policy.section-7.text-2" })} </span>
                                <li>
                                    <span itemProp="text"> {intl.formatMessage({ id: "privacy-policy.section-7.point-1" })} </span>
                                    <a target="_blank" rel="noopener noreferrer" href={intl.formatMessage({ id: "privacy-policy.section-7.point-1-link" })}>{intl.formatMessage({ id: "privacy-policy.section-7.point-1-link" })}</a>
                                </li>
                                <li>
                                    <span itemProp="text"> {intl.formatMessage({ id: "privacy-policy.section-7.point-2" })} </span>
                                    <a target="_blank" rel="noopener noreferrer" href={intl.formatMessage({ id: "privacy-policy.section-7.point-2-link" })}>{intl.formatMessage({ id: "privacy-policy.section-7.point-2-link" })}</a>
                                </li>
                                <li>
                                    <span itemProp="text"> {intl.formatMessage({ id: "privacy-policy.section-7.point-3" })} </span>
                                    <a target="_blank" rel="noopener noreferrer" href={intl.formatMessage({ id: "privacy-policy.section-7.point-3-link" })}>{intl.formatMessage({ id: "privacy-policy.section-7.point-3-link" })}</a>
                                </li>
                            </ul>
                        </section>

                        {/* Legal rights section */}
                        <section className="policy-items">
                            <PolicyTitle
                                className="text-center"
                                title={intl.formatMessage({ id: "privacy-policy.section-8.title" })}
                                id="legal-rights-section"
                            />
                            <p itemProp="text"> {intl.formatMessage({ id: "privacy-policy.section-8.text-1" })} </p>
                            <p itemProp="text"> {intl.formatMessage({ id: "privacy-policy.section-8.text-2" })} </p>
                            <p itemProp="text">
                                <strong>{intl.formatMessage({ id: "privacy-policy.section-8.text-3-bold" })}</strong>
                                {intl.formatMessage({ id: "privacy-policy.section-8.text-3" })}
                            </p>
                            <p itemProp="text">
                                <strong>{intl.formatMessage({ id: "privacy-policy.section-8.text-4-bold" })}</strong>
                                {intl.formatMessage({ id: "privacy-policy.section-8.text-4" })}
                            </p>
                            <p itemProp="text">
                                <strong>{intl.formatMessage({ id: "privacy-policy.section-8.text-5-bold" })}</strong>
                                {intl.formatMessage({ id: "privacy-policy.section-8.text-5" })}
                            </p>
                            <p itemProp="text">
                                <strong>{intl.formatMessage({ id: "privacy-policy.section-8.text-6-bold" })}</strong>
                                {intl.formatMessage({ id: "privacy-policy.section-8.text-6" })}
                            </p>
                            <p itemProp="text">
                                <strong>{intl.formatMessage({ id: "privacy-policy.section-8.text-7-bold" })}</strong>
                                {intl.formatMessage({ id: "privacy-policy.section-8.text-7" })}
                            </p>
                            <p itemProp="text">
                                <strong>{intl.formatMessage({ id: "privacy-policy.section-8.text-8-bold" })}</strong>
                                {intl.formatMessage({ id: "privacy-policy.section-8.text-8" })}
                            </p>
                            <p itemProp="text">
                                <strong>{intl.formatMessage({ id: "privacy-policy.section-8.text-9-bold" })}</strong>
                                {intl.formatMessage({ id: "privacy-policy.section-8.text-9" })}
                            </p>
                            <p itemProp="text"> {intl.formatMessage({ id: "privacy-policy.section-8.text-10" })} </p>
                            <p itemProp="text"> {intl.formatMessage({ id: "privacy-policy.section-8.text-11" })} </p>
                            <p itemProp="text"> {intl.formatMessage({ id: "privacy-policy.section-8.text-12" })} </p>
                        </section>

                        {/* Data security section */}
                        <section className="policy-items">
                            <PolicyTitle
                                className="text-center"
                                title={intl.formatMessage({ id: "privacy-policy.section-9.title" })}
                                id="data-security-section"
                            />
                            <p itemProp="text"> {intl.formatMessage({ id: "privacy-policy.section-9.text-1" })} </p>
                            <p itemProp="text"> {intl.formatMessage({ id: "privacy-policy.section-9.text-2" })} </p>
                        </section>

                        {/* Data retention */}
                        <section className="policy-items">
                            <PolicyTitle
                                className="text-center"
                                title={intl.formatMessage({ id: "privacy-policy.section-10.title" })}
                                id="data-retention-section"
                            />
                            <p itemProp="text"> {intl.formatMessage({ id: "privacy-policy.section-10.text-1" })} </p>
                            <p itemProp="text"> {intl.formatMessage({ id: "privacy-policy.section-10.text-2" })} </p>
                            <p itemProp="text"> <strong> {intl.formatMessage({ id: "privacy-policy.section-10.text-3" })} </strong> </p>
                            <p itemProp="text">
                                {intl.formatMessage({ id: "privacy-policy.section-10.text-4-part1" })}
                                <em>{intl.formatMessage({ id: "privacy-policy.section-10.text-4-em" })}</em>
                                {intl.formatMessage({ id: "privacy-policy.section-10.text-4-part2" })}
                            </p>
                            <p itemProp="text"> {intl.formatMessage({ id: "privacy-policy.section-10.text-5" })} </p>
                        </section>
                    </div>
                </div>
            </main>
        </Layout>
    )
}
export default injectIntl(privacyPolicy)