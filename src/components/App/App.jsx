import React from 'react';

import { materials } from '../../data';

// Components
import Header from '../Header';
import Content from '../Content';
import Options from '../Options';
import Footer from '../Footer';

class App extends React.Component {

  constructor() {
    super();
    this.materials = materials;
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
        <Content heading="Vyberte Materiál">
          <Options
            name="material"
            data={this.materials}
            choice="single"
          />
        </Content>
        <Footer/>
      </div>
    );
  };
};

export default App;