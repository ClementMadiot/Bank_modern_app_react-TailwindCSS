import React, { useState } from 'react'

import { logo } from '../assets'
import { navLinks } from '../constants'
import { HiMenuAlt2 } from 'react-icons/hi'
import { IoClose } from 'react-icons/io5'
function Navbar() {
  const [toggle, setToggle] = useState(false)

  return (
    <nav className=" w-full flex p-6 justify-between items-center ">
      <img src={logo} alt="hoodbank" className="w-[124px] h-[32px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              index === navLinks.length - 1 ? 'mr-0' : 'mr-10'
            } text-white border-b-2 border-transparent transition duration-200 ease-out hover:border-b-lightBlue`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <HiMenuAlt2
          className={`w-[28px] h-[28px] cursor-pointer rotate-180 ${toggle ? 'hidden' : 'flex'}`}
          color="#fff"
          onClick={() => setToggle(true)}
        />
        {toggle && (
          <>
            <IoClose
              className="w-[28px] h-[28px] cursor-pointer"
              color="#fff"
              onClick={() => setToggle(false)}
            />
            <div className="p-6 bg-black-gradient absolute top-20 ring-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar ">
              <ul className="list-none flex flex-col justify-end items-center flex-1">
                {navLinks.map((nav, index) => (
                  <li
                    key={nav.id}
                    className={`font-poppins font-normal cursor-pointer text-[16px] border-b-2 border-transparent transition duration-200 ease-out hover:border-b-lightBlue ${
                      index === navLinks.length - 1 ? 'mr-0' : 'mb-4'
                    } text-white`}
                  >
                    <a onClick={() => setToggle(false)} href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
      {/* </div> */}
    </nav>
  )
}

export default Navbar
