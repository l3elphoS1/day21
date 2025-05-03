import React from 'react'

interface FooterProps {
    counter: number
}

function footer({counter}: FooterProps) {
  return (
    <div>
      {counter}:
    </div>
  )
}

export default footer
