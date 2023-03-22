import React, { useEffect, useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import notification from "../../assets/notification-bell.png";
import pevImg from "../../assets/Prev.png";
import nextImg from "../../assets/Next.png";
const Users = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(3);
  const [pageNumberLimit, setPageNumberLimit] = useState(2);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(3);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };
  let pages = [];
  for (let i = 1; i <= Math.ceil(data?.length / perPage); i++) {
    pages.push(i);
  }
  const indexOfLastItem = currentPage * perPage;
  const indexOfFirstItem = indexOfLastItem - perPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          onClick={handleClick}
          className={`border h-[32px] w-[32px] flex justify-center items-center text-[#333333] rounded-md mr-3 border-[#F1F1F1] cursor-pointer ${
            currentPage === number ? "bg-[#2F80ED] text-white" : ""
          }`}
          key={number}
          id={number}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });
  useEffect(() => {
    fetch(`https://reqres.in/api/users?page=${1}&per_page=${12}`)
      .then((res) => res.json())
      .then((data) => setData(data.data));
  }, []);

  const handleNextBtn = () => {
    setCurrentPage(currentPage + 1);
    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };
  const handlePretBtn = () => {
    setCurrentPage(currentPage - 1);
    if ((currentPage - 1) % pageNumberLimit == 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };
  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = (
      <li
        className="border h-[32px] w-[32px] flex justify-center items-center bg-transparent text-[#333333] rounded-md mr-3 border-[#F1F1F1] cursor-pointer "
        onClick={handleNextBtn}
      >
        &hellip;
      </li>
    );
  }

  return (
    <div className="container mx-auto overflow-hidden">
      <div className="lg:px-6 px-2 mt-6">
        <div className="flex items-center justify-between ">
          <div class="relative flex justify-end items-center border border-[#F3F3F3] lg:w-96 rounded-lg font-medium ">
            <input
              id="name"
              type="text"
              name="name"
              class="h-11 w-full focus:outline-none ml-2"
              placeholder="Search"
            />
            <i className="pr-[1rem] cursor-pointer"> 
              <RiSearchLine className="text-[#B0B7C3] text-xl" />
            </i>
          </div>

          <div className="hidden lg:flex  items-center">
            <div className="">
              <img className="inline" src={notification} alt="" />
            </div>
            <div className="ml-4">
              <img
                class="w-[47px] h-[47px] rounded-full"
                src="https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-hipster-vector-stock-91462914.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div>
          <h3 className="my-6 text-[#323B4B] font-semibold">Users List</h3>
          <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs  uppercase bg-[#FAFBFC] text-[#4E5D78]">
                <tr>
                  <th scope="col" class="lg:px-6 px-2 py-1 lg:py-3 rounded-l-lg">
                    #ID
                  </th>
                  <th scope="col" class="lg:px-6 px-2 py-1 lg:py-3 ">
                    USER
                  </th>
                  <th scope="col" class="lg:px-6 px-2 py-1 lg:py-3 ">
                    EMAIL
                  </th>
                  <th scope="col" class="lg:px-6 px-2 py-1 lg:py-3 ">
                    OPTIONS
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentItems?.map((user) => (
                  <tr key={user.id} class="bg-white dark:bg-gray-800">
                    <td class="lg:px-6 px-2 py-1 lg:py-3 ">{user.id}</td>
                    <td class="lg:px-6 px-2 py-1 lg:py-3 ">
                      <div className="flex items-center">
                        <img
                          class="lg:w-[60px] w-[40px] rounded"
                          src={user.avatar}
                          alt=""
                        />

                        <h3 className="text-[#4E5D78] ml-2 lg:block hidden">
                          {user.first_name}
                          <span> {user.last_name}</span>
                        </h3>
                      </div>
                    </td>
                    <th
                      scope="row"
                      class="lg:px-6 px-2 py-1 lg:py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {user.email}
                    </th>
                    <td class="lg:px-6 px-2 py-1 lg:py-3 ">...</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* pagination  */}
      <ul className="flex justify-start ml-8 my-6">
        <button
          disabled={currentPage == pages[0] ? true : false}
          onClick={handlePretBtn}
          className="border h-[32px] w-[32px] flex justify-center items-center text-[#333333] rounded-md mr-3 border-[#F1F1F1] cursor-pointer "
        >
          <img src={pevImg} alt="" />
        </button>
        {renderPageNumbers}
        {pageIncrementBtn}
        <button
          disabled={currentPage == pages[pages.length - 1] ? true : false}
          onClick={handleNextBtn}
          className="border h-[32px] w-[32px] flex justify-center items-center text-[#333333] rounded-md mr-3 border-[#F1F1F1] cursor-pointer "
        >
          {" "}
          <img src={nextImg} alt="" />
        </button>
      </ul>
    </div>
  );
};

export default Users;
