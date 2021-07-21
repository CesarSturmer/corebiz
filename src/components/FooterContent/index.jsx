import React from 'react'
import styles from './FooterContent.module.scss'

function FooterContent() {
  return (
    <div className={styles.contentFooter}>
      <div className={styles.footerLocation}>
        <h3>Localização</h3>
        <div>
          <p>Avenida Andrômeda, 2000. Bloco 6 e 8 </p>
          <p>Alphavile SP</p>
          <p>brasil@corebiz.ag</p>
          <p>+55 11 3090 1039</p>
        </div>
        <p></p>
      </div>

      <div className={styles.footerButtons}>
        <div>
          <button>
            <img src="/email.svg" alt="email para entrar em contato" />
            Entre em contato
          </button>
          <button>
            <img src="phone.svg" alt="icone telefone para entrar em contato" />
            Fale com o nosso consultor online
          </button>
        </div>
      </div>
      <div className={styles.footerLogos}>
        <div>
          <img src="/logoCorebizFooter.svg" alt="" />
          <img src="/vtex.svg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default FooterContent
