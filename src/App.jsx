import React from 'react'
import { GlobalStyles } from './styles/GlobalStyles'
import { Header } from './components/Header'
import { Card } from './components/Card'

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Card />
    </>
  )
}

export default App