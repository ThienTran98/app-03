import React from 'react'
import { NavLink, useLocation, useParams } from 'react-router-dom'

export default function Booking() {
    const params = useParams()
    console.log('params: ', params);
    const location = useLocation();
    console.log('location: ', location);
    const {floor , name , price , id, status} = location?.state?.nameRoom
 || {};

 const user = null;
  return (
    <div className='w-full h-screen p-20'>
      <h3 className='mb-5 font-bold text-3xl text-gray-400'>Bạn đang chọn đặt {name}</h3>
      <div className="w-full">
          <h3 className="font-bold text-xl leading-9 text-violet-600">Đặt giữ chỗ của bạn</h3>
          <div>
            <div className="relative max-w-sm mb-5 text-left">
              <label  htmlFor="default-datepicker">Ngày nhận phòng</label>
              <input
                datepicker
                id="default-datepicker"
                type="date"
                className="bg-gray-50 mt-3 border focus:outline-none cursor-pointer border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Select date"
              />
            </div>
            <div className="relative max-w-sm mb-5 text-left">
              <label  htmlFor="default-datepicker">Ngày trả phòng</label>
             
              <input
                datepicker
                id="default-datepicker"
                type="date"
                className="bg-gray-50 mt-3 border focus:outline-none cursor-pointer border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Select date"
              />
            </div>
          </div>
        </div>
        <button>
          <NavLink to={user ? `/booking-history/${id}` : `/login`} className='px-4 py-2 bg-teal-500 font-semibold text-white rounded-md hover:bg-teal-600 '>
            Đặt phòng
          </NavLink>
        </button>
    </div>
  )
}
