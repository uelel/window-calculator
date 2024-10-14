import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  renderInfo() {
    if (this.props.desc !== "") {
      <div tabIndex="0" data-original-title="null" className="ml-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17"><path fill="currentColor" d="M8.5 0C3.813 0 0 3.814 0 8.5 0 13.188 3.813 17 8.5 17c4.687 0 8.5-3.812 8.5-8.5C17 3.814 13.187 0 8.5 0zm0 4.038a1.063 1.063 0 110 2.126 1.063 1.063 0 010-2.126zm2.55 8.712h-5.1v-1.7h1.7V8.5H6.8V6.8h1.7c.47 0 .85.38.85.85v3.4h1.7v1.7z"></path></svg>
      </div>
    }
  }

  render() {
    return (
      <div tabIndex="0" data-test="card-image" className="outline-none rounded-md bg-white shadow-sm cursor-pointer hover:shadow-xl focus:shadow-xl transition duration-200 border-gray border-1">
        <div className="bg-center bg-no-repeat sm:h-48 h-32 lg:h-32 xxl:h-48 bg-cover rounded-t" style={{backgroundImage: `url(images/${this.props.image})`}}></div>
        <div className="leading-tight border-1 border-transparent text-xl px-5 pb-5 pt-2 lg:pt-5">
          <div className="flex items-center">{this.props.label}</div>
          {this.renderInfo()}
        </div>
      </div>
    );
  }
}

export default Card;
