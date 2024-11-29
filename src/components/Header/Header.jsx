import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  renderNavigation = () => {
    const lastStepIndex = this.props.history.length - 1;
    console.log('lastStepIndex='+lastStepIndex)

    return (
      <nav className="flex items-center whitespace-nowrap overflow-x-auto overflow-y-hidden">
        <div className="hidden md:flex items-center flex-shrink-1 pl-5 pr-32">
          {this.props.history.map((step, index) => (
          <div
            key={index} 
            tabIndex={index} 
            data-name={step.name}
            className={`outline-none flex items-center group leading-tight mx-2 py-3 md:pt-5 md:pb-4 ml-not-first cursor-pointer select-none ${
              index === lastStepIndex ? 'font-bold' : ''
            }`}
          >
            <div className={`flex flex-shrink-0 items-center justify-center mr-3 rounded-full border border-gray w-8 h-8 transition duration-200 ${
              index === lastStepIndex ? 'text-white group-hover:text-black group-focus:text-black bg-dark group-hover:bg-gray group-focus:bg-gray' : 'text-black group-hover:bg-gray group-focus:bg-gray'
            }`}>
              {step.index+1}
            </div>
            <span>{step.label}</span>
          </div>
          ))}
        </div>
      </nav>
    );
  }

  render() {
    return (
      <div className="w-full h-24 inline-flex justify-start items-center p-5 bg-white">
        <img src="logo.png" className="w-32 h-auto" alt="Logo"/>
        {this.renderNavigation()}
      </div>
    );
  }
}

export default Header;
