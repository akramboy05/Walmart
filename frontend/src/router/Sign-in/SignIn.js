// import React, {useState,} from 'react'
// import { useHistory } from 'react-router-dom'
// import {AiOutlineEyeInvisible, AiOutlineEye} from "react-icons/ai"
// import axios from 'axios'

// const Signin = () => {
//   const history = useHistory()
//   const [eye, setEye] = useState(false)
//   const [option, setOption] = useState("998")
//   const [phone, setPhone] = useState("")
//   const [signPassword, setSignPassword] = useState("")

//   const [fname, setFname] = useState("")
//   const [lname, setLname] = useState("")
//   const [password, setPassword] = useState("")
//   const [phoneNumber, setPhoneNumber] = useState("")

//   const [userInfo, setUserInfo] = useState(null)
//   const Register = (e)=>{
//     e.preventDefault()
//      axios.get("http://localhost:9000/profiles", {
//       // fname:fname,
//       // lname:lname,
//       // password:password,
//       phoneNumber:phoneNumber
//     })
//     .then((user)=>{
//       if(user.phoneNumber === phoneNumber){
//         history.push("/admin")
//       }else{
//         // history.push("/register")
//         alert("Bu user hali ro'yhatdan o'tmagan")
//       }
//     })

//   }

//   console.log(userInfo);
//     return (
//     <div>
//       <div className="register_container">
//         <div className="input_box"><input value={fname} onChange={(e)=> setFname(e.target.value) } type="text" placeholder='First name' /></div>
//         <div className="input_box"><input value={phoneNumber} onChange={(e)=> setPhoneNumber(e.target.value) } type="phonenNumber" placeholder='Phone number'/></div>
//         <button onClick={Register}>Register</button>
//                     </div>
//     </div>
//   )
// }

// export default Signin