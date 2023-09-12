import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>District Identity Planner</title>
        <meta property="og:title" content="District Identity Planner" />
      </Helmet>
    </div>
  )
}

export default Home
