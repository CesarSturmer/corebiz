import styled from 'styled-components'

export const BoxHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  align-items: center;
  margin: 10px 0; 
 
`

export const ImageLogo = styled.img`
 
  grid-column: 2 / 3;

  /* @include tablet() {
      width: 100%;
    }


    @include mobile() {
      grid-area: filter;
    } */
`
export const Search = styled.div`
  grid-column: 3 / 5;
  display: flex;
  justify-content: center;

  & > input {
    border: 0;
    border-bottom: 1px solid #7a7a7a;
    outline: none;
    width: 80%;
  }
`
export const User = styled.div`
   grid-column: 5/ 6;
  display: flex;
  justify-content: space-around;

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`
export const UserAccount = styled.p`
  padding-left: 5px;
  color: #7a7a7a;

  /* @include mobile() {
    display: none;
  } */
`
export const UserCart = styled.h5`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  background: #f8475f;
  color: #ffffff;
  border-radius: 50%;
  text-align: center;
  margin-left: 5px;
  font-size: 10px;
`
