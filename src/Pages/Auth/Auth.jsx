import React, { useState, useContext } from 'react';
import classes from './SignUp.module.css';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { auth } from '../../Utility/firebase';
import {signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth'
import { ClipLoader } from "react-spinners";
import { DataContext } from '../../Components/DataProvider/DataProvider';
import { Type } from '../../Utility/actionType';


function Auth() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState({
    signIn: false,
    signUp: false
  })

  const { state, dispatch } = useContext(DataContext);
  const { user } = state;
    console.log(user)
  const navigate = useNavigate();
  const navStateData = useLocation();
  console.log(navStateData)

  const authHandler = async(e) => {
    e.preventDefault();
    console.log(e.target.name);
    if (e.target.name === "sign-in") {
      setLoading({...loading, signIn:true})
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          setLoading({...loading, signIn: false});
          navigate(navStateData?.state?.redirect|| "/");
        })
        .catch((err) => {
          setError(err.message);
          setLoading({...loading, signIn: false});
        });
    } else {
      setLoading({...loading, signUp:true});
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          setLoading({...loading, signUp:false});
        })
        .catch((err) => {
          setError(err.message);
        });
    }
  };
  
  return (
    <section className={classes.login}>
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt="Amazon Logo"
        />
      </Link>

      <div className={classes.login_container}>
        <h1>Sign In</h1>
        {
          navStateData?.state?.msg && (
            <small 
            style={{
              padding: "5px",
              textAlign: "center",
              color: "red",
              fontWeight: "bold",
            }}
            >
          {navStateData.state.msg}
            </small>
          )};
        <form action= "">
          <div>
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" id="email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input value={password} onChange={(e)=>setPassword(e.target.value)}type="password" id="password" />
          </div>
          <button type='submit' onClick={authHandler} name='sign-in' className={classes.login_signInButton}>
          {loading.signIn ? <ClipLoader color="#000" size={15} /> : 'Sign In'}
        </button>
        </form>
        <p>
          By signning-in you agree to the AMAZON FAKE CLONE conditions of use and & Sale. Please see our Priveacy Notice, our Cookies and Interest-Based Ads Notice.
        </p>
        <button type='submit' onClick={authHandler} name='sign-up' className={classes.login_registerButton}>
        {loading.signIn ? <ClipLoader color="#000" size={15} /> : 'Create your Amazon Account'}
          </button>
          {error && <small style={{paddingTop:'5px', color:'red'}}>{error}</small>}
      </div>
    </section>
  );
}

export default Auth;
