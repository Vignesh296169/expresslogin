import React from 'react'

function Wrapper({children}) {
  return (
    <div className='mx-auto h-[50vh]  w-[30%]'>{children}</div>
  )
}

export default Wrapper