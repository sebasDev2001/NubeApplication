import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MainPage from './components/mainpage';
import SearchPage from './components/searchpage';

function App() {
  return (
    <SearchPage/>
  );
}

export default App;
