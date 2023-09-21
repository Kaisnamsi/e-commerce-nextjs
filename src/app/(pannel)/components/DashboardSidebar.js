import Link from "next/link";
import React from "react";
import { BsFillCartCheckFill, BsSpeedometer2 } from "react-icons/bs";
import { BiCartAdd, BiCategory, BiLogoProductHunt} from "react-icons/bi";
import { AiFillSetting } from "react-icons/ai";

export default function DashboardSidebar({ active }) {
  return (
    <>
      <div className={active ? "sidebar active" : "sidebar"}>
        <nav className="menu">
          <ul>
            <li className="brand">
              <Link as={Link} href="/">
                <span className="icon">
                  <BsFillCartCheckFill size={30} />
                </span>
                <span
                  className="title"
                  
                >
                  Mycart
                </span>
              </Link>
            </li>
            <li>
              <Link as={Link} href="/dashboard">
                <span className="icon">
                  <BsSpeedometer2 size={22}/>
                </span>
                <span
                  className="title"
                  
                >
                  DashBoard
                </span>
              </Link>
            </li>
            <li>
              <Link as={Link} href="/dashboard/add-product">
                <span className="icon">
                  <BiCartAdd size={22}/>
                </span>
                <span
                  className="title"
                  
                >
                  Add Products
                </span>
              </Link>
            </li>
            <li>
              <Link as={Link} href="/dashboard/product">
                <span className="icon">
                  <BiLogoProductHunt size={22}/>
                </span>
                <span
                  className="title"
                  
                >
                  Products
                </span>
              </Link>
            </li>
            <li>
              <Link as={Link} href="/dashboard/category">
                <span className="icon">
                  <BiCategory size={22}/>
                </span>
                <span
                  className="title"
                  
                >
                  Categories
                </span>
              </Link>
            </li>
            <li>
              <Link as={Link} href="/dashboard/category">
                <span className="icon">
                  <AiFillSetting size={22}/>
                </span>
                <span
                  className="title"
                  
                >
                  Setting
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
