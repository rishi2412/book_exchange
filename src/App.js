import React, { Component } from 'react';
import './App.css';
import Main from '../src/components/Main';
import Auth from '../src/components/authentication/Auth';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'


class App extends Component {
  clearSessionStorage = () => {
    sessionStorage.clear()
  }

  componentDidMount() {

    window.addEventListener('beforeunload', this.clearSessionStorage)
  }
  componentWillUnmount() {
    window.removeEventListener('beforeunload', this.clearSessionStorage)
  }
  render() {
    return (
      <Router>
        <Routes>
          <Route exact path="/auth" element={<Auth />} />
          <Route exact path="/home" element={<Main />} />
          <Route path="*" element={<Navigate to="/auth" />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
