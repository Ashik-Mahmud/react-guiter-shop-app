import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Cart from './components/Cart/Cart';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import LoginSignUp from './components/LoginSignUp/LoginSignUp';
import Profile from './components/Profile/Profile';
function App() {
    const [cartCount, setCartCount] = useState(0)
    const [auth, setAuth] = useState(false)
    useEffect(()=>{
          const isAuthTrue = sessionStorage.getItem('user');
          if(isAuthTrue){
              setAuth(true)
          }
    }, [])


  return (
    <>
    <Router>
        <Header setAuth={setAuth} auth={auth} cartCount={cartCount} />
        <Routes>
            <Route path='/' element={<Home auth={auth} setCartCount={setCartCount} />} />
            <Route path='/login' element={<LoginSignUp setAuth={setAuth}/>} />
            <Route path='/dashboard' element={<Dashboard  />} />
            <Route path='/profile' element={<Profile setAuth={setAuth} />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/about' element={<About />} />
        </Routes>
    </Router>
       
    </>
  );
}

export default App;
