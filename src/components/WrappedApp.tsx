import React from 'react'
import App  from '../App'
import { BrowserRouter } from 'react-router'

function wrappedApp() {
  return (
    <div>
      <BrowserRouter>
      <App />
    </BrowserRouter>
    </div>
  )
}

export default wrappedApp
