import React from 'react'
import Logo from '../../assets/logo.svg'
import SearchIcone from '../../assets/search.svg'
import UserIcone from '../../assets/user.svg'
import Shopping from '../../assets/shopping.svg'

import {
  BoxHeader,
  ImageLogo,
  Search,
  User,
  UserAccount,
  UserCart,
} from './style'

function Header({ purchase }) {
  return (
    <BoxHeader>
      <ImageLogo src={Logo} alt="logo"/>

      <Search>
        <input type="text" placeholder="O que está procurando" />
        <img src={SearchIcone} alt="buscar item" />
      </Search>

      <User>
        <div>
          <img src={UserIcone} alt="logo" />
          <UserAccount>Minha Conta</UserAccount>
        </div>

        <div>
          <img src={Shopping} alt="carrinho de compra" />

          {purchase && <UserCart>{purchase}</UserCart>}
        </div>
      </User>
    </BoxHeader>
  )
}

export default Header
