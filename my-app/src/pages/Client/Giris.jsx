
// import { Formik, Field, Form, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// // import "./Girirs.scss"
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { jwtDecode } from "jwt-decode";
// import toast, { Toaster } from 'react-hot-toast';
// import { useUser } from '../../context/UserContext';
// const Giris = () => {
//     // const { User, setUser } = useUser()
//     const navigate = useNavigate();
//     async function LoginPost(values) {
//         try {
//             const response = await axios.post("http://localhost:9090/login", values)

//             const data = response.data

//             console.log(data);

//             const decodedDatas = await jwtDecode(response.data)

//             console.log(decodedDatas);

//             // setUser(decodedDatas)
//             toast.success("sign up")
//             navigate("http://localhost:3000/");

//         } catch (error) {
//             console.log(error);
//         }
//     }

//     return (
//         <div className='giris__all'>
//             <div><h1><b>Alici Kabinetine Giris</b></h1></div>
//             <Formik
//                 initialValues={{ username: '', password: '' }}
//                 validationSchema={Yup.object({
//                     username: Yup.string()
//                         .max(30, 'Must be 30 characters or less')
//                         .required('Required'),
//                     password: Yup.string()
//                         .max(20, 'Must be 20 characters or less')
//                         .required('Required'),
//                 })}
//                 onSubmit={(values, { resetForm }) => {
//                     console.log(values);
//                     LoginPost(values)
//                 }}
//             >
//                 <div>
//                     <Form className='form'>
//                         <label htmlFor="username">username</label>
//                         <Field name="username" type="text" />
//                         <ErrorMessage name="username" />

//                         <label htmlFor="password">password</label>
//                         <Field name="password" type="text" />
//                         <ErrorMessage name="password" />

//                         <button type="submit">Daxil Olun</button><Link to="/Register">Qeydiyyatdan Kec</Link>
//                     </Form>
//                 </div>
//             </Formik>

//             <Toaster />
//         </div>
//     )
// }

// export default Giris