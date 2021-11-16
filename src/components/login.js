import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useSelector} from 'react-redux'

// import "./components/login-signup.css";

function Login() {

    // let dispatch = useDispatch();

    let list = useSelector((data) => data.LoginReducer.list)

    let [userName, setUserName] = useState('');
    let [password, setPassword] = useState('');
    

    let history = useHistory();

    let [isAuth, setIsAuth] = useState(false);

    const setInputs1 = (e) => {
        return setUserName(e.target.value)
    }

    const setInputs2 = (e) => {
        return setPassword(e.target.value)
    }
    
    const authentic = (e) => {

        e.preventDefault();

        if(userName === '' || password === ''){
            return alert('please enter the UserName and Password');
        }
        else {
            list.forEach( (data) => {
                if (userName === data.userName && password === data.password) {
                    setIsAuth(true);
                    history.push("/main");
                    return console.log("success");
                }
            })
            console.log(isAuth);
            if(!isAuth) {
                // return console.log('please enter the correct credentials (userName: abc, password: 123)');
                return document.getElementById('error').innerHTML = 'please enter the correct credentials (userName: abc, password: 123)';
            }
        }
        
    }


    return (
        <div className="container">
            <div className="login-backdrop"></div>
            <div class="container container-props mt-5">
                <div class="row justify-content-center">
                    <div class="col col-sm-8 col-md-6 col-lg-4  form-col-props">
                        <h1 class="brand-icon text-center mb-3">fitin'fit</h1>
                        <form class="login-form" onSubmit={authentic}>
                        <div class="form-group mb-4">
                            <label for="login-username" class="sr-only form-label text-light">Username</label>
                            <input type="text" id="login-username" class="form-control mb-4 login-input-props" placeholder="Username" value={userName} onChange={setInputs1} required />
                            <label for="login-password" class="sr-only form-label text-light">Password</label>
                            <input type="password" id="login-password" class="form-control login-input-props mb-2" placeholder="Password" value={password} onChange={setInputs2} required />
                            <b className="text-danger" id="error"></b>
                        </div>
                            <button type="submit" class="btn login-btn-props" >get started</button>
                        </form>
                        <div class="links">
                            <span onClick={() => history.push('./signup')}  class="signup-link">create account</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;