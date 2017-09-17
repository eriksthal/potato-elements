import React, { Component } from 'react';
import './navigation-bar.css';

class NavigationBar extends Component {

    _renderOptions() {
        return this.props.menuItems.map((item, index) =>
            <a key={index} className="navigation-bar__link" style={{color: this.props.itemsColor, paddingRight: '10px', paddingLeft: "10px"}} href={item.url}>{item.text}</a>
        );
    }
  render() {
    return (
      <div className="navigation-bar__navbar" style={{justifyContent: this.props.itemsAlign, borderBottom: 'solid 1px' + this.props.borderBottomColor, backgroundColor: this.props.backgroundColor }}>
        <div className="navigation-bar__logo">
          BRAND
        </div>
        <div className="navigation-bar__menu-items">
          {this._renderOptions()}
        </div>
      </div>
    );
  }
}

export default NavigationBar;
