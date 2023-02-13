import { useFormik } from 'formik';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup'
import axios from 'axios';
import YupPassword from 'yup-password'
YupPassword(yup)



export default function AddContact() {

  const navigate = useNavigate();
  const [err, setErr] = useState('');
   

  // formik is an external validation which helps in creating form on react
    const formik = useFormik({
      initialValues:{
        fname:'',
        lname:'',
        email:'',
        phone:'',
        city:'',
        pincode:'',
        password:'',

      },

      onSubmit: values => {
        

          axios.post('http://localhost:3001/Contacts', values)
          .then(result => {
            alert('contact is added');
            navigate('/displayuser')
          })
          .catch(error=> setErr(error.message))

      },
      validationSchema: yup.object().shape({
        fname: yup.string().min(3,'First name cannot be less than three character!')
                           .max(50, 'Too Long!')
                           .required('First name cannot be blank')
                           ,
        lname: yup.string().required('Last name cannot be blank')
                           ,
        email: yup.string().email('Check your email format...ex: xyz@abc.com')
                           .required('Email cannot be blank')
                           ,
        phone: yup.number().typeError('only digit is allowed').min(10, )
                           .required('Phone no cannot be blank')
                           ,
        city: yup.string().required('City cannot be blank')
                          ,
        pincode: yup.number().typeError('Only digit is allowed')
                             .min(6, 'Pincode cannot be less then 6 digit')
                             .required('Pincode cannot be blank')
                             ,
        password: yup.string().min(8, 'password shoudl be minimum 8 character')
                             .minLowercase(1, 'Must have one lower case')
                             .minUppercase(1, 'Must have one upper case')
                             .minSymbols(1, 'Must have one special character')
                             .required('Password cannot be blank')
             
      })

    })
  
  return (
    <div className='row'>
      <div className="col-md-4 offset-md-4">
        <div className="bg-dark text-light mt-2 py-3 rounded text-center">
        <h2>Add a new Contact</h2>
        </div>
        <div className="text-center alert alert-danger mt-2">
          <span>{err}</span>
        </div>
        <form onSubmit={formik.handleSubmit} className='mt-2'>

         <input onChange={formik.handleChange} onBlur={formik.handleBlur} id='fname' name='fname' className='form-control form-control-sm' type="text" placeholder='first name' />
        {
          formik.errors.fname && formik.touched.fname?<span className='text-danger fw-bold'>{formik.errors.fname}</span>:null
        }
         
         <input onChange={formik.handleChange} onBlur={formik.handleBlur} id='lname' name='lname' className='form-control form-control-sm' type="text" placeholder='last name' />
         {
          formik.errors.lname && formik.touched.lname?<span className='text-danger fw-bold'>{formik.errors.lname}</span>:null
        }
         
         <input onChange={formik.handleChange} onBlur={formik.handleBlur} id='email' name='email' className='form-control form-control-sm' type="text" placeholder='emial' />
         {
          formik.errors.email && formik.touched.email?<span className='text-danger fw-bold'>{formik.errors.email}</span>:null
        }
         
         <input onChange={formik.handleChange} onBlur={formik.handleBlur} id='phone' name='phone' className='form-control form-control-sm' type="text" placeholder='phone' />
         {
          formik.errors.phone && formik.touched.phone?<span className='text-danger fw-bold'>{formik.errors.phone}</span>:null
        }
         
         <input onChange={formik.handleChange} onBlur={formik.handleBlur} id='city' name='city' className='form-control form-control-sm' type="text" placeholder='city' />
         {
          formik.errors.city && formik.touched.city?<span className='text-danger fw-bold'>{formik.errors.city}</span>:null
        }

        <input onChange={formik.handleChange} onBlur={formik.handleBlur} id='pincode' name='pincode' className='form-control form-control-sm' type="text" placeholder='Pincode' />
         {
          formik.errors.pincode && formik.touched.pincode?<span className='text-danger fw-bold'>{formik.errors.pincode}</span>:null
        }
        <input onChange={formik.handleChange} onBlur={formik.handleBlur} id='password' name='password' className='form-control form-control-sm' type="text" placeholder='password' />
         {
          formik.errors.password && formik.touched.password?<span className='text-danger fw-bold'>{formik.errors.password}</span>:null
        }


         <div className='mt-2 text-center'>
         <input className='btn btn-info' type="submit" value="Add Contact" /> 
         </div>
       </form>
        </div>
    
    </div>
  )
}