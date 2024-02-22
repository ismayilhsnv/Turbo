import React from 'react'
import {useFormik} from 'formik'
import axios from 'axios'
import './AddProduct.scss'
import toast, {Toaster} from 'react-hot-toast'


const AddProduct = () => {
  const formik = useFormik({
    initialValues: {
      marka: '',
      price: ''
    },
    onSubmit: (values, { resetForm }) => {
      if (!values.marka || !values.price) {
        toast.error("Boşluqları doldurun");
        return;
      }
      axios.post('http://localhost:9090/turbo/', { ...values })
        .then(res => {
          console.log(res);
          resetForm();
          toast.success("Successfully added");
        })
        
    }
  });

  return (
    <div className="div-container">
      <form onSubmit={formik.handleSubmit}>
        <label className="form-label" htmlFor="name">Marka</label><br />
        <input className="input-field" id="name" name="name" type="text" onChange={formik.handleChange} value={formik.values.marka} /><br />

        <label className="form-label" htmlFor="unitPrice">Price</label><br />
        <input className="input-field" id="unitPrice" name="unitPrice" type="text" onChange={formik.handleChange} value={formik.values.price} /><br />

        <button className="submit-button" type="submit">Submit</button>
      </form>
      <Toaster />
    </div>
  );
};

export default AddProduct;