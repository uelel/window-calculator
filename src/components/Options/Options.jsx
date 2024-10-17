import React from 'react';
import PropTypes from 'prop-types';
import Card from "../Card";

class Options extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.choice === "single") {
      this.state = {
        value: null
      };
    } else if (this.props.choice === "multi") {
      this.state = {
        values: []
      };
    }
  }

  changeState = (e) => {
    const newValue = String(e);
    if (this.props.choice === "single") {
      this.setState((prevState) => ({
        value: prevState.value === newValue ? null : newValue
      }));

    } else if (this.props.choice === "multi") {}
    if (this.props.onChange) {
      this.props.onChange(newValue);
    }
  }

  render() {
    return (
      <div
        data-name={this.props.name}
        className="w-full grid gap-4 md:gap-8 xl:gap-12 grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        {this.props.data?.map((item, index) => (
        <Card 
          key={index} 
          label={item.label} 
          value={item.value} 
          image={item.image} 
          price={item.price} 
          desc={item.desc} 
          onClick={this.changeState} 
          isSelected={this.state.value === item.value} 
        />
        ))}
      </div>
    );
  }
}

export default Options;
