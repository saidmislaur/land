import React, { Component } from "react";
import Slider from "react-slick";
import ReviewsCard from "./ReviewsCard";
export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
      centerPadding: "0px",
      responsive: [
        {
          breakpoint: 1366,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerPadding: "300px",
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            centerPadding: "1px",
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: "100px",
          }
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: "80px",
          }
        }
      ]
    };
    return (
      <div>
        <Slider {...settings}>
        <ReviewsCard 
            text="After I started taking Testo Rampage, 
                    my sexual activity and strength indicators increased"
            name="Jeffery Lawrence"
            status="MANAGER"
            avatar={"/img/avatar.png"}
        />
        <ReviewsCard 
            text="Ligandrol from 50BMG PHARM is something 
                    incredible, after using it for two months my biceps increased 
                    by a few centimeters."
            name="Ted Hanson"
            status="Administrator"
            avatar={"/img/avatar.png"}
        />
          <ReviewsCard 
            text="After I started taking Testo Rampage, 
                    my sexual activity and strength indicators increased"
            name="Jeffery Lawrence"
            status="MANAGER"
            avatar={"/img/avatar.png"}
        />
        <ReviewsCard 
            text="Ligandrol from 50BMG PHARM is something 
                    incredible, after using it for two months my biceps increased 
                    by a few centimeters."
            name="Ted Hanson"
            status="Administrator"
            avatar={"/img/avatar.png"}
        />
        <ReviewsCard 
            text="After I started taking Testo Rampage, 
                    my sexual activity and strength indicators increased"
            name="Jeffery Lawrence"
            status="MANAGER"
            avatar={"/img/avatar.png"}
        />
        <ReviewsCard 
            text="Ligandrol from 50BMG PHARM is something 
                    incredible, after using it for two months my biceps increased 
                    by a few centimeters."
            name="Ted Hanson"
            status="Administrator"
            avatar={"/img/avatar.png"}
        />
        <ReviewsCard 
            text="After I started taking Testo Rampage, 
                    my sexual activity and strength indicators increased"
            name="Jeffery Lawrence"
            status="MANAGER"
            avatar={"/img/avatar.png"}
        />
        <ReviewsCard 
            text="Ligandrol from 50BMG PHARM is something 
                    incredible, after using it for two months my biceps increased 
                    by a few centimeters."
            name="Ted Hanson"
            status="Administrator"
            avatar={"/img/avatar.png"}
        />
        </Slider>
      </div>
    );
  }
}