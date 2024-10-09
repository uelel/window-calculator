import React from 'react';
import PropTypes from 'prop-types';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className="w-full h-16 md:h-24 flex flex-row justify-start items-center">
        <div className="w-max h-full grow"></div>
        <div className="w-300 md:w-480 lg:w-560 h-full flex flex-row justify-evenly items-center bg-gradient-to-r from-dark to-medium">
          <strong className="text-2xl text-white">5&nbsp;001&nbsp;Kč</strong>
          <button type="button" className="flex group px-5 py-2 rounded-full animate-button_pulse focus:outline-none leading-tight ml-4 md:ml-10 hover:border-primary focus:border-primary hover:border-2 focus:border-2 justify-center md:w-40 bg-white border-white hover:border-white focus:border-white hover:bg-transparent focus:bg-transparent font-bold hover:text-white focus:text-white border-gray border-1" data-test="btn-next">
            <div className="flex items-center border-transparent group-hover:border-0 group-focus:border-0 border-1">Další</div>
          </button>
        </div>
      </footer>
    );
  }
}

export default Footer;
