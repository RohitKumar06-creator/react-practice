import React from 'react'

const App = () => {

  const submitHandler = (event) => {
    event.preventDefault()
    console.log('Form submitted')
  }

  return (
    <div>
      <form onSubmit={(event) => {
        submitHandler(event)
      }}>
        <input type="text" placeholder="Enter your name" />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App
