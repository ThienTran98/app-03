import React from 'react'
import { useNavigate } from 'react-router-dom'


const data = [
  {
    id: 1,
    name: 'Phòng 101',
    price: 500000,
    status: 'Đã đặt',
    image : [
      { id : 1,
        img:"https://r-xx.bstatic.com/xdata/images/hotel/263x210/595550862.jpeg?k=3514aa4abb76a6d19df104cb307b78b841ac0676967f24f4b860d289d55d3964&o=",
      }, {
        id: 2,
        img : "https://r-xx.bstatic.com/xdata/images/hotel/263x210/595548591.jpeg?k=01741bc3aef1a5233dd33794dda397083092c0215b153915f27ea489468e57a2&o=",
      },
      {
        id: 3,
        img : "https://r-xx.bstatic.com/xdata/images/hotel/263x210/595551044.jpeg?k=262826efe8e21a0868105c01bf7113ed94de28492ee370f4225f00d1de0c6c44&o=",
      }
    ],
    floor : 1,
  },
  {
    id: 2,
    name: 'Phòng 102',
    price: 800000,
    status: 'Đã đặt',
      floor : 1,
       image : [
      { id : 1,
        img:"https://r-xx.bstatic.com/xdata/images/hotel/263x210/595550862.jpeg?k=3514aa4abb76a6d19df104cb307b78b841ac0676967f24f4b860d289d55d3964&o=",
      }, {
        id: 2,
        img : "https://r-xx.bstatic.com/xdata/images/hotel/263x210/595548591.jpeg?k=01741bc3aef1a5233dd33794dda397083092c0215b153915f27ea489468e57a2&o=",
      },
      {
        id: 3,
        img : "https://r-xx.bstatic.com/xdata/images/hotel/263x210/595551044.jpeg?k=262826efe8e21a0868105c01bf7113ed94de28492ee370f4225f00d1de0c6c44&o=",
      }
    ],
  },
  {
    id: 3,
    name: 'Phòng 201',
    price: 1500000,
    status: 'Đang sử dụng',
      floor : 2,
       image : [
      { id : 1,
        img:"https://r-xx.bstatic.com/xdata/images/hotel/263x210/595550862.jpeg?k=3514aa4abb76a6d19df104cb307b78b841ac0676967f24f4b860d289d55d3964&o=",
      }, {
        id: 2,
        img : "https://r-xx.bstatic.com/xdata/images/hotel/263x210/595548591.jpeg?k=01741bc3aef1a5233dd33794dda397083092c0215b153915f27ea489468e57a2&o=",
      },
      {
        id: 3,
        img : "https://r-xx.bstatic.com/xdata/images/hotel/263x210/595551044.jpeg?k=262826efe8e21a0868105c01bf7113ed94de28492ee370f4225f00d1de0c6c44&o=",
      }
    ],
  },
  {
    id: 4,
    name: 'Phòng 203',
    price: 1500000,
    status: 'Đang sử dụng',
      floor : 2,
       image : [
      { id : 1,
        img:"https://r-xx.bstatic.com/xdata/images/hotel/263x210/595550862.jpeg?k=3514aa4abb76a6d19df104cb307b78b841ac0676967f24f4b860d289d55d3964&o=",
      }, {
        id: 2,
        img : "https://r-xx.bstatic.com/xdata/images/hotel/263x210/595548591.jpeg?k=01741bc3aef1a5233dd33794dda397083092c0215b153915f27ea489468e57a2&o=",
      },
      {
        id: 3,
        img : "https://r-xx.bstatic.com/xdata/images/hotel/263x210/595551044.jpeg?k=262826efe8e21a0868105c01bf7113ed94de28492ee370f4225f00d1de0c6c44&o=",
      }
    ],
  },
   {
    id: 5,
    name: 'Phòng 303',
    price: 1500000,
    status: 'Còn trống',
      floor : 3,
       image : [
      { id : 1,
        img:"https://r-xx.bstatic.com/xdata/images/hotel/263x210/595550862.jpeg?k=3514aa4abb76a6d19df104cb307b78b841ac0676967f24f4b860d289d55d3964&o=",
      }, {
        id: 2,
        img : "https://r-xx.bstatic.com/xdata/images/hotel/263x210/595548591.jpeg?k=01741bc3aef1a5233dd33794dda397083092c0215b153915f27ea489468e57a2&o=",
      },
      {
        id: 3,
        img : "https://r-xx.bstatic.com/xdata/images/hotel/263x210/595551044.jpeg?k=262826efe8e21a0868105c01bf7113ed94de28492ee370f4225f00d1de0c6c44&o=",
      }
    ],
  },
]


export default function Room() {
  const navigate = useNavigate()
  const renderListRoom = () => {
  return data.map((item, index) => {
    return (
          <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          {item.name}
        </th>
        <td className="px-6 py-4">
          {item.floor}
        </td>
        <td className="px-6 py-4">
          {item.status}
        </td>
          <td className="px-6 py-4 flex items-center">
          {renderListImage(item.image)}
        </td>
        <td className="px-6 py-4">
          <button onClick={()=> {
            handleNavigateDetailRoom(item.id , item)
          }} className='px-4 py-1 text-teal-500 opacity-75 font-semibold hover:opacity-100'>Chi tiết</button>
          <button onClick={() => {
            handleNavigateBooking(item.id, item)
          }} className='px-4 py-1 text-teal-500 opacity-75 font-semibold hover:opacity-100'>Đặt phòng</button>
        </td>
      </tr>
    )
  })
}
  const renderListImage = (list) => {
    return list.map((item, index) => {
      return (
        <div key={item.id} className='w-1/3 mr-5'>
          <img className='rounded-md object-cover' src={item.img} alt="" />
        </div>
      )
    })
  }
  const handleNavigateDetailRoom = (id , item) => {
    navigate(`/detail-room/${id}`, { state: { room : item } })
  }

  const handleNavigateBooking = (id, room) => {
    navigate(`/booking-room/${id}` ,{ state: { nameRoom : room } })
  }
  return (
    <div className='px-20 h-screen'>
      <h2 className='text-teal-500 my-8 font-bold text-lg'>Danh sách các phòng hiện có</h2>
      <div className='flex items-center justify-center'>
<div className="w-3/5 ">
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-6 py-3">
          Tên phòng
        </th>
        <th scope="col" className="px-6 py-3">
         Tên tầng
        </th>
        <th scope="col" className="px-6 py-3">
          Trạng thái
        </th>
         <th scope="col" className="px-6 py-3">
          Hình ảnh
        </th>
        <th scope="col" className="px-6 py-3">
          
        </th>
      </tr>
    </thead>
    <tbody>
      {renderListRoom()}
    </tbody>
  </table>
</div>
      </div>



    </div>
  )
}
