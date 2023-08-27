import React, { useState } from 'react';
import { Form, Link, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { adminLogin, userLogin, userRegister } from '../Redux/Authentication/action';
import { Button, Container, Input } from '@chakra-ui/react';


import { styled } from 'styled-components';

const Login = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [adminEmail, setAdminEmail] = useState('');
  const [adminPassword, setAdminPassword] = useState('');

  const dispatch = useDispatch();

  const isAuthAdmin = useSelector(store => store.authReducer.isAuthAdmin);
  const isAuth = useSelector(store => store.authReducer.isAuth);

  console.log(isAuthAdmin);

  const handleSwitchForm = () => {
    setShowAdmin(false);
    setShowLogin(!showLogin);
  };

  const handleSubmit = e => {
    let user = {
      email,
      password,
    };
    let newUser = {
      name,
      email,
      password,
    };
    e.preventDefault();
    if (showLogin) {
      dispatch(userLogin(user));
    } else {
      dispatch(userRegister(newUser));
    }
  };

  const handleAdmin = () => {
    setShowAdmin(true);
  };

  const handleAdminSubmit = e => {
    e.preventDefault();

    let obj = {
      email: adminEmail,
      password: adminPassword,
    };
    dispatch(adminLogin(obj));
  };

  if (isAuthAdmin) {
    return <Navigate to={'/admin'} />;
  }
  if (isAuth) {
    return <Navigate to={'/product'} />;
  }

  return (

     <Div>
    <Containers className="login-container">
      {showAdmin ? (
        <>
          <form className="login-form" onSubmit={handleAdminSubmit}>
            <h2>Admin Login</h2>

            <label>Email:</label>
            <Input
              type="text"
              placeholder="Email"
              value={adminEmail}
              onChange={e => setAdminEmail(e.target.value)}
            />
            <label>Password:</label>
            <Input
              type="password"
              placeholder="Password"
              value={adminPassword}
              onChange={e => setAdminPassword(e.target.value)}
            />

            <Button type="submit">Login</Button>
            <Link onClick={handleSwitchForm}>
              {showLogin ? 'New user? Register here' : 'Already registered? Login here'}
            </Link>
            <Link onClick={handleAdmin}>Admin Login</Link>
          </form>
        </>
      ) : (
        <>
          <form className="login-form" onSubmit={handleSubmit}>
            <h2>{showLogin ? 'User Login' : 'User Register'}</h2>

            {!showLogin && (
              <div>
                <label>Name:</label>
                <Input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </div>
            )}
            <label>Email:</label>
            <Input
              type="text"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <label>Password:</label>
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            {!showLogin && (
              <div>
                <label>Confirm Password:</label>
                <Input
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={e => setConfirmPassword(e.target.value)}
                />
              </div>
            )}
            <Button type="submit">{showLogin ? 'Login' : 'Register'}</Button>
            <Link onClick={handleSwitchForm}>
              {showLogin ? 'New user? Register here' : 'Already registered? Login here'}
            </Link>
            <Link onClick={handleAdmin}>Admin Login</Link>
          </form>
        </>
      )}
    </Containers>
    </Div>

  );
};

const Div=styled.div`
   
 
  
  align-items: center;
  border: 1px solid red;
  background-image: url("https://i.pinimg.com/736x/30/d5/53/30d5538bd8790cc78195936047b18ddb.jpg");
  /* background-size:500px; */
  height: 700px;
  /* background-repeat: repeat; */

`

const Containers=styled.div`
  
  
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  background-color: #a09595;
 
 
}

.login-form {
  background-color: #e3e4de;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 50%;
  margin-top:150px;
  margin-left: 17%;
  margin-bottom:100px;
}

.login-form h2 {
  margin-bottom: 15px;
  font-size: 1.5rem;
}

.login-form label {
  display: block;
  font-size: 0.9rem;
  margin-top: 10px;
}

.login-form input {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.login-form button {
  width: 100%;
  margin-top: 15px;
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
}

.login-form button:hover {
  background-color: #0056b3;
}

.login-form a {
  display: block;
  margin-top: 10px;
  color: #007bff;
  cursor: pointer;
  text-decoration: none;
}

.login-form a:hover {
  text-decoration: underline;
}

`
export default Login;
