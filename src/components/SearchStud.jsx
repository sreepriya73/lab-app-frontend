import React, { useState } from 'react'
import NavBar from './NavBar'

const SearchStud = () => {
    const [data,setData]=useState(
        {
            
            
            "admno":String,
        }
    )
    const inputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(data)
    }
  return (
    <div>
     <NavBar/>
        <h1><center>SEARCH STUDENT</center></h1>
        <br /><br />
        <div className="container">
        <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">ADMISSION NO</label>
                    <input type="text" className="form-control"name='admno'value={data.admno}onChange={inputHandler} />
                    <br /><br />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <center><button className="btn btn-success"onClick={readValue}>Search</button></center>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <center> <a href="/lfac">Go to login</a></center>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchStud