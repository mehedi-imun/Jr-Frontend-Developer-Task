import React from "react";
import { RiSearchLine } from "react-icons/ri";
import notification from "../../assets/notification-bell.png";
const Users = () => {
  return (
    <div>
      <div className="lg:px-6 px-2 mt-6">
        <div className="flex items-center justify-between ">
          <div className="relative flex justify-end items-center border border-[#F3F3F3] lg:w-96 rounded-lg font-medium ">
            <input
              id="name"
              type="text"
              name="name"
              className="h-11 w-full focus:outline-none ml-2"
              placeholder="Search"
            />
            <i className="pr-[1rem] cursor-pointer">
              {/* <img src={name} alt="" /> */}
              <RiSearchLine className="text-[#B0B7C3] text-xl" />
            </i>
          </div>

          <div className="hidden lg:flex  items-center">
            <div className="">
              <img className="inline" src={notification} alt="" />
            </div>
            <div className="ml-4">
              <img
                className="w-[47px] h-[47px] rounded-full"
                src="https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-hipster-vector-stock-91462914.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div>
          <h3 className="my-6 text-[#323B4B] font-semibold">Users List</h3>
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3 rounded-l-lg">
                    #ID
                  </th>
                  <th scope="col" className="px-6 py-3">
                    USER
                  </th>
                  <th scope="col" className="px-6 py-3">
                    EMAIL
                  </th>
                  <th scope="col" className="px-6 py-3 rounded-r-lg">
                    OPTIONS
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white dark:bg-gray-800">
                  <td className="px-6 py-4">1</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <img
                        className="w-[60px] h-[60px] rounded"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjb-Jsep9tAcYMGcwnDZl9MuXwtJ87LMh-KkFZT04M9XQRs6I0mWi4GJcUD7bTPEOAXRU&usqp=CAU"
                        alt=""
                      />

                      <h3 className="text-[#4E5D78] ml-2">Jhankar vai</h3>
                    </div>
                  </td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Apple@gmail.com
                  </th>
                  <td className="px-6 py-4">$2999</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
