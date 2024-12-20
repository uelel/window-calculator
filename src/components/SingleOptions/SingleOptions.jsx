import React from 'react';
import Card from "../Card";

class SingleOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
  }

  changeState = (e) => {
    const newValue = String(e);
    this.setState((prevState) => ({
      value: prevState.value === newValue ? null : newValue
    }), () => {
      if (this.props.onChange) {
        this.props.onChange(this.state.value);
      }
    });
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
          recommended={item.recommended} 
          onClick={this.changeState} 
          imageFull={this.props.imageFull}
          isSelected={this.state.value === item.value} 
        />
        ))}
      </div>
    );
  }
}

export default SingleOptions;
