import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import Header from './Components/Header';

function App() {
  return (
    <div>
    <Header />
    <Router>
    
    <div className="App">
      <Route exact path="/" component={LandingPage}/>
    </div>
    </Router>
    </div>
  );
}

export default App;
