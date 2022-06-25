import React from 'react'


export function Header() {
  return(
    <div>

      <div className='header flexdisplay' >
      
        <div> <img src='https://bit.ly/3yfYYqZ' height='60' width='65' alt='logo'/> </div>
        
        <div className='content flexdisplay'> 
          <p><b>Other</b><span>Hyderabad,Telangana,India</span></p>
          <div className='navbar'>
          <p><a href='abc'>Search</a></p>
          <p><a href='abc'>Offers</a></p>
          <p><a href='abc'>Help</a></p>
          <p><a href='abc'>Sign In</a></p>
          <p><a href='abc'>Cart</a></p>
          </div>
        </div>

      </div>
    </div>
  )
}