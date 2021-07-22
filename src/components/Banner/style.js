import styled from "styled-components";

export const BoxBanner = styled.ul `
  width: 100%;
  & .slick-dots {
    bottom: 37px;
    & .slick-active {
      button {
        background-color: #f8475f;
      }
    }
    button {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: #bdbdbd;
      &::before {
        content: "";
      }
    }
  }
`

export const BannerList = styled.li`
  position: relative;
  width: 100%;
  & > .banner-image {
    width: 100%;
    height: auto;
  }
`;

export const BannerTextBox = styled.div`
  position: absolute;
  top: 50%;
  left: 20%;
  transform: translateY(-50%);

  @media (max-width: 1240px) {
    left: 10%;
  }

  @media (max-width: 950px) {
    left: 5%;
  }
`;

export const BannerTitle = styled.p`
  font-family: "Nunito", sans-serif;
  font-size: 30px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 20px;

  @media (max-width: 1240px) {
    font-size: 25px;
  }
  
  @media (max-width: 950px) {
    font-size: 18px;
  }
`;

export const BannerSubTitle = styled.p`
  font-family: "Nunito", sans-serif;
  font-size: 45px;
  font-weight: 900;
  color: #fff;

  @media (max-width: 1240px) {
    font-size: 35px;
  }

  @media (max-width: 950px) {
    font-size: 25px;
  }
  
`;
