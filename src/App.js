import React, { Component } from 'react';
import logo from './logo.svg';
import ItemShowcase from './item-showcase/item-showcase'
import NavigationBar from './navigation-bar/navigation-bar'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar
          logo={''}
          backgroundColor="green"
          itemsColor="white"
          menuItems={[{text: "Home", url: "#"},{text: "About", url: "#"},{text: "Contact", url: "#"}]}
        ></NavigationBar>
        <div className="App__content">
          <ItemShowcase
            itemName="Botella de vidrio"
            description="This product contains the following features"
            features={[{feature: "Lots of fun stuff"}, {feature: "Easy to clean"}, {feature: "Easy to store"}]}
            images={[
              {image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Bouteille.jpg/150px-Bouteille.jpg", alt: "Text 1"},
              {image: "https://www.unitedbottles.com/wp-content/uploads/United-bottles-Packaging-bouteille-brunes-bn058.png", alt: "Text 2"},
              {image: "http://www.purpleflame.co.uk/wp-content/uploads/2013/06/Blue-Boston-Bottle-100ml.jpg", alt: "Text 3"}
            ]}
            price="11.50"
          ></ItemShowcase>
        </div>
      </div>
    );
  }
}

export default App;
