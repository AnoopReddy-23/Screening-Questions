import React,{useState} from 'react'
import {useForm} from 'react-hook-form'
import {Form, Button,Card} from 'react-bootstrap'
import {GoSignIn} from 'react-icons/go'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

import img1 from '../../images/3.svg'

function Signup() {

  let navigate=useNavigate()

  const {register,handleSubmit,formState:{errors}}=useForm();

  //submit form
  const onFormSubmit=(userObj)=>{
    //console.log(userObj)    
    axios.post('http://localhost:4000/users/create', userObj)
      .then(response=>{
        // if(response.status===200)
        // alert('SUbmitted Successfully!!');
        //console.log(response.data)
        alert(response.data.message)
        //navigate('/screeningqs')
        navigate('/screeningqs',{state:{name:userObj.username, desig:userObj.designation}});
      })
      .catch(error=>{
        console.log(error);
      })
  }


  return (
    <>
      <h1 className="text-center text-warning mt-5">Please, provide us the following details before going to Screening Questions.</h1>
        <div className="col-10 col-sm-8 col-md-7 mx-auto border border-2 mt-3">
        <img src={img1} alt=""  className='d-block mx-auto w-25 p-3'/>
        {/* form */}
        <Form onSubmit={handleSubmit(onFormSubmit)} className='p-5'>
          {/* username */}
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter username" {...register('username',{required:true})} />
             {/* validation error message for username */}
             {errors.username && <p className='text-danger'>*Username is required</p>}
          </Form.Group>
          {/* email */}
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" {...register('email',{required:true})} />
             {/* validation error message for city */}
             {errors.email && <p className='text-danger'>*Email is required</p>}
          </Form.Group>
            {/* designation */}
           <Form.Group className="mb-3">
            <Form.Label>Designation</Form.Label>
            <Form.Control type="text" placeholder="Enter City" {...register('designation',{required:true})} />
             {/* validation error message for city */}
             {errors.designation && <p className='text-danger'>*Designation is required</p>}
          </Form.Group>
           {/* city */}
           <Form.Group className="mb-3">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="Enter City" {...register('city',{required:true})} />
             {/* validation error message for city */}
             {errors.city && <p className='text-danger'>*City is required</p>}
          </Form.Group>

          {/* Button */}
          <Button variant="primary" type="submit">
            NEXT <GoSignIn />
          </Button>
        </Form>

        </div>
    </>
  )
}

export default Signup