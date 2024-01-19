import { useState } from 'react'
import { useForm } from 'react-hook-form'
import './App.css'

function App() {
  const { register, handleSubmit, formState: {errors} } = useForm();
  const [ submitted, setSubmit ] = useState(false);
  const [ feild, setField] = useState()

  const  submitData=(data)=>{
    setField(data);
    setSubmit(true);
  }

  return (
    <>
    <form action="" onSubmit={handleSubmit(submitData)}>
      {submitted==true?<h3>Registration Successfull</h3>:null}
      <input 
        id='first-name' 
        type="text" 
        className="feild-inputs" 
        placeholder='Enter your first name'
        {...register("firstName", {required: "Enter your first name"})}/>
        <p>{errors.firstName?.message}</p>
      <input 
        id='last-name' 
        type="text" 
        className="feild-inputs" 
        placeholder='Enter your last name'
        {...register("lastName", {required: { value:true,message:"Enter your last name"}})}/>
        <p>{errors.lastName?.message}</p>
      <input 
        id='email' 
        type="text" 
        className="feild-inputs" 
        placeholder='Enter your Email'
        {...register("email", {required:{value:true, message:"Enter your email"},pattern:{value:/^\S+@\S+$/i,message: "Inavalid email" }})}/>
        <p>{errors.email?.message}</p>
      <input 
        id='password' 
        type="password" 
        className="feild-inputs" 
        placeholder='Enter your password'
        {...register("password", {required: {value:true, message:"Enter your password"}, 
        minLength:{value: 4, message: "Password must be more than 4 characters."},
        maxLength:{value: 20, message: "Password must be more than 20 characters."}})}/>
        <p>{errors.password?.message}</p>
      <input type="submit" value="Register" id='reg-btn'/>
    </form>
    </>
  )
}

export default App
