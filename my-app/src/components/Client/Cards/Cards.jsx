import React, { useContext } from 'react'
import Card from '../Card/Card'
import MainContext from '../../../context/Context'
import "./Cards.scss"

const Cards = () => {
  const {data}=useContext(MainContext)
  return (
    <div className='cards'>
      {
        data.map((item,index)=>{
          return <div key={index} className='cards__div1'>
            <Card item={item} />
          </div> 
        })
      }
    </div>
  )
}

export default Cards