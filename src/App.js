import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import LoginSignUp from './components/LoginSignUp/LoginSignUp';
function App() {
  return (
    <>
    <Router>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<LoginSignUp />} />
        </Routes>
    </Router>
       
    </>
  );
}

export default App;
