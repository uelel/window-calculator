import React from 'react';

import { material } from '../../data';

// Components
import Header from '../Header';
import Content from '../Content';
import Footer from '../Footer';

class App extends React.Component {

  constructor() {
    super();
  }

  state = {
  	step: 0,
    material: null
  };

  setStep = (value) => {
    this.setState({ step: Number(value) });
  };

  setMaterial = (value) => {
    this.setState({ material: String(value) });
  };

  render() {
    return (
      <div className="w-full h-screen max-h-screen flex flex-col items-center overflow-x-hidden">
        <Header/>
        <Content />
        <Footer/>
      </div>
    );
  };
};

export default App;