import './App.css';
//import './App.scss';
import React from 'react';
import { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MainPage from './components/mainpage';
import SearchPage from './components/searchpage';
import FileUpload from './FileUpload/FileUpload';

function App() {
  const [files,setFiles]= useState([{
    name: 'myfile.pdf'
  }])
  return (
    <div className='app'>
      <p className='tittle'> Subir Archivos</p>
      <FileUpload files ={files} setFiles = {setFiles} />
    </div>
  );
}

export default App;
