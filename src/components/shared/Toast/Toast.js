import React from 'react'
import toast from 'react-hot-toast'
import pic from './profile-pic.png'

function Toast() {
  return (
    toast.custom((t) => (
        <div
          className={`${
            t.visible ? 'animate-enter' : 'animate-leave'
          } max-w-md bg-darklategray text-white_ w-full  shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
        >
          <div className="flex-1 text-sm w-0 py-2 px-1">
            <div className="flex items-start">
              <div className="flex-shrink-0 pt-0.5">
                <img
                  className="h-14 w-14 rounded-full"
                  src={pic}
                  alt=""
                />
              </div>
              <div className="ml-3 pt-1.5 flex-1">
                <p className="text-sm font-medium">
                 Created by Mohammad Hosein pour
                </p>
                <p className="mt-1 text-sm">
                  React js developer
                </p>
              </div>
            </div>
          </div>
          <div className="flex border-l">
            <button
              onClick={() => toast.dismiss(t.id)}
              className="w-full border border-transparent rounded-none rounded-r-lg p-2 flex items-center justify-center text-sm font-medium  focus:outline-none "
            >
              Close
            </button>
          </div>
        </div>
      ), {duration:10000 })
  )
}

export default Toast