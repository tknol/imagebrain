import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Particles from 'react-particles-js';

const particlesParams = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
};

class App extends Component {
  render() {
    return (
      <div className="App">
      <Particles className='particles'
        params={particlesParams}
      />

		<Navigation />
		<Logo />
		<ImageLinkForm />
		<FaceRecognition />
      </div>
    );
  }
}

export default App;
