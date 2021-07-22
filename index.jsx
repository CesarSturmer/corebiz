import React, { useState, useEffect } from 'react'
import Header from '../src/components/Header'
import Banner from '../src/components/Banner'
import styles from '../style/Home.module.scss'
import BoxItem from '../src/components/BoxItem'
import axios from 'axios'
import Form from '../src/components/Form'
import FooterContent from '../src/components/FooterContent'
import CountStars from '../src/utils/CountStars/countStars'


export default function Home() {
  const [cart, setCart] = useState(0)
  const [selectProduct, setSelectProduct] = useState(0)
  const [products, setProducts] = useState([])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [errorName, setErrorName] = useState(false)
  const [errorEmail, setErrorEmail] = useState(false)
  const [viewForm, setViewForm] = useState(true)
  const [formSuccess, setFormSuccess] = useState(false)

  

  useEffect(() => {
    var value = sessionStorage.getItem('compras')
    setCart(value)
  }, [cart])

  useEffect(() => {
    axios
      .get('https://corebiz-test.herokuapp.com/api/v1/products')
      .then((res) => {
        setProducts(res.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const handlePurchase = () => {
    let valuePurchase = sessionStorage.getItem('compras')

    if (!valuePurchase) {
      const newCompra = sessionStorage.setItem('compras', 1)
      setCart(newCompra)
    } else {
      sessionStorage.setItem('compras', ++valuePurchase)
      setCart(+valuePurchase)
    }
  }

  const handleSubmit = async (ev) => {
    ev.preventDefault()

    if (name !== 0) {
      setErrorName(!name)
    }
    if (email !== 0) {
      setErrorEmail(!email)
    }

    if (name && email) {
      await axios
        .post('https://corebiz-test.herokuapp.com/api/v1/newsletter', {
          name: name,
          email: email,
        })
        .then(() => {
          setViewForm(!viewForm)
          setFormSuccess(!formSuccess)
          setName('')
          setEmail('')
        })
        .catch(() => alert('erro ao cadastrar'))
    }
  }

  function formateNumber(value) {
    var tmp = value+'';
    tmp = tmp.replace(/([0-9]{2})$/g, ",$1");
    if( tmp.length > 6 )
    tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");           

    return tmp;   
  }

  return (
    <div className={styles.boxApp}>
      <div className={styles.mainApp}>
        <Header purchase={cart} />
      </div>

      <div className={styles.banner}>
        <Banner />
      </div>

      <div className={styles.mainContent}>
        <p className={styles.mainContentTitle} >Mais Vendidos</p>
        <hr />
        <main className={styles.mainContentBox}>     
          {products.length !== 0
            ? products.slice(0, 4).map((item) => {
                return (
                  <BoxItem
                    key={item.productId}
                    source={item.imageUrl}
                    productName={item.productName}
                    of={item.listPrice}
                    by={formateNumber(item.price)}
                    parcelTimes={item.installments.map((info) => {
                      return formateNumber(info.quantity)
                    })}
                    parceAmount={item.installments.map((info) => {
                      return formateNumber(info.value)
                    })}
                    onClick={() => setSelectProduct(item.productId)}
                    showButton={item.productId == selectProduct ? true : false}
                    addItem={handlePurchase}
                    listPrice={
                      item.listPrice && (
                        <img
                          src="/Flag.svg"
                          alt=""
                          style={{
                            float: 'right',
                            position: 'relative',
                            bottom: '210px',
                          }}
                        />
                      )
                    }
                    stars={ <CountStars value={item.stars} />}
                  />
                )
              })
            : 'Carregando produtos...'}
        
        </main>
      </div>

      <section className={styles.sectionContent}>
        {viewForm && (
          <Form
            onChangeName={(ev) => setName(ev.target.value)}
            onChangeEmail={(ev) => setEmail(ev.target.value)}
            onSubmit={handleSubmit}
            showErrorname={errorName}
            showErroremail={errorEmail}
          />
        )}

        {formSuccess && (
          <div className={styles.contentFormSuccess}>
            <p>
              <strong>
                Seu e-mail foi cadastrado com sucesso! <br />
              </strong>
              A partir de agora você receberá as novidade e ofertas exclusivas.
            </p>

            <button
              onClick={() => {
                setFormSuccess(!formSuccess)
                setViewForm(!viewForm)
              }}
            >
              Cadastrar novo e-mail
            </button>
          </div>
        )}
      </section>

      <footer className={styles.footerBox}>
        <FooterContent />
      </footer>
    </div>
  )
}
