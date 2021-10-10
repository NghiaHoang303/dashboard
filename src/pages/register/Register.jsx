import { Facebook, Google } from '@mui/icons-material'
import React, {useState} from 'react'
import axios from 'axios'
import { facebookProvider, googleProvider } from '../../config/authMethod'
import socialMediaAuth from '../../service/auth'
import './register.css'
export default function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState(false);

    const handleOnClick = async (provider) => {
        
        const res = await socialMediaAuth(provider);
        console.log(res)
    }

    const handleRegister = async (e) => {
        e.preventDefault();
        setError(false)
        try {
            const res = await axios.post('/auth/register', {
                username, email, password
            })
            res.data && window.location.replace('/login')       
        } catch (error) {
            setError(true)
        }

    }
    return (
        <div className="register" >
            <div className="registerLeft">
              <div className="registerLeftTitle">
                <span>Manager Project</span><br/> 
                <span>With My Dashboard</span>
              </div>
              <div className="registerBoxSm">
              </div>
              <div className="registerBoxLg">
              </div>
              <div className="registerBoxMid">
              </div>
              <div >
                <img src="http://hoadondientuxacthuc.com/wp-content/uploads/2020/05/portrait-young-man-sitting-his-desk-hard-working-man-ss-feature.jpg" alt="" 
                    className="registerLeftImage1"
                />
              </div>
              <div >
                <img src="https://fecredit.com.vn/wp-content/uploads/2020/04/beautiful-young-smiling-asian-woman-working-laptop-while-home-office-work-space_7861-914.jpg" alt="" 
                    className="registerLeftImage2"  
                />
              </div>
              <div >
                <img src="https://img.freepik.com/free-photo/image-amazed-happy-man-reacting-special-offer-internet-looking-laptop-excited-standing-against-blue-background_1258-65513.jpg?size=626&ext=jpg" alt=""
                    className="registerLeftImage3"
                />
              </div>
            </div>
            <div className="registerRight">
                <div className="registerRightForm">
                    <div className="registerRightTitle">
                        REGISTER
                    </div>
                    <div>
                        <form className="registerRightFormDetail" onSubmit= {handleRegister}>
                            <div className="formGroup">
                                <label className="formGroupTitle">Full Name</label>
                                <input type="text" className="formGroupInputRegister" placeholder="Nguyen Van A"
                                    onChange = {(e) => setUsername(e.target.value)}
                                ></input>
                            </div>
                            <div className="formGroup">
                                <label className="formGroupTitle">Email </label>
                                <input type="text" className="formGroupInputRegister" placeholder="nguyenA@gamil.com"
                                    onChange = {(e) => setEmail(e.target.value)}
                                ></input>
                            </div>
                            <div className="formGroup">
                                <label className="formGroupTitle"
                                   
                                >Password</label>
                                <input type="password" className="formGroupInputRegister" placeholder="123abc@"
                                 onChange = {(e) => setPassword(e.target.value)}
                                ></input>
                            </div>
                            <button className="btnRegister" type='submit'>Register</button>
                            {error &&  <span style = {{color: 'red', marginTop: '120px', display:'block', fontSize: '20px'}}>something wrong</span> }

                        </form>

                        <div className="registerRightBottom">
                            <span >
                                Or register with
                            </span>
                            <div className="groupBtnLink">
                                <button className="btnRegisterGoogle" >
                                    <Google/> 
                                    Google
                                </button>
                                <button  className="btnRegisterFace ">
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
