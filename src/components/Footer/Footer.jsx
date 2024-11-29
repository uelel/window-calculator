import React from 'react';
import PropTypes from 'prop-types';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClickButtonNext = (e) => {
    if (this.props.isStepSelected) {
      this.props.onClick();
    }
  }

  renderTotal = () => {
    return(
      <strong className="text-2xl text-white">{this.props.totalPrice} Kč</strong>
    );
  };

  renderNextButton = () => {
    let classes = "";
    if (this.props.isStepSelected) {
      classes = "cursor-pointer font-bold animate-button_pulse hover:border-primary focus:border-primary hover:border-2 focus:border-2 hover:border-white focus:border-white hover:bg-transparent focus:bg-transparent hover:text-white focus:text-white";
    } else {
      classes = "cursor-not-allowed font-normal opacity-50";
    }
    return (
      <button
        type="button"
        className={`flex group px-5 py-2 rounded-full focus:outline-none leading-tight ml-4 md:ml-10 justify-center md:w-40 bg-white border-white border-gray border-1 ${classes}`}
        data-name="btn-next" 
        onClick={this.handleClickButtonNext}
      >
        <div className="flex items-center border-transparent group-hover:border-0 group-focus:border-0 border-1">Další</div>
      </button>
    );
  };

  render() {
    return (
      <footer className="w-full h-16 md:h-24 flex flex-row justify-start items-center">
        <div className="w-max h-full grow"></div>
        <div className="w-300 md:w-480 lg:w-560 h-full flex flex-row justify-evenly items-center bg-gradient-to-r from-dark to-medium">
          {this.renderTotal()}
          {this.renderNextButton()}
        </div>
      </footer>
    );
  }
}

export default Footer;
