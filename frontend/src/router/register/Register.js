import React, { useState } from 'react'
import "./loginPhone.css"
import countryTelData from 'country-telephone-data'
import { firebase } from "../../server/firebase"
import { useDispatch } from "react-redux"
import axios from "axios"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"


function LoginPhone(props) {
    const [option, setOption] = useState("+998")
    const [phone, setPhone] = useState("")
    const [signShow, setSignShow] = useState(false)
    const [eye, setEye] = useState(false)
    const [signPassword, setSignPassword] = useState("")

    const dispatch = useDispatch()

    let fullNumber = `+${option}${phone}`

    const phoneMes = (e) => {
        e.preventDefault()

        let recaptcha = new firebase.auth.RecaptchaVerifier("recaptcha")
        firebase
            .auth()
            .signInWithPhoneNumber(fullNumber, recaptcha)
            .then((e) => {
                let parol = prompt("parolni kiriting")
                e.confirm(parol).then(user => dispatch({ type: "CREATE_PHONE", payload: user.user.phoneNumber }))
                //
            })
            .catch(err => console.log(err))

    }
    const signin = (e) => {
        e.preventDefault()
        let confirmUser = {
            phoneNumber: fullNumber,
            password: signPassword
        }
        axios.post("http://localhost:8000/auth", confirmUser)
            .then(res => {
                if (res.data.token) {
                    dispatch({ type: "CREATE_USER", payload: res.data})
                }else{
                    console.log(res);
                }
            })
            .catch(err => console.log(err))
    }
    return (
        <div className={props.phone ? 'LoginPhone loginPhoneclose' : "LoginPhone"}>
            <form onSubmit={phoneMes} className="loginPhone__form">

                <div className="loginPhone__form__top">
                    <h2>Your phone number</h2>
                    <p>Please confirm your country code and <br /> enter your mobile phone number. </p>
                </div>
                <select onChange={(e) => setOption(e.target.value)} value={option ? option : countryTelData?.allCountries.filter(i => i.dialCode === option)[0]?.name} name="" id="">

                    {
                        countryTelData?.allCountries.map((item, inx) => (
                            <option key={inx} value={item.dialCode}>{item.name}</option>
                        ))
                    }
                </select>

                <div className="loginPhone__form__inputs">
                    <p>+</p>
                    <input value={option} onChange={(e) => setOption(e.target.value)} maxLength={4} type="number" />
                    <input value={phone} onChange={(e) => setPhone(e.target.value)} maxLength={9} autoFocus type="text" />
                </div>

                <div id="recaptcha"></div>
                <button className='loginMain__next__btn'>
                    NEXT
                </button>
            </form>



            <div className={signShow ? "signin_container" : "signin_container signin_hidden"}>
                <h2>Sign In</h2>
                <form onSubmit={signin} className='signin_form' action="">
                    {/* <select onChange={(e) => setOption(e.target.value)} value={option ? option : countryTelData?.allCountries.filter(i => i.dialCode === option)[0]?.name} name="" id="">

                        {
                            countryTelData?.allCountries.map((item, inx) => (
                                <option key={inx} value={item.dialCode}>{item.name}</option>
                            ))
                        }
                    </select> */}

                    <div className="loginPhone__form__inputs">
                        <p>+</p>
                        <input value={option} onChange={(e) => setOption(e.target.value)} maxLength={4} type="number" />
                        {
                            eye ? <AiOutlineEyeInvisible onClick={() => setEye(!eye)} className='login__eye' /> : <AiOutlineEye onClick={() => setEye(!eye)} className='login__eye' />
                        }
                        <input value={phone} onChange={(e) => setPhone(e.target.value)} maxLength={9} autoFocus type="text" />
                    </div>
                    <input onChange={e => setSignPassword(e.target.value)} className="loginMain__next__input" type={eye ? "text" : "password"} placeholder='Your password' />
                    <a className='forgot__password' href="for">Forgot password?</a>
                    <input type="submit" value="Submit" className='loginMain__next__btn loginPhone__form__inputs__btn' />
                </form>
            </div>




            <p onClick={() => setSignShow(!signShow)} className='sign_in'>Sign in</p>
        </div>
    )
}

export default LoginPhone