import React from 'react';

import {
  materials,
  drevo_typ } from '../../data';

// Components
import Header from '../Header';
import Content from '../Content';
import SingleOptions from '../SingleOptions';
import Footer from '../Footer';

class App extends React.Component {

  constructor() {
    super();
    this.materials = materials;
    this.drevo_typ = drevo_typ;
  }

  state = {
  	step: 0,
    image: null,
    history: [], // step, name, heading, image, data
    material: null,
    drevo_typ: null
  };

  increaseStep = () => {
    this.setState((prevState) => (
      { step: prevState.step + 1 }
    ));
  };

  decreaseStep = () => {
    this.setState((prevState) => (
      { step: (prevState.step > 0) ? prevState.step - 1 : 0 }
    ));
  };

  appendToHistory = (newStep, newName) => {
    this.setState((prevState) => ({
      history: [...prevState.items, {step: newStep, name: newName}]
    }));
  };

  removeFromHistory = () => {
    this.setState((prevState) => ({
      history: prevState.items.slice(0, -1)
    }));
  };

  setImage = (value) => {
    this.setState({ image: value });
  };

  setMaterial = (value) => {
    this.setState({ material: value });
  };

  setDrevoTyp = (value) => {
    this.setState({ drevo_typ: value });
  };

  isStepSelected = () => {
    const { step, material } = this.state;
    switch (step) {
      case 0:
        return !!material;
      default:
        return false;
    }
  };

  renderHeader = () => {
    return (
      <Header
        step={this.state.step}
      />
    );
  };

  renderMaterial = () => {
    return (
      <Content
        heading="Vyberte Materiál" 
        step={this.state.step} 
        image={this.state.image} 
      >
        <SingleOptions 
          name="material"
          data={this.materials}
          onChange={this.setMaterial} 
        />
      </Content>
    );
  };

  renderDrevoTyp = () => {
    return (
      <Content
        heading="Vyberte Typ Dřeva" 
        step={this.state.step} 
        image={this.state.image}
      >
        <SingleOptions 
          name="drevo_typ"
          data={this.drevo_typ}
          onChange={this.setDrevoTyp} 
        />
      </Content>
    );
  };

  renderCurrentStep = () => {
    const { step } = this.state;
    switch (step) {
      case 0:
        return this.renderMaterial();
      case 1:
        return this.renderDrevoTyp();
      default:
        return this.renderMaterial();
    }
  };

  renderFooter = () => {
    const isStepSelected = this.isStepSelected();
    return (
      <Footer
        isStepSelected={isStepSelected} 
        onClick={() => this.increaseStep()} 
      />
    );
  };

  render() {
    return (
      <div className="w-full h-screen max-h-screen flex flex-col items-center overflow-x-hidden">
        {this.renderHeader()}
        {this.renderCurrentStep()}
        {this.renderFooter()}
      </div>
    );
  };
};

export default App;