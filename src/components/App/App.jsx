import React from 'react';

import { materials } from '../../data';

// Components
import Header from '../Header';
import Content from '../Content';
import Card from '../Card';
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

  renderCards() {
    let cards = [];
    for (let i=0; i<this.materials.length; i++) {
      //console.log(this.materials[i].desc);
      cards.push(
        <Card 
          key={i} 
          label={this.materials[i].label} 
          value={this.materials[i].value}
          image={this.materials[i].image} 
          price={this.materials[i].price}
          desc={this.materials[i].desc} 
        />
      );
    }
    console.log(cards);
    return cards;
  };

  render() {
    return (
      <div className="w-full h-screen max-h-screen flex flex-col items-center overflow-x-hidden">
        <Header/>
        <Content heading="Vyberte Materiál">
          {this.materials?.map((item, index) => (
            <Card 
              key={index} 
              label={item.label} 
              value={item.value} 
              image={item.image} 
              price={item.price} 
              desc={item.desc} 
            />
          ))}
        </Content>
        <Footer/>
      </div>
    );
  };
};

export default App;