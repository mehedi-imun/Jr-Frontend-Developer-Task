import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import menu from "../../assets/menu.png";
import user from "../../assets/user.png";
import sales from "../../assets/sales.png";


const Dashboard = () => {
  return (
    <div>
      <div className="flex">
        <div className="flex flex-col h-screen p-3 bg-[#FFFFFF] border-r-2 border-[#F3F3F3] w-[250px]">
          <div className="space-y-3">
            {/* logo  */}
          <div className="flex ml-2">
            <svg
              width="51"
              height="32"
              viewBox="0 0 51 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M50.4409 19.3834L48.5223 16.7586H49.7084C50.027 16.7582 50.32 16.6066 50.4725 16.3633C50.6251 16.12 50.613 15.8236 50.4409 15.5903L39.3393 0.417933C39.181 0.199226 38.9039 0.067246 38.6068 0.0689673H11.9735C11.6763 0.067246 11.3993 0.199226 11.2409 0.417933L0.139345 15.5903C-0.0327063 15.8236 -0.0448201 16.12 0.107748 16.3633C0.260317 16.6066 0.55328 16.7582 0.871892 16.7586H2.05792L0.139345 19.3834C-0.0327063 19.6167 -0.0448201 19.9131 0.107748 20.1564C0.260317 20.3997 0.55328 20.5513 0.871892 20.5517H2.05792L0.139345 23.1766C-0.0327063 23.4098 -0.0448201 23.7062 0.107748 23.9495C0.260317 24.1928 0.55328 24.3444 0.871892 24.3448H2.05792L0.139345 26.9697C-0.0327063 27.2029 -0.0448201 27.4993 0.107748 27.7426C0.260317 27.9859 0.55328 28.1375 0.871892 28.1379H2.05792L0.139345 30.7628C-0.0327063 30.996 -0.0448201 31.2924 0.107748 31.5357C0.260317 31.779 0.55328 31.9306 0.871892 31.931H49.7084C50.027 31.9306 50.32 31.779 50.4725 31.5357C50.6251 31.2924 50.613 30.996 50.4409 30.7628L48.5223 28.1379H49.7084C50.027 28.1375 50.32 27.9859 50.4725 27.7426C50.6251 27.4993 50.613 27.2029 50.4409 26.9697L48.5223 24.3448H49.7084C50.027 24.3444 50.32 24.1928 50.4725 23.9495C50.6251 23.7062 50.613 23.4098 50.4409 23.1766L48.5223 20.5517H49.7084C50.027 20.5513 50.32 20.3997 50.4725 20.1564C50.6251 19.9131 50.613 19.6167 50.4409 19.3834Z"
                fill="#B0D3F0"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.985 5.80717C11.6671 5.80684 11.3745 5.65601 11.2216 5.41355C11.0686 5.17109 11.0794 4.87542 11.2498 4.64193L12.6731 2.69607C12.8332 2.47721 13.1109 2.34472 13.4091 2.34483H17.4416C17.9232 2.34483 18.3137 2.68448 18.3137 3.10345C18.3137 3.52242 17.9232 3.86207 17.4416 3.86207H13.8879L12.7219 5.45517C12.5618 5.67456 12.2837 5.80738 11.985 5.80717Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M49.7084 20.5517H0.871892C0.55328 20.5513 0.260317 20.3997 0.107748 20.1564C-0.0448201 19.9131 -0.0327063 19.6167 0.139345 19.3834L2.05792 16.7586H48.5223L50.4409 19.3834C50.613 19.6167 50.6251 19.9131 50.4725 20.1564C50.32 20.3997 50.027 20.5513 49.7084 20.5517Z"
                fill="#3B97D3"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M49.7084 24.3448H0.871892C0.55328 24.3444 0.260317 24.1928 0.107748 23.9495C-0.0448201 23.7062 -0.0327063 23.4098 0.139345 23.1766L2.05792 20.5517H48.5223L50.4409 23.1766C50.613 23.4098 50.6251 23.7062 50.4725 23.9495C50.32 24.1928 50.027 24.3444 49.7084 24.3448Z"
                fill="#2980BA"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M49.7084 28.1379H0.871892C0.55328 28.1375 0.260317 27.9859 0.107748 27.7426C-0.0448201 27.4993 -0.0327063 27.2029 0.139345 26.9697L2.05792 24.3448H48.5223L50.4409 26.9697C50.613 27.2029 50.6251 27.4993 50.4725 27.7426C50.32 27.9859 50.027 28.1375 49.7084 28.1379Z"
                fill="#3B97D3"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M49.7084 31.931H0.871892C0.55328 31.9306 0.260317 31.779 0.107748 31.5357C-0.0448201 31.2924 -0.0327063 30.996 0.139345 30.7628L2.05792 28.1379H48.5223L50.4409 30.7628C50.613 30.996 50.6251 31.2924 50.4725 31.5357C50.32 31.779 50.027 31.9306 49.7084 31.931Z"
                fill="#2980BA"
              />
            </svg>
            <h3 className="lg:text-[28px] text-[20px] font-bold text-[#4E5D78] ml-3">
              Stack
            </h3>
          </div>
            <div className="flex items-center ml-2">
              <h2 className="text-[#B0B7C3]">Pages</h2>
            </div>
            <div className="flex-1">
              <ul className="pt-2 pb-4 space-y-1 text-sm">
                <li className="rounded-sm">
                  <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                      isActive
                        ? "flex items-center p-2 space-x-3 rounded-md "
                        : "flex items-center p-2 space-x-3 rounded-md"
                    }
                  >
                    <img src={menu} alt="" />
                    <span>Dashboard</span>
                  </NavLink>
                </li>
                <li className="rounded-sm">
                  <NavLink
                    to="/dashboard/users"
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "flex items-center p-2 space-x-3 rounded-md bg-[#F0F5FA]"
                        : "flex items-center p-2 space-x-3 rounded-md "
                    }
                  >
                    <img src={user} alt="" />
                    <span>Users</span>
                  </NavLink>
                </li>
                <li className="rounded-sm">
                  <NavLink
                    to="/dashboard/sales"
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "flex items-center p-2 space-x-3 rounded-md bg-[#F0F5FA]"
                        : "flex items-center p-2 space-x-3 rounded-md "
                    }
                  >
                    <img src={sales} alt="" />
                    <span>Sales</span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container mx-auto">

          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
