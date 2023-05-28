import React from 'react'
import spinner from "./spinner.gif";

const Spinner =  () => {
    return (
      <div className='container text-center'>
        <img className='my-3' src={spinner} alt='loadimage'/>
      </div>
    )
}

export default Spinner;