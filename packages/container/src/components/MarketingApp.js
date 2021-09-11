import React, { useRef, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import { mount } from 'marketing/MarketingApp'

const MarketingApp = () => {
  const history = useHistory()
  const ref = useRef(null)
  useEffect(() => {
    mount(ref.current, {
      onNavigate: ({ pathname: nextPathname }) => {
        history.push(nextPathname)
      }
    })
  }, [])

  return <h1 ref={ref} />
}

export default MarketingApp
