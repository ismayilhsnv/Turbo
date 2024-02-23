import React, { useContext } from 'react'
import "./EditProduct.scss"
import { useFormik } from 'formik';
import * as Yup from 'yup';
import toast, { Toaster } from 'react-hot-toast';
import MainContext from '../../../context/Context';
import axios from 'axios';

const Add = () => {
    const { data, setData } = useContext(MainContext)
    const formik = useFormik({
        initialValues: {
            id:'',
            // marka: '',
            // categories: '',
            image: '',
            price: '',
            // type: '',
            // year: '',
            // color: '',
            // fuel: '',
            // transmitter: '',
            payment: '',
            // speedBox: '',
            // capacity: '',
            master: '',
            // places: '',
            // market: '',
            // strike: '',
            // uncolor: '',
            // status: '',
            // city: '',
            yürüş: ''
        },
        validationSchema: Yup.object({
            id:Yup.string().required("Boşluğu doldurun"),
            image: Yup.string()
                .required('Boşluğu doldurun'),
            price: Yup.number()
                .required('Boşluğu doldurun'),
            // type: Yup.string()
            //     .required('Boşluğu doldurun'),
            // year: Yup.number()
            //     .required('Boşluğu doldurun'),
            // color: Yup.string()
            //     .required('Boşluğu doldurun'),
            // fuel: Yup.string()
            //     .required('Boşluğu doldurun'),
            // transmitter: Yup.string()
            //     .required('Boşluğu doldurun'),
            payment: Yup.string()
                .required('Boşluğu doldurun'),
            // speedBox: Yup.string()
            //     .required('Boşluğu doldurun'),
            // capacity: Yup.number()
            //     .required('Boşluğu doldurun'),
            master: Yup.number()
                .required('Boşluğu doldurun'),
            // places: Yup.number()
            //     .required('Boşluğu doldurun'),
            // market: Yup.string()
            //     .required('Boşluğu doldurun'),
            // strike: Yup.string()
            //     .required('Boşluğu doldurun'),
            // uncolor: Yup.string()
            //     .required('Boşluğu doldurun'),
            // status: Yup.string()
            //     .required('Boşluğu doldurun'),
            // city: Yup.string()
            //     .required('Boşluğu doldurun'),
            yürüş: Yup.number()
                .required("Boşluğu doldurun")
        }),
        onSubmit: (values, { resetForm }) => {
          axios.put(`http://localhost:9090/turbo/${values.id}`,
           {
            id: values.id,
            price: values.price,
            image: values.image,
            payment: values.payment,
            yürüş: values.yürüş,
            master:values.master
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
        <div className='add'>
            <form className='form' onSubmit={formik.handleSubmit}>

            <label htmlFor="id">ID</label>
                <input
                    id="id"
                    name="id"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.id}
                />
                {formik.touched.id && formik.errors.id ? (
                    <div>{formik.errors.id}</div>
                ) : null}

                <label htmlFor="image">Şəkil</label>
                <input
                    id="image"
                    name="image"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.image}
                />
                {formik.touched.image && formik.errors.image ? (
                    <div>{formik.errors.image}</div>
                ) : null}

                <label htmlFor="price">Qiymət</label>
                <input
                    id="price"
                    name="price"
                    type="number"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.price}
                />
                {formik.touched.price && formik.errors.price ? (
                    <div>{formik.errors.price}</div>
                ) : null}


                <label htmlFor="payment">Ödəniş Növü</label>
                <input
                    id="payment"
                    name="payment"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.payment}
                />
                {formik.touched.payment && formik.errors.payment ? (
                    <div>{formik.errors.payment}</div>
                ) : null}


                <label htmlFor="master">Sahiblər</label>
                <input
                    id="master"
                    name="master"
                    type="number"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.master}
                />
                {formik.touched.master && formik.errors.master ? (
                    <div>{formik.errors.master}</div>
                ) : null}

                <label htmlFor="yürüş">Yürüş</label>
                <input
                    id="yürüş"
                    name="yürüş"
                    type="number"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.yürüş}
                />
                {formik.touched.yürüş && formik.errors.yürüş ? (
                    <div>{formik.errors.yürüş}</div>
                ) : null}

                <button className='btn btn-success' type="submit">Submit</button>
            </form>
            <Toaster />
        </div>
    )
}

export default Add