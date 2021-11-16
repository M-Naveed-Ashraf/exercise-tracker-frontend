import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { AddUser } from "../actions/login";



function Signup() {

    const dispatch = useDispatch();

    let [userName, setUserName] = useState('');
    let [password, setPassword] = useState('');
    let [confirmPassword, setConfirmPassword] = useState('');

    const setInputs1 = (e) => {
        return setUserName(e.target.value)
    }

    const setInputs2 = (e) => {
        return setPassword(e.target.value)
    }

    const setInputs3 = (e) => {
        return setConfirmPassword(e.target.value);
    }

    let history = useHistory();

    let [isSignup, setIsSignup] = useState(false);

    const singupEventHandler = (e) => {
        e.preventDefault();
            dispatch(AddUser(userName, password));
            // history.push('/');
            setIsSignup(true);
            setUserName('');
            setPassword('');
    }

    console.log(isSignup)

    return (
        <>
            <div class="login-backdrop"></div>
            {/* alert Message */}
            <div class={ isSignup ? "alert alert-success alert-dismissible show" : "d-none" }  role="alert">
                {/* <h4 class="alert-heading">Signup Seccessful!</h4> */}
                Account succesfully created. Go to Login Page
                <button type="button" class="btn-close" onClick={()=>setIsSignup(false)} aria-label="Close"></button>
            </div>
            <div class="container container-props mt-5">
                <div class="row no-gutters justify-content-center">
                    <div class="col col-sm-8 col-md-6 col-lg-4 align-self-start form-col-props-signup">
                        <h1 class="brand-icon text-center mb-4">fitin'fit</h1>
                        <form class="login-form" onSubmit={singupEventHandler}>
                            <div class="form-group mb-4">
                                <label for="signup-email" class="sr-only form-label text-light">Email Address</label>
                                <input type="email" id="signup-email" class="form-control mb-4 login-input-props" placeholder="Email" value={userName} onChange={setInputs1} required />
                                <label for="signup-password" class="sr-only form-label text-light">Password</label>
                                <input type="password" id="signup-password" class="form-control mb-4 login-input-props" placeholder="Password" value={password} onChange={setInputs2} required />
                                <label for="signup-password-confirm" class="sr-only form-label text-light">Confirm Password</label>
                                <input type="password" id="signup-password-confirm" class="form-control mb-2 login-input-props" placeholder="Confirm Password" value={confirmPassword} onChange={setInputs3} required />
                                <span className="text-danger" id="error"></span>
                            </div>
                            <button type="submit" class="btn login-btn-props">sign up</button>
                        </form>
                        <div class="links">
                            <span onClick={ () => history.push('/')} class="signup-link">Sign in</span>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Signup;