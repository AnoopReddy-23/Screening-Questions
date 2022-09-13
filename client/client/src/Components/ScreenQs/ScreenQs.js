import React,{useEffect, useState} from 'react'
import {useForm} from 'react-hook-form'
import {Form} from 'react-bootstrap'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

import './ScreenQs.css'

function ScreenQs() {

    const {register, handleSubmit,formState:{errors}}=useForm();

    let name=localStorage.getItem("token")

    let navigate=useNavigate()

    //submit the form
    const onFormSubmit=(obj)=>{
      //console.log(obj);
      
      const object = Object.assign({username: name}, obj);
      //console.log(object)
      axios.post('http://localhost:4000/responses/create', object)
      .then(response=>{
        navigate('/success')
        // if(response.status===200)
        // alert('SUbmitted Successfully!!');
        //console.log(response.data)
        // alert(response.data.message)
      })
      .catch(error=>{
        console.log(error);
      })
    }

  return (
    <>

        <div className="mx-auto mt-3 screeningform p-3">
          <div className="title">
            <h1 className='heading'>Preview Screening questions</h1>
            <h6 className="txt">Narrow down your candidates</h6>
            <h2 className="subheading">Fill the Form</h2>
          </div>
          <Form onSubmit={handleSubmit(onFormSubmit)} className='p-5' >

            {/* Question-1 */}
            <Form.Group className="box">
                <Form.Label className='qs'>
                  <span className='qno'>Q1.</span> Can you speak to prioritization, budget allocation broadly, and ROI for Posh 
                  Technologies? Please eloborate below</Form.Label>

                {/* <Form.Check type="radio" id="Yes">
                  <Form.Check.Input  className="radio-button" type="radio" value="Yes" {...register("answer1", { required: true })} />
                  <Form.Check.Label className='radio-text'>Yes</Form.Check.Label>
                </Form.Check>

                <Form.Check  type="radio" id="No" className='gap'>
                    <Form.Check.Input type="radio" value="No" {...register("answer1", { required: true })}  className="radio-button"/>
                    <Form.Check.Label className='radio-text'>No</Form.Check.Label>
                </Form.Check> */}

                <Form.Check type="radio" id="Yes">
                  <span className="radio-button"><Form.Check.Input type="radio" value="Yes" {...register("Q1", { required: true })} /></span>
                  <Form.Check.Label className='radio-text'>Yes</Form.Check.Label>
                </Form.Check>

                <Form.Check type="radio" id="No" className='gap'>
                  <span className="radio-button"><Form.Check.Input type="radio" value="No" {...register("Q1", { required: true })} /></span>
                  <Form.Check.Label className='radio-text'>No</Form.Check.Label>
                </Form.Check>

                {/* validation error message for username */}
                {errors.answer1 && <p className='text-danger ms-4'>*Answer is required</p>}
            </Form.Group>
            
            {/* Question-2 */}
            <Form.Group className="box">
                <Form.Label className='qs'>
                  <span className='qno'>Q2.</span> Can you speak to prioritization, budget allocation broadly, and ROI for Posh 
                  Technologies? Please eloborate below</Form.Label>

                <Form.Check type="radio" id="Yes">
                  <span className="radio-button"><Form.Check.Input type="radio" value="Yes" {...register("Q2", { required: true })} /></span>
                  <Form.Check.Label className='radio-text'>Yes</Form.Check.Label>
                </Form.Check>

                <Form.Check type="radio" id="No" className='gap'>
                  <span className="radio-button"><Form.Check.Input type="radio" value="No" {...register("Q2", { required: true })} /></span>
                  <Form.Check.Label className='radio-text'>No</Form.Check.Label>
                </Form.Check>

                {/* validation error message for username */}
                {errors.answer2 && <p className='text-danger ms-4'>*Answer is required</p>}
            </Form.Group>

            {/* Question-3 */}
            <Form.Group className="box">
                <Form.Label className='qs'>
                  <span className='qno'>Q3.</span> Can you speak to prioritization, budget allocation broadly, and ROI for Posh 
                  Technologies? Please eloborate below
                </Form.Label>
                
                <Form.Control className='text-box' as="textarea" placeholder='Long answer text'  {...register("Q3",{required:true})} />
              
                {/* validation error message for username */}
                {errors.answer3 && <p className='text-danger ms-4'>*Answer is required</p>}
            </Form.Group>

             {/* Question-4 */}
             <Form.Group className="box">
                <Form.Label className='qs'>
                  <span className='qno'>Q4.</span> Can you speak to prioritization, budget allocation broadly, and ROI for Posh 
                  Technologies? Please eloborate below</Form.Label>

                <Form.Check type="radio" id="Yes">
                  <span className="radio-button"><Form.Check.Input type="radio" value="Yes" {...register("Q4", { required: true })} /></span>
                  <Form.Check.Label className='radio-text'>Yes</Form.Check.Label>
                </Form.Check>

                <Form.Check type="radio" id="No" className='gap'>
                  <span className="radio-button"><Form.Check.Input type="radio" value="No" {...register("Q4", { required: true })} /></span>
                  <Form.Check.Label className='radio-text'>No</Form.Check.Label>
                </Form.Check>

                {/* validation error message for username */}
                {errors.answer4 && <p className='text-danger ms-4'>*Answer is required</p>}
            </Form.Group>

             {/* Question-5 */}
             <Form.Group className="box">
                <Form.Label className='qs'>
                  <span className='qno'>Q5.</span> Can you speak to prioritization, budget allocation broadly, and ROI for Posh 
                  Technologies? Please eloborate below
                </Form.Label>
                
                <Form.Control className='text-box' as="textarea" placeholder='Long answer text' {...register("Q5",{required:true})} />
              
                {/* validation error message for username */}
                {errors.answer5 && <p className='text-danger ms-4'>*Answer is required</p>}
            </Form.Group>

            {/* client details */}
            <div className="details">
                <h3 className='heading'>Client Name</h3>
                <div className="pic"></div>
                <h1 className='name'>Courtney Henry</h1>
                <h3 className='desig'>Designation</h3>
            </div>
            
            {/* Buttons */}
            <div className="buttons">
              <button type='button' className='decline' onClick={()=>window.location.reload(false)} >
                <span>Decline</span> 
              </button>
              <button type="submit" className='accept'>
                <span>Accept</span> 
              </button>
            </div>
          </Form>
        </div>
        
    </>
  )
}

export default ScreenQs