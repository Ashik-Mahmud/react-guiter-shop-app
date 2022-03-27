import React from 'react';
import Hero from '../Hero/Hero';
import Products from '../Products/Products';
const Home = ({auth, setCartCount, setCartItems, products}) => {


  return (
    <>
     <Hero />
     <Products auth={auth} setCartCount={setCartCount} products={products}  setCartItems={setCartItems}/>
    </>
  )
}

export default Home