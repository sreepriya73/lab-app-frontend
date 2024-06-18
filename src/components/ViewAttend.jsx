import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewAttend = () => {
    const [data,setData]=useState([])
    const fetchData=()=>{
        axios.get("http://localhost:8080/view").then(
            (response)=>{
                setData(response.data)
            }
        ).catch().finally()
    }
    useEffect(()=>{fetchData()},[])
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                <table className="table">
  <thead>
    <tr>
      <th scope="col">SUBJECT</th>
      <th scope="col">FACULTY NAME</th>
      <th scope="col">LAB</th>
      <th scope="col">HOUR</th>
    </tr>
  </thead>
  <tbody>
   {data.map(
    (value, index)=>{
        return  <tr>
        <td>{value.subject}</td>
        <td>{value.facname}</td>
        <td>{value.lab}</td>
        <td>{value.hour}</td>
      </tr>
    }
   )}
  </tbody>
</table>

                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewAttend