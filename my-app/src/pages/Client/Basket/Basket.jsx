import React, { useContext } from 'react'
import MainContext from '../../../context/Context'
import "./Basket.scss"
import { Helmet } from 'react-helmet'

const Basket = () => {
  const { basket, handleIncrease, handleDecrease, } = useContext(MainContext)

  let totalPrice = 0
  return (
    <div className='basket'>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Basket</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Decrease</th>
            <th scope="col">Count</th>
            <th scope="col">Increase</th>
            <th scope="col">TotalPrice</th>
          </tr>
        </thead>
        <tbody>

          {
            basket.map((item, index) => {
              totalPrice += item.totalPrice

              return (
                <tr key={index}>
                  <th scope="row">{item.index}</th>
                  <td><img width={'100px'} height={'100px'} src={item.image} alt="" /></td>
                  <td style={{ padding: '15px', marginTop: '20px' }}>{item.marka}</td>
                  <td style={{ padding: '15px' }}>{item.price}</td>
                  <td style={{ padding: '15px' }}><button className='btn btn-danger' onClick={() => handleDecrease(item)}>-</button></td>
                  <td style={{ padding: '15px' }}>{item.count}</td>
                  <td style={{ padding: '15px' }}><button className='btn btn-success' onClick={() => handleIncrease(item)}>+</button></td>
                  <td style={{ padding: '15px' }}>{item.totalPrice}</td>
                </tr>
              )
            })
          }

        </tbody>
      </table>
      <h1 style={{ padding: '40px' }}>Total Price:{totalPrice}</h1>
    </div>
  )
}

export default Basket