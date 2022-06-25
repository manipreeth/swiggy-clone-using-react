import React from "react";

export function Restaurantnavbar() {
  return(
    <div className='restaurantsnavbar flexdisplay'>
      <h1>4 restaurants</h1>
      <div className='filter flexdisplay'>
        <p><a href='a'>Relevance</a></p>
        <p><a href='a'>Delivery Time</a></p>
        <p><a href='a'> Rating</a></p>
        <p><a href='a'>Cost: Low To High</a></p>
        <p><a href='a'>Cost: High To Low</a></p>
        <p><a href='a'>Filters</a></p>
      </div>
  </div>
  )
}