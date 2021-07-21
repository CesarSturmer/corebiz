import React from 'react'
import styles from './Form.module.scss'

function Form({
  onChangeName,
  onChangeEmail,
  onSubmit,
  showErrorname,
  showErroremail,
}) {
  return (
    <div className={styles.content}>
      <p>Participe de nossas news com promoções e novidades!</p>
      <div className={styles.contentForm}>
        <form onSubmit={onSubmit}>
          <div>
            <input
              type="text"
              placeholder="Digite seu nome"
              onChange={onChangeName}
              className={styles.inputForm}
            />
            {showErrorname && (
              <span className={styles.errorName}>
                Prencha com seu nome completo
              </span>
            )}
          </div>

          <div>
            <input
              type="email"
              placeholder="Digite seu email"
              onChange={onChangeEmail}
              className={styles.inputForm}
            />
            {showErroremail && (
              <span className={styles.errorEmail}>
                Preencha com um e-mail válido
              </span>
            )}
          </div>

          <button type="submit">Eu quero!</button>
        </form>
      </div>
    </div>
  )
}

export default Form
