import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import LoginSignUp from './components/LoginSignUp/LoginSignUp';
import Profile from './components/Profile/Profile';
function App() {
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
        <Header setAuth={setAuth} auth={auth} />
        <Routes>
            <Route path='/' element={<Home auth={auth} setAuth={setAuth} />} />
            <Route path='/login' element={<LoginSignUp setAuth={setAuth} auth={auth}/>} />
            <Route path='/dashboard' element={<Dashboard setAuth={setAuth} auth={auth} />} />
            <Route path='/profile' element={<Profile />} />
        </Routes>
    </Router>
       
    </>
  );
}

export default App;
