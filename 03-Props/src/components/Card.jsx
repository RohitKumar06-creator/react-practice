import React from 'react'

const Card = (props) => {
    return (
        <div>
            <div className="card">
                <img src={props.img} alt={`${props.user}'s profile`} />
                <h1>{props.user}</h1>
                <p>Age: {props.age}</p>
                <p>Props are a way to pass data from a parent component to a child component in React.</p>
                <button>View Profile</button>
            </div>
        </div>
    )
}

export default Card
