import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Menu from './Menu/Menu';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Pokemon from './Pokemon/Pokemon'
import Lista from './Lista/Lista';
import Combate from './Combate/Combate'
import Buscar from './Buscar/Buscar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Menu/>}/>
        <Route path='/pokemon' element={ <Pokemon/> }/>
        <Route path='/lista' element={<Lista/>} />
        <Route path='/combate' element={<Combate/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();