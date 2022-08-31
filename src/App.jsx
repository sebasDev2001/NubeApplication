import './App.css';
//import './App.scss';
import React from 'react';
import { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MainPage from './components/mainpage';
import SearchPage from './components/searchpage';
import FileUploadPage from './components/fileuploadpage';

function App() {
  
  return (
    <Routes>
      <Route path='/' element={<SearchPage/>} />
      <Route path='fileupload' element={<FileUploadPage/>}/>
    </Routes>
  );
}

export default App;
