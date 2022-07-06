import React from 'react'
import "./Summer.css"
import { springImages, summerImages } from '../../static/Static'
import reclam from "../../assets/reclam.png"
import foryou from "../../assets/foryou.jpg"
import foryou2 from "../../assets/foryou2.jpg"
import foryou3 from "../../assets/foryou3.jpg"

import season  from "../../assets/season.jpg"
import season2  from "../../assets/season2.jpg"
import brand1 from "../../assets/brand1.jpg"
import brand2 from "../../assets/brand2.jpg"
import health1 from "../../assets/health1.jpg"
import health2 from "../../assets/health2.jpg"
import shar from "../../assets/shar1.jpg"
import shar2 from "../../assets/shar2.jpg"

import BannerProd from '../../router/BannerProd/BannerProd'
import SecondProd from '../../router/SecondProd/SecondProd'
import BrandProd from '../../router/BrandProd/BrandProd'
import { Link } from 'react-router-dom'

const Summer = () => {
  return (
    <div className='summer'>
        <div className="summer_text"></div>
        <div className="summer_wrapper">
            {
                summerImages?.map((item,inx)=>(
                    <Link to="sadh"  className='summer_box'  key={inx}>
                    <div >
                    <img  src={item.img} alt="" />
                    <p >{item.title}</p>
                    </div>
                    </Link>
                ))
            }
        </div>
        <div className="summer_text">Spring into fun</div>
        <div className="summer_wrapper">
            {
                springImages?.map((item,inx)=>(
                    <div key={inx} className="summer_box">
                        <img src={item.img} alt="" />
                        <p>{item.title}</p>
                    </div>
                ))
            }
        </div>
        <div className="reclam">
            <img src={reclam} alt="" />
            <h2>Earn 5% cash back </h2>
            <p>on Walmart.com</p>
            <a href="dsads">Learn how</a>
        </div>
        <BrandProd/>
       
        <div className="summer_text">For you</div>
        <div className="foryou">
            <div className="foryou_box"><img src={foryou} alt="" /><h1>National Pet Month!</h1><p>Top foods, toys, & more for furry, scaly, & feathered friends.</p> <button className="shop_now">Shop now</button></div>
            <div className="foryou_box"><img src={foryou2} alt="" /><h1>New & exclusive toys!</h1><p>Movie-inspired dolls & action figures to bring home the fun.</p><button className="shop_now">Shop now</button></div>
            <div className="foryou_box"><img src={foryou3} alt="" /><h1>Kitchen gifts for Mom</h1><p>Surprise her with last-minute finds from $15</p><button className="shop_now">Shop now</button></div>
        </div>
        <div className="summer_text">In season</div>
        <div className="season_wrapper">
            <div className="season_box"><img src={season} alt="" /><h1>Congrats to the grad!</h1><p>Celebrate with announcements & invitations from 28¢.</p><button className="shop_now">Shop now</button></div>
            <div className="season_box"><img src={season2} alt="" /><h1>Apple Watch</h1><p>Now up to $70 off. Give Mom a gift that shows off your love.</p><button className="shop_now">Shop now</button></div>
        </div>
        <BannerProd/>
        <div className="summer_text">Brand new for you</div>
        <div className="season_wrapper">
            <div className="season_box"><img src={brand1} alt="" /><h1>Say “I do” to savings</h1><p>Get up to 20% off invitations, decor, & more wedding essentials.</p><button className="shop_now">Shop now</button></div>
            <div className="season_box"><img src={brand2} alt="" /><h1>Grill up spring savings</h1><p>Start the season right with fresh produce, meats, & more.</p><button className="shop_now">Shop now</button></div>
        </div>
        <SecondProd/>
        <div className="summer_text">Health & wellness</div>
        <div className="season_wrapper">
            <div className="season_box"><img src={health1} alt="" /><h1>At-home COVID-19 tests</h1><p>Now available at Walmart.</p><button className="shop_now">Shop now</button></div>
            <div className="season_box"><img src={health2} alt="" /><h1>Immunity support</h1><p>Strengthen your immune system with supplements, vitamins, & more.</p><button className="shop_now">Shop now</button></div>
        </div>
        <div className="summer_text">Sharing our values</div>
        <div className="season_wrapper">
            <div className="season_box"><img src={shar} alt="" /><h1>Built for Better</h1><p>Identify products designed with you & the planet in mind.</p><button className="shop_now">Shop now</button></div>
            <div className="season_box"><img src={shar2} alt="" /><h1>Fight Hunger</h1><p>When we support our neighbors, we spark change everywhere.</p><button className="shop_now">Shop now</button></div>
        </div>

        <div className="feedBack">
            <h3>We'd love to hear what you think!</h3>
            <button>Give feedback</button>
        </div>
    </div>
  )
}

export default Summer