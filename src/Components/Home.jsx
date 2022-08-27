import React from 'react'
export default function Home() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" style ={{textAlign:'center'}} href="#" >Online@store</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    <form className="d-flex">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto me-2 mb-lg-0">
          <li className="nav-item" >
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
        </ul>
      </div>
      </form> 
    </div>
  </nav>
  );
}
