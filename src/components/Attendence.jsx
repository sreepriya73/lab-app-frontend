import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const Attendence = () => {
    const [data,setData]=useState(
        {
            "subject":String,
            "facname":String,
            "lab":String,
            "hour":String
        }
    )
    const inputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        axios.post("http://localhost:8080/addattend",data).then(
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
        <h1><center>ATTENDANCE</center></h1>
        <br /><br />
        <div className="container">
            <div className="row g-3">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">SUBJECT</label>
                    <select name="subject" id="" className="form-control"value={data.subject}onChange={inputHandler} >
                                <option value="adbms">adbms</option>
                                <option value="nsa">nsa</option>
                                <option value="java">java</option>
                                <option value="python">python</option>
                            </select>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">FACULTY NAME</label>
                    <input type="text" className="form-control" name='facname'value={data.facname}onChange={inputHandler}/>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">LAB</label>
                    <input type="text" className="form-control" name='lab'value={data.lab}onChange={inputHandler}/>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">HOUR</label>
                    <input type="text" className="form-control"name='hour'value={data.hour}onChange={inputHandler} /><br /><br />
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                   <center> <button className="btn btn-success"onClick={readValue}>MARK ATTENDANCE</button></center>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <center><a href="/">go to login</a></center>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Attendence