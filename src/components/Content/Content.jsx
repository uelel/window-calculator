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

  renderContent() {
    if (this.props.image) {
      var classes = "basis-1/2";
    } else {
      var classes = "basis-full";
    }
    return (
      <div className={`flex overflow-y-auto bg-light grow-0 shrink-0 lg:col-span-5 ${classes}`}>

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
