import React from 'react'
import {useForm} from 'react-hook-form'
import {Form, Button,Card} from 'react-bootstrap'
import {MdLogin} from 'react-icons/md'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

import img1 from '../../images/2.svg'

function Login() {

  const {register, handleSubmit,formState:{errors}}=useForm();
  let navigate=useNavigate();

  //submit the form
  const onFormSubmit=(userCredObj)=>{
    // dispatch(userLogin(userCredObj));
    axios.post('http://localhost:4000/users/login',userCredObj)
    .then(res=>{
      //console.log(res)
      if(res.data.message==="Login Success"){
        //store token in local storage of browser
        localStorage.setItem("token",userCredObj.username)
        navigate('/screeningqs')
      }
      //if login is not successful
    if(res.data.message==="Invalid username" || res.data.message=="Invalid Password"){
      alert("Invalid credentials")
  }
    })
    .catch(error=>{
      console.log(error)
    })
}

  return (
    <>
        <h1 className="text-center text-warning mt-5">Login</h1>
        <div className="col-10 col-sm-8 col-md-7 mx-auto border border-2 mt-3">
          <img src={img1} alt=""  className='d-block mx-auto w-25 p-3'/>
          <Form onSubmit={handleSubmit(onFormSubmit)} className='p-5' >

            {/* username */}
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter Username" {...register("username",{required:true})} />
              {/* validation error message for username */}
              {errors.username && <p className='text-danger'>*Username is required</p>}
            </Form.Group>

            {/* password */}
            <Form.Group className="mb-3" >
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" {...register("password",{required:true})} />
              {/* validation error message for password */}
              {errors.password && <p className='text-danger'>*Password is required</p>}
            </Form.Group>
            
            {/* submit button */}
            <Button variant="primary" type="submit">
              Login <MdLogin />
            </Button>
            <Card.Footer className="text-muted p-3 m-2">Don't have an account? <a href="/signup">SignUp</a></Card.Footer>
          </Form>
        </div>
    </>
  )
}

export default Login