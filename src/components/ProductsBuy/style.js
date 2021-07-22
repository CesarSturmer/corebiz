import styled from 'styled-components'

export const BoxContent = styled.div`
  width: 100%;
  max-width: 1150px;
  margin: 0 auto;

  @media (max-width: 1240px) {
    max-width: 850px;
  }

  @media (max-width: 950px) {
    max-width: 550px;  
  }

  & .slick-list {
    padding-left: 37px;
  }
  & .slick-slide {
    > div {
      display: flex;
    }
  }
`

export const Title = styled.h3`
  margin-top: 25px;
  font-family: 'Nunito', sans-serif;
  font-weight: 900;
  color: #000;
  font-size: 20px;
  margin-bottom: 20px;
  &::after {
    content: '';
    width: 65px;
    height: 4px;
    background-color: #c0c0c0;
    display: block;
    margin-top: 6px;
  }
`


export const ProductBox = styled.div`
  position: relative;
  max-width: 216px;
  overflow: hidden;
  &:hover {
    .shelf-product__data {
      background-color: #e6e8ea;
      transition: background-color 300ms linear;
    }
    .shelf-product__button {
      opacity: 1;
      transition: opacity 300ms linear;
    }
  }

  @media (max-width: 950px) {
    max-width: 200px;
  }

`

export const ProductSeal = styled.span`
  display: block;
  position: absolute;
  width: 0;
  height: 0;
  top: 0;
  right: 0;
  transform: rotate(-45deg) translate(80%, -15%);
  border-top: 70px solid transparent;
  border-bottom: 70px solid transparent;
  border-left: 70px solid #f8475f;
`

export const ProductSealText = styled.span`
  display: block;
  position: absolute;
  top: 15px;
  right: 7.5px;
  font-size: 16px;
  font-weight: 900;
  font-family: 'Nunito', sans-serif;
  text-transform: uppercase;
  color: #fff;
`

export const ProductImage = styled.img`
  width: 216px;
  height: 200px;
  display: block;

  @media (max-width: 950px) {
    width: 180px;
    height: 150px;
  }

`
export const ImageProduct = styled.img`
  width: 100%;

  @media (max-width: 950px) {
    width: 70%;
 
  }
`

export const ProductData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 7px;
  padding-bottom: 14px;
  height: 153px;
  width: 100%;
  box-sizing: border-box;
  transition: background-color 200ms linear;

  @media (max-width: 950px) {
 
  }

  button {
    margin: 10px;
    background: #000000;
    border-radius: 5px;
    color: #ffffff;
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;
    height: 30px;
    width: 60%;
    text-transform: uppercase;
  }
`

export const ProductName = styled.p`
  color: #7a7a7a;
  font-weight: 600;
  font-family: 'Nunito', sans-serif;
  text-transform: uppercase;
  font-size: 12px;
  line-height: 16px;
  margin-bottom: 5px;

  @media (max-width: 950px) {
    font-size: 10px;
    line-height: 14px;
  }
`
export const ProductStars = styled.ul`
  margin-bottom: 7px;
  display: flex;
`
export const ProductListPrice = styled.p`
  font-size: 12px;
  font-weight: 400;
  font-family: 'Nunito', sans-serif;
  text-decoration: line-through;
  color: #7a7a7a;
  margin-bottom: 5px;
`
export const ProductPrice = styled.p`
  font-size: 18px;
  font-weight: bold;
  font-family: 'Nunito', sans-serif;
  color: #000;
  margin-bottom: 5px;

  @media (max-width: 950px) {
    font-size: 14px;
  }
`
export const ProductInstallments = styled.p`
  margin-bottom: 8px;
  font-size: 12px;
  font-weight: 400;
  font-family: 'Nunito', sans-serif;
  color: #7a7a7a;

  @media (max-width: 950px) {
    font-size: 10px;
  }
`
