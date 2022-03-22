import React from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';

const initialValues = {
    name: '',
    email: '',
    channel: ''
};

const validate = values => {
    let errors = {};
    if(!values.name){
        errors.name = 'Required';
    }
    if(!values.email){
        errors.email = 'Required';
    }
    if(!values.channel){
        errors.channel = 'Required';
    }
    return errors;
}

const validationSchema =Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email format').required('Required'),
    channel: Yup.string().required('Required')
});

const onSubmit = values =>{
    console.log('form data', values);
}

function YoutubeForm(){

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
        //validate
    })

    console.log('formik errors', formik.errors);

    return(
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label>Name</label>
                    <input type="text" id="name" name="name" {...formik.getFieldProps('name')} />
                    {formik.touched.name && formik.errors.name ? <span>{formik.errors.name}</span> : null}
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" id="email" name="email" {...formik.getFieldProps('email')} />
                    {formik.touched.email && formik.errors.email ? <span>{formik.errors.email}</span> : null}
                </div>
                <div>
                    <label>Channel</label>
                    <input type="text" id="channel" name="channel" {...formik.getFieldProps('channel')} />
                    {formik.touched.channel && formik.errors.channel ? <span>{formik.errors.channel}</span> : null}
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default YoutubeForm;
