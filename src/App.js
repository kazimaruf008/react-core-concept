import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  // const hero = ['alom', 'rohim', 'rofik', 'jober', 'borkot']
  
  // const products = [
  //   {name:'lemon', price:'$20'},
  //   {name:'apple', price:'$10'}
  // ]
  return (
    <div className="App">
      <header className="App-header">
        <p>this is react</p>
        <Counter></Counter>
        <Users></Users>
        {/* <ul>
          {
          hero.map(hero => <li>{hero}</li>)
          }
          {
            products.map(products=> <li>{products.name}</li>)
          }
        </ul>
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product> */}
      </header>
    </div>
  );
}

// function Product(props) {
//   const productStyle={
//     border:"1px solid gray",
//     borderRadius:"10px",
//     height:"250px",
//     width:'250px',
//     backgroundColor:'lightgrey',
//     float:'left'
//   }
//   return (
//     <div style={productStyle}>
//       <h2>{props.product.name}</h2>
//       <h1>{props.product.price}</h1>
//       <button>buy now</button>
//     </div>
//   )
// }
const Users = () =>{
  const [users, setUsers] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setUsers(data))
  }, [])
  const listStyle={
    border:"1px solid gray",
    borderRadius:"10px",
    height:"100px",
    width:'370px',
    backgroundColor:'lightgrey',
    float:'left',
    listStyleType: 'none',
    margin:'10px'
  }
  return (
    <div>
      <h3>dynamic users: {users.length}</h3>
      <ul>
        {
         users.map(user =>  <li style={listStyle} key={user.id}>Name: {user.name} <br/> Email: {user.email}</li>)
        }
      </ul>
    </div>
  )
}


const Counter =() =>{
  const [count, setCount] = useState(0);
  
  return(
    <div>
      <h1>Count: {count}</h1> 
      <button onClick={() => setCount(count + 1)}><h3>+</h3></button>
      <button onClick={() => setCount(count - 1)}><h3>-</h3></button> 
    </div>
  )
}

export default App;
