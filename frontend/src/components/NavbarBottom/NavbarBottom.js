import React from 'react'
import "./NavbarBottom.css"
import {CgHome} from "react-icons/cg"
import {BiMap} from "react-icons/bi"

const NavbarBottom = () => {
  return (
    <div className='navbarBottom'>
        <div className="colspan">
            <a href="sada"><CgHome/> Sacramento Supercenter</a>
            <a href="sada"><BiMap/> Sacramento.95829</a>
        </div>
        <div className="navbar_bottom_collection">
            <li>Grocery</li>
            <li>Tech</li>
            <li>Fashion</li>
            <li>Home</li>
            <li>Gifts for mom </li>
            <li>Deals</li>
            <li>Flash picks </li>
            <li>Walmart+</li>
        </div>
    </div>
  )
}

export default NavbarBottom