import { useState, useEffect } from 'react';
import './Login.scss';
import { Route, Routes } from 'react-router-dom';

function LogIn() {
  const intialValues = { username: '', email: '', password: '' };
  const [formvalues, setformvalues] = useState(intialValues);
  const [formErrors, setformErrors] = useState({});
  const [isSubmit, setisSubmit] = useState(false);

  const handelChange = (e) => {
    // console.log(e.target);
    const { name, value } = e.target;

    setformvalues({ ...formvalues, [name]: value });
    console.log(formvalues);
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    setformErrors(validate(formvalues));
    setisSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formvalues);
    }
  }, [formErrors, formvalues, isSubmit]);

  const validate = (values) => {
    const errors = {};

    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!values.username) {
      errors.username = 'UserName is required';
    } else if (!regex.test(values.email)) {
      errors.email = 'this is not valid email format!   ';
    }
    if (!values.email) {
      errors.email = 'email is required';
    } else if (!regex.test(values.email)) {
      errors.email = 'this is not valid email format!   ';
    }
    if (!values.password) {
      errors.password = 'password is required';
    } else if (values.password < 4) {
      errors.password = 'Password should be more than 4 charecters';
    } else if (values.password > 10) {
      errors.password = 'Password should be Less than 10 charecters';
    }

    return errors;
  };

  return (
    <>
      <div className='container'>
        {Object.keys(formErrors).length === 0 && isSubmit ? (
          <div className='ui massage success'> Signed in Successfullym </div>
        ) : (
          <pre>{JSON.stringify(formvalues, undefined, 2)}</pre>
        )}

        <form onSubmit={handelSubmit}>
          <h1>Login Form</h1>
          <div className='ui divider'></div>
          <div className='ui form'>
            <div className='field'>
              <label>Username</label>
              <input
                type='text'
                name='username'
                placeholder='UserName'
                value={formvalues.username}
                onChange={handelChange}
              />
            </div>
            <p>{formErrors.username}</p>
            <div className='field'>
              <label htmlFor=''>Email</label>
              <input
                type='text'
                name='email'
                placeholder='Email'
                value={formvalues.email}
                onChange={handelChange}
              />
            </div>
            <p>{formErrors.email}</p>
            <div className='field'>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                name='password' // Corrected name attribute
                placeholder='Password'
                value={formvalues.password} // Corrected state value
                onChange={handelChange}
              />
            </div>
            <p>{formErrors.password}</p>
            <button className='fluid ui button blue'>Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default LogIn;
