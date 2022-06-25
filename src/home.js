import React from 'react'
import Imagelinks from './Components/imagelinks'
import {Header} from './Components/header'
import {Restaurantnavbar} from './Components/restaurantsnavbar'
import Restaurantsdetails from './Components/restaurantsdetails'

function Home() {
  return(
    <div>
      <Header/>
      <Imagelinks/>
      <Restaurantnavbar/>
      <Restaurantsdetails/>
    </div>
)
}
export default Home;