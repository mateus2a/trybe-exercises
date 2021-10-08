import React from 'react';
import './App.css';
class Image extends React.Component {
  render() {

    return <img src={this.props.source} alt={this.props.alternativeText} />;
  }
}

export default Image;