import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'

import MarketingApp from './components/MarketingApp'
import Header from './components/Header'

const generateClassName = createGenerateClassName({ productionPrefix: 'co' })

const App = () => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <Header />
        <MarketingApp />
      </BrowserRouter>
    </StylesProvider>
  )
}

export default App
