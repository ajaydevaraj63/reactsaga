import { React, useState,useEffect } from 'react'
import { useSelector } from 'react-redux';
import { AiFillEye } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
const LoginTest = () => {
//   const result=useSelector((state)=>{
//     state.cartData
//   })
const result=useSelector((state)=>state.cartData)
    const [email, setEmail] = useState("")

    const [password, setpassword] = useState("")
    const list = [];
    const [formDataLogin, setFormDataLogin] = useState({

        email: '',
        password: ''
    });

    useEffect(() => {
      console.log(result);
      }, [result]);

    const handleChange = (event) => {
        console.log(event.target.value);
        const { name, value } = event.target;
        setFormDataLogin(prevData => ({
            ...prevData,
            [name]: value
        }));
        setEmail(event.target.value)

        console.log(formDataLogin);
        console.log(result);

    };

    const HideorVissible = (event) => {
        const icon = document.getElementById("AI")
        const password = document.getElementById("password")
        console.log(icon);
        if (password.type == "text") {
            password.type = "password"
        }
        else {
            password.type = "text"
        }
    }

    const handleChangeSubmit = () => {

        console.log(list);
        list.some(element => {
            if (element.email === email) {

                console.log(email);
                console.log("###########################");
                console.log(element.email);
              if(element.password=== password){
                
              }
            }
        })
    }

    return (
        <div class="row d-flex justify-content-sm-around align-items-center h-100 m-0  " style={{ backgroundColor: '#000000' }} >
            <div class="container py-5 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100  " >
                    <div class="col-12 col-md-8 col-lg-6 col-xl-5">

                        <div class="card shadow-2-strong" style={{ borderRadius: '1rem', backgroundColor: 'rgb(236, 236, 236)' }}>
                            <div class="card-body p-5 text-center">
                                <h3 class="mb-5">Sign in {result.name}</h3>

                                <form onSubmit={handleChange}>

                                    <div class="form-outline mb-4 p-0   emailInput">
                                        <div class="input-box  ">
                                            <input type="Email"
                                                id="email"
                                                name="email"
                                                value={formDataLogin.email}
                                                onChange={handleChange} class="form-control shadow-lg emailInputbox" placeholder='    email' />

                                            {/* <label class="form-label" for="email">Email</label> */}
                                        </div>
                                    </div>


                                    <div class="form-check-outline mb-4 p-0">
                                        <div class="input-box  ">
                                            <input type="password" id="password"
                                                name="password"
                                                value={formDataLogin.password}
                                                onChange={handleChange} class="  " placeholder="     password" />
                                            <AiFillEye id='AIClick' className='icon' onClick={HideorVissible}>  </AiFillEye>                        </div>
                                        {/* <label class="form-label" for="password">Password</label> */}


                                    </div>
                                    {/*         
                    <!-- Checkbox --> */}
                                    <div class="form-check d-flex justify-content-start mb-4">
                                        <input class="form-check-input" type="checkbox" value="" id="form1Example3" />
                                        <label class="form-check-label" for="form1Example3"> Remember password </label>
                                    </div>


                                </form>
                                <button class="btn btn-primary btn-lg btn-block" onClick={handleChangeSubmit}>Login</button>

                                <hr class="my-4" />


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginTest