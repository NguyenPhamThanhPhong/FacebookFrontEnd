import ConversationItem from '@components/phong-messages-components/Conversation-item';
import RoundButton from "@components/phong-messages-components/Round-button";
import SearchBox from "@components/phong-messages-components/header-bar/search/Search-box";

import React from 'react';

import "./first-column.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

function FirstColumn(props) {
  var renderArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  let arrow = <RoundButton width={'35px'} height={'35px'}
    icon={faArrowLeft}
    iconWidth={'90%'} iconHeight={'90%px'} />

  let searchboxContainerStyle = {
    width: '95%',
    height: '40px',
    borderRadius: '20px',
    margin: 'auto'

  }
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
      <div className='first-column-title-wrapper'>
        <h4 className='first-column-chat'>
          Chats
        </h4>
        <RoundButton width={'35px'} height={'35px'} backgroundColor={'var(--container-color)'}
          icon={faEllipsis} 
          iconWidth={'90%'} iconHeight={'90%px'} />
      </div>
      <SearchBox backIcon={arrow} textboxContainerStyle={searchboxContainerStyle} />
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