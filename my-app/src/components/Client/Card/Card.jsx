import React, { useContext } from 'react'
import "./Card.scss"
import MainContext from '../../../context/Context'
import { Toaster } from 'react-hot-toast'
import { Link } from "react-router-dom"

const Card = ({ item }) => {
  const { addTOWishlist ,addBasket} = useContext(MainContext)
  return (
    <>
  <div>
    <div className='card'>
      <img src={item.image} alt="" />
      <div className='card__price'>
        <p><b>{item.price}</b></p>
        <div className='card__marka'>
          <span>{item.marka}</span>
          <span>{item.categories}</span>
        </div>
        <div className='card__year'>
          <span>{item.year}</span>
          <span>{item.capacity}</span>
          <span>{item.yürüş}</span>
        </div>
        <div className='card__city'>
          <span>{item.city}</span>
          <span>15:33</span>
        </div>
      </div>
      <div className='card__buttons'>
      <button className='btn' onClick={()=>{
          addTOWishlist(item._id)
        }}><i className="fa-solid fa-heart heart" style={{color: "#d60000",fontSize:"22px"}}></i></button>
        <button className='card__basket' onClick={() => {
          addBasket(item)
        }}><i class="fa-solid fa-basket-shopping" style={{color: "#c8ae04"}}></i></button>
        <button className='card__detail'>
          <Link style={{ textDecoration: "none", color: "black" }} to={`/${item._id}`}>
          <i class="fa-solid fa-arrow-right" style={{color: "#0056eb"}}></i>
          </Link>
        </button>
      </div>
    </div>
     
  </div>
   <Toaster/>
    </>
  )
}

export default Card