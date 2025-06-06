import React from 'react'
import Layout from '../../Components/Layout/Layout'
import CarouselComponent from '../../Components/Carousel/CarouselComponent'
import Category from '../../Components/Category/Category'
import Product from '../../Components/Product/Product'

function Landing() {
  return (
    <Layout>
        <CarouselComponent />
        <Category/>
        <Product/>
    </Layout>
  )
}

export default Landing;