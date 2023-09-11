import React, { useState } from 'react'

const DragAndDrop = () => {
    const [dragOver, setDragOver] = useState(false)
    const handleDroppedEleement = (e) =>{
      console.log(e.target)
    }

    const handleFormSubmit = event =>{
      console.log(event)
    }
    const handleDragEnter = e =>{
        e.preventDefault()
        setDragOver(true);
    }
    const handleDragOver = e =>{
        e.preventDefault()

    }
    const handleDragLeave = e =>{
        e.preventDefault()
    }
    const handleDrop = e =>{
        e.preventDefault()
        console.log("drop")
        setDragOver(false)
        console.log(e.data)
    }

  return (
    <div>
      <form onChange={handleFormSubmit}>
      <div
      className={`mt-4  w-full h-full flex  bg-opacity-60 ${dragOver ? "bg-black bg-opacity-60 fixed top-0 left-0 h-screen w-screen" : ""}`}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onChange={handleDroppedEleement}
    >
      <div className="extraOutline p-4 bg-white w-max bg-whtie m-auto rounded-lg">
        <div className="file_upload p-5 relative border-4 border-dotted border-gray-300 rounded-lg w-[450px]">
          <svg
            className="text-indigo-500 w-24 mx-auto mb-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            />
          </svg>
          <div className="input_field flex flex-col w-max mx-auto text-center">
            <label>
              <input
                className="text-sm cursor-pointer w-36 hidden"
                type="file"
                multiple
              />
              <div className="text bg-indigo-600 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-indigo-500">
                Select
              </div>
            </label>

            <div className="title text-indigo-500 uppercase">
              or drop files here
            </div>
          </div>
        </div>
      </div>
    </div>
      </form>
    </div>
  )
}

export default DragAndDrop
