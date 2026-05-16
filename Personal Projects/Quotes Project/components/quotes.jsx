import React from 'react'

const Quotes = (props) => {
    console.log(props);

    return (
        <div>
            <div className="card">
                <div className="top">
                    <p>{props.quote}</p>

                    <div className="meta">
                        <h4>{props.character}</h4>
                        <span>{props.movie}</span>
                    </div>
                </div>

                <div className="bottom">
                    <img src={props.image} />
                </div>
            </div>
        </div>
    )
}

export default Quotes
