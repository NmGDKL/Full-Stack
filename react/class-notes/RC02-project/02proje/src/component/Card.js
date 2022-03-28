import React from 'react'
​
const Card = (props) => {
  return (
    <div>
        <div className="card">
          <img src={props.cardImg} className="card-img-top" alt={props.cardTitle} />
          <div className="card-body">
            <h5 className="card-title">{props.cardTitle}</h5>
            <p className="card-text">{props.cardText}</p>
          </div>
        </div>
    </div>
  )
}
​
export default Card