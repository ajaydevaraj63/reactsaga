import { React, useState } from 'react'
import { AiFillEye } from "react-icons/ai";
import LoginTest from './LoginTest';

const RegisterTest = () => {

  const [email, setEmail] = useState("")
  const list = [];

  const [formDataRegister, setFormDataRegister] = useState({

    email1: '',
    password1: '',
    name1: ''
  });


  const handleChangeRegister = (event) => {
    const { name, value } = event.target;
    setFormDataRegister(prevData => ({
      ...prevData,
      [name]: value
    }));
    console.log(formDataRegister);

  };


  const handleChangeSubmitRegister = () => {
    list.push(formDataRegister)
    console.log(list);
    console.log(list);
  }
  return (
    <div className='back' >  
    
    <div class="row d-flex justify-content-sm-around align-items-center h-100  m-0 " style={{ backgroundColor: '#000000' }} >

    <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100  " >
              <div class="col-12 col-md-8 col-lg-6 col-xl-5">

                <div class="card shadow-2-strong" style={{ borderRadius: '1rem', backgroundColor: 'rgb(236, 236, 236)' }}>
                  <div class="card-body p-5 text-center">
                    <h3 class="mb-5">Register</h3>
                    <form onSubmit={handleChangeRegister}>

                      <div class="form-outline mb-4">
                        <input type="Email" id='Email' name='email1'
                          onChange={handleChangeRegister}
                          class="form-control form-control-lg shadow-lg border-dark-subtle"  />
                        <label class="form-label" for="emailR">Email</label>
                      </div>
                      <div class="form-outline mb-4">
                        <input type="text" name='name1'
                          onChange={handleChangeRegister} id='Name'
                          class="form-control form-control-lg shadow-lg border-dark-subtle"  />
                        <label class="form-label" for="name1" >Name</label>
                      </div>


                      <div class="form-outline mb-4">
                        <input type="password" id='Password'
                          onChange={handleChangeRegister} name='password1'
                          class="form-control form-control-lg shadow-lg border-dark-subtle"  />
                        <label class="form-label" >Password</label>
                      </div>


                      <div class="form-check d-flex justify-content-start mb-4">
                        <input class="form-check-input" type="checkbox" value="" id="form1Example31" />
                        <label class="form-check-label" > Remember password </label>

                      </div>


                    </form>
                    <button class="btn btn-primary btn-lg btn-block" onClick={handleChangeSubmitRegister}>Register</button>

                    <hr class="my-4" />

                    {/* <button class="btn btn-lg btn-block btn-primary" style={{backgroundColor:' #dd4b39'}}
                      type="submit"><i class="fab fa-google my-2"></i> Sign in with google</button>
                    <button class="btn btn-lg btn-block btn-primary mb-2" style={{backgroundColor:' #3b5998'}}
                      type="submit"><i class="fab fa-facebook-f my-2"></i>Sign in with facebook</button> */}

                  </div>
                </div>
              </div>
            </div>
          </div>

    </div>

   
      </div>
  )
}

export default RegisterTest