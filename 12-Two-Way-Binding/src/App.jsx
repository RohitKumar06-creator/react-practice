import React from 'react'
import { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')

  const submitHandler = (event) => {
    event.preventDefault()
    console.log('Form submitted')
  }

  return (
    <div>
      <form onSubmit={(event) => {
        submitHandler(event)
      }}>
        <input type="text" placeholder="Enter your name" value={title} onChange={(event) => {
          setTitle(event.target.value)
        }} />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App
