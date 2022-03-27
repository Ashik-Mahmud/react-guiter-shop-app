import React from 'react';
import Hero from '../Hero/Hero';
import Products from '../Products/Products';
const Home = ({auth, setCartCount}) => {


  return (
    <>
     <Hero />
     <Products auth={auth} setCartCount={setCartCount} />
    </>
  )
}

export default Home