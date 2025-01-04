import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router";
import React from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import flowersUrl from "../../../assets/js/flowersUrl";
import swal from 'sweetalert';

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Required').max(20, 'Must be 20 characters or less').min(3, 'Must be 3 characters or more'),

    description: Yup.string().required('Required').max(100, 'Must be 100 characters or less').min(10, 'Must be 10 characters or more'),

    price: Yup.number().required().positive().integer().max(100, 'Must be 100 characters or less').min(3, 'Must be 3 characters or more'),

    image: Yup.string().required('Required').url()
});

export default function AddProduct() {
    let navigate = useNavigate()
    return (
        <>
            <Helmet>
                <link rel="icon" type="image/svg+xml" href="/src/assets/adminlogo.png" />
                <title>Add Product</title>
            </Helmet>
            <Container>
                <h1 className='text-center my-3 '>Add Form</h1>
                <Formik
                    initialValues={{
                        name: '',
                        description: "",
                        price: null,
                        image: ""
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                        axios.post(flowersUrl, values).then(() => {
                            // burda sehifeye qayidandan sonra elave edilen mehsul ekranda gorunmurdu, window location ile yazdim ki sehifeye refresh atsin ele olanda gorunur
                            // swal(`${values.name} əlavə olundu!`, "", "success")
                            // navigate("/admin/products")
                            window.location = "/admin/products"
                        }).catch(() => swal(`Xəta baş verdi!`, "", "error"))                        
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form className="my-form flex flex-col max-w-screen-lg mx-auto mb-20">
                            <div className="input-group">
                                <Field
                                    placeholder='...add name'
                                    className='border-2 border-black border-solid px-2 py-1 my-1 w-full'
                                    id="name"
                                    name="name"
                                    type="text" />
                                <ErrorMessage name="name" component="div" />
                            </div>
                            <div className="input-group">
                                <Field
                                    placeholder='...add description'
                                    className='border-2 border-black border-solid px-2 py-1 my-1 w-full'
                                    id="description"
                                    name="description"
                                    type="text" />
                                <ErrorMessage name="description" component="div" />
                            </div>
                            <div className="input-group">
                                <Field
                                    placeholder='...add price'
                                    className='border-2 border-black border-solid px-2 py-1 my-1 w-full'
                                    id="price"
                                    name="price"
                                    type="number" />
                                <ErrorMessage name="price" component="div" />
                            </div>
                            <div className="input-group">
                                <Field
                                    placeholder='...add image'
                                    className='border-2 border-black border-solid px-2 py-1 my-1 w-full'
                                    id="image"
                                    name="image"
                                    type="text" />
                                <ErrorMessage name="image" component="div" />
                            </div>
                            <button type="submit" className="my-1 max-w-[250px] py-2 px-5 border-2 border-lime-500 text-lime-500 text-lg rounded-5 font-bold ease-in duration-200 transition-all hover:bg-lime-500 hover:text-white" disabled={isSubmitting}>Add Product</button>
                        </Form>
                    )}
                </Formik>
            </Container>
        </>
    )
}