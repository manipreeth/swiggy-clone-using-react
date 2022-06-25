import React from 'react'
import {Restaurants} from './restaurentslistlayout'

function Restaurantsdetails() {
  
const restaurantsdetails=[
  {restaurantname:'Santosh Dhaba Exclusive',restaurantimagesrc:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/jllcesio37olflwnvter",alternatetext:"Santosh Dhaba Exclusive",
  menu:'North Indian, Biryani, Chinese, Italian, Mexican, Desserts', rating:4.1,deliverytime:44,price:270},
  {restaurantname:'Mehfil',restaurantimagesrc:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/uvvj5pcyhsgt29yldbvq",alternatetext:"Mehfil",
  menu:'Biryani, Chinese, Indian, Kebabs, Tandoor, Desserts', rating:3.8,deliverytime:45,price:375},
  {restaurantname:'Mehfil',restaurantimagesrc:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/esp0fhddgfgdss5hyhpi",alternatetext:"Mehfil",
  menu:'Biryani, Chinese, Indian, Kebabs, Tandoor, Desserts', rating:2.9,deliverytime:37,price:399},
  {restaurantname:'Balaji Family Dhaba & Caterers',restaurantimagesrc:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/harrhvn9bjqgq0oysbem",alternatetext:"Balaji Family Dhaba & Caterers",
  menu:'North Indian, Chinese', rating:4.8,deliverytime:49,price:450}
  ]

  return(
    <div className='flexdisplay'>
    {restaurantsdetails.map((value)=><Restaurants details={value}/>)}
    </div>
)
}
export default Restaurantsdetails;