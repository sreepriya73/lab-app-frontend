import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const LogFac = () => {
  
    const [data,setData]=useState(
        {

            "email":String,
            "password":String
        }
    )
    const inputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
       axios.post("http://localhost:8080/studlogin",data).then(
        (response)=>{
            console.log(response.data)
            if (response.data.status=="success") {
                alert("success")
            } else {
                alert("error")
            }
        }
       ).catch()
    }
    return (
    <div>
       <NavBar/>
        <h1><center>FACULTY LOGIN</center></h1>
        <br /><br />
        <div className="container">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">EMAIL</label>
                    <input type="text" className="form-control"name='email'value={data.email}onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">password</label>
                    <input type="text" className="form-control"name='password'value={data.password}onChange={inputHandler} />
                    <br /><br />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <center><button className="btn btn-success"onClick={readValue}>Login</button></center>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <center><a href="/afac">go to register</a></center>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LogFac