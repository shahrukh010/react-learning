import { Component } from "react";
import './ProductList.css';

export class ProductList extends Component{

    constructor(props){
        super(props)
        this.state = {
            products:[],
            loading:false,
            error:null
        };
    }

    componentDidMount(){
        fetch('https://fakestoreapi.com/products')
        .then(response =>response.json())
        .then(products =>this.setState({products,loading:false}))
        .then(error=>this.setState({error,loading:false}))
    }
    handleAddToCart = (id) => {
        const { products } = this.state;
        const index = products.findIndex(product => product.id === id);
        if (index !== -1) {
          const product = products[index];
          product.quantity = product.quantity ? product.quantity + 1 : 1;
          products[index] = product;
          this.setState({ products });
        }
      }
      render() {
        const { products, loading, error } = this.state;
    
        if (loading) {
          return <div>Loading...</div>;
        }
    
        if (error) {
          return <div>Error: {error.message}</div>;
        }
        return (
            <div className="product-list">
              <h1>Products</h1>
              <ul className="product-grid">
                {products.map(product => (
                  <li key={product.id} className="product-item">
                    <div className="product-image">
                      <img src={product.image} alt={product.title} />
                    </div>
                    <div className="product-details">
                      <h2>{product.title}</h2>
                      {/* <p>{product.description}</p> */}
                      <p>${product.price}</p>
                      <button onClick={() => this.handleAddToCart(product.id)}>Add to cart</button>
                      {product.quantity && <span className="product-quantity">({product.quantity})</span>}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          );
        }
    
    }
    
    export default ProductList;