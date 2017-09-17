import React, { Component } from 'react';
import './picture-frame.css';

class PictureFrame extends Component {
  render() {
    return (
      <div className="picture-frame__frame-container">
        <div className="picture-frame__frame">
          <img src={this.props.src} alt={this.props.alt} />
        </div>
      </div>
    );
  }
}

export default PictureFrame;
