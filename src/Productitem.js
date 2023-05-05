import React from 'react'

export default function Productitem(props) {
    
  return (
    <div>
      <div className="card" style={{width: "18rem"}}>
  <img src={props.imageUrl} className="card-img-top" alt="fmvkfl" />
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.description}</p>
    <a href={props.url} className="btn btn-primary">Buy Now</a>
  </div>
</div>
    </div>
  )
}
