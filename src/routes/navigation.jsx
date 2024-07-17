import { Outlet, NavLink } from "react-router-dom";


import {
  MdOutlineSpaceDashboard,
  MdOutlineDashboardCustomize,
  MdOutlineHome,
  MdFilterList
  
} from "react-icons/md";

export const Navigation = () => {
  return (
    <div>
      <div className="fixed top-0 w-full mx-auto h-14 bg-slate-900 max-w-7xl px-2 py-3 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold text-white">
          Task<span className="text-green-600">i</span>e
          <span className="text-green-500">.</span>
        </h1>
      </div>
      <div className="fixed w-full top-14 h-10 flex items-center text-sm gap-2 px-2 py-3 sm:px-6 lg:px-8 bg-white border-b border-b-slate-200">
        <MdOutlineSpaceDashboard /> <p>Dashboard</p>
      </div>
      
      <nav className="fixed top-24 left-0 w-20 pt-14 pb-3 px-6 h-screen bg-slate-900 text-white ">
        <div className="text-2xl mt-6 hover:text-orange-500 ">
          <NavLink to={"/"}>
            <MdOutlineHome />
          </NavLink>
        </div>
        <div className="text-2xl mt-6 hover:text-orange-500 ">
          <NavLink to={"new-task"}>
            <MdOutlineDashboardCustomize />
          </NavLink>
        </div>
        <div className="text-2xl mt-6 hover:text-orange-500 ">
          <NavLink to={"tasks-priority"}>
            <MdFilterList />
          </NavLink>
        </div>
        
      </nav>
      <Outlet />
    </div>
  );
};
