import React, { useState } from 'react'
import axios from 'axios'

import {
  NewsletterBox,
  Title,
  NewForm,
  FormInput,
  ErrorMessage,
  FormButton,
  FormSubTitle,
} from './style'

function NewsLetter({}) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const [errors, setErrors] = useState({})

  const [newForm, setNewForm] = useState(true)

  const validateEmail = (email) => {
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regex.test(email) ? '' : 'Preencha com um e-mail válido'
  }

  const validateName = (name) => {
    const regex = /^\w+( \w+)+$/i
    return regex.test(name) ? '' : 'Preencha com seu nome completo'
  }

  const handleSubmit = async (ev) => {
    ev.preventDefault()

    const error = {
      name: validateName(name),
      email: validateEmail(email),
    }

    setErrors(error)

    const hasError = Object.values(errors).some((error) => Boolean(error))

    if (hasError) {
      return;
      
    }
    if(name && email) {

      await axios
        .post('https://corebiz-test.herokuapp.com/api/v1/newsletter', {
          name: name,
          email: email,
        })
        .then(() => {
          setNewForm(false)
          setName('')
          setEmail('')
          setErrors({})
        })
        .catch(() => alert('erro ao cadastrar'))
    }

  }

  return (
    <>
      {newForm ? (
        <NewsletterBox>
          <Title>Participe de nossas news com promoções e novidades!</Title>
          <NewForm onSubmit={handleSubmit}>
            <div>
              <FormInput
                placeholder="Digite seu nome"
                onChangeName={(ev) => setName(ev.target.value)}
                error={Boolean(errors.name)}
              />

              <ErrorMessage>{errors.name}</ErrorMessage>
            </div>
            <div>
              <FormInput
                placeholder="Digite seu email"
                onChangeEmail={(ev) => setEmail(ev.target.value)}
                error={Boolean(errors.email)}
              />
              <ErrorMessage>{errors.email}</ErrorMessage>
            </div>
            <FormButton type="submit">Eu quero!</FormButton>
          </NewForm>
        </NewsletterBox>
      ) : (
        <NewsletterBox>
          <Title small>Seu e-mail foi cadastrado com sucesso!</Title>
          <FormSubTitle>
            A partir de agora você receberá as novidades e ofertas exclusivas.
          </FormSubTitle>

          <FormButton onClick={() => setNewForm(true)} big>
            Cadastrar novo e-mail
          </FormButton>
        </NewsletterBox>
      )}
    </>
  )
}

export default NewsLetter
