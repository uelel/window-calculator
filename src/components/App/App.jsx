import React from 'react';

// Components
import Header from '../Header';

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
      <div className="w-full flex flex-col items-center overflow-x-hidden">
        <Header/>
      </div>
    );
  };
};

export default App;