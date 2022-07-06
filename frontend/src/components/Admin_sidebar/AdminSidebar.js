import React from 'react'
import {NavLink} from "react-router-dom" 
import "./AdminSidebar.css"

const AdminSidebar = () => {
  return (
    <div className='Admin_sidebar'>
        <h1>Admin Sidebar</h1>
            <NavLink to="/admin/productsBanner">Banner Products</NavLink>
            <NavLink to="/admin/secondProducts"> Second Products</NavLink>
            <NavLink to="/admin/brandProducts"> Brand Products</NavLink>
    </div>
  )
}

export default AdminSidebar