import { useState } from "react" 
import {useForm} from "react-hook-form"
import './App.css'

function App() {
  const{
    register,
    handleSubmit,
    watch,
    formState:{errors, isSubmitting},
  }=useForm();

  function onSubmit(data){
    console.log("submitting the form",data);
  }

  return (
      <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label>First Name: </label>
              <input {...register('firstName',{required:true})}/>
              {errors.firstName && <p>Please fill the First Name</p> }
            </div>
              <br /> 
            <div>
              <label>Last Name: </label>
              <input {...register('lastName',{required:true})}/>
              {errors.lastName && <p>Please fill the last Name</p> }
            </div>
            <br />
            <input type='submit' disabled={isSubmitting}
            value={isSubmitting ? "submitting":"submit"}/>
          </form>
      </div>
  )
}

export default App;
