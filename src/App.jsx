import React from 'react';

import FLOATNAV from './Containers/NAV_Float/Nav'
import NAV from './Containers/Navbar/Navbar'

import Head from './Components/Header/Header';
import About from './Components/ABOUT/About';
import Comic from './Components/Comics/Comics';

import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import './App.css';


function App() {
  return (
    <div className="App">
      <FLOATNAV/>
      
      <Head />
      <main>
        <About />
        <Comic />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
