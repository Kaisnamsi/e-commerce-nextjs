import React from "react";
import Avatar from "react-avatar";
import { OverlayTrigger, Popover } from "react-bootstrap";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars, FaUserAlt } from "react-icons/fa";
import { RxExit } from "react-icons/rx";

export default function DashboardTopbar({ active, dashboardActive }) {
  return (
    <>
      <div className="top-bar pe-5">
        <span>
          {active ? (
            <AiOutlineClose
              size={25}
              onClick={dashboardActive}
              className="toggle"
            />
          ) : (
            <FaBars size={30} onClick={dashboardActive} className="toggle" />
          )}
        </span>

        <div className="admin-avatar">
         
           <OverlayTrigger
          trigger="click"
          key="bottom"
          placement="bottom"
          overlay={
            <Popover id={`popover-positioned-bottom`}>
              <Popover.Body className="py-0">
                <ul className="admin-avatar-detail">
                  <li><span><FaUserAlt/></span><span>Profile</span></li>
                  <hr className="p-0 mb-1"/>
                  <li><span><RxExit/></span><span>Logout</span></li>
                </ul>
              </Popover.Body>
            </Popover>
          }
        >
           <Avatar
          round={true}
          name="prem sagar"
          size={40}
          textSizeRatio={2.50}
          />
        </OverlayTrigger>
        </div>
      </div>
    </>
  );
}
