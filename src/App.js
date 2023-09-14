import './App.css';
import React from 'react';
import Login from './components/Login';


const user ={
  name:"Rohan",
  age:50,
  role:"Full Stack Dev"
}

const products = [
  {
    id: 1,
    productName:"Sony Camera",
    productPrice:50000,
    stock: 15,
    isAvailable: true
  },

  {
    id: 2,
    productName:"Shoes",
    productPrice:2000,
    stock: 15,
    isAvailable: true
  },


  {
    id: 3,
    productName:"Tablet",
    productPrice:50000,
    stock: 15,
    isAvailable: true
  },


  {
    id: 4,
    productName:"Laptop",
    productPrice:50000,
    stock: 15,
    isAvailable: true
  },


  {
    id: 5,
    productName:"Mobile",
    productPrice:50000,
    stock: 15,
    isAvailable: true
  },



  {
    id: 6,
    productName:"Clothes",
    productPrice:50000,
    stock: 15,
    isAvailable: true
  },


  {
    id: 7,
    productName:"Headphones",
    productPrice:50000,
    stock: 15,
    isAvailable: true
  },
]

function Product(){
  const listItems= products.map(product=>
    <li key={product.id}>
      {product.id} {product.productName} {product.productPrice}
      </li>
    )

    return (
      <ul>
        {listItems}
      </ul>
    )
}



function Button(){
function handleClick(){
  alert("You have clicked")
}

  return(
    <button onClick={handleClick}>Button</button>
  )
}



function App() {
  return (
    <>
    <div>
    <h1>Welcome to the reactjs webinar by guvi</h1>
    <p>JS html css</p>
    </div>
    <h1 className="title">Reactjs Concepts</h1>
    <hr />
    <div>
      <h1>User Details</h1>
      <ul>
        <li>{user.name}</li>
        <li>{user.age}</li>
        <li>{user.role}</li>
      </ul>
      <Button/>
    </div>

    <div>
      <h1>Rendering the Product list items</h1>
      <Product />

    </div>


    <div>
      <Login/>
    </div>
    </> 
  );
}

export default App;
