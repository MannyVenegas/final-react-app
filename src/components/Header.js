import React from 'react'

const Header = () => {
  return (
    <div className="header-wrapper">
        <div className="main-info">
            <h1>
            We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
            </h1>
            <h2>CHICAGO, ILL.</h2>
            <a className='btn-main-offer' href='/reserve'>Book a table</a>
        </div>
    </div>
  )
}

export default Header;