import React from 'react';
import PropTypes from 'prop-types';

import { InformationCircleIcon } from '@heroicons/react/24/solid';

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  renderImage() {
    return (
      <div className="h-32 bg-center bg-no-repeat bg-cover rounded-t" style={{backgroundImage: `url(images/${this.props.image})`}}></div>
    );
  }

  renderInfo() {
    if (this.props.desc !== "") {
      return (
        <div tabIndex="0" data-original-title="null" className="ml-2">
          <InformationCircleIcon className="size-6 font-bold text-black" />
        </div>
      );
    }
  }



  render() {
    return (
      <div tabIndex="0" data-test="card-image" className="min-w-36 min-h-56 outline-none rounded-md bg-white border-gray border-1 shadow cursor-pointer hover:shadow-xl focus:ring focus:ring-dark focus:shadow-xl transition duration-200">
        {this.renderImage()}
        <div className="flex flex-row flex-nowrap items-center border-1 border-transparent px-4 pb-4 pt-4">
          <div className="text-lg leading-none">{this.props.label}</div>
          {this.renderInfo()}
        </div>
      </div>
    );
  }
}

export default Card;
