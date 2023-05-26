import React from 'react'
import Spinner from 'react-bootstrap/Spinner';
import "./Wait.css"
const Wait = () => {
  return (
    <div className='wait'>
      <Spinner  animation="border" role="status"></Spinner>
    </div>
    )
}

export default Wait
