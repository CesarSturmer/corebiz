import React, { useEffect, useState } from 'react'
import {
  BoxContent,
  Title,
  ProductBox,
  ProductSeal,
  ProductSealText,
  ProductImage,
  ProductData,
  ProductName,
  ProductStars,
  ProductListPrice,
  ProductPrice,
  ProductInstallments,
} from './style'
import axios from 'axios'
import Slider from 'react-slick'

import { ReactComponent as ArrowLeft } from '../../assets/arrowLeft.svg'
import { ReactComponent as ArrowRight } from '../../assets/arrowRight.svg'
import { ReactComponent as StarFull } from '../../assets/starFull.svg'
import { ReactComponent as StarEmpty } from '../../assets/starEmpty.svg'

function ProductsBuy({ titleProducts, productPurchase }) {
  const [products, setProducts] = useState([])
  const [selectProduct, setSelectProduct] = useState(0)
  const [cart, setCart] = useState(0)

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
    productPurchase((value) => {
      const newValue = value + 1
      sessionStorage.setItem('purchase', newValue)
      return newValue
    })
  }

  const settings = {    
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <ArrowLeft />,
    nextArrow: <ArrowRight />,
  }

  const convertBRL = (price) => {
    let priceConvert = Number(price).toFixed(2) / 100
    return priceConvert.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })
  }

  return (
    <BoxContent>
      <Title>{titleProducts}</Title>
      <Slider {...settings}>
        {products.map((item, index) => (
          <ProductBox
            onClick={() => setSelectProduct(item.productId)}
            key={index}
          >
            {item.listPrice ? (
              <>
                <ProductSeal></ProductSeal>{' '}
                <ProductSealText>Off</ProductSealText>{' '}
              </>
            ) : null}

            <ProductImage
              src={item.imageUrl}
              alt={`imagem ${item.productName}`}
            ></ProductImage>

            <ProductData>
              <ProductName>{item.productName}</ProductName>

              <ProductStars>
                {Array.from({ length: 5 }, (_, index) =>
                  index <= item.stars - 1 ? 'filled' : 'unfilled'
                ).map((item, index) => {
                  return item === 'filled' ? (
                    <li key={index}>
                      <StarFull />
                    </li>
                  ) : (
                    <li key={index}>
                      <StarEmpty />
                    </li>
                  )
                })}
              </ProductStars>

              <ProductListPrice>
                {item.listPrice ? `de ${convertBRL(item.listPrice)}` : ''}
              </ProductListPrice>
              <ProductPrice>{`por R$ ${convertBRL(item.price)}`}</ProductPrice>

              <ProductInstallments>
                {item.installments.length
                  ? item.installments.map((info) => {
                      return `ou em ${info.quantity}x de R$ ${convertBRL(
                        info.value
                      )}`
                    })
                  : ''}
              </ProductInstallments>

              {item.productId === selectProduct ? (
                <button onClick={handlePurchase}>Comprar</button>
              ) : (
                <button style={{ visibility: 'hidden' }}>Comprar</button>
              )}
            </ProductData>
          </ProductBox>
        ))}
      </Slider>
    </BoxContent>
  )
}

export default ProductsBuy
