import React from 'react';
import Hero from '../Hero/Hero';
import Products from '../Products/Products';
import Header from "./../Header/Header";
const Home = ({auth, setAuth}) => {
  return (
    <>
     <Header auth={auth} setAuth={setAuth}/>
     <Hero />
     <Products auth={auth} />
    </>
  )
}

export default Home