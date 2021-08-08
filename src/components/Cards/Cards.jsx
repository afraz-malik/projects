import React from 'react'
import CardsCss from './Cards.module.scss'

const projects = [
  {
    img: '/images/smartbrain.png',
    source: 'https://www.google.com',
    live: 'https://www.google.com',
  },
  {
    img: '/images/skiptheagent.png',
    source: 'https://www.google.com',
    live: 'https://www.google.com',
  },
  {
    img: '/images/king.png',
    source: 'https://www.google.com',
    live: 'https://www.google.com',
  },
  {
    img: '/images/optimiz.png',
    source: 'https://www.google.com',
    live: 'https://www.google.com',
  },
  {
    img: '/images/calculator.gif',
    source: 'https://www.google.com',
    live: 'https://www.google.com',
  },
]

const Cards = () => {
  return (
    <div className={CardsCss.cards}>
      {projects.map((el) => (
        <div className={`${CardsCss.card} grow `}>
          <img src={`${el.img}`} alt="smartBrain" />
          <div className={CardsCss.hover}>
            <a href={el.live} rel="noreferrer" target="_blank">
              See Live
            </a>
            <a href={el.source} rel="noreferrer" target="_blank">
              Souce Code
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Cards
