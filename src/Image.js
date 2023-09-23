import React from 'react'
import Data from './Product'

function Image() {
  return (
    <div>
      <img src={Data.image} alt='test' style={{ width: "100%" }}/>
    </div>
  )
}

export default Image