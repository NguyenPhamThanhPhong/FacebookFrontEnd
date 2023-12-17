import { publicRoutes } from './Routes/routes.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { pathNames } from './Routes/routes.js';
import Header from '@components/phong-messages-components/header-bar/Header.js';


function App() {
  document.querySelector("body").setAttribute("data-theme", "dark");

  

  return (
    <Router>
      <Header/>
      <div className='App' >
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            return <Route key={index} path={route.path} element={<Page/>} />
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
