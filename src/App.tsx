import './App.css';
import { Route, Router, Routes, useLocation } from 'react-router-dom'
import NavigationBar from './views/NavigationBar';
import Footer from './views/Footer';
import AuthenticationView from './views/AuthenticationView';
import Main from './views/Main';

function App() {

  const path = useLocation();

  return (
    <>
      <NavigationBar/>
        <Routes>
          <Route path='/' element={(<Main/>)}/>
          <Route path='/auth' element={(<AuthenticationView/>)}/>
        </Routes>
      {path.pathname !== '/auth' &&(<Footer/>)}
    </>
  );
}

export default App;
