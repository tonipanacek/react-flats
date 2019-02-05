import React, { Component } from 'react';

class Flat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false
    }
  }

  handleClick = () => {
    // const currentState = this.state.active;
    this.setState({
      active: !this.state.active
    });
  }

  render() {
    return(
      <div className={this.state.active ? "card active" : "card"} style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(' + this.props.flat.imageUrl + ')' }} >
        <div className="card-category">{this.props.flat.price} {this.props.flat.priceCurrency}</div>
        <div className="card-description">
          <h2>{this.props.flat.name}</h2>
        </div>
        <a className="card-link" onClick={this.handleClick}></a>
      </div>
    )
  }
}

export default Flat;
