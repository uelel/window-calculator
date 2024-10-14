import React from 'react';
import PropTypes from 'prop-types';

class Content extends React.Component {
  constructor(props) {
    super(props);
  }

  renderImage() {
    if (this.props.image) {
      return (
        <div className="w-full h-full flex basis-1/2 overflow-hidden grow shrink-0 bg-medium">
          <img className="w-full object-cover" src={`images/${this.props.image}`} />
        </div>
      );
    }
  }

  renderHeading() {
    return (
      <div className="outline-none flex items-center group leading-tight mb-5 md:mb-10">
        <div className="w-8 h-8 md:w-10 md:h-10 mr-5 flex shrink-0 items-center justify-center mr-3 rounded-full border-1 border-dark transition duration-200 border-none bg-dark text-white text-xl">1</div>
        <h1>{this.props.heading}</h1>
      </div>
    );
  }

  renderContent() {
    if (this.props.image) {
      var classes = "basis-1/2";
    } else {
      var classes = "basis-full";
    }
    return (
      <div className={`w-full h-full flex flex-col justify-start items-start px-4 md:px-12 py-8 md:py-10 overflow-hidden bg-light grow-0 shrink-0 ${classes}`}>
        {this.renderHeading()}
        <div className="w-full grid gap-4 md:gap-8 xl:gap-12 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {this.props.children}
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="w-full h-full flex flex-col lg:flex-row grow justify-center items-center bg-light overflow-hidden"> 
        {this.renderImage()}
        {this.renderContent()}
      </div>
    );
  }
}

export default Content;
