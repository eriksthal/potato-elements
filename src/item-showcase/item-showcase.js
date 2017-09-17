import React, { Component } from 'react';
import './item-showcase.css';
import ItemCarousel from '../item-carousel/item-carousel';
import ItemAddToCart from '../item-add-to-cart/item-add-to-cart';

class ItemShowcase extends Component {

    _renderFeatures() {
        return this.props.features.map((feature, index) =>
            <li key={ index }>{ feature.feature }</li>
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
                    <ul className="item-showcase__features-list">
                        { this._renderFeatures() }
                    </ul>
                    <ItemAddToCart price="12.40" addToCartText="Add to cart" wishListText="Add to wishlist"></ItemAddToCart>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default ItemShowcase;
