import React, { useState } from 'react';

import Image from "../Image/Logo.png"
import styled, { keyframes } from 'styled-components'
import { Link, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { adminLogin, userLogin, userRegister } from '../Redux/Authentication/action';

const AuthFormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  & > div {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  & > div > img {
    width: 100%;
    max-width: 500px;
    transition: transform 0.5s ease-in-out;
  }
`;

const AuthForm = styled.form`
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  width: 35%;
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;

  &.fade-enter {
    opacity: 0;
    transform: translateY(-20px);
  }

  &.fade-enter-active {
    opacity: 1;
    transform: translateY(0);
  }
`;


const AuthLabel = styled.label`
  font-weight: bold;
`;

const AuthInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const AuthButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const AuthSwitchLink = styled.span`
  color: #007bff;
  cursor: pointer;
`;

const Login = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showAdmin,setShowAdmin]=useState(false)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [adminEmail,setAdminEmail]=useState("");
  const [adminPassword,setAdminPassword]=useState("")

  const dispatch=useDispatch();

  const isAuthAdmin=useSelector(store=>store.authReducer.isAuthAdmin);
  const isAuth=useSelector(store=>store.authReducer.isAuth)


  console.log(isAuthAdmin)

  const handleSwitchForm = () => {
    setShowAdmin(false)
    setShowLogin(!showLogin);
  };

  const handleSubmit = (e) => {
    let user={
      email,password
    }
    let newUser={
      name,email,password
    }
    e.preventDefault();
    if (showLogin) {
       dispatch(userLogin(user))
    } else {
       dispatch(userRegister(newUser))
    }
  };

  const handleAdmin=()=>{
     setShowAdmin(true);
  }

  const handleAdminSubmit=(e)=>{
    e.preventDefault()

    let obj={
      email:adminEmail,
      password:adminPassword
    }
       dispatch(adminLogin(obj))
  }

  if(isAuthAdmin){
    return <Navigate to={"/admin"} />
  }
  if(isAuth){
    return <Navigate to={"/product"} />
  }

  return (
    <AuthFormContainer>
      <div>
        <img src={Image} alt='no Image'/>
      </div>
      {
        (showAdmin? (<>
        <AuthForm onSubmit={handleAdminSubmit}>
          <h2>Admin Login</h2>
          
          <AuthLabel>Email:</AuthLabel>
          <AuthInput
            type='text'
            placeholder='Email'
            value={adminEmail}
            onChange={(e) => setAdminEmail(e.target.value)}
          />
          <AuthLabel>Password:</AuthLabel>
          <AuthInput
            type='password'
            placeholder='Password'
            value={adminPassword}
            onChange={(e) => setAdminPassword(e.target.value)}
          />
         
          <AuthButton type='submit'>Login</AuthButton>
          <AuthSwitchLink onClick={handleSwitchForm}>
            {showLogin ? 'New user? Register here' : 'Already registered? Login here'}
          </AuthSwitchLink>
         <Link onClick={handleAdmin}>Admin Login</Link>
        </AuthForm>
         
         </>
       ):(<><AuthForm onSubmit={handleSubmit}>
          <h2>{showLogin ? 'User Login' : 'User Register'}</h2>
          
          {!showLogin && (
            <div>
              <AuthLabel>Name:</AuthLabel>
              <AuthInput
                type='text'
                placeholder='Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          )}
          <AuthLabel>Email:</AuthLabel>
          <AuthInput
            type='text'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <AuthLabel>Password:</AuthLabel>
          <AuthInput
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {!showLogin && (
            <div>
              <AuthLabel>Confirm Password:</AuthLabel>
              <AuthInput
                type='password'
                placeholder='Confirm Password'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          )}
          <AuthButton type='submit'>{showLogin ? 'Login' : 'Register'}</AuthButton>
          <AuthSwitchLink onClick={handleSwitchForm}>
            {showLogin ? 'New user? Register here' : 'Already registered? Login here'}
          </AuthSwitchLink>
         <Link onClick={handleAdmin}>Admin Login</Link>
        </AuthForm></>))
      }
      
    </AuthFormContainer>
  );
};

export default Login;
