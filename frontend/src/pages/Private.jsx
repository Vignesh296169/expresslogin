import React from 'react'
import { useNavigate } from "react-router-dom";

function Private() {
  const navigate=useNavigate()
  const clickHandler=()=>{
      navigate("/",{ replace: true })
  }
  return (
    <div className='bg-slate-400 h-[100vh] flex flex-col items-center justify-center'>
      <div className='bg-slate-300 w-[50vw] h-[50vh] px-2'>
      <h1 className='text-3xl'>content page</h1>
      <button className='bg-red-600 p-2 mt-[10rem] ml-[40rem]' onClick={clickHandler}>Login</button>
      </div>
    </div>
  )
}

export default Private