import React from 'react'
import "./Home.css"
import {deliver1} from "../../static/Static"
import { deliver2 } from '../../static/Static'
import { popular } from '../../static/Static'
import HomeDepartment from '../../components/Home_department/HomeDepartment'
import Summer from '../../components/summer/Summer'
import Banner from '../../components/Banner/Banner'
// import Axios from '../axios/Axios'
// import SummerProducts from '../summerProducts/SummerProducts'
// import HealthProducts from '../HealthProducts/HealthProducts'


const Home = () => {
  return (
    <div className='home'>
      <Banner/>
      <div className="deliver">
        <div className="deliver_box1">
          <div className="deliver_box_top">
            <h1>Pickup and delivery</h1>
            <button>See times</button>
          </div>
          <div className="deliver_box_bottom">
            <h1>Popular services <a href="gfgf">View All</a></h1>
            <div className="deliver_box_bottom_bottom">
              {
                popular?.map((item,inx)=>(
                  <div key={inx} className="popular_box">
                    <img src={item.img} alt="" />
                    <p>{item.title}</p>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        <div className="deliver_box">
         {
           deliver1?.map((item, inx)=>(
            <div key={inx} className="box">
               <img  src={item.img} alt="" />
               <p>{item.title}</p>
            </div>
           ))
         }
        </div>
        <div className="deliver_box">
         {
           deliver2?.map((item, inx)=>(
           <div key={inx} className="box">
               <img  src={item.img} alt="" />
             <p>{item.title}</p>
           </div>
           ))
         }
        </div>
      </div>
      <div className="home_text">
        <p>Members get free shipping with no order minimum!  Restirctions apply. <a href="ghghgc">Try free 30-day trial</a></p>
      </div>


     {/* DEPARTAMENTS */}
     <HomeDepartment/>
     <Summer/>
     {/* <SummerProducts/> */}
     {/* <HealthProducts/> */}
     {/* <Axios/> */}
    </div>
  )
}

export default Home