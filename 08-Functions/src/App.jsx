import React from 'react'

const App = () => {

  const btnClicked = () => {
    console.log('Button was clicked')
  }

  return (
    <div>
      <h1>Hello, Alice</h1>

      <button onClick={btnClicked}>Change User</button>
      <button onClick={function () {
        console.log('Explore More button was clicked')
      }}>Explore More</button>

    </div>
  )
}

export default App
