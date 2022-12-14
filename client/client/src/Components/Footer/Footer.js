import React from 'react'
import './Footer.css'
import {SiInstagram,SiLinkedin} from 'react-icons/si'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {FaFacebook} from 'react-icons/fa'

function Footer() {
  return (
    <>
        <footer className="bg-dark">
          <div className="wrapper">
              <div className='box-container row text-center'>
              <div className='box col-6'>
                  <h3 className='mt-3'>Contact Info</h3>
                  <ul className='list '>
                      <li className='mb-1'><a href="#">+123-456-7890</a></li>
                      <li className='mb-1'><a href="#">+111-422-7890</a></li>
                      <li className='mb-1'><a href="#">abc@gmail.com</a></li>
                      <li className='mb-1'><a href="#">Hyderabad, India - 500070</a></li>
                  </ul>
              </div>
              <div className='box col-6'>
                  <h3 className='mt-3'>Follow Us On</h3>
                  <ul className='list'>
                      <li className='mb-1'><a href="#"><FaFacebook fill='blue' className='icon'/> facebook</a></li>
                      <li className='mb-1'><a href="#"><AiFillTwitterCircle color='blue'/> Twitter</a></li>
                      <li className='mb-1'><a href="#"><SiInstagram color='orange'/> Instagram</a></li>
                      <li className='mb-1'><a href="#"><SiLinkedin color='blue'/> Linkedin</a></li>
                  </ul>
              </div>
              </div>
              <div className="credit text-center">copyright @ 2022 by <span>Anoop Reddy</span></div>
            </div>
        </footer>
    </>
  )
}

export default Footer