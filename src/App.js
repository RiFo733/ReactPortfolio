import React from 'react'
import './App.css';
import Navigation from './components/Navbar/Navigation';
import Footer from './components/Footer/Footer';
import Cards from './components/Cards/Cards';
import Portfolio from './components/Portfolio/Portfolio';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Cards />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
