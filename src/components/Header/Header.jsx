import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  renderNavigation = () => {
    return (
      <nav className="flex items-center whitespace-nowrap overflow-x-auto overflow-y-hidden">
        <div className="hidden md:flex items-center flex-shrink-1 pl-5 pr-32">
          <div tabIndex="0" className="outline-none flex items-center group leading-tight mx-2 py-3 md:pt-5 md:pb-4 ml-not-first cursor-pointer select-none font-bold">
            <div className="flex flex-shrink-0 items-center justify-center mr-3 rounded-full border-1 border-gray w-8 h-8 transition duration-200 border-none bg-dark text-white group-hover:bg-gray group-focus:bg-gray group-hover:text-black group-focus:text-black">
              1
            </div>
            <span>Materiál</span>
          </div>
        </div>
      </nav>
    );
  }

  render() {
    return (
      <div className="w-full h-24 inline-flex justify-start items-center p-5 bg-white">
        <img src="logo.png" className="w-32" alt="Logo"/>
        {this.renderNavigation()}
      </div>
    );
  }
}

export default Header;
