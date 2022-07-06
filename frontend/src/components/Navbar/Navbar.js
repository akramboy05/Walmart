import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/walmartLogo.svg";
import { FiGrid } from "react-icons/fi";
import { HiOutlineViewGrid } from "react-icons/hi";
import { HiOutlineSearch } from "react-icons/hi";
import { BiDownload } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import SignShow from "../sign-show/SignShow";
import { RiShoppingCart2Line } from "react-icons/ri";
import NavbarBottom from "../NavbarBottom/NavbarBottom";
import { NavLink, Link, useLocation } from "react-router-dom";
import { departmentData } from "../../static/departmentData";
import { FiChevronRight } from "react-icons/fi";
import { useStateValue } from "../../context/stateprovider/StateProvider";
import axios from "axios"

const Navbar = () => {
  const location = useLocation();
  const [state] = useStateValue();
  const [showShadow, setShowShadow] = useState(false);
  const [inputFocus, setInputFocus] = useState(false);
  const [signShow, setSignShow] = useState(false);

  const [searchResult, setSearchResult] = useState([]);
  const [keepSearch, setKeepSearch] = useState(false)
  // showShadow
  //   ? (document.body.style.overflow = "hidden")
  //   : (document.body.style.overflow = "auto");

  if (location.pathname === "/register" || location.pathname === "/signin") {
    return <></>;
  }

  const searchDocs =(value)=>{
    if(value !== ""){
      axios.post("http://localhost:9000/brand/search", {
        fileText:value,
      })
      .then((response) => setSearchResult(response.data))
      .catch((err)=> console.log(err))
    }
  }

  console.log(keepSearch);
  return (
    <>
      <div className="navbar">
        <Link to="/home">
          <img src={logo} alt="" />
        </Link>
        <div
          className="navbar_department_wrapper"
          onMouseLeave={() => {
            // setSignShow(false)
            setShowShadow(false);
          }}
          onMouseEnter={() => {
            // setSignShow(true)
            setShowShadow(true);
          }}
        >
          <div className="navbar_department">
            <FiGrid />
            <p>Departments</p>
            <div className="catalogLists">
              {departmentData.map((catalog_item, index) => (
                <div key={index} className="catalog_item">
                  <div style={{ display: "flex" }}>
                    <p className="catalogName">{catalog_item.title}</p>
                  </div>
                  <FiChevronRight />
                  <div className="expand">
                    {catalog_item.expand?.map((i, index) => (
                      <div key={index} className="expand_item">
                        <p className="expand_item_caption">{i.title}</p>
                        
                        {i.memo?.map((o, index) => (
                          <p key={index} className="expand_item_text">
                            {o}
                          </p>
                         
                        )
                        
                        )
                        }
                       <div className="imgSell">
                       <img src={i.img} alt="" />
                        <h2>{i.imgTitle}</h2>
                        <p>{i.imgText}</p>
                       </div>
                        
                        
                      
                      </div>
                    ))}
                    
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="navbar_servis">
          <HiOutlineViewGrid />
          <p>Services</p>
        </div>

        <div
          className={
            inputFocus ? "navbar_searchbar goldBorder" : "navbar_searchbar"
          }
        >
          <input
            onBlur={() => {
              setInputFocus(false);
            }}
            onFocus={() => {
              setInputFocus(true);
              // setShowShadow(true);
            }}
            type="text"
            placeholder="Search everything at walmart online and in store"
            onChange={(e)=> searchDocs(e.target.value)}
          />

          <div className="search_icon">
            <HiOutlineSearch />
          </div>
          {searchResult.length? (
            <div className="inputResult" style={keepSearch? {display:"none"} : {display:"block"}}>
              {searchResult.map((searchItem)=>(
                <Link onClick={()=> setKeepSearch(true)} className="searchLink" to={`/search/${searchItem?._id}`}>
                  {searchItem.fileText.length > 50
                    ? `${[...searchItem?.fileText].slice(0,68).join("")}...`
                    : searchItem?.fileText
                  }
                </Link>
              ))}
            </div>
          )
            : (
              <></>
            )
        }
        </div>  

        <div className="navbar_items">
          <BiDownload />
          <span>
            <p>Reorder</p>
            <h4>My Items</h4>
          </span>
        </div>
        <div
         
          onMouseEnter={() => {
            setSignShow(true);
            setShowShadow(true);
          }}
          onMouseLeave={() => {
            setSignShow(false);
            setShowShadow(false)
          }}
          className="login_box"
        >
          <div className="navbar_login">
            <FaRegUser />
            <span>
              <p>Sign In</p>
              <h4>Account</h4>
            </span>
            {signShow ? <SignShow /> : <></>}
          </div>
        </div>
        <NavLink to="/cart">
          <div className="navbar_cart">
            <RiShoppingCart2Line />
            <p>$259.00</p>
            <div className="cell">
              <p className="cart__length">
                {state.cart.length === 0 ? "" : state.cart.length}
              </p>
            </div>
          </div>
        </NavLink>
        <div
          onClick={() => {
            setShowShadow(false);
            setSignShow(false);
          }}
          style={showShadow ? { zIndex: 14 } : { zIndex: 10 }}
          className={showShadow ? "navbar_shadow show" : "navbar_shadow close"}
        ></div>
      </div>
      <NavbarBottom />
    </>
  );
};

export default Navbar;
