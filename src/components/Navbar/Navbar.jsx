import React, { useState } from 'react'
import NavbarCss from './Navbar.module.scss'
const Navbar = ({ manageSearch, search, clearSearch }) => {
  const [shadow, setshadow] = useState(false)

  window.addEventListener('scroll', (e) => {
    if (window.pageYOffset > 0) {
      setshadow(true)
    } else {
      setshadow(false)
    }
  })

  return (
    <div className={`${NavbarCss.nav} ${shadow ? NavbarCss.shadow : null}`}>
      <a href="https://afraz-malik.github.io/" className={NavbarCss.home}>
        Home
      </a>
      <div className={NavbarCss.input}>
        <input
          type="text"
          placeholder="Search Projects"
          value={search}
          onChange={(e) => manageSearch(e.target.value)}
        />
        <svg
          className="gUZ B9u U9O kVc"
          height="16"
          width="16"
          viewBox="0 0 24 24"
          aria-label="Search icon"
          role="img"
        >
          <path d="M10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6m13.12 2.88l-4.26-4.26A9.842 9.842 0 0 0 20 10c0-5.52-4.48-10-10-10S0 4.48 0 10s4.48 10 10 10c1.67 0 3.24-.41 4.62-1.14l4.26 4.26a3 3 0 0 0 4.24 0 3 3 0 0 0 0-4.24"></path>
        </svg>
        <i
          className="fa fa-times-circle"
          onClick={() => clearSearch()}
          style={search === '' ? { display: 'none' } : { display: 'block' }}
        >
          {' '}
          Clear Search
        </i>
      </div>

      <img
        src="\images\anime.png"
        alt="profile"
        className={NavbarCss.profile}
      />
    </div>
  )
}

export default Navbar
