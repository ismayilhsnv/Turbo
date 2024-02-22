import React from 'react';
import './EditProduct.scss';
import { useFormik } from 'formik';
import axios from 'axios';
import toast, {Toaster} from 'react-hot-toast'

const EditProduct = () => {
  const formik = useFormik({
    initialValues: {
      id: '', 
      marka: '',
      price: '',
    },
    onSubmit: (values, { resetForm }) => {
      if (!values.marka || !values.price || !values.id) {
        toast.error("Boşluqları doldurun");
        return;
      }
     
      axios.put(`http://localhost:9090/turbo/${values.id}`, {
        Marka: values.marka,
        Price: values.price,
      })
      .then(res => {
        console.log(res);
        resetForm();
        toast.success("Uğurla əlavə olundu")
       
      })
      .catch(error => {
        console.error(error);
      });
    },
  });

  return (
    <div className="div-container">
      <form onSubmit={formik.handleSubmit}>
        <label className="form-label" htmlFor="name">
          Marka
        </label>
        <br />
        <input
          className="input-field"
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.marka}
        />
        <br />

        <label className="form-label" htmlFor="unitPrice">
           Price
        </label>
        <br />
        <input
          className="input-field"
          id="unitPrice"
          name="unitPrice"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.price}
        />
        <br />

        <label className="form-label" htmlFor="id">
          Product ID
        </label>
        <br />
        <input
          className="input-field"
          id="id"
          name="id"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.id}
        />
        <br />

        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
      <Toaster/>
    </div>
    
  );
};

export default EditProduct;