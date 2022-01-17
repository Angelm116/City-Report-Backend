import React from 'react';
import {BrowserRouter as Router, NavLink, Route, Routes} from 'react-router-dom';
import 'react-bootstrap';
import './App.css';
import NavigationBar from './NavigationBar.js';
import Analytics from './Analytics.js';
import ReportsPage from './ReportsPage';

// more organized way but is not working, so temporarily under construction
function App() { 
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <div>
          <Routes>
            <Route exact path="/" element={<ReportsPage />} />
            <Route exact path="/Analytics" element={<Analytics />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
