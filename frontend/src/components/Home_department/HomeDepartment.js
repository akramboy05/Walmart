import React from 'react'
import "./HomeDepartment.css"
import { homeDepartment } from '../../static/Static'


const HomeDepartment = () => {
  return (
    <div className='department'>
        <div className="department_text">
            <h1>Your favorite departments</h1>
            <a href="sada">View all</a>
        </div>
        <div className="home_department">
        {
            homeDepartment?.map((item, inx)=>(
                <div key={inx} className="home_department_box">
                    <img src={item.img} alt="" />
                    <p>{item.title}</p>
                </div>
            ))
        }
        
        </div>
    </div>
  )
}

export default HomeDepartment