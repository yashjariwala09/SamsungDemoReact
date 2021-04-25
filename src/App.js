import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import HomeContainer from './Containers/Home';
import FooterComponent from './Components/Footer';
import FeaturePage from './Containers/FeaturePage';

class App extends Component {
  render() {
    return (
      <div>
          <Header/>
          <HomeContainer/>
            {/* <FeaturePage /> */}
          <FooterComponent/>
      </div>
    );
  }
}

export default App;
