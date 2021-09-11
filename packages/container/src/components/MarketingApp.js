import React, { useRef, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import { mount } from 'marketing/MarketingApp'

const MarketingApp = () => {
  const history = useHistory()
  const ref = useRef(null)
  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location
        if (pathname !== nextPathname) {
          history.push(nextPathname)
        }
      }
    })
    history.listen(onParentNavigate)
  }, [])

  return <h1 ref={ref} />
}

export default MarketingApp
