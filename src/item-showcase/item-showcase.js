import React, { Component } from 'react';
import './item-showcase.css';
import ItemCarousel from '../item-carousel/item-carousel';

class ItemShowcase extends Component {

    _renderFeatures() {
        return this.props.features.map((feature) =>
            <li>{feature.feature}</li>
        );
    }
  render() {
    return (
      <div>
        <div className="item-showcase__container">
            <h1 className="item-showcase__title">{ this.props.itemName }</h1>
            <div className="item-showcase__details">
                <div className="item-showcase__image-container">
                    <ItemCarousel defaultImage={this.props.defaultImage} images={this.props.images}></ItemCarousel>
                </div>
                <div className="item-showcase__description-container">
                    { this.props.description }
                    <ul>
                        { this._renderFeatures() }
                    </ul>
                    <div className="item-showcase__price-container">
                        <p className="item-showcase__price">${this.props.price}</p><button className="item-showcase__add-to-cart-button">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default ItemShowcase;
