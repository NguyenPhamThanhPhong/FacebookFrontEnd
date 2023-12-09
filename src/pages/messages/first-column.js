import React from 'react';
import "./first-column.css"

function FirstColumn(props) {
  let products = props.products;
    return (
        <div className="scrollable-product-list">
          {products.map(product => (
            <div key={product.id} className="product">
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <p>Rating: {product.rating.average} ({product.rating.reviews} reviews)</p>
            </div>
          ))}
        </div>
      );
}

export default FirstColumn;