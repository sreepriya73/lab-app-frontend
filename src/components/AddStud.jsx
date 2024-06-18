import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const AddStud = () => {
    const [data,setData]=useState({
        "studname":"",
        "courseid":"",
        "admno":"",
        "department":"",
        "email":"",
        "year":"",
        "password":""
    })
    const inputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        axios.post("http://localhost:8080/addstud",data).then(
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
        <h1><center>REGISTER</center></h1>
        <br /><br />
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">NAME</label>
                            <input type="text" className="form-control"name='studname'value={data.studname}onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">COURSE ID</label>
                        <input type="text" className="form-control"name='courseid'value={data.courseid}onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">ADMISSION NO</label>
                            <input type="text" className="form-control"name='admno'value={data.admno}onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                          <label htmlFor="" className="form-label">DEPARTMENT</label>
                          <input type="text" className="form-control" name='department'value={data.department}onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">EMAIL</label>
                            <input type="text" className="form-control"name='email'value={data.email}onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">YEAR</label>
                            <select name="year" id="" className="form-control"value={data.year}onChange={inputHandler} >
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                           <label htmlFor="" className="form-label">PASSWORD</label>
                           <input type="text" className="form-control" name='password'value={data.password}onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                           <label htmlFor="" className="form-label">CONFIRM PASSWORD</label>
                           <input type="text" className="form-control" />
                           <br /><br />
                        </div>
                        
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <center><button className="btn btn-success"onClick={readValue}>Register</button></center>
                        </div>
                        
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                           <center> <a href="/">Go to login</a></center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddStud