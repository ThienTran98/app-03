import React from "react";
import banner from "../../assets/img/688893.jpg";

export default function HomePages() {
  return (
    <div className="h-[800px] w-full relative">
      <img className="w-full h-full object-cover" src={banner} alt="" />
      <div className="absolute left-1/2 top-1/2 max-w-sm transform -translate-x-1/2 text-center -translate-y-1/2 text-white px-10 py-5 rounded-lg bg-blue-500 shadow-lg">
        <h2 className="text-2xl font-bold leading-9">Tìm chỗ nghỉ tiếp theo</h2>
        <p className="font-medium text-xl leading-9">Tìm ưu đãi khách sạn, chỗ nghỉ dạng nhà và nhiều hơn nữa...</p>
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
      </div>
    </div>
  );
}
