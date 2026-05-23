import React from 'react'
import { useState } from 'react'
import { X } from 'lucide-react'

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const [task, setTask] = useState([])


  const submitHandler = (e) => {
    e.preventDefault()

    const copyTask = [...task]
    copyTask.push({ title, details })
    setTask(copyTask)
    console.log(task)


    setTitle('')
    setDetails('')
  }

  const deleteNote = (index) => {
    const copyTask = [...task]
    copyTask.splice(index, 1)
    setTask(copyTask)
  }

  return (
    <div className='h-screen lg:flex bg-black text-white'>

      <form className='flex items-start lg:w-1/2 p-10' onSubmit={(e) => submitHandler(e)}>

        <div className='flex gap-4 w-1/2 flex-col items-start'>

          <h1 className='text-2xl font-bold mb-4'>Add Notes</h1>

          {/* First input field */}
          <input
            type="text"
            placeholder='Enter Notes Heading'
            className='px-5 w-full py-2 border-2 outline-none rounded'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          {/* Second input field */}
          <textarea
            className='px-5 w-full h-32 py-2 border-2 flex items-start flex-row outline-none rounded'
            placeholder='Write Details'
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />

          <button className='bg-blue-500 active:scale-95 w-full text-white px-5 py-2 rounded'>Add Notes</button>
        </div>

      </form>

      <div className='lg:w-1/2 lg:border-2  p-10'>

        <h1 className='text-2xl font-bold mb-4'>Recent Notes</h1>

        <div className='flex items-start justify-start gap-5 flex-wrap overflow-auto h-[90%]'>

          {task.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className='h-52 relative w-52 rounded-xl text-black p-4 bg-[url("https://www.onlygfx.com/wp-content/uploads/2022/03/realistic-notebook-notepage-paper-background-2-cover.jpg")] bg-cover bg-center'
                >
                <h2 onClick={() => deleteNote(idx)} className='absolute top-2 right-3 bg-red-500 - p-1 rounded-full text-xs' ><X /></h2>
                <h3 className='text-xl font-bold leading-tight'>
                  {elem.title}
                </h3>

                <p className='leading-tight font-medium mt-3'>
                  {elem.details}
                </p>
              </div>
            )
          })}
        </div>
      </div>

    </div>
  )
}

export default App
