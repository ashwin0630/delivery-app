import React from 'react'
import {AiFillTag, AiOutlineClose, AiOutlineMenu,AiOutlineSearch}   from 'react-icons/ai'
import {BsCartFill, BsFillSaveFill} from 'react-icons/bs'
import {TbTruckDelivery} from 'react-icons/tb'
import {FaUserFriends,FaWallet} from 'react-icons/fa'
import {MdHelp,MdFavorite} from 'react-icons/md'
import { useState } from 'react'

export const Navbar = () => {
    const [nav,setnav]=useState(false);

    return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
        <div className='flex items-center'>
            <div onClick={()=> setnav(!nav)} className='cursor-pointer'>
                <AiOutlineMenu size={30}/>
            </div>
            <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
                Best <span className='font-bold'>Eats</span>
            </h1>
            <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
                <p className='bg-black text-white rounded-full p-2'>Delivery</p>
                <p className='p-2'>Pickup</p>
            </div>
        </div>      

        <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:[500px]' >
            <AiOutlineSearch size={30}/>
            <input type="text" placeholder='search food' className='bg-transparent p-2 w-full focus:outline-none ' />

        </div>    
        <button className='bg-black rounded-full text-white hidded md:flex items-center py-2'>
            <BsCartFill size={20} className='mr-2'/>Cart
        </button>


        {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ""}

       
        <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300':'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
            <AiOutlineClose size={30} onClick={()=> setnav(!nav)} className='absolute right-4 top-4 cursor-pointer'/>
            <h2 className='text-2xl p-4'>Best <span className='font-bold'>Eats</span></h2>
            <nav>
                <ul className='flex flex-col p-4 text-gray-800'>
                    
                    <li className='text-xl py-4 flex'><TbTruckDelivery size={25} className='mr-4'/>Orders</li>
                    <li className='text-xl py-4 flex'><MdFavorite size={25} className='mr-4'/>Favorites</li>
                    <li className='text-xl py-4 flex'><FaWallet size={25} className='mr-4'/>wallet</li>
                    <li className='text-xl py-4 flex'><MdHelp size={25} className='mr-4'/>help</li>
                    <li className='text-xl py-4 flex'><AiFillTag size={25} className='mr-4'/>promotions</li>
                    <li className='text-xl py-4 flex'><BsFillSaveFill size={25} className='mr-4'/>best ones</li>
                    <li className='text-xl py-4 flex'><FaUserFriends size={25} className='mr-4'/>invite friend</li>
                </ul>
            </nav>
        </div>


    </div>
    
  )
}

export default Navbar