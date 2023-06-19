import React, { useState } from 'react'
import { data } from '../data/data.js' 


const Food = () => {

    const[foods,setfood]=useState(data);

    const filtertype=(category)=>{
        setfood(data.filter((item)=>{
            return item.category === category;
        })
        );
    };

    const filterprice=(price)=>{
        setfood(data.filter((item)=>{
            return item.price === price;
        }

        ));
    };

    return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
        <h1 className='text-orange-600 font-bold text-4xl text-center'>Top rated menu items</h1>

        <div className='flex flex-col lg:flex-row justify-between'>
            <div >
                <p className='font-bold text-gray-700'>Filter type</p>
                <div className='flex justify-between flex-wrap'>
                    <button onClick={()=> setfood(data)} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>All</button>
                    <button onClick={()=> filtertype('burger')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Burger</button>
                    <button onClick={()=> filtertype('pizza')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Pizza</button>
                    <button onClick={()=> filtertype('salad')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Salad</button>
                    <button onClick={()=> filtertype('chicken')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Chicken</button>
                </div>
            </div>

            <div>
                <p className='font-bold text-gray-700'>filter price</p>
                <div className='flex justify-between max-w=[390px] w-full'>
                    <button onClick={()=>filterprice('$')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$</button>
                    <button onClick={()=>filterprice('$$')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$</button>
                    <button onClick={()=>filterprice('$$$')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$$</button>
                    <button onClick={()=>filterprice('$$$$')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$$$</button>
                </div> 
            </div>
        </div>

        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
            {foods.map((item,index)=>{
                return(
                    <div key={index} className='border shadow-lg rounded-lg hover:scale-105 duration-300'>
                        <img  className='w-full h-[200px] object-cover rounded-t-lg' src={item.image} alt={item.name} />
                        <div className='flex justify-between px-2 py-4'>
                            <p className='font-bold'>{item.name}</p>
                            <p>
                                <span className='bg-orange-500 text-white p-1 rounded-full'>{item.price}</span>
                            </p>
                        </div>
                    </div>
                );

            })}
        </div>

    </div>
  )
}

export default Food