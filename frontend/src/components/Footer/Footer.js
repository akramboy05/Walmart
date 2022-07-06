import React from 'react'
import "./Footer.css"
import { useLocation } from 'react-router-dom'

const Footer = () => {
  const location = useLocation()
  if(location.pathname === "/register" || location.pathname === "/signin"){
    return <></>
  }
  return (
    <div className='footer'>
        <ul className="footer_collection1">
            <li>All Departments</li>
            <li>Store Directory</li>
            <li>Careers</li>
            <li>Our Company</li>
            <li>Sell on Walmart.com</li>
            <li>Help</li>
            <li>COVID-19 Vaccine Scheduler</li>
            <li>Product Recalls</li>
            <li>Accessibility</li>
            <li>Tax Exempt Program</li>
        </ul>
        <ul className="footer_collection2">
            <li>Get the Walmart App</li>
            <li>Sign-up for Email</li>
            <li>Terms of Use</li>
            <li>Privacy & Security</li>
            <li>CA Privacy Rights </li>
            <li>California Supply Chain Act</li>
            <li>Do Not Sell My Personal Information</li>
        </ul>
        <ul className="footer_collection3"><li>Request My Personal Information</li></ul>
        <h2>© 2022 Walmart. All Rights Reserved.</h2>
    </div>
  )
}

export default Footer