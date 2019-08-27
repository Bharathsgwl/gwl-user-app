import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import Header from './Components/Header';
import InstructionsPage from './Components/MidSection/InstructionsPage';
import ExamSection from './Components/MidSection/ExamSection';
import LogoutSection from './Components/MidSection/LogoutSection';

function App() {
  return (
    <Router>
    <Route exact path="/user" component={Header}/>
    <Route exact path="/user/InstructionsPage" component={InstructionsPage} />
    <Route exact path="/user/ExamSection" component={ExamSection} />
    <Route exact path="/user/logoutsection" component={LogoutSection} />
    </Router>
  );
}

export default App;
