import { publicRoutes } from './Routes/routes.js';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Login from './components/login-register-boxes/login'; 
import Signup from './components/login-register-boxes/register'; 
import Forgotpass from './components/login-register-boxes/forgotpass'; 
import Resetpass from './components/login-register-boxes/resetpass'; 
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  document.querySelector("body").setAttribute("data-theme", "dark");

  return (
    <Router>
      <div className='App' >
        <Routes>
        <Route path="/" element={<Login />} />  
        <Route path="/signup" element={<Signup />} /> 
        <Route path="/recoverpass" element={<Forgotpass />} /> 
        <Route path="/resetpass" element={<Resetpass />} /> 
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            return <Route key={index} path={route.path} element={<Page />} />
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
