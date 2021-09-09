import React from 'react'
import ReactDom from 'react-dom'
import App from './App'

const mount = (element) => {
  ReactDom.render(<App />, element)
}

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root')
  devRoot && mount(devRoot)
}

export { mount }
