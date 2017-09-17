import React, { Component } from 'react';
import './item-add-to-cart.css';

class AddToCart extends Component {
  render() {
    return (
        <div className="item-showcase__price-container">
            <div>
                <p className="item-showcase__price">${this.props.price} MXN</p>
            </div>
            <div className="item-showcase__buttons-container">
                <button className="item-showcase__add-to-cart-button">{this.props.addToCartText}</button>
                <button className="item-showcase__wish-list-button">{this.props.wishListText}</button>
            </div>
        </div>
    );
  }
}

export default AddToCart;
