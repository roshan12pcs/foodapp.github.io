import React, { Component } from 'react'; // Import Component from 'react'
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      json: {}
    };
  }
  componentDidMount() {
    this.fetchProducts();
  }

  async fetchProducts() {
    const response = await fetch(
      "http://localhost:4000/food"
    );
    const json = await response.json();
    console.log(json);
    this.setState({json});
  }

  render() {
    let products = null;
  
    if (this.state.json.data && this.state.json.data.menu) {
      // Iterate through each category in the menu
      products = this.state.json.data.menu.map(category => {
        // Check if the category has items
        if (category.itens) {
          // Map through each item in the category
          const categoryProducts = category.itens.map(product => (
            <div key={product.id}>
              <img
                src={`https://static-images.ifood.com.br/image/upload/t_medium/pratos/${product.logoUrl}`}
                alt={product.description}
              />
              <div>{product.description}</div>
              <div>{product.details}</div>
            </div>
          ));
  
          // Return a div for the category with its products
          return (
            <div key={category.code}>
             
              {categoryProducts}
            </div>
          );
        }
  
        return null; // Return null if the category has no items
      });
    }
  
    return <div className='App'>{products}</div>;
  }
  
  
}

export default App;
