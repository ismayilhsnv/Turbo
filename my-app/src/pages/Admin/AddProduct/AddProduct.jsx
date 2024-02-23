import React, { useContext } from 'react'
import "./AddProduct.scss"
import { useFormik } from 'formik';
import * as Yup from 'yup';
import toast, { Toaster } from 'react-hot-toast';
import MainContext from '../../../context/Context';
import axios from 'axios';

const Add = () => {
    const { data, setData } = useContext(MainContext)
    const formik = useFormik({
        initialValues: {
            marka: '',
            categories: '',
            image: '',
            price: '',
            type: '',
            year: '',
            color: '',
            fuel: '',
            transmitter: '',
            payment: '',
            speedBox: '',
            capacity: '',
            master: '',
            places: '',
            market: '',
            strike: '',
            uncolor: '',
            status: '',
            city: '',
            yürüş: ''
        },
        validationSchema: Yup.object({
            marka: Yup.string()
                .required('Boşluğu doldurun'),
            categories: Yup.string()
                .required('Boşluğu doldurun'),
            image: Yup.string()
                .required('Boşluğu doldurun'),
            price: Yup.number()
                .required('Boşluğu doldurun'),
            type: Yup.string()
                .required('Boşluğu doldurun'),
            year: Yup.number()
                .required('Boşluğu doldurun'),
            color: Yup.string()
                .required('Boşluğu doldurun'),
            fuel: Yup.string()
                .required('Boşluğu doldurun'),
            transmitter: Yup.string()
                .required('Boşluğu doldurun'),
            payment: Yup.string()
                .required('Boşluğu doldurun'),
            speedBox: Yup.string()
                .required('Boşluğu doldurun'),
            capacity: Yup.number()
                .required('Boşluğu doldurun'),
            master: Yup.number()
                .required('Boşluğu doldurun'),
            places: Yup.number()
                .required('Boşluğu doldurun'),
            market: Yup.string()
                .required('Boşluğu doldurun'),
            strike: Yup.string()
                .required('Boşluğu doldurun'),
            uncolor: Yup.string()
                .required('Boşluğu doldurun'),
            status: Yup.string()
                .required('Boşluğu doldurun'),
            city: Yup.string()
                .required('Boşluğu doldurun'),
            yürüş: Yup.number()
                .required("Boşluğu doldurun")
        }),
        onSubmit: (values, { resetForm }) => {
            axios.post("http://localhost:9090/turbo", { ...values }).then(res => {
                console.log(res.data);
                setData([...data, res.data])
                resetForm()
                toast.success("Əlavə Olundu")
            })
        },
    });
    return (
        <div className='add'>
            <form className='form' onSubmit={formik.handleSubmit}>
                <label htmlFor="marka">Marka</label>
                <input
                    id="marka"
                    name="marka"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.marka}
                />
                {formik.touched.marka && formik.errors.marka ? (
                    <div>{formik.errors.marka}</div>
                ) : null}

                <label htmlFor="categories">Model</label>
                <input
                    id="categories"
                    name="categories"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.categories}
                />
                {formik.touched.categories && formik.errors.categories ? (
                    <div>{formik.errors.categories}</div>
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

                <label htmlFor="type">Ban Növü</label>
                <input
                    id="type"
                    name="type"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.type}
                />
                {formik.touched.type && formik.errors.type ? (
                    <div>{formik.errors.type}</div>
                ) : null}

                <label htmlFor="year">Buraxılış İli</label>
                <input
                    id="year"
                    name="year"
                    type="number"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.year}
                />
                {formik.touched.year && formik.errors.year ? (
                    <div>{formik.errors.year}</div>
                ) : null}

                <label htmlFor="color">Rəng</label>
                <input
                    id="color"
                    name="color"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.color}
                />
                {formik.touched.color && formik.errors.color ? (
                    <div>{formik.errors.color}</div>
                ) : null}

                <label htmlFor="fuel">Yanacaq Növü</label>
                <input
                    id="fuel"
                    name="fuel"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.fuel}
                />
                {formik.touched.fuel && formik.errors.fuel ? (
                    <div>{formik.errors.fuel}</div>
                ) : null}

                <label htmlFor="transmitter">Ötürücü</label>
                <input
                    id="transmitter"
                    name="transmitter"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.transmitter}
                />
                {formik.touched.transmitter && formik.errors.transmitter ? (
                    <div>{formik.errors.transmitter}</div>
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

                <label htmlFor="speedBox">Sürət Qutusu</label>
                <input
                    id="speedBox"
                    name="speedBox"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.speedBox}
                />
                {formik.touched.speedBox && formik.errors.speedBox ? (
                    <div>{formik.errors.speedBox}</div>
                ) : null}

                <label htmlFor="capacity">Mühərrik</label>
                <input
                    id="capacity"
                    name="capacity"
                    type="number"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.capacity}
                />
                {formik.touched.capacity && formik.errors.capacity ? (
                    <div>{formik.errors.capacity}</div>
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

                <label htmlFor="places">Yerlərin Sayı</label>
                <input
                    id="places"
                    name="places"
                    type="number"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.places}
                />
                {formik.touched.places && formik.errors.places ? (
                    <div>{formik.errors.places}</div>
                ) : null}

                <label htmlFor="market">Hansı Bazar Üçün Yığılıb</label>
                <input
                    id="market"
                    name="market"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.market}
                />
                {formik.touched.market && formik.errors.market ? (
                    <div>{formik.errors.market}</div>
                ) : null}

                <label htmlFor="strike">Əzilib?</label>
                <input
                    id="strike"
                    name="strike"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.strike}
                />
                {formik.touched.strike && formik.errors.strike ? (
                    <div>{formik.errors.strike}</div>
                ) : null}

                <label htmlFor="uncolor">Rənglənib?</label>
                <input
                    id="uncolor"
                    name="uncolor"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.uncolor}
                />
                {formik.touched.uncolor && formik.errors.uncolor ? (
                    <div>{formik.errors.uncolor}</div>
                ) : null}

                <label htmlFor="status">Status</label>
                <input
                    id="status"
                    name="status"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.status}
                />
                {formik.touched.status && formik.errors.status ? (
                    <div>{formik.errors.status}</div>
                ) : null}

                <label htmlFor="city">Şəhər</label>
                <input
                    id="city"
                    name="city"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.city}
                />
                {formik.touched.city && formik.errors.city ? (
                    <div>{formik.errors.city}</div>
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