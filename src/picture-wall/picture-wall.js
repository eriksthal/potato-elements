import React, { Component } from 'react';
import './picture-wall.css';

class PictureWall extends Component {

  render() {
    return (
    <div className="picture_wall__wrapper">
      <div className="picture_wall__wall">
        {this.props.children}
      </div>
    </div>
    );
  }
}

export default PictureWall;
