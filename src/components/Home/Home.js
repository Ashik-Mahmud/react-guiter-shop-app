import React from 'react';
import Hero from '../Hero/Hero';
import Products from '../Products/Products';
const Home = ({auth, setAuth}) => {
  return (
    <>
     
     <Hero />
     <Products auth={auth} />
    </>
  )
}

export default Home