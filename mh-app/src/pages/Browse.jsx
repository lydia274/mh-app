import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import data from "../assets/data.json"

function Browse() {
  const [items, setItems] = useState([]) //setting the initial state to an empty array

  //getting data from JSON file
  useEffect(() => {
    setItems(data)
  }, [])

  console.log(data.length)

  //"loading" or eventually a spinner for when loading is in progress
  if (!data.length) {
    return <p>Loading...</p>
  }

  return (
    <div className="">
      <div className="flex">
        {data.map((item) => {
          //itearating over the array of objects to display each item
          return (
            <div key={item.id} className="border tile">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <Link to={`/browse/${item.id}`}> Learn more </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Browse
