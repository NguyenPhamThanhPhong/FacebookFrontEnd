import { publicRoutes } from './Routes/routes.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { pathNames } from './Routes/routes.js';
import Header from '@components/phong-messages-components/header-bar/Header.js';
import DataOnlyComponent from './Global-api.js';


function App() {
  document.querySelector("body").setAttribute("data-theme", "dark");



  return (
    <Router>
      <DataOnlyComponent />

      <div className='App' >
        {/* <Header /> */}
        <Routes>
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
