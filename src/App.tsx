import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Contact } from './pages/Contact';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Link to='/' style={{margin:'10px'}}>Home</Link>
          <Link to='/login' style={{margin:'10px'}}>Login</Link>
          <Link to='/contact' style={{margin:'10px'}}>Contact</Link>
          <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/login' element={ <Login /> } />
            <Route path='/contact' element={ <Contact /> } />
            <Route path='*' element= { <h3>Error 404, Page Not Found!</h3> } />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
