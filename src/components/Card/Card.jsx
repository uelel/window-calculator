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

  renderName(classes) {
    return (
      <div className={`text-base md:text-lg leading-none ${classes}`}>
        {this.props.label}
      </div>
    );
  }

  renderInfo() {
    if (this.props.desc !== "") {
      return (
        <ToolTip text={this.props.desc} />
      );
    }
  }

  renderRecommended() {
    if (this.props.recommended === true) {
      return (
        <div className="bg-dark rounded-lg text-sm md:text-base text-white inline-block py-0.5 px-2 mr-4 uppercase">
          Doporučujeme
        </div>
      );
    }
  }

  renderPrice() {
    if (this.props.price !== 0) {
      return (
        <div className="text-base md:text-lg text-gray whitespace-nowrap">
          + {this.props.price}Kč
        </div>
      );
    }
  }

  render() {
    let cardClasses = "";
    let nameClasses = "";
    if (this.props.isSelected) {
      cardClasses += " ring ring-dark shadow-xl";
      nameClasses += " font-bold";
    }
    return (
      <div
        tabIndex="0"
        data-value={this.props.value} 
        onClick={this.handleClick} 
        className={`min-w-36 min-h-56 lg:min-h-72 outline-none rounded-md bg-white border-gray border-1 shadow cursor-pointer hover:shadow-xl transition duration-200 ${cardClasses}`}
      >
        {this.renderImage()}
        <div className="flex flex-col justify-start items-start border-1 border-transparent px-4 pb-4 pt-4">
          <div className="flex flex-row flex-nowrap items-center mb-2">
            {this.renderName(nameClasses)}
            {this.renderInfo()}
          </div>
          <div className="w-full flex flex-row flex-wrap justify-between items-center">
            {this.renderRecommended()}
            {this.renderPrice()}
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
