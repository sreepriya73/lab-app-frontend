import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">LAB_MONITORING</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Log_stud</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/afac">Add_fac</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/lfac">Log_Fac</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/astud">add_stud</a>
        </li> <li class="nav-item">
          <a class="nav-link" href="/view">view</a>
        </li> <li class="nav-item">
          <a class="nav-link" href="/search">search</a>
        </li> <li class="nav-item">
          <a class="nav-link" href="/attend">attendence</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavBar