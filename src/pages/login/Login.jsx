import { Facebook, Google } from '@mui/icons-material'
import React from 'react'
import { facebookProvider, googleProvider } from '../../config/authMethod'
import socialMediaAuth from '../../service/auth'
import {firebase} from '../../config/firebase-config'
import './login.css'
export default function Login() {
    const handleOnClick = async (provider) => {
        const res = await socialMediaAuth(provider);
        console.log(res)
    }

    const handelSignInWithGoogle = ()=> {
        let googleProvider = new  firebase.auth.GoogleAuthProvider()
        firebase.auth().signInWithPopup(googleProvider)
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    return (
        <div className="login" >
            <div className="loginLeft">
              <div className="loginLeftTitle">
                <span>Manager Project</span><br/> 
                <span>With My Dashboard</span>
              </div>
              <div className="loginBoxSm">
              </div>
              <div className="loginBoxLg">
              </div>
              <div className="loginBoxMid">
              </div>
              <div >
                <img src="http://hoadondientuxacthuc.com/wp-content/uploads/2020/05/portrait-young-man-sitting-his-desk-hard-working-man-ss-feature.jpg" alt="" 
                    className="loginLeftImage1"
                />
              </div>
              <div >
                <img src="https://fecredit.com.vn/wp-content/uploads/2020/04/beautiful-young-smiling-asian-woman-working-laptop-while-home-office-work-space_7861-914.jpg" alt="" 
                    className="loginLeftImage2"  
                />
              </div>
              <div >
                <img src="https://img.freepik.com/free-photo/image-amazed-happy-man-reacting-special-offer-internet-looking-laptop-excited-standing-against-blue-background_1258-65513.jpg?size=626&ext=jpg" alt=""
                    className="loginLeftImage3"
                />
              </div>
            </div>
            <div className="loginRight">
                <div className="loginRightForm">
                    <div className="loginRightTitle">
                        LOGIN
                    </div>
                    <div>
                        <form className="loginRightFormDetail">
                            <div className="formGroup">
                                <label className="formGroupTitle">user </label>
                                <input type="text" className="formGroupInputRegister" placeholder="username"></input>
                            </div>
                            <div className="formGroup">
                                <label className="formGroupTitle">Password</label>
                                <input type="password" className="formGroupInputRegister" placeholder="123abc@"></input>
                            </div>
                            <button className="btnLogin">Login</button>
                        </form>

                        <div className="registerRightBottom">
                            <span >
                                Or register with
                            </span>
                            <div className="groupBtnLink">
                                <button className="btnLoginGoogle" onClick= {handelSignInWithGoogle} >
                                    <Google/> 
                                    Google
                                </button>
                                <button  className="btnLoginFace ">
                                    <Facebook/>
                                    Facebook
                                </button>
                             </div>   
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
