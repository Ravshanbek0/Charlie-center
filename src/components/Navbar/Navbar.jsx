import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='w-full fixed bg-white z-50 px-8 m-auto flex items-center justify-between py-4'>
      <Link to={"/"}>
        <div className='flex gap-2 items-center justify-center'>
          <img className='m-auto w-6 xl:w-8 object-contain' src="./imgs/logo.jpg" alt="" />
          <h1 className='text-[#19566A] font-bold lg:text-xl text-[18px]'>Charlie</h1>

        </div>
      </Link>
      <div className='hidden lg:flex gap-12 text-[#6A6B6C] items-center'>
        <li>Home </li>
        <li>Course </li>
        <li>Monitors</li>
        <li>About</li>
      </div>
      <div>
        <Link to={"/register"}><button className='px-4 lg:py-2 py-1 text-black bg-[#F5C362] rounded-xl'>Get Started</button></Link>
      </div>
    </div>
  )
}

export default Navbar