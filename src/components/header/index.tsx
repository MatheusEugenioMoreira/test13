import React from 'react'
import { HeaderBlock, SHeader } from './styles'
import Logo from './logo.png'

const Header: React.FC = () => {

  return (
    <SHeader>
      <HeaderBlock>
        <img width={220} style={{ width: '210px', marginLeft: '1rem' }} alt="logo" src={Logo} />
      </HeaderBlock>
    </SHeader>
  )
}

export default Header
