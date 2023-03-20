import React from "react";
import { Link, Outlet } from "react-router-dom";
import menu from '../../assets/menu.png';
import user from '../../assets/user.png';
import sales from '../../assets/sales.png';
const Dashboard = () => {
  return (
    <div>
      <div className="flex">
        <div className="flex flex-col h-screen p-3 bg-[#FFFFFF] border-r-2 border-[#F3F3F3] w-60">
          <div className="space-y-3">
            <div className="flex items-center ml-2">
              <h2 className="text-[#B0B7C3]">Pages</h2>
            </div>
            <div className="flex-1">
              <ul className="pt-2 pb-4 space-y-1 text-sm">
                <li className="rounded-sm">
                  <Link
                    to="/dashboard"
                    className="flex items-center p-2 space-x-3 rounded-md"
                  >
                    <img src={menu} alt="" />
                    <span>Dashboard</span>
                  </Link>
                </li>
                <li className="rounded-sm">
                  <Link
                    to="/dashboard/users"
                    className="flex items-center p-2 space-x-3 rounded-md"
                  >
                    <img src={user} alt="" />
                    <span>Users</span>
                  </Link>
                </li>
                <li className="rounded-sm">
                  <Link
                    to="/dashboard/sales"
                    className="flex items-center p-2 space-x-3 rounded-md"
                  >
                    <img src={sales} alt="" />
                    <span>Sales</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-12">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
