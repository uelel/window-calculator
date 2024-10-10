import React from 'react';
import PropTypes from 'prop-types';

class Content extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="w-full h-full flex flex-col lg:flex-row grow justify-center items-center bg-light">
        <div className="w-full h-full flex basis-1/2 lg:basis-7/12 overflow-hidden grow shrink-0 bg-medium">
          <img className="w-full object-cover" src={`images/${this.props.image}`} />
        </div>
        <div className="flex basis-1/2 lg:basis-5/12 overflow-y-auto bg-light grow-0 shrink-0 lg:col-span-5">

        </div>
      </div>
    );
  }
}

export default Content;
