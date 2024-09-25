import React from 'react'
import { FaBell } from "react-icons/fa6";
import { MdAccountCircle } from "react-icons/md";


function Navbar() {
  return (
      <div>
          {/* CONTENT */}
          <div className = "flex items-center justify-between px-8 py-8">
              <h1 className="poppins-bold text-3xl text-blue-900" > UTDFreebies</h1>
                {/* Nav Items */}
                <div className ='flex gap-10 poppins-semibold text-xl py-1 px-2 underline'>
                  <p>New</p>
                  <p>Browse</p>
                  <p>Upload</p>

                </div>
              <div className = 'flex space-x-2'>
                  <FaBell size= {'2rem'} />
                <MdAccountCircle size={'2rem'} />
              </div>
              

        </div>
          
          
      </div>
  )
}

export default Navbar
