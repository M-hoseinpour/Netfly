import React from 'react'

function NotFound({ message }) {
  return (
    <>
    <section class="error-container mt-32">
      <span class="four"><span class="screen-reader-text h-64">4</span></span>
      <span class="zero mt-8 mx-1"><span class="screen-reader-text">0</span></span>
      <span class="four"><span class="screen-reader-text">4</span></span>
      <h1 className='text-2xl text-white_ mt-2'>
        Opps! {message} Not Found
      </h1>
    </section>
    
  </>
  )
}

export default NotFound