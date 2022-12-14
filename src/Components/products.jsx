import React from 'react'
import Product_data from "./product_data.json"
import {useState} from "react";

export default function Products() {
    const data = Product_data.products
    const [searchTerm, setSearchTerm] = useState("");
    console.log(data)
  return (
    <div>
      <form className="form-control me-2">
          <input
            id="search"
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>
      {
        data.filter((val, key) => {
            if (searchTerm === "") {
              return val.category;
            } else if (
              val.category.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val.category;
            }
          }).map((ele,index)=> 
        <div key = {index} className="card" >
          <img src = {ele.images[0]} className="card-img-top" ></img>
          <div className="card-body">
          <p className="card-title" style={{height: "2rem", }}>{ele.title}</p>
          <p className="card-title" style={{height: "2rem", }}>{ele.category}</p>
          <p className="card-text"  style={{height: "2rem", }}>{ele.brand}</p>
          <p className="card-text"  style={{height: "4rem", }}>{ele.description}</p>
          <p className="card-text-price"  style={{height: "1rem", }}>Price: {ele.price}$</p>
          <p className="card-text-rating"  style={{height: "1rem", }}>Rating: {ele.rating}</p></div>
        </div>)
      }
    </div>
  )
}