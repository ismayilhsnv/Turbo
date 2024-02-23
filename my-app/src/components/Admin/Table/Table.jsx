import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast'

const Table = ({ item, setData, data }) => {
  const handleDelete = (id) => {
    axios.delete(`http://localhost:9090/turbo/${item._id}`)
      .then(() => {

        const target = data.find(item => item._id == id)
        data.splice(data.indexOf(target), 1)
        setData([...data])
        toast.success("Item silindi")

      })
      .catch((error) => {
        console.error('Error deleting product:', error);
      });
  };



  return (
    <>
      <tr>
        <td>{item._id}</td>
        <td>{item.marka}</td>
        <td>{item.categories}</td>
        <td>{item.price}</td>
        <td><button className='btn btn-danger' onClick={handleDelete} >Delete</button></td>
        <td><Link to='/admin/EditProduct:/_id'><button className='btn btn-warning'>Edit</button></Link></td>
      </tr>
    </>
  );
};

export default Table;
