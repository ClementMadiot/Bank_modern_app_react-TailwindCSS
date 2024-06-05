import React from 'react'

function Button({ styles }) {
  return (
    <button type="button" className={`py-4 px-6 bg-blue-gradient font-semibold text-primary outline-none rounded-xl ${styles}`}>Get Started</button>
  )
}

export default Button