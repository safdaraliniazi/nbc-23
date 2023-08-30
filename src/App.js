import React from 'react';
import './App.css';
import {Routes , Route} from 'react-router-dom'
import Home from './pages/Home';
import About from './components/About';
import Publication from './pages/Publication';

function App() {
  return <>
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/publication' element={<Publication />} />
    </Routes>
  </>
  ;
}

export default App;
