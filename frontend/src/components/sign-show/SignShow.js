import React from 'react'
import "./SignShow.css"
import {BiMessageSquareDetail} from "react-icons/bi"
import { Link } from 'react-router-dom'

const SignShow = () => {
  return (
    <div className='signShow'>
        <Link to="/signin">
        <button className='signButton'>Sign In</button>
        </Link>
        <Link to="/register">
        <button className='registerButton'>Create an account</button>
        </Link>

        <a href="asda"><BiMessageSquareDetail/> Purchase History</a>
    </div>
  )
}

export default SignShow