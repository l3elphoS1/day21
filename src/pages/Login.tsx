import React from 'react'
import Button from '../components/Button'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom' // Import useNavigate
import {useForm} from 'react-hook-form'

interface RegisterForm{
  username:string;
  email:string;
  password:string;
  confirmpassword:string;
  firstname:string;
  lastname:string;
}

function Login() {
  const { register, handleSubmit } = useForm<RegisterForm>();
  const onSubmit = (data: RegisterForm) => {
    console.log(data);
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("username")}
          type="text"
          id="username"
          placeholder="user"
        />
        <input
          {...register("email")}
          type="text"
          id="email"
          placeholder="email"
        />

        <input
          {...register("password")}
          type="password"
          id="password"
          placeholder="password"
        />
        <input
          {...register("confirmpassword")}
          type="password"
          id="confirmpassword"
        />
        <input {...register("firstname")} type="text" id="firstname" />
        <input {...register("lastname")} type="text" id="lastname" />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Login