import logo from './logo.svg';
import './App.css';

function App() {

  const hero = ['alom', 'rohim', 'rofik', 'jober', 'borkot']
  
  const products = [
    {name:'lemon', price:'$20'},
    {name:'apple', price:'$10'}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {
          hero.map(hero => <li>{hero}</li>)
          }
          {
            products.map(products=> <li>{products.name}</li>)
          }
        </ul>
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
      </header>
    </div>
  );
}

function Product(props) {
  const productStyle={
    border:"1px solid gray",
    borderRadius:"10px",
    height:"250px",
    width:'250px',
    backgroundColor:'lightgrey',
    float:'left'
  }
  return (
    <div style={productStyle}>
      <h2>{props.product.name}</h2>
      <h1>{props.product.price}</h1>
      <button>buy now</button>
    </div>
  )
}

export default App;
