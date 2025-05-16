import React from 'react'
import { NavLink, useLocation } from 'react-router-dom';

export default function BookingDetail() {
  const location = useLocation();
  const {floor , name , price , id, status} = location?.state.room || {};
  
  
  return (
    <div className='w-full h-screen p-20'>
      <h2 className='text-xl font-medium text-teal-500'>Chi tiết phòng {name}</h2>

      <div className='mt-20'>
         <div className='flex items-center mb-3'>
          <h3 className='text-lg text-gray-500 mr-14 min-w-24'>Tên phòng : </h3>
          <p className='font-bold text-lg text-red-500'>{name}</p>
      </div>
      <div className='flex items-center mb-3'>
          <h3 className='text-lg text-gray-500 mr-14 min-w-24'>Tên tầng : </h3>
          <p className='font-bold text-lg text-red-500'>{floor}</p>
      </div>
      <div className='flex items-center mb-3'>
          <h3 className='text-lg text-gray-500 mr-14 min-w-24  '>Trạng thái : </h3>
          <p className='font-bold text-lg text-red-500'>{status}</p>
      </div>
      <div className='flex items-center pt-5'>
        <button className='mr-3'>
         <NavLink to={`/booking-room/${id}`} className='px-4 py-2 bg-teal-500 font-semibold text-white rounded-md hover:bg-teal-600 '>
           Đặt phòng
         </NavLink>

        </button>
         <button className='mr-3'>
         <NavLink to="/all-list-room" className='px-4 py-2 bg-violet-500 font-semibold text-white rounded-md hover:bg-violet-600 '>
           Back To List
         </NavLink>

        </button>
      </div>
      </div>

    </div>
  )
}
