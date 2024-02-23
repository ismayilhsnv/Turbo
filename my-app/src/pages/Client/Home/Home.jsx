import React from 'react'
import Cards from '../../../components/Client/Cards/Cards'
import HomeStatic from '../../../components/Client/HomeStatic1/HomeStatic'
import { Helmet } from 'react-helmet'

const Home = () => {
  return (
    <div>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <HomeStatic/>
      <Cards/>
    </div>
  )
}

export default Home