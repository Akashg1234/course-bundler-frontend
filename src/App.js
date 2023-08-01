import React from 'react';
import {Route,Routes } from 'react-router-dom'
import Home from './Components/Home/Home';
import Header from './Components/Layout/Header/Header';
import Courses from './Components/Courses/Courses';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/course-catalogue' element={<Courses/>}/>
      </Routes>
    </>
  );
}

export default App;
