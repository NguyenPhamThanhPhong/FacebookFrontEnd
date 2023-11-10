import { publicRoutes } from './Routes/routes.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  document.querySelector("body").setAttribute("data-theme", "dark");

  return (
    <Router>
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
