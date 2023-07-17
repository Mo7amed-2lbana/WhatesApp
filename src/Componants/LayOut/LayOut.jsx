import React from "react";
import SideBar from "./../SideBar/SideBar";
import { Outlet } from "react-router-dom";
import "./layout.css";
export default function LayOut() {


  return (
    <>
      <div className="layout position-relative">
        <div className=" container-fluid mt-4">
          <div className="row">
            <div className="col-md-4 p-0 border-end border-1">
              <SideBar />
            </div>
            <div className="col-md-8">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
