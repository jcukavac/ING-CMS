import React from "react"
import LogoWithCaption from "./logoWithCaption"

import LogoMssql from "../images/icons/mssql-logo.svg"
import LogoMysql from "../images/icons/mysql-logo.svg"
import LogoPostgresql from "../images/icons/postgresql-logo.svg"
import LogoMongo from "../images/icons/mongo-logo.svg"
import LogoKafka from "../images/icons/kafka-icon.svg"
import LogoRedis from "../images/icons/redis-logo.svg"
import LogoOracle from "../images/icons/oracle-logo.svg"
import LogoElastic from "../images/icons/elastic-logo.svg"


export default function logosDataStorage() {
    return (
        <section
            className="col-md-6 col-12 text-center"
            data-aos="fade-up"
            data-aos-offset="150"
            data-aos-delay="500"
            data-aos-duration="1200"
        >
            <hr className="expertise-separator mb-4" />
            <div
                className="d-flex flex-wrap justify-content-between align-items-end"
            >
                <LogoWithCaption
                    className="p-0 col-lg-3 col-6"
                    dataAos=""
                    dataAosDelay=""
                    dataAosDuration=""
                    img={LogoMssql}
                    imgAlt="mssql"
                    caption="mssql"
                />
                <LogoWithCaption
                    className="p-0 col-lg-3 col-6"
                    dataAos=""
                    dataAosDelay=""
                    dataAosDuration=""
                    img={LogoMysql}
                    imgAlt="mysql"
                    caption="mysql"
                />
                <LogoWithCaption
                    className="p-0 col-lg-3 col-6"
                    dataAos=""
                    dataAosDelay=""
                    dataAosDuration=""
                    img={LogoPostgresql}
                    imgAlt="Postgresql"
                    caption="PostgreSQL"
                />
                <LogoWithCaption
                    className="p-0 col-lg-3 col-6"
                    dataAos=""
                    dataAosDelay=""
                    dataAosDuration=""
                    img={LogoMongo}
                    imgAlt="Mongo"
                    caption="Mongo"
                />
            </div>
            <hr className="expertise-separator mb-4" />
            <div
                className="d-flex flex-wrap justify-content-lg-between justify-content-sm-around justify-content-between align-items-end text-center"
            >
                <LogoWithCaption
                    className="p-0 col-lg-3 col-6"
                    dataAos=""
                    dataAosDelay=""
                    dataAosDuration=""
                    img={LogoKafka}
                    imgAlt="Kafka"
                    caption="Kafka"
                />
                <LogoWithCaption
                    className="p-0 col-lg-3 col-6"
                    dataAos=""
                    dataAosDelay=""
                    dataAosDuration=""
                    img={LogoRedis}
                    imgAlt="Redis"
                    caption="Redis"
                />
                <LogoWithCaption
                    className="p-0 col-lg-3 col-6"
                    dataAos=""
                    dataAosDelay=""
                    dataAosDuration=""
                    img={LogoOracle}
                    imgAlt="Oracle"
                    caption="Oracle"
                />
                <LogoWithCaption
                    className="p-0 col-lg-3 col-6"
                    dataAos=""
                    dataAosDelay=""
                    dataAosDuration=""
                    img={LogoElastic}
                    imgAlt="Elastic Search"
                    caption="Elastic Search"
                />
            </div>
            <hr className="expertise-separator" />
        </section>
    )
}
