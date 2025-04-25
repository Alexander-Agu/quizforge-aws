import React from 'react'
import Header from '../../components/header/Header'
import Hero from '../../components/hero/Hero'

function Home() {
  return (
    <>
    <Header links={"/menu"} name={"Start Quiz"} />
    <Hero />
    </>
  )
}

export default Home