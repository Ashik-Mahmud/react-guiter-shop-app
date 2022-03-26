import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Home from './components/Home/Home';
import LoginSignUp from './components/LoginSignUp/LoginSignUp';
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
        <Routes>
            <Route path='/' element={<Home auth={auth} setAuth={setAuth} />} />
            <Route path='/login' element={<LoginSignUp setAuth={setAuth} auth={auth}/>} />
            <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
    </Router>
       
    </>
  );
}

export default App;
