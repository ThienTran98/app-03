import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <div className='flex items-center justify-between py-4 px-6 shadow-2xl'>   
        <div className='flex items-center'>
            <div className='mr-5'>
                <h3 className='text-red-600 text-xl font-bold'>QLKS</h3>
            </div>
            <ul className='flex items-center'>
                <li>
                    <NavLink to='/' className='px-6 no-underline text-gray-600 hover:opacity-75 font-bold border-r border-gray-800'>
                        Trang Chủ
                    </NavLink>
                </li>
                <li>
                     <NavLink to='/all-list-room' className='px-6  no-underline text-gray-600 hover:opacity-75 font-bold border-r border-gray-800'>
                        Phòng
                    </NavLink>
                    </li>
                <li>
                      <NavLink to='/history-booking' className='px-6  no-underline text-gray-600 hover:opacity-75 font-bold border-r border-gray-800'>
                        Lịch Sử Đặt Phòng
                    </NavLink>
                   </li>
                <li>
                      <NavLink to='/receipt' className='px-6  no-underline text-gray-600 hover:opacity-75 font-bold'>
                       Hóa Đơn
                    </NavLink>
                    </li>
            </ul>
        </div>
        <div>
            <button>
               <NavLink to='/register' className='px-6  no-underline text-gray-600 hover:opacity-75 font-bold border-r border-gray-800'>
                       Đăng ký
                    </NavLink>
            </button>
             <button>
              <NavLink to='/login' className='px-6  no-underline text-gray-600 hover:opacity-75 font-bold'>
                     Đăng nhập
                    </NavLink>
            </button>
        </div>
    </div>
  )
}
