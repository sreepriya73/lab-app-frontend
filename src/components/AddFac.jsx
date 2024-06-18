import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const AddFac = () => {
    const [data,setData]=useState({
        "facname":"",
            "facid":"",
            "department":"",
            "email":"",
            "password":""
    })
    const inputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        axios.post("http://localhost:8080/addfac",data).then(
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
        <h1><center>FACULTY REGISTER</center></h1>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">FACULTY NAME</label>
                        <input type="text" className="form-control"name='facname'value={data.facname}onChange={inputHandler} />
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">ID</label>
                        <input type="text" className="form-control"name='facid'value={data.facid}onChange={inputHandler} />
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">DEPARTMENT</label>
                        <input type="text" className="form-control"name='department'value={data.department}onChange={inputHandler} />
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">EMAIL</label>
                        <input type="text" className="form-control"name='email'value={data.email}onChange={inputHandler} />
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">PASSWORD</label>
                        <input type="text" className="form-control"name='password'value={data.password}onChange={inputHandler} />
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">CONFIRM PASSWORD</label>
                        <input type="text" className="form-control" />
                        <br /><br />
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <center><button className="btn btn-success"onClick={readValue}>Register</button></center>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                           <center> <a href="/lfac">Go to login</a></center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddFac