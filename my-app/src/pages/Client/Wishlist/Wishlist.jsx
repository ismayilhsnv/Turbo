import React, { useState } from 'react'
import toast from 'react-hot-toast'
import "./Wishlist.scss"

const Wishlist = () => {
  const [wishlist, setWishlist] = useState(localStorage.getItem("secilmis") ? JSON.parse(localStorage.getItem("secilmis")) : [])

  const deleteItem=(id)=>{
    const target=wishlist.find(prod=>prod._id===id)
    wishlist.splice(wishlist.indexOf(target),1)
    setWishlist([...wishlist])
    localStorage.setItem("secilmis",JSON.stringify([...wishlist]))
    toast.success("item silindi")
  }
  const removeAll=()=>{
    setWishlist([])
    localStorage.removeItem("secilmis")
  }
  return (
    <div>
      <button className='btn btn-danger' onClick={removeAll}>Remove All</button>
      <div className='wishlist'>
        {
          wishlist.map((item, index) => {
            return <div className='wishlist__div1' key={index}>
              <img src={item.image} alt="" />
              <p><b>{item.price}</b></p>
              <div className='card__marka'>
                <p>{item.marka}</p>
                <p>{item.categories}</p>
              </div>
              <div className='card__year'>
                <p>{item.year}</p>
                <p>{item.capacity}</p>
                <p>{item.yürüş}</p>
              </div>
              <button className='btn btn-danger' onClick={() => {
                deleteItem(item._id)
              }}>Delete</button>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default Wishlist