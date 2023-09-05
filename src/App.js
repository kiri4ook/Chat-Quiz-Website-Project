import React from 'react';
import AppRouter from './modules/appRouter/AppRouter';
import Navbar from './modules/navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;

