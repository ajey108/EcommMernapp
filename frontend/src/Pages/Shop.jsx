import React from 'react'
import Hero from '../Components/Hero'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers'
import NewCollections from '../Components/NewCollections'
import Newsletter from '../Components/NewsLetter'
import Footer from '../Components/Footer'

const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollections/>
      <Newsletter/>

    </div>
  )
}

export default Shop