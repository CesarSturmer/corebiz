import React from 'react'
import {
  Footer,
  ContentFooter,
  FooterDiv,
  FooterTitle,
  FooterText,
  FooterButton,
  FooterIconLogo,
  FooterDivResponsive,
  FooterBoxText,
} from './style'

import { ReactComponent as IconEmail } from '../../assets/email.svg'
import { ReactComponent as IconPhone } from '../../assets/phone.svg'
import { ReactComponent as Logo } from '../../assets/logo-white.svg'
import { ReactComponent as Vtex } from '../../assets/vtex.svg'

function FooterContent() {
  return (
    <>
      <Footer>
        <ContentFooter>
          <FooterDiv>
            <FooterBoxText>
              <FooterTitle>Localização</FooterTitle>
              <FooterText>
                Avenida Andrômeda, 2000. Bloco 6 e 8 <br />
                Alphavile SP <br />
                brasil@corebiz.ag <br />
                +55 11 3090 1039
              </FooterText>
            </FooterBoxText>
          </FooterDiv>

          <FooterDivResponsive>
            <FooterDiv>
              <FooterButton>
                <IconEmail className="icon" />
                Entre em contato
              </FooterButton>
            </FooterDiv>

            <FooterDiv>
              <FooterButton>
                <IconPhone className="icon" />
                Fale com o nosso
                <br /> consultor online
              </FooterButton>
            </FooterDiv>
          </FooterDivResponsive>

          <FooterDivResponsive>
            <FooterDiv>
              <FooterIconLogo>
                Created by
                <Logo className="logo" />
              </FooterIconLogo>

              <FooterIconLogo>
                Powered by
                <Vtex className="vtex" />
              </FooterIconLogo>
            </FooterDiv>
          </FooterDivResponsive>
        </ContentFooter>
      </Footer>
    </>
  )
}

export default FooterContent
