import React from 'react'
import Hero from '../components/home/Hero'
import Service from '../components/home/Service'
import Products from '../components/home/Products'
import Organic from '../components/home/Organic'
import Trusted from '../components/home/Trusted'
import International from '../components/home/International'
import AboutUs from '../components/home/AboutUs'
import StoreConcious from '../components/home/StoreConcious'
import Navbar from '../components/home/Navbar'

const Home = () => {
  return (
    <>
    <Navbar></Navbar>
    <Hero></Hero>  
    <Service></Service>
    <Products></Products>
    <Organic></Organic>
    <Trusted></Trusted>
    <International></International>
    <StoreConcious></StoreConcious>
    <AboutUs></AboutUs>
    </>
  )
}

export default Home
