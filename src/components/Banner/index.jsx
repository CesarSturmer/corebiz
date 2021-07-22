import React from 'react'
import Slider from 'react-slick'
import bannerImage from '../../assets/banner.png'
import {
  BoxBanner,
  BannerTitle,
  BannerList,
  BannerTextBox,
  BannerSubTitle,
} from './style'


function Banner() {
  const settings = {
    // autoplay: true,
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    
  }

  return (
    <>
      <BoxBanner>
        <Slider {...settings}>
          <BannerList>
            <BannerTextBox>
              <BannerTitle>Olá, o que você está buscando?</BannerTitle>
              <BannerSubTitle>
                Criar ou migrar seu
                <br />
                e-commerce?
              </BannerSubTitle>
            </BannerTextBox>
            <img
              src={bannerImage}
              className="banner-image"
              alt="Criar ou migrar seu e-commerce? banner"
            />
          </BannerList>

          <BannerList>
            <BannerTextBox>
              <BannerTitle>Olá, o que você está buscando?</BannerTitle>
              <BannerSubTitle>
                Criar ou migrar seu
                <br />
                e-commerce?
              </BannerSubTitle>
            </BannerTextBox>
            <img
              src={bannerImage}
              className="banner-image"
              alt="Criar ou migrar seu e-commerce? banner"
            />
          </BannerList>

          <BannerList>
            <BannerTextBox>
              <BannerTitle>Olá, o que você está buscando?</BannerTitle>
              <BannerSubTitle>
                Criar ou migrar seu
                <br />
                e-commerce?
              </BannerSubTitle>
            </BannerTextBox>
            <img
              src={bannerImage}
              className="banner-image"
              alt="Criar ou migrar seu e-commerce? banner"
            />
          </BannerList>
        </Slider>
      </BoxBanner>
    </>
  )
}

export default Banner
