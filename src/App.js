import { publicRoutes } from './Routes/routes.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login-register-boxes/login'; 
import Signup from './components/login-register-boxes/register'; 
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  document.querySelector("body").setAttribute("data-theme", "dark");

  return (
    <Router>
      <div className='App' >
        <Routes>
        <Route path="/" element={<Login />} />  
        <Route path="/signup" element={<Signup />} /> 
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
