import React, { Component } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Link from 'next/link';
import styles from '../../styles/Header.module.scss'
export default class Slide extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerPadding: "100px",
    };
    return (
      <div>
        <Slider ref={c => (this.slider = c)} {...settings}>
            <div className={styles.header_content__image}>
              <Link href="#ibutamoren">
                <a><img src="/img/ibutamoren.png" alt="img"/></a>
              </Link>
                <img className={styles.header_content__image_usa} src="/img/usa.png" alt="flag" />
            </div>
            <div className={styles.header_content__image}>
              <Link href="#realmass">
                <a><img src="/img/products/1.png" alt="img"/></a>
              </Link>
                <img className={styles.header_content__image_usa} src="/img/usa.png" alt="flag" />
            </div>
            <div className={styles.header_content__image}>
              <Link href="#testorampage">
                <a><img src="/img/products/2.png" alt="img"/></a>
              </Link>
                <img className={styles.header_content__image_usa} src="/img/usa.png" alt="flag" />
            </div>
            <div className={styles.header_content__image}>
              <Link href="#sleeptight">
                <a><img src="/img/products/3.png" alt="img"/></a>
              </Link>
                <img className={styles.header_content__image_usa} src="/img/usa.png" alt="flag" />
            </div>
            <div className={styles.header_content__image}>
              <Link href="#realtribulus">
                <a><img src="/img/products/4.png" alt="img"/></a>
              </Link>
                <img className={styles.header_content__image_usa} src="/img/usa.png" alt="flag" />
            </div>
            <div className={styles.header_content__image}>
              <Link href="#ligandrol">
                <a><img src="/img/products/5.png" alt="img"/></a>
              </Link>
                <img className={styles.header_content__image_usa} src="/img/usa.png" alt="flag" />
            </div>
            <div className={styles.header_content__image}>
              <Link href="#realslim">
                <a><img src="/img/products/7.png" alt="img"/></a>
              </Link>
                <img className={styles.header_content__image_usa} src="/img/usa.png" alt="flag" />
            </div>
        </Slider>
        <div className={styles.header_content__buttons} style={{ textAlign: "center" }}>
          <button className={styles.header_content__button} onClick={this.previous}>
            <svg width="26" height="13" viewBox="0 0 26 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.13081 0L8.28893 1.05572L3.13531 5.75351H26V7.24654H3.13531L8.28893 11.9443L7.13081 13L0 6.49997L7.13081 0Z" fill="white"/>
            </svg>
          </button>
          <button className={styles.header_content__button} onClick={this.next}>
            <svg width="26" height="13" viewBox="0 0 26 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.8692 0L17.7111 1.05572L22.8647 5.75351H0V7.24654H22.8647L17.7111 11.9443L18.8692 13L26 6.49997L18.8692 0Z" fill="white"/>
            </svg>
          </button>
        </div>
      </div>
    );
  }
}