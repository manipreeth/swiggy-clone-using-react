import React from 'react'

export function Restaurants(props) {
  const {restaurantname,restaurantimagesrc,alternatetext,menu,rating,deliverytime,price}= props.details;

  return(
      <div className='restaurants'>
        <img alt={alternatetext} width="250" height="160" src={restaurantimagesrc}/>
        <h5>{restaurantname}</h5>
        <small>{menu}</small>
        <ul className='flexdisplay'>
        <li id='rating'>{rating}</li>
        <li>{deliverytime} MINS</li>
        <li>${price} FOR TWO</li>
        </ul>
        <hr/>
        <p>50% off | Use WELCOME50</p>
    </div>
)
}