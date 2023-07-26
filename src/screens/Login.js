import { React, useState } from 'react'
import { AiFillEye } from "react-icons/ai";
import LoginTest from './LoginTest';
import Reduxtest from './Reduxtest';
import RegisterTest from './RegisterTest';

const Login = () => {

 

 
  return (
    <div className='back' >  
    
    <div class="row d-flex justify-content-sm-around align-items-center h-100   " style={{ backgroundColor: '#000000' }} >

      <div class="row d-flex justify-align-content-lg-arround align-items-center h-100">
        <ul class="nav nav-pills mt-2 d-flex  justify-content-evenly" id="pills-tab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Login</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Register</button>
          </li>


        </ul>
      </div>

    </div>

      <div class="tab-content" id="pills-tabContent">
        <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0"> <section class="vh-100 " style={{ backgroundColor: '#000000' }}>
        <LoginTest/>
        <Reduxtest/>
        </section></div>
        <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0"> <section class="vh-100 " style={{ backgroundColor: '#000000' }}>
         <RegisterTest/>
        </section></div>
      </div>

      <div>

      </div></div>
  )
}

export default Login