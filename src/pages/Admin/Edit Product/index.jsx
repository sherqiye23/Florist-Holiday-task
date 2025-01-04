import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import flowersUrl from '../../../assets/js/flowersUrl';
import { Alert, Button, Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Required').max(20, 'Must be 20 characters or less').min(3, 'Must be 3 characters or more'),

    description: Yup.string().required('Required').max(100, 'Must be 100 characters or less').min(10, 'Must be 10 characters or more'),

    price: Yup.number().required().positive().integer().max(100, 'Must be 100 characters or less').min(3, 'Must be 3 characters or more'),

    image: Yup.string().required('Required').url()
});

export default function EditProduct() {
    let [edit, setEdit] = useState({})
    let { id } = useParams()
    let navigate = useNavigate()
    const [feedback, setFeedback] = useState('');

    function GetFlower() {
        axios.get(flowersUrl + id).then((res) => {
            setEdit(res.data)
        }).catch((err) => {
            console.error('Error fetching book data:', err);
        });
    }

    useEffect(() => {
        GetFlower()
    }, [id])



    return (
        <>
            <Helmet>
                <link rel="icon" type="image/svg+xml" href="/src/assets/adminlogo.png" />
                <title>Edit Product</title>
            </Helmet>
            <Container>
                <h1 className='text-center my-3 '>Edit Form</h1>
                {feedback && <Alert variant="info" className="text-center">{feedback}</Alert>}
                <Formik
                    enableReinitialize
                    initialValues={{
                        name: edit.name || "",
                        description: edit.description || "",
                        price: edit.price || "",
                        image: edit.image || ""
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                        axios.patch(flowersUrl+id, values).then(() => {
                            window.location = "/admin/products"
                        }).catch((err) => {
                            console.error('Error updating book:', err);
                            setFeedback('Failed to update flower. Please try again.');
                        });
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form className="flex flex-col max-w-screen-lg mx-auto mb-20">
                            {['name', 'description', 'price', 'image'].map((field) => (
                                <div className="input-group" key={field}>
                                    <Field
                                        placeholder={`Edit ${field}`}
                                        className="border-2 border-black px-2 py-1 my-1 w-full"
                                        id={field}
                                        name={field}
                                        type={field === 'price' ? 'number' : 'text'}
                                    />
                                    <ErrorMessage name={field} component="div" className="text-red-500 text-sm" />
                                </div>
                            ))}
                            <button type="submit" className=" max-w-40 my-1 max-w-[250px] py-2 px-5 border-2 border-orange-400 text-orange-400 text-lg rounded-5 font-bold ease-in duration-200 transition-all hover:bg-orange-400 hover:text-white" disabled={isSubmitting}>Edit Product</button>
                        </Form>
                    )}
                </Formik>
                <Button variant="secondary" className='mx-20' onClick={() => navigate("/admin/products")}> Back to Products Table</Button>
            </Container>
        </>
    )
}