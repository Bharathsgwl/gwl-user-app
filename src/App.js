import React from 'react';
import logo from './logo.svg';
import './App.css';
  import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import Header from './Components/Header';
import InstructionsPage from './Components/MidSection/InstructionsPage';
import ExamSection from './Components/MidSection/ExamSection';
import LogoutSection from './Components/MidSection/LogoutSection';
import Login from './Components/Login';
import AnswerList from './Components/MidSection/AnswerList';
import {Provider} from 'react-redux';
import store from './redux/store';
function App() {
  return (
    <Router>
    <Provider store={store} >
      <Route exact path="/" component={Login}/>
    <Route exact path="/user/InstructionsPage" component={InstructionsPage} />
    <Route exact path="/user/ExamSection" component={ExamSection} />
    <Route exact path="/user/logoutsection" component={LogoutSection} />
    <Route exact path="/user/ExamSection/AnswerList" component={AnswerList} />
    </Provider>
    </Router>

  );
}

export default App;
