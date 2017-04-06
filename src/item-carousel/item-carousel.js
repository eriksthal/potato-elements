import React, { Component } from 'react';
import './item-carousel.css';

class ItemCarousel extends Component {
    constructor(props) {
        super();
        const defaultImage = props.defaultImage ? props.defaultImage : 0;
        this.state = { selectedImage: props.images[defaultImage].image ? props.images[defaultImage].image : "" };
    }

    _swapImage(event) {
        if(event && event.target) {
            console.log(event.target);
            this.setState({selectedImage: event.target.src});
            console.log(this.state.selectedImage);
        }

    }
    _renderThumbs() {
        return this.props.images.map((image) =>
            <img onClick={this._swapImage.bind(this)} className="item-carousel__thumbnail" src={image.image} alt={image.alt} />
        );
    }
  render() {
    return (
        <div className="item-carousel__carousel-container">
            <div className="item-carousel__image-container">
                <img className="item-carousel__image" src={ this.state.selectedImage } alt={ this.state.selectedImage }/>
            </div>
            <div className="item-carousel__thumbnail-container">
                {this._renderThumbs()}
            </div>
        </div>
    );
  }
}

export default ItemCarousel;
