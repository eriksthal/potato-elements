import React, { Component } from 'react';
import './navigation-bar.css';

class NavigationBar extends Component {

    _renderOptions() {
        return this.props.menuItems.map((item) =>
            <a style={{color: this.props.itemsColor, paddingRight: '10px', paddingLeft: "10px"}} href={item.url}>{item.text}</a>
        );
    }
  render() {
    return (
      <div className="navigation-bar__navbar" style={{ backgroundColor: this.props.backgroundColor }}>
        {this._renderOptions()}
      </div>
    );
  }
}

export default NavigationBar;
