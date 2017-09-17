import React, { Component } from 'react';
import logo from './logo.svg';
import ItemShowcase from './item-showcase/item-showcase';
import NavigationBar from './navigation-bar/navigation-bar';
import PictureFrame from './picture-frame/picture-frame';
import PictureWall from './picture-wall/picture-wall';
import './App.css';
var customData = require('./testpage.json');

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar
          backgroundColor="#fff"
          itemsColor="#666"
          borderBottomColor="#bbb"
          menuItems={[{text: "Home", url: "#"},{text: "About", url: "#"},{text: "Contact", url: "#"}]}
          itemsAlign="flex-end"
        ></NavigationBar>
        <div className="App__content">
          <h1 className="App__heading">Probando</h1>
          <PictureWall>
            <PictureFrame
              src="https://farm5.staticflickr.com/4235/35401404191_20f2e5a9ba_m_d.jpg"
              alt="Test"
              size="medium"
            ></PictureFrame>
            <PictureFrame
              src="https://farm5.staticflickr.com/4265/34823017194_c9c74a6ffb_m_d.jpg"
              alt="Test"
              size="medium"
            ></PictureFrame>
            <PictureFrame
              src="https://farm5.staticflickr.com/4265/35145249330_bef0f0c107_m_d.jpg"
              alt="Test"
              size="medium"
            ></PictureFrame>
            <PictureFrame
              src="https://farm8.staticflickr.com/7587/16774333238_803a0aa4e6_m_d.jpg"
              alt="Test"
              size="medium"
            ></PictureFrame>
            <PictureFrame
              src="https://farm8.staticflickr.com/7652/16963323705_c3ace741ee_m_d.jpg"
              alt="Test"
              size="medium"
            ></PictureFrame>
            <PictureFrame
              src="https://farm5.staticflickr.com/4115/34823019184_43b68e7706_m_d.jpg"
              alt="Test"
              size="small"
            ></PictureFrame>
            <PictureFrame
              src="https://farm8.staticflickr.com/7595/16775793899_7b559b8135_m_d.jpg"
              alt="Test"
            ></PictureFrame>
            <PictureFrame
              src="https://farm5.staticflickr.com/4205/35401402561_03d8a6484e_m_d.jpg"
              alt="Test"
              size="medium"
            ></PictureFrame>
          </PictureWall>
          <img src="http://pngimg.com/uploads/sofa/sofa_PNG6963.png" style={{width:'100%'}}/>
          <ItemShowcase
            itemName="A Night Sky"
            description="Get a night sky yada yada"
            features={[{feature: "4 x 3 size"}, {feature: "Excellent print quality"}, {feature: "Ships to Canada"}]}
            images={[
              {image: "https://naturetravels.files.wordpress.com/2011/08/northern-lights-3.jpg?w=200&h=150&crop=1", alt: "Text 1"},
              {image: "http://img-aws.ehowcdn.com/150X100/cpi-studiod-com/www_ehow_com/i.ehow.com/images/a07/bl/vt/frame-poster-wrinkles-800x800.jpg", alt: "Text 1"}
            ]}
            price="90.50"
          ></ItemShowcase>
        </div>
      </div>
    );
  }
}

export default App;
