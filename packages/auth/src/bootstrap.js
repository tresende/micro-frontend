import React from 'react'
import ReactDom from 'react-dom'
import { createMemoryHistory, createBrowserHistory } from 'history'

import App from './App'

const mount = (element, { onNavigate, onSignIn, defaultHistory, initialPath } = {}) => {
  const history = defaultHistory || createMemoryHistory({ initialEntries: [initialPath] })
  onNavigate && history.listen(onNavigate)
  ReactDom.render(<App onSignIn={onSignIn} history={history} />, element)
  return {
    onParentNavigate({ pathname: nextPathname }) {
      const { pathname } = history.location
      if (pathname !== nextPathname) {
        history.push(nextPathname)
      }
    }
  }
}

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_auth-dev-root')
  devRoot && mount(devRoot, { defaultHistory: createBrowserHistory() })
}

export { mount }
