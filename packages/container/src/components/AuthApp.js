import React, { useRef, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import { mount } from 'auth/AuthApp'

const AuthApp = () => {
  const history = useHistory()
  const ref = useRef(null)
  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location
        if (pathname !== nextPathname) {
          history.push(nextPathname)
        }
      }
    })
    history.listen(onParentNavigate)
  }, [])

  return <div ref={ref} />
}

export default AuthApp
