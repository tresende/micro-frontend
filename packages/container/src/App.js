import React, { lazy, Suspense, useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'

import Header from './components/Header'
import Progress from './components/Progress'

const AuthLazy = lazy(() => import('./components/AuthApp'))
const AutMarketingLazy = lazy(() => import('./components/MarketingApp'))

const generateClassName = createGenerateClassName({
  productionPrefix: 'co'
})

export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false)

  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <Header signedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)} />
        <Suspense fallback={<Progress />}>
          <Switch>
            <Route path="/auth">
              <AuthLazy onSignIn={() => setIsSignedIn(true)} />
            </Route>
            <Route path="/" component={AutMarketingLazy} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </StylesProvider>
  )
}
