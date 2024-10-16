import React from 'react';
import PropTypes from 'prop-types';
import ToolTip from "../MT/ToolTip";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const value = e.currentTarget.getAttribute("data-value");
    if (this.props.onClick) {
      this.props.onClick(value);
    }
  }

  renderImage() {
    return (
      <div
        className="h-32 lg:h-48 bg-center bg-no-repeat bg-cover rounded-t"
        style={{backgroundImage: `url(images/${this.props.image})`}}
      ></div>
    );
  }

  renderInfo() {
    if (this.props.desc !== "") {
      return (
        <ToolTip text={this.props.desc} />
      );
    }
  }

  render() {
    let cardClasses = "min-w-36 min-h-56 lg:min-h-72 outline-none rounded-md bg-white border-gray border-1 shadow cursor-pointer hover:shadow-xl transition duration-200";
    if (this.props.isSelected) {
      cardClasses += " ring ring-dark shadow-xl"
    }
    return (
      <div
        tabIndex="0"
        data-value={this.props.value} 
        onClick={this.handleClick} 
        className={cardClasses}
      >
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
