import ConversationItem from '@components/phong-messages-components/Conversation-item';

import React from 'react';

import "./first-column.css"


function FirstColumn(props) {
  var renderArr = [1,2,3,4,5,6,7,8,9,10]


  let products = props.products;
    return (
        <div className="scrollable-product-list">
          {/* {products.map(product => (
            <div key={product.id} className="product">
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <p>Rating: {product.rating.average} ({product.rating.reviews} reviews)</p>
            </div>
          ))} */}
          {
            renderArr.map((item, index) => {
              return (
                <ConversationItem key={index} />
              )
            })
          }

        </div>
      );
}

export default FirstColumn;