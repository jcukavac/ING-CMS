import React, { Component } from "react"
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl"
import Slider from "react-slick"

import ImageTestimonialDimitrijePetkovic from "../images/person/dimitrije-petkovic.png"
import ImageTestimonialDraganaLazic from "../images/person/dragana-lazic.png"
import ImageTestimonialGarinTorent from "../images/person/garin-torent.png"
import ImageTestimonialGinaLove from "../images/person/gina-love.png"
import ImageTestimonialPaulMichalowski from "../images/person/paul-michalowski.png"
import ImageTestimonialPeter from "../images/person/peter.png"
import ImageTestimonialSebastianGumpold from "../images/person/sebastian-gumpold.png"
import ImageTestimonialTonyPericle from "../images/person/tony-pericle.png"

import TestimonialItem from "./testimonialItem"

class testimonialCarousel extends Component {
  componentDidMount() {
    // Remove Numbers from slick carousel pagination
    const carouselNumbers = document.querySelectorAll(
      ".carousel-dots li button"
    )

    for (let dot of carouselNumbers) {
      dot.innerHTML = ""
    }
  }

  render() {
    const settings = {
      arrows: false,
      // centerMode: true,
      dots: true,
      easing: "ease-in-out",
      centerPadding: "60px",
      slidesToShow: 3,
      slidesToScroll: 1,
      touchThreshold: 50,
      dotsClass: "carousel-dots",
      variableWidth: true,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            arrows: false,
            centerMode: true,
            slidesToShow: 1,
            touchThreshold: 50,
            slidesToScroll: 1,
            variableWidth: true,
          },
        },
        {
          breakpoint: 767,
          settings: {
            arrows: false,
            adaptiveHeight: true,
            centerMode: true,
            centerPadding: "0",
            mobileFirst: true,
            touchThreshold: 50,
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: false,
          },
        },
      ],
    }

    return (
      <Slider {...settings} className="w-100 carousel-wrapper">
        <TestimonialItem
          ratingValue=""
          blockquote={<FormattedMessage id='index.client-citations.testimonial-Peter' /> }
          testimonialImg={ImageTestimonialPeter}
          testimonialImgAlt="Peter Custer"
          givenName="Peter"
          familyName="Custer"
          link="https://www.linkedin.com/in/peter-custer-97552531/"
          jobTitle="CTO"
          firmName="Gold Bullion International"
        />
        <TestimonialItem
          ratingValue="5.0"
          blockquote={<FormattedMessage id='index.client-citations.testimonial-Tony' />}
          testimonialImg={ImageTestimonialTonyPericle}
          testimonialImgAlt="Tony Pericle"
          givenName="Tony"
          familyName="Pericle"
          link="https://www.linkedin.com/in/tony-pericle-0931862/"
          jobTitle="CEO"
          firmName="Profit Optics"
        />
        <TestimonialItem
          ratingValue=""
          blockquote={<FormattedMessage id='index.client-citations.testimonial-Gina' />}
          testimonialImg={ImageTestimonialGinaLove}
          testimonialImgAlt="Gina Love"
          givenName="Gina"
          familyName="Love"
          link="https://www.linkedin.com/in/gina-love-48788011a/"
          jobTitle="CEO"
          firmName="Peryton"
        />
        <TestimonialItem
          ratingValue=""
          blockquote={<FormattedMessage id='index.client-citations.testimonial-Dimitrije' />}
          testimonialImg={ImageTestimonialDimitrijePetkovic}
          testimonialImgAlt="Dimitrije Petkovic"
          givenName="Dimitrije"
          familyName="Petković"
          link="https://www.linkedin.com/in/dimitrije-petkovic-b413203a/"
          jobTitle="Manager"
          firmName="Webelinx"
        />
        <TestimonialItem
          ratingValue="4.5"
          blockquote={<FormattedMessage id='index.client-citations.testimonial-Dragana' />}
          testimonialImg={ImageTestimonialDraganaLazic}
          testimonialImgAlt="Dragana Lazic"
          givenName="Dragana"
          familyName="Lazić"
          link="https://www.linkedin.com/in/dragana-lazic-ba998923/"
          jobTitle="Managing Director"
          firmName="Intorel"
        />
        <TestimonialItem
          ratingValue=""
          blockquote={<FormattedMessage id='index.client-citations.testimonial-Paul' />}
          testimonialImg={ImageTestimonialPaulMichalowski}
          testimonialImgAlt="Paul Michalowski"
          givenName="Paul"
          familyName="Michalowski"
          link="https://www.linkedin.com/in/paul-michalowski-2b80611a/"
          jobTitle="COO"
          firmName="Brenton Point"
        />
        <TestimonialItem
          ratingValue="5.0"
          blockquote={<FormattedMessage id='index.client-citations.testimonial-Garin' />}
          testimonialImg={ImageTestimonialGarinTorent}
          testimonialImgAlt="Garin Torent"
          givenName="Garin"
          familyName="Torent"
          link="https://www.linkedin.com/in/garintoren/"
          jobTitle="Former CEO"
          firmName="Beyond Pulse"
        />
        <TestimonialItem
          ratingValue=""
          blockquote={<FormattedMessage id='index.client-citations.testimonial-Sebastian' />}
          testimonialImg={ImageTestimonialSebastianGumpold}
          testimonialImgAlt="Sebastian Gumpold"
          givenName="Sebastian"
          familyName="Gumpold"
          link="https://www.linkedin.com/in/sebastian-gumpold-47b9bb28/"
          jobTitle="CEO"
          firmName="Saltcreek"
        />
      </Slider>
    )
  }
}

export default injectIntl(testimonialCarousel)