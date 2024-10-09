import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="w-full h-24 inline-flex justify-start items-center p-5 bg-white">
        <h1>Header</h1>
      </div>
    );
  }
}

export default Header;
