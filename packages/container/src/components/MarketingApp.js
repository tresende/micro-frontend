import React, { useRef, useEffect } from 'react'
import { mount } from 'marketing/MarketingApp'

const MarketingApp = () => {
  const ref = useRef(null)
  useEffect(() => {
    mount(ref.current)
  }, [])

  return <h1 ref={ref} />
}

export default MarketingApp
