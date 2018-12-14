import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Kyle Mathews`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          Kirjoittanut <strong>Henri Keski-Sikkilä</strong>, jonka intohimona on kehittää tulevaisuuden digitaalisia palveluita.{' '}
          <a href="https://twitter.com/hkeskisikkila">
            Voit seurata Twitterissä
          </a>
        </p>
      </div>
    )
  }
}

export default Bio
