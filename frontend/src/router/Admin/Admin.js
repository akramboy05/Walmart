import React from 'react'
import "./Admin.css"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import bannerProducts from '../../components/file_creator/banner_products/BannerProducts'
import SecondProducts from '../../components/file_creator/second_products/SecondProducts'
import BrandProducts from '../../components/file_creator/brand_products/BrandProducts'
import AdminSidebar from '../../components/Admin_sidebar/AdminSidebar'

const Admin = () => {
  return (
    <div className='admin'>
      
      <Router>
        <AdminSidebar/>
        <Switch>
        <Route path="/admin/productsBanner" component={bannerProducts}/>
        <Route path="/admin/secondProducts" component={SecondProducts}/>
        <Route path="/admin/brandProducts" component={BrandProducts}/>
        </Switch>
      </Router>
    </div>
  )
}

export default Admin