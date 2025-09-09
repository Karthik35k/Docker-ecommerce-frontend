import React from 'react'

const Home = () => {
  return (
    <div className="grid-layout">
      <div className="product">
        <img src="./rose.jpg" alt="Product 1" />
        <h4>Product 1</h4>
        <p>$10.00</p>
      </div>
      <div className="product">
        <img src="./rose.jpg" alt="Product 2" />
        <h4>Product 2</h4>
        <p>$10.00</p>
      </div>
      <div className="product">
        <img src="./rose.jpg" alt="Product 3" />
        <h4>Product 3</h4>
        <p>$10.00</p>
      </div>
      <div className="product">
        <img src="./rose.jpg" alt="Product 4" />
        <h4>Product 4</h4>
        <p>$10.00</p>
      </div>
    </div>
  )
}

export default Home;