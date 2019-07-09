import React from 'react';
import logo from '../shared/images/logo.svg';
import './App.css';
import Header from "../shared/components/layout/Header";
import Content from "../shared/components/layout/Content";
import Footer from "../shared/components/layout/Footer";
import Timer from './Pomodoro/Timer';
function App() {
  return (
    <div className="App">
      <Header title="Welcome to Codejobs" />
      <Content>
        <Timer />
      </Content>
      <Footer />
    </div>
  );
}

export default App;