import React from 'react'
import ReactDom from 'react-dom'
import { createMemoryHistory } from 'history'

import App from './App'

const mount = (element, { onNavigate }) => {
  const history = createMemoryHistory()
  history.listen(onNavigate)
  ReactDom.render(<App history={history} />, element)
}

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root')
  devRoot && mount(devRoot)
}

export { mount }
