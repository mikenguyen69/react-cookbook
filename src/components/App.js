import React, {Component} from 'react';
import logo from '../shared/images/logo.svg';
import './App.css';
import Header from "../shared/components/layout/Header";
import Content from "../shared/components/layout/Content";
import Footer from "../shared/components/layout/Footer";

import Animation from "./Animation/Animation";

class App extends Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div className="App">
        <Header title="Animation" />
        <Content>
          <Animation />
        </Content>
        <Footer />
      </div>
    );
  }
}

export default App;