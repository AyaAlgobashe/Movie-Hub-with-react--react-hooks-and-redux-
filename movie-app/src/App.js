import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Router from './roueting/route';
import { languageContext } from './context/languge';
import { useState } from 'react';

function App() {
  const [languge,setLanguge]=useState("ltr")
  return (
    <>
      <languageContext.Provider value={{languge,setLanguge}}>
        <BrowserRouter >
        <div dir={languge}>
          <Header />

          
          <Router />
          </div>

        </BrowserRouter>
      </languageContext.Provider>
    </>
  );
}

export default App;
