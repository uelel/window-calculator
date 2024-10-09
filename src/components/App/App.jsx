import React from 'react';

// Components
import Header from '../Header';
import Footer from '../Footer';

class App extends React.Component {

  constructor() {
    super();
  }

  state = {
  	step: 0,
  };

  setStep = (value) => {
    this.setState({ step: Number(value) });
  };

  render() {
    return (
      <div className="w-full min-h-screen flex flex-col items-center overflow-x-hidden">
        <Header/>
        <div className="w-full flex flex-col lg:flex-row grow justify-center items-center bg-light">
          
        </div>
        <Footer/>
      </div>
    );
  };
};

export default App;